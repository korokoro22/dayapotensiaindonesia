<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ProfileController;
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
    return Inertia::render('Welcome');
});

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/manajemenkegiatan', function () {
    return Inertia::render('AdminKegiatan/KegiatanDashboard');
})->middleware(['auth', 'verified'])->name('manajemenkegiatan');

// Route::get('/manajemenartikel', function () {
//     return Inertia::render('AdminArtikel/ArtikelDashboard');
// })->middleware(['auth', 'verified'])->name('manajemenartikel');

Route::get('/manajemenartikel', [ArtikelController::class, 'index'])->middleware(['auth', 'verified'])->name('manajemenartikel');
Route::get('/manajemenartikel/create', [ArtikelController::class, 'create'])->middleware(['auth', 'verified']);
Route::post('/manajemenartikel', [ArtikelController::class, 'store'])->middleware(['auth', 'verified']);
Route::get('/manajemenartikel/{id}/edit', [ArtikelController::class, 'edit'])->middleware(['auth', 'verified']);
Route::put('/manajemenartikel/{id}', [ArtikelController::class, 'update'])->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
