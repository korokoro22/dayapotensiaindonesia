<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

/**
 * Ensures an initial admin account exists on fresh deployments using env variables.
 */
class EnsureAdminUser extends Command
{
    protected $signature = 'app:ensure-admin {--sync-password : Update password if the admin user already exists}';

    protected $description = 'Create the initial admin user from ADMIN_NAME, ADMIN_EMAIL, and ADMIN_PASSWORD env variables if missing';

    public function handle(): int
    {
        $name = trim((string) config('services.admin.name', 'admin'));
        $email = trim((string) config('services.admin.email', 'admin@dayapotensiaindonesia.com'));
        $password = (string) config('services.admin.password', '');

        if ($password === '') {
            $this->info('ADMIN_PASSWORD is not set; skipping automatic admin user provisioning.');

            return self::SUCCESS;
        }

        if ($name === '' || $email === '') {
            $this->error('ADMIN_NAME and ADMIN_EMAIL must not be empty.');

            return self::FAILURE;
        }

        $existing = User::query()
            ->where('name', $name)
            ->orWhere('email', $email)
            ->first();

        if ($existing !== null) {
            if ($this->option('sync-password')) {
                $existing->forceFill([
                    'name' => $name,
                    'email' => $email,
                    'password' => Hash::make($password),
                    'email_verified_at' => $existing->email_verified_at ?? now(),
                ])->save();

                $this->info("Updated admin user [{$name}] credentials.");
            } else {
                $this->info("Admin user [{$existing->name}] already exists.");
            }

            return self::SUCCESS;
        }

        User::query()->create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
            'email_verified_at' => now(),
        ]);

        $this->info("Created initial admin user [{$name}] ({$email}).");

        return self::SUCCESS;
    }
}
