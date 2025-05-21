<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ArtikelController;

Route::get('/', function () {
    return view('auth.login');
})->name('login');

Route::post('/login', [LoginController::class, 'login'])->name('login.post');
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

// Artikel Routes (menggunakan slug)
Route::get('/artikels', [ArtikelController::class, 'index'])->name('artikels');
Route::get('/artikels/create', [ArtikelController::class, 'create'])->name('artikels.create');
Route::post('/artikels', [ArtikelController::class, 'store'])->name('artikels.store');

// Ganti {id} → {artikel:slug}
Route::get('/artikels/edit/{artikel:slug}', [ArtikelController::class, 'edit'])->name('artikels.edit');
Route::post('/artikels/update/{artikel:slug}', [ArtikelController::class, 'update'])->name('artikels.update');
Route::delete('/artikel/delete/{artikel:slug}', [ArtikelController::class, 'destroy'])->name('artikels.delete');

// (Opsional) Tambahkan show jika dibutuhkan
Route::get('/artikels/{artikel:slug}', [ArtikelController::class, 'show'])->name('artikels.show');







