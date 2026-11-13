<?php

namespace Tests\Feature;

use App\Models\Artikel;
use App\Models\Kegiatan;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Tests\TestCase;

class HostingSetupTest extends TestCase
{
    use RefreshDatabase;

    public function test_health_and_public_routes_return_200(): void
    {
        $this->get('/health')
            ->assertOk()
            ->assertExactJson(['status' => 'ok']);

        $routes = [
            '/',
            '/layanan',
            '/industri',
            '/klinis',
            '/forensik',
            '/pendidikan',
            '/sosial',
            '/lainnya',
            '/kegiatan',
            '/artikel',
            '/hubungikami',
            '/login',
        ];

        foreach ($routes as $path) {
            $this->get($path)->assertStatus(200);
        }

        $this->get('/layanan-content')->assertRedirect('/layanan');
    }

    public function test_ensure_admin_command_is_idempotent(): void
    {
        config()->set('services.admin.password', '');

        $this->artisan('app:ensure-admin')->assertSuccessful();
        $this->assertDatabaseCount('users', 0);

        config()->set('services.admin.name', 'admin');
        config()->set('services.admin.email', 'admin@dayapotensiaindonesia.com');
        config()->set('services.admin.password', 'initial-secret-123');

        $this->artisan('app:ensure-admin')->assertSuccessful();
        $this->assertDatabaseCount('users', 1);

        $admin = User::query()->where('name', 'admin')->firstOrFail();
        $this->assertTrue(Hash::check('initial-secret-123', $admin->password));

        config()->set('services.admin.password', 'changed-secret-456');
        $this->artisan('app:ensure-admin')->assertSuccessful();
        $admin->refresh();
        $this->assertTrue(Hash::check('initial-secret-123', $admin->password));

        $this->artisan('app:ensure-admin', ['--sync-password' => true])->assertSuccessful();
        $admin->refresh();
        $this->assertTrue(Hash::check('changed-secret-456', $admin->password));
    }

    public function test_artikel_crud_uses_local_storage_when_cloudinary_is_unconfigured(): void
    {
        Storage::fake('public');
        config()->set('services.cloudinary.cloud_name', '');
        config()->set('services.cloudinary.api_key', '');
        config()->set('services.cloudinary.api_secret', '');
        config()->set('services.cloudinary.url', '');

        $admin = User::factory()->create();

        $this->actingAs($admin)
            ->post('/manajemenartikel', [
                'judul' => 'Artikel Lokal',
                'tanggal' => '2026-11-13',
                'isi' => 'Konten artikel pengujian.',
                'gambar' => UploadedFile::fake()->image('cover.jpg', 400, 300),
            ])
            ->assertRedirect('/manajemenartikel');

        $artikel = Artikel::query()->firstOrFail();
        $this->assertStringStartsWith('artikel/', $artikel->gambar);
        Storage::disk('public')->assertExists($artikel->gambar);

        $oldPath = $artikel->gambar;

        $this->actingAs($admin)
            ->post("/manajemenartikel/{$artikel->id}", [
                '_method' => 'PUT',
                'judul' => 'Artikel Lokal Diperbarui',
                'tanggal' => '2026-11-14',
                'isi' => 'Konten diperbarui.',
                'gambar' => UploadedFile::fake()->image('cover-new.jpg', 400, 300),
            ])
            ->assertRedirect('/manajemenartikel');

        $artikel->refresh();
        $this->assertNotSame($oldPath, $artikel->gambar);
        Storage::disk('public')->assertMissing($oldPath);
        Storage::disk('public')->assertExists($artikel->gambar);

        $currentPath = $artikel->gambar;

        $this->actingAs($admin)
            ->delete("/manajemenartikel/{$artikel->id}")
            ->assertRedirect('/manajemenartikel');

        $this->assertDatabaseCount('artikels', 0);
        Storage::disk('public')->assertMissing($currentPath);
    }

    public function test_kegiatan_crud_uploads_and_deletes_via_cloudinary_when_configured(): void
    {
        config()->set('services.cloudinary.cloud_name', 'demo-cloud');
        config()->set('services.cloudinary.api_key', 'demo-key');
        config()->set('services.cloudinary.api_secret', 'demo-secret');
        config()->set('services.cloudinary.folder', 'dayapotensia');

        Http::fake([
            'https://api.cloudinary.com/v1_1/demo-cloud/image/upload' => Http::sequence()
                ->push(['secure_url' => 'https://res.cloudinary.com/demo-cloud/image/upload/v1700000001/dayapotensia/kegiatan/first.jpg'], 200)
                ->push(['secure_url' => 'https://res.cloudinary.com/demo-cloud/image/upload/v1700000002/dayapotensia/kegiatan/second.jpg'], 200),
            'https://api.cloudinary.com/v1_1/demo-cloud/image/destroy' => Http::response(['result' => 'ok'], 200),
        ]);

        $admin = User::factory()->create();

        $this->actingAs($admin)
            ->post('/manajemenkegiatan', [
                'judul' => 'Kegiatan Cloud',
                'tanggal' => '2026-11-13',
                'isi' => 'Konten kegiatan pengujian.',
                'gambar' => UploadedFile::fake()->image('event1.jpg', 400, 300),
            ])
            ->assertRedirect('/manajemenkegiatan');

        $kegiatan = Kegiatan::query()->firstOrFail();
        $this->assertSame(
            'https://res.cloudinary.com/demo-cloud/image/upload/v1700000001/dayapotensia/kegiatan/first.jpg',
            $kegiatan->gambar
        );

        $this->actingAs($admin)
            ->post("/manajemenkegiatan/{$kegiatan->id}", [
                '_method' => 'PUT',
                'judul' => 'Kegiatan Cloud Baru',
                'tanggal' => '2026-11-14',
                'isi' => 'Konten kegiatan baru.',
                'gambar' => UploadedFile::fake()->image('event2.jpg', 400, 300),
            ])
            ->assertRedirect('/manajemenkegiatan');

        $kegiatan->refresh();
        $this->assertSame(
            'https://res.cloudinary.com/demo-cloud/image/upload/v1700000002/dayapotensia/kegiatan/second.jpg',
            $kegiatan->gambar
        );

        $this->actingAs($admin)
            ->delete("/manajemenkegiatan/{$kegiatan->id}")
            ->assertRedirect('/manajemenkegiatan');

        $this->assertDatabaseCount('kegiatan', 0);

        Http::assertSent(function (ClientRequest $request) {
            return $request->url() === 'https://api.cloudinary.com/v1_1/demo-cloud/image/destroy'
                && ($request->data()['public_id'] ?? null) === 'dayapotensia/kegiatan/first';
        });

        Http::assertSent(function (ClientRequest $request) {
            return $request->url() === 'https://api.cloudinary.com/v1_1/demo-cloud/image/destroy'
                && ($request->data()['public_id'] ?? null) === 'dayapotensia/kegiatan/second';
        });
    }

    public function test_https_app_url_forces_https_scheme(): void
    {
        config()->set('app.url', 'https://dayapotensiaindonesia.com');
        (new \App\Providers\AppServiceProvider($this->app))->boot();

        $this->assertStringStartsWith('https://', URL::to('/artikel'));
    }
}
