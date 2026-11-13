# Panduan Hosting Gratis 100% Tanpa Kartu Kredit (Vercel + Neon PostgreSQL + Cloudinary)

Project ini dikonfigurasi untuk berjalan penuh di **Vercel Free (Hobby)** dengan **0 kartu kredit**, **auto-deploy setiap `git push` ke GitHub**, dan **Custom Domain + SSL HTTPS gratis**:

* **Web Server (Laravel 10 + React + Inertia.js):** Vercel Serverless (`vercel-php@0.7.4`) via [vercel.json](vercel.json) & [api/index.php](api/index.php)
* **Database:** Neon PostgreSQL Free Tier (0,5 GB, permanen, sudah selesai dibuat pada Langkah 1)
* **Penyimpanan Gambar Artikel & Kegiatan:** Cloudinary Free Tier (25 credit/bulan, sudah selesai dibuat pada Langkah 2)

---

## Status Progres Setup

- [x] **Langkah 1 — Database Neon PostgreSQL** *(Selesai: project Neon region Singapore `ap-southeast-1` / `neondb` sudah dibuat dan connection string sudah disalin)*
- [x] **Langkah 2 — Cloudinary (Storage Gambar)** *(Selesai: API Keys sudah dibuat dan disimpan di `.env` lokal)*
- [ ] **Langkah 3 — Deploy Project di Vercel (`https://vercel.com`)**
- [ ] **Langkah 4 — Sambungkan Custom Domain + SSL HTTPS**

> **Catatan Keamanan:** Jangan pernah menempelkan atau menyimpan `DATABASE_URL` (berisi password), `CLOUDINARY_API_SECRET`, atau `ADMIN_PASSWORD` di file markdown/kode yang di-push ke GitHub. Masukkan nilai rahasia tersebut hanya di Dashboard Vercel (**Project Settings → Environment Variables**).

---

## Langkah 1 — Buat Database Gratis di Neon *(Selesai)*

* ~~Project Neon PostgreSQL (region Singapore `ap-southeast-1`, database `neondb`) sudah aktif dan connection string sudah disalin.~~

---

## Langkah 2 — Buat Penyimpanan Gambar Gratis di Cloudinary *(Selesai)*

* ~~Cloud Name, API Key, dan API Secret sudah dibuat dan tersimpan aman di `.env` lokal laptop.~~

---

## Langkah 3 — Deploy Otomatis dari GitHub ke Vercel *(Tanpa Kartu Kredit)*

1. Buka **https://vercel.com** → login / daftar memakai akun **GitHub** Anda (pilih paket **Hobby / Free**).
2. Klik **Add New... → Project**.
3. Di daftar repository GitHub, pilih **`dayapotensiaindonesia`** lalu klik **Import**.
4. Pastikan **Framework Preset** biarkan **`Other`** *(otomatis terbaca dari [vercel.json](vercel.json))*.
5. Buka bagian **Environment Variables**, lalu masukkan **6 variabel** berikut *(cukup tempel blok `.env` atau isi satu per satu — sisanya sudah otomatis diatur di [vercel.json](vercel.json))*:
   * `APP_KEY` → `base64:...` *(key Laravel produksi yang digenerate untuk web)*
   * `DATABASE_URL` → connection string PostgreSQL dari **Neon** (Langkah 1)
   * `CLOUDINARY_CLOUD_NAME` → dari **Cloudinary** (Langkah 2)
   * `CLOUDINARY_API_KEY` → dari **Cloudinary** (Langkah 2)
   * `CLOUDINARY_API_SECRET` → dari **Cloudinary** (Langkah 2)
   * `ADMIN_PASSWORD` → password admin untuk login ke `/login` *(username default: `admin`)*
6. Klik **Deploy** dan tunggu proses build selesai (~1–2 menit).
   * Saat build, Vercel otomatis membangun frontend React (`npm run build`), menjalankan migrasi database Neon (`php artisan migrate --force`), dan membuat akun admin awal (`php artisan app:ensure-admin`).
   * Setiap kali Anda mengedit kode dan menjalankan `git push origin main`, Vercel otomatis membangun ulang dan meng-update website secara langsung.

---

## Langkah 4 — Menghubungkan ke Domain Sendiri + SSL Gratis

Setelah website bisa dibuka di URL bawaan Vercel (`https://...vercel.app`):

1. Buka project Anda di Dashboard Vercel → **Settings → Domains**.
2. Ketik nama domain Anda (misalnya `dayapotensiaindonesia.com` atau `www.dayapotensiaindonesia.com`) lalu klik **Add**.
3. Pasang DNS record persis seperti yang ditampilkan Vercel di panel domain Anda (Niagahoster / Rumahweb / Cloudflare / Domainesia):
   * **Apex / root domain (`domainanda.com`):** Type `A`, Name `@`, Value IP yang ditampilkan Vercel (umumnya `76.76.21.21` atau sesuai instruksi terbaru di layar Vercel).
   * **Subdomain `www` (`www.domainanda.com`):** Type `CNAME`, Name `www`, Target `cname.vercel-dns.com` *(atau sesuai yang tampil di dashboard Vercel)*.
4. Tunggu beberapa menit hingga status domain berubah menjadi **Valid Configuration** (Vercel otomatis menerbitkan **sertifikat SSL HTTPS gratis**).
5. Buka **Settings → Environment Variables** di Vercel, tambahkan:
   * `APP_URL` = `https://domainanda.com`
   Lalu lakukan **Redeploy** dari tab **Deployments** agar URL aplikasi mengikuti domain resmi Anda.

---

## Catatan Operasional

* **Login Admin:** Buka `https://domainanda.com/login`, masuk memakai username `admin` dan `ADMIN_PASSWORD` yang Anda pasang di Vercel. Setelah berhasil masuk, segera ganti password lewat menu `/profile` — deploy berikutnya tidak akan menimpa password yang sudah Anda ubah.
* **Tidak ada sleep 30–60 detik:** Berbeda dengan layanan container gratis lain, website di Vercel selalu responsif tanpa menunggu container bangun.
* **File Render opsional:** File [Dockerfile](Dockerfile) dan [render.yaml](render.yaml) tetap disimpan di repo sebagai cadangan jika suatu saat ingin memindahkan server ke VPS/Docker.
