<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HealthController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\KontakController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TampilanArtikelController;
use App\Http\Controllers\TampilanKegiatanController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/health', HealthController::class);

Route::inertia('/', 'Homepage');

//layanan
Route::redirect('/layanan-content', '/layanan');
Route::inertia('/industri', 'Layanan/Industri');
Route::inertia('/klinis', 'Layanan/Klinis');
Route::inertia('/forensik', 'Layanan/Forensik');
Route::inertia('/pendidikan', 'Layanan/Pendidikan');
Route::inertia('/sosial', 'Layanan/Sosial');
Route::inertia('/lainnya', 'Layanan/Lainnya');

Route::inertia('/layanan', 'LayananKami');

//kegiatan
Route::resource('/kegiatan', TampilanKegiatanController::class)->only(['index', 'show']);

//Artikel
Route::resource('/artikel', TampilanArtikelController::class)->only(['index', 'show']);

//kontak
Route::get('/hubungikami', [KontakController::class, 'create'])->name('hubungikami.create');
Route::post('/hubungikami', [KontakController::class, 'store'])->name('hubungikami.store');


//Admin
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/manajemenartikel', [ArtikelController::class, 'index'])->middleware(['auth', 'verified'])->name('manajemenartikel');
Route::get('/manajemenartikel/create', [ArtikelController::class, 'create'])->middleware(['auth', 'verified']);
Route::post('/manajemenartikel', [ArtikelController::class, 'store'])->middleware(['auth', 'verified']);
Route::get('/manajemenartikel/{id}/edit', [ArtikelController::class, 'edit'])->middleware(['auth', 'verified']);
Route::put('/manajemenartikel/{id}', [ArtikelController::class, 'update'])->middleware(['auth', 'verified']);
Route::delete('/manajemenartikel/{id}', [ArtikelController::class, 'destroy'])->name('artikel.destroy')->middleware(['auth', 'verified']);
Route::get('/manajemenartikel/{id}', [ArtikelController::class, 'show'])->middleware(['auth', 'verified']);

Route::get('/manajemenkegiatan', [KegiatanController::class, 'index'])->middleware(['auth', 'verified'])->name('manajemenkegiatan');
Route::get('/manajemenkegiatan/create', [KegiatanController::class, 'create'])->middleware(['auth', 'verified']);
Route::post('/manajemenkegiatan', [KegiatanController::class, 'store'])->middleware(['auth', 'verified']);
Route::get('/manajemenkegiatan/{id}/edit', [KegiatanController::class, 'edit'])->middleware(['auth', 'verified']);
Route::put('/manajemenkegiatan/{id}', [KegiatanController::class, 'update'])->middleware(['auth', 'verified']);
Route::delete('/manajemenkegiatan/{id}', [KegiatanController::class, 'destroy'])->name('kegiatan.destroy')->middleware(['auth', 'verified']);
Route::get('/manajemenkegiatan/{id}', [KegiatanController::class, 'show'])->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
