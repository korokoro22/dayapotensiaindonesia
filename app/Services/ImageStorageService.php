<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

/**
 * Handles storing and removing uploaded article and activity images
 * using Cloudinary in cloud deployments or the local public disk fallback.
 */
class ImageStorageService
{
    public function store(UploadedFile $file, string $directory): string
    {
        $cloudinary = $this->resolveCloudinaryConfig();

        if ($cloudinary !== null) {
            return $this->uploadToCloudinary($file, $directory, $cloudinary);
        }

        return $file->store($directory, 'public');
    }

    public function delete(?string $pathOrUrl): void
    {
        if (empty($pathOrUrl)) {
            return;
        }

        if (str_starts_with($pathOrUrl, 'http://') || str_starts_with($pathOrUrl, 'https://')) {
            $cloudinary = $this->resolveCloudinaryConfig();
            $publicId = $this->extractCloudinaryPublicId($pathOrUrl);

            if ($cloudinary !== null && $publicId !== null) {
                $this->deleteFromCloudinary($publicId, $cloudinary);
            }

            return;
        }

        Storage::disk('public')->delete($pathOrUrl);
    }

    /**
     * @return array{cloud_name: string, api_key: string, api_secret: string, folder: string}|null
     */
    private function resolveCloudinaryConfig(): ?array
    {
        $cloudName = trim((string) config('services.cloudinary.cloud_name', ''));
        $apiKey = trim((string) config('services.cloudinary.api_key', ''));
        $apiSecret = trim((string) config('services.cloudinary.api_secret', ''));
        $folder = trim((string) config('services.cloudinary.folder', 'dayapotensia'), '/');
        $url = trim((string) config('services.cloudinary.url', ''));

        if (($cloudName === '' || $apiKey === '' || $apiSecret === '') && $url !== '') {
            $parsed = parse_url($url);
            if (is_array($parsed)) {
                $cloudName = $cloudName !== '' ? $cloudName : trim((string) ($parsed['host'] ?? ''));
                $apiKey = $apiKey !== '' ? $apiKey : urldecode((string) ($parsed['user'] ?? ''));
                $apiSecret = $apiSecret !== '' ? $apiSecret : urldecode((string) ($parsed['pass'] ?? ''));
            }
        }

        if ($cloudName === '' || $apiKey === '' || $apiSecret === '') {
            return null;
        }

        return [
            'cloud_name' => $cloudName,
            'api_key' => $apiKey,
            'api_secret' => $apiSecret,
            'folder' => $folder !== '' ? $folder : 'dayapotensia',
        ];
    }

    /**
     * @param  array{cloud_name: string, api_key: string, api_secret: string, folder: string}  $cloudinary
     */
    private function uploadToCloudinary(UploadedFile $file, string $directory, array $cloudinary): string
    {
        $timestamp = time();
        $targetFolder = $cloudinary['folder'] . '/' . trim($directory, '/');
        $params = [
            'folder' => $targetFolder,
            'timestamp' => $timestamp,
        ];

        $signature = $this->signParams($params, $cloudinary['api_secret']);
        $endpoint = "https://api.cloudinary.com/v1_1/{$cloudinary['cloud_name']}/image/upload";

        try {
            $response = Http::timeout(30)
                ->attach(
                    'file',
                    file_get_contents($file->getRealPath()),
                    $file->getClientOriginalName()
                )
                ->post($endpoint, [
                    'api_key' => $cloudinary['api_key'],
                    'folder' => $targetFolder,
                    'timestamp' => $timestamp,
                    'signature' => $signature,
                ]);
        } catch (\Throwable $e) {
            Log::error('Cloudinary upload request failed', ['error' => $e->getMessage()]);

            throw ValidationException::withMessages([
                'gambar' => 'Gagal menghubungi layanan penyimpanan gambar. Silakan coba lagi.',
            ]);
        }

        $secureUrl = $response->json('secure_url');

        if (! $response->successful() || ! is_string($secureUrl) || $secureUrl === '') {
            Log::error('Cloudinary upload rejected', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            throw ValidationException::withMessages([
                'gambar' => 'Gagal mengunggah gambar ke Cloudinary. Periksa ukuran/format gambar atau konfigurasi API.',
            ]);
        }

        return $secureUrl;
    }

    /**
     * @param  array{cloud_name: string, api_key: string, api_secret: string, folder: string}  $cloudinary
     */
    private function deleteFromCloudinary(string $publicId, array $cloudinary): void
    {
        $timestamp = time();
        $params = [
            'invalidate' => 'true',
            'public_id' => $publicId,
            'timestamp' => $timestamp,
        ];

        $signature = $this->signParams($params, $cloudinary['api_secret']);
        $endpoint = "https://api.cloudinary.com/v1_1/{$cloudinary['cloud_name']}/image/destroy";

        try {
            $response = Http::timeout(15)->asForm()->post($endpoint, [
                'public_id' => $publicId,
                'timestamp' => $timestamp,
                'invalidate' => 'true',
                'api_key' => $cloudinary['api_key'],
                'signature' => $signature,
            ]);

            if (! $response->successful()) {
                Log::warning('Cloudinary asset deletion failed', [
                    'public_id' => $publicId,
                    'status' => $response->status(),
                ]);
            }
        } catch (\Throwable $e) {
            Log::warning('Cloudinary asset deletion threw exception', [
                'public_id' => $publicId,
                'error' => $e->getMessage(),
            ]);
        }
    }

    /**
     * @param  array<string, int|string>  $params
     */
    private function signParams(array $params, string $apiSecret): string
    {
        ksort($params);

        $pairs = [];
        foreach ($params as $key => $value) {
            $pairs[] = "{$key}={$value}";
        }

        return sha1(implode('&', $pairs) . $apiSecret);
    }

    private function extractCloudinaryPublicId(string $url): ?string
    {
        $path = parse_url($url, PHP_URL_PATH);
        if (! is_string($path) || ! str_contains($path, '/image/upload/')) {
            return null;
        }

        if (preg_match('#/image/upload/(?:v\d+/)?(.+)\.[^./]+$#', $path, $matches) === 1) {
            return urldecode($matches[1]);
        }

        return null;
    }
}

