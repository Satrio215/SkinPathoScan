<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ArtikelController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


//Authentication
Route::post('/login', [LoginController::class, 'login'])->name('login.post');

//Artikel
Route::middleware('auth:api')->group(function () {
    Route::get('/artikels', [ArtikelController::class, 'index'])->name('artikels');
    Route::post('/artikel/tambah', [ArtikelController::class, 'store'])->name('artikel.tambah');
    Route::post('/artikel/{id}', [ArtikelController::class, 'update'])->name('artikel.update');
    Route::delete('/artikel/delete/{id}', [ArtikelController::class, 'destroy'])->name('artikel.delete');
    Route::get('/artikels/{id}', [ArtikelController::class, 'show'])->name('artikel.id');

    //Logout
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
});



