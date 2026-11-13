# Panduan Hosting Gratis 100% Tanpa Kartu Kredit (Vercel + Neon PostgreSQL + Cloudinary)

Project ini dikonfigurasi untuk berjalan penuh di **Vercel Free (Hobby)** dengan **0 kartu kredit**, **auto-deploy setiap `git push` ke GitHub**, dan **Custom Domain + SSL HTTPS gratis**:

* **Web Server (Laravel 10 + React + Inertia.js):** Vercel Serverless (`vercel-php@0.7.4`) via [vercel.json](vercel.json) & [api/index.php](api/index.php)
* **Database:** Neon PostgreSQL Free Tier (0,5 GB, permanen, sudah selesai dibuat pada Langkah 1)
* **Penyimpanan Gambar Artikel & Kegiatan:** Cloudinary Free Tier (25 credit/bulan, sudah selesai dibuat pada Langkah 2)

---

## Status Progres Setup

- [x] **Langkah 1 — Database Neon PostgreSQL** *(Selesai: project Neon region Singapore `ap-southeast-1` / `neondb` sudah dibuat dan connection string sudah disalin)*
- [x] **Langkah 2 — Cloudinary (Storage Gambar)** *(Selesai: API Keys sudah dibuat dan disimpan di `.env` lokal)*
- [x] **Langkah 3 — Deploy Project di Vercel (`https://dayapotensiaindonesia.vercel.app`)** *(Selesai: sudah online di Vercel Free / `adiln07`, database Neon termigrasi otomatis, dan aset React berjalan)*
- [ ] **Langkah 4 — Sambungkan Custom Domain + SSL HTTPS**

> **Catatan Keamanan:** Jangan pernah menempelkan atau menyimpan `DATABASE_URL` (berisi password), `CLOUDINARY_API_SECRET`, atau `ADMIN_PASSWORD` di file markdown/kode yang di-push ke GitHub. Masukkan nilai rahasia tersebut hanya di Dashboard Vercel (**Project Settings → Environment Variables**).

---

## Langkah 1 — Buat Database Gratis di Neon *(Selesai)*

* ~~Project Neon PostgreSQL (region Singapore `ap-southeast-1`, database `neondb`) sudah aktif dan connection string sudah disalin.~~

---

## Langkah 2 — Buat Penyimpanan Gambar Gratis di Cloudinary *(Selesai)*

* ~~Cloud Name, API Key, dan API Secret sudah dibuat dan tersimpan aman di `.env` lokal laptop.~~

---

## Langkah 3 — Deploy ke Vercel *(Selesai)*

* Website sudah live di **https://dayapotensiaindonesia.vercel.app** via Vercel CLI (`vercel link` + `vercel env add` + `vercel deploy --prod`).
* Workflow auto-deploy sudah disiapkan di [.github/workflows/deploy-vercel.yml](.github/workflows/deploy-vercel.yml). Supaya setiap `git push origin main` otomatis men-deploy ke Vercel, cukup pasang **1 secret** sekali saja:
  1. Buat token di **https://vercel.com/account/tokens** (Scope: `Full Account` atau team Anda, Expiration: `No Expiration`).
  2. Buka **https://github.com/korokoro22/dayapotensiaindonesia/settings/secrets/actions/new**, buat secret bernama **`VERCEL_TOKEN`** dan tempel token tersebut.
  3. Setelah itu, setiap `git push origin main` otomatis memicu build & deploy ke **https://dayapotensiaindonesia.vercel.app**.

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
