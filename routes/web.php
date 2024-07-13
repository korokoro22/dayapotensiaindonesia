<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\KontakController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TampilanArtikelController;
use App\Http\Controllers\TampilanKegiatanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Homepage');
});

//layanan
Route::get('/layanan-content', function () {
    return Inertia::render("LayananContent");
});
Route::get('/industri', function () {
    return Inertia::render("Layanan/Industri");
});
Route::get('/klinis', function () {
    return Inertia::render("Layanan/Klinis");
});
Route::get('/forensik', function () {
    return Inertia::render("Layanan/Forensik");
});
Route::get('/pendidikan', function () {
    return Inertia::render("Layanan/Pendidikan");
});
Route::get('/sosial', function () {
    return Inertia::render("Layanan/Sosial");
});
Route::get('/lainnya', function () {
    return Inertia::render("Layanan/Lainnya");
});

Route::get('/layanan', function() {
    return Inertia::render('LayananKami');
});

//kegiatan
Route::resource('/kegiatan', TampilanKegiatanController::class);

//Artikel
Route::resource('/artikel', TampilanArtikelController::class);

//kontak
Route::get('/hubungikami', [KontakController::class, 'create'])->name('hubungikami.create');
Route::post('/hubungikami', [KontakController::class, 'store'])->name('hubungikami.store');


//Admin
Route::get('/login', function () {
    return Inertia::render('Login');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/manajemenkegiatan', function () {
    return Inertia::render('AdminKegiatan/KegiatanDashboard');
})->middleware(['auth', 'verified'])->name('manajemenkegiatan');

// Route::get('/manajemenartikel', function () {
//     return Inertia::render('AdminArtikel/ArtikelDashboard');
// })->middleware(['auth', 'verified'])->name('manajemenartikel');

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
Route::delete('/manajemenkegiatan/{id}', [KegiatanController::class, 'destroy'])->name('artikel.destroy')->middleware(['auth', 'verified']);
Route::get('/manajemenkegiatan/{id}', [KegiatanController::class, 'show'])->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
