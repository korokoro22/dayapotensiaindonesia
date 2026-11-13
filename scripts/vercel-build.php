<?php

declare(strict_types=1);

/**
 * Vercel build hook executed by vercel-php via composer.json ("scripts.vercel").
 * Compiles Vite assets if missing and applies pending DB migrations when DB env vars are set.
 */
$run = static function (string $command): void {
    passthru($command, $exitCode);
    if ($exitCode !== 0) {
        exit($exitCode);
    }
};

if (! file_exists(__DIR__ . '/../public/build/manifest.json')) {
    $run('npm ci && npm run build');
}

if (getenv('DATABASE_URL') || getenv('DB_HOST')) {
    $run('php artisan migrate --force');
    $run('php artisan app:ensure-admin');
}
