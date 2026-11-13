# Panduan Hosting Gratis (Render + Neon PostgreSQL + Cloudinary)

Project ini sudah dikonfigurasi untuk **Skema 1 (100% gratis, tanpa kartu kredit, dan auto-deploy setiap `git push` ke GitHub)**:

* **Web Server (Laravel 10 + React + Inertia.js):** Render Free Web Service (Docker) via [render.yaml](render.yaml) & [Dockerfile](Dockerfile)
* **Database:** Neon PostgreSQL Free Tier (0,5 GB, permanen, tanpa auto-pause 7 hari)
* **Penyimpanan Gambar Artikel & Kegiatan:** Cloudinary Free Tier (25 credit/bulan) agar gambar tidak hilang saat container restart/redeploy (di laptop lokal tetap otomatis memakai `storage/app/public/` jika env Cloudinary dikosongkan)

---

## Langkah 1 — Buat Database Gratis di Neon

1. Daftar / login ke **https://neon.tech** (bisa login pakai akun GitHub, tanpa kartu kredit).
2. Buat project baru (pilih region **AWS Singapore (`ap-southeast-1`)** agar dekat dengan Indonesia & Render Singapore).
3. Di halaman **Dashboard → Connect**, salin **Connection string** PostgreSQL-nya. Contoh formatnya:
   ```text
   postgresql://user:password@ep-xxxx-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
   ```
   *(Simpan URL ini untuk nilai `DATABASE_URL` pada Langkah 3.)*

---

## Langkah 2 — Buat Penyimpanan Gambar Gratis di Cloudinary

1. Daftar / login ke **https://cloudinary.com** (paket **Free**, tanpa kartu kredit).
2. Buka **Dashboard / Settings → API Keys**, lalu catat 3 nilai ini:
   * **Cloud Name** (`CLOUDINARY_CLOUD_NAME`)
   * **API Key** (`CLOUDINARY_API_KEY`)
   * **API Secret** (`CLOUDINARY_API_SECRET`)

---

## Langkah 3 — Deploy Otomatis dari GitHub ke Render

1. Pastikan seluruh perubahan sudah di-push ke repository GitHub Anda (`git push origin main`).
2. Daftar / login ke **https://render.com** memakai akun **GitHub** (tanpa kartu kredit).
3. Klik **New + → Blueprint** (disarankan karena langsung membaca [render.yaml](render.yaml)), pilih repository `dayapotensiaindonesia`.
4. Render akan menampilkan daftar Environment Variables yang bertanda `sync: false`. Isi bagian berikut:
   * `DATABASE_URL` → tempel connection string dari **Neon** (Langkah 1)
   * `CLOUDINARY_CLOUD_NAME` → dari **Cloudinary** (Langkah 2)
   * `CLOUDINARY_API_KEY` → dari **Cloudinary** (Langkah 2)
   * `CLOUDINARY_API_SECRET` → dari **Cloudinary** (Langkah 2)
   * `ADMIN_PASSWORD` → isi password admin yang Anda inginkan untuk login `/login` (username default: `admin`)
   * `APP_URL` → boleh dikosongkan dulu saat deploy pertama (otomatis memakai URL `https://...onrender.com`), atau langsung isi `https://domainanda.com` jika domain sudah siap
5. Klik **Apply / Deploy Blueprint**.
   * Render otomatis membangun Docker image (`npm run build` React + `composer install --no-dev`), menjalankan `php artisan migrate --force` ke Neon, dan membuat akun admin awal otomatis.
   * Jika nanti Anda mengedit kode di laptop lalu menjalankan `git push origin main`, Render otomatis membangun ulang dan meng-update website tanpa upload manual.

---

## Langkah 4 — Menghubungkan ke Domain Sendiri + SSL Gratis

Setelah website sudah bisa dibuka di URL bawaan Render (misalnya `https://dayapotensia-web.onrender.com`):

1. Buka service `dayapotensia-web` di Dashboard Render → tab **Settings → Custom Domains**.
2. Klik **Add Custom Domain**, masukkan domain Anda (misalnya `dayapotensiaindonesia.com` atau `www.dayapotensiaindonesia.com`).
3. Render akan menampilkan DNS record yang harus dipasang di panel domain Anda (Niagahoster / Rumahweb / Cloudflare / Namecheap / Domainesia):
   * **Untuk subdomain `www` (contoh `www.domainanda.com`):**
     * Type: `CNAME`
     * Name / Host: `www`
     * Target / Value: `<nama-service>.onrender.com` (sesuai yang tampil di dashboard Render)
   * **Untuk root domain tanpa `www` (contoh `domainanda.com`):**
     * Jika DNS mendukung `ALIAS` / `ANAME` / CNAME Flattening (seperti Cloudflare): arahkan `@` ke `<nama-service>.onrender.com`.
     * Jika tidak mendukung: tambahkan `A` record untuk `@` ke **alamat IPv4** yang diberikan Render di dashboard, dan **hapus record `AAAA` (IPv6)** jika ada agar verifikasi SSL tidak bentrok.
4. Tunggu propagasi DNS (biasanya 5–30 menit), lalu klik **Verify** di Render. Render otomatis menerbitkan **sertifikat SSL HTTPS gratis** (Let's Encrypt / Google Trust Services).
5. Buka tab **Environment** di Render, isi/perbarui:
   * `APP_URL` = `https://domainanda.com` *(sesuaikan dengan domain aktif Anda)*
   Lalu klik **Save, rebuild, and deploy** (atau cukup **Manual Deploy**).

---

## Catatan Operasional

* **Login Admin:** Buka `https://domainanda.com/login`, masuk menggunakan `ADMIN_NAME` (default `admin`) dan `ADMIN_PASSWORD` yang Anda isi di Render. Setelah login berhasil, Anda dapat mengganti username/email/password kapan saja lewat menu `/profile` — deploy berikutnya tidak akan menimpa password yang sudah diubah.
* **Cold Start Free Tier:** Karena memakai paket gratis Render, service akan *sleep* setelah 15 menit tanpa pengunjung; pengunjung pertama setelah tidur perlu menunggu ~30–60 detik sampai container bangun.
* **Health Check:** Endpoint `/health` sudah disiapkan untuk pengecekan otomatis Render.

