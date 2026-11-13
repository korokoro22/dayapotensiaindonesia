<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Ensure writable temporary storage subdirectories exist on Vercel's read-only filesystem.
$tmpStorage = '/tmp/storage';
foreach ([
    $tmpStorage,
    $tmpStorage . '/app/public',
    $tmpStorage . '/framework/cache/data',
    $tmpStorage . '/framework/sessions',
    $tmpStorage . '/framework/views',
    $tmpStorage . '/logs',
] as $dir) {
    if (! is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
}

// Fallback APP_URL to Vercel's deployment URL until a custom domain APP_URL is configured.
if (empty($_ENV['APP_URL']) && empty(getenv('APP_URL')) && ! empty($_SERVER['VERCEL_URL'])) {
    $vercelUrl = 'https://' . $_SERVER['VERCEL_URL'];
    $_ENV['APP_URL'] = $vercelUrl;
    $_SERVER['APP_URL'] = $vercelUrl;
    putenv('APP_URL=' . $vercelUrl);
}

require __DIR__ . '/../vendor/autoload.php';

$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->useStoragePath($tmpStorage);

$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);

