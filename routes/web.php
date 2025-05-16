<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ArtikelController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
})->name('login');

Route::post('/login', [LoginController::class, 'login'])->name('login.post');
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');


Route::get('/artikels', [ArtikelController::class, 'index'])->name('artikels');
Route::get('/artikels/create', [ArtikelController::class, 'create'])->name('artikels.create');
Route::post('/artikels', [ArtikelController::class, 'store'])->name('artikels.store');
Route::delete('/artikel/delete/{id}', [ArtikelController::class, 'destroy'])->name('artikels.delete');
Route::get('/artikels/edit/{id}', [ArtikelController::class, 'edit'])->name('artikels.edit');
Route::post('/artikels/update/{id}', [ArtikelController::class, 'update'])->name('artikels.update');






