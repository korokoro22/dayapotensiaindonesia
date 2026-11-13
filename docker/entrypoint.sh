#!/usr/bin/env sh
set -eu

export PORT="${PORT:-10000}"

# Fallback APP_URL to Render's external URL until a custom domain APP_URL is configured
if [ -z "${APP_URL:-}" ] && [ -n "${RENDER_EXTERNAL_URL:-}" ]; then
    export APP_URL="${RENDER_EXTERNAL_URL}"
fi

# Normalize APP_KEY into a valid Laravel 32-byte encryption key when needed
if [ -n "${APP_KEY:-}" ]; then
    export APP_KEY="$(php -r '
        $k = getenv("APP_KEY");
        if (str_starts_with($k, "base64:") && strlen(base64_decode(substr($k, 7), true) ?: "") === 32) {
            echo $k;
        } elseif (strlen(base64_decode($k, true) ?: "") === 32) {
            echo "base64:" . $k;
        } elseif (strlen($k) === 32) {
            echo $k;
        } else {
            echo "base64:" . base64_encode(hash("sha256", $k, true));
        }
    ')"
else
    echo "[entrypoint] WARNING: APP_KEY is empty. Set APP_KEY in Render environment variables."
fi

mkdir -p \
    storage/app/public \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache \
    /run/nginx

chown -R www-data:www-data storage bootstrap/cache

if [ ! -L public/storage ]; then
    php artisan storage:link || true
fi

echo "[entrypoint] Caching Laravel configuration, routes, and views..."
php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "[entrypoint] Running database migrations..."
attempt=1
max_attempts=5
until php artisan migrate --force --no-interaction; do
    if [ "$attempt" -ge "$max_attempts" ]; then
        echo "[entrypoint] ERROR: Database migration failed after ${max_attempts} attempts."
        exit 1
    fi
    echo "[entrypoint] Database not ready yet (attempt ${attempt}/${max_attempts}); retrying in 3s..."
    attempt=$((attempt + 1))
    sleep 3
done

echo "[entrypoint] Provisioning initial admin user if configured..."
php artisan app:ensure-admin

chown -R www-data:www-data storage bootstrap/cache

echo "[entrypoint] Rendering Nginx config on port ${PORT}..."
envsubst '${PORT}' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf

echo "[entrypoint] Starting PHP-FPM and Nginx..."
php-fpm -D
exec nginx -g 'daemon off;'
