<?php

declare(strict_types=1);

/**
 * Vercel build hook executed by vercel-php via composer.json ("scripts.vercel").
 * Clears any stale dev package caches, ensures Vite assets exist, and runs migrations.
 */
$run = static function (string $command): void {
    passthru($command, $exitCode);
    if ($exitCode !== 0) {
        exit($exitCode);
    }
};

foreach (['packages.php', 'services.php', 'config.php', 'routes-v7.php'] as $cacheFile) {
    $path = __DIR__ . '/../bootstrap/cache/' . $cacheFile;
    if (file_exists($path)) {
        @unlink($path);
    }
}

$run('php artisan package:discover --ansi');

if (! file_exists(__DIR__ . '/../public/build/manifest.json')) {
    $run('npm ci && npm run build');
}

if (getenv('DATABASE_URL') || getenv('DB_HOST')) {
    $run('php artisan migrate --force');
    $run('php artisan app:ensure-admin');
}
