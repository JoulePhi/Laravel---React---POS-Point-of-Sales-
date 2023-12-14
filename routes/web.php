<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingController;
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

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/reports', function () {
        return Inertia::render('Reports');
    })->name('reports');
    Route::get('/likes', function () {
        return Inertia::render('Dashboard');
    })->name('likes');




    Route::controller(SettingController::class)->group(function () {
        Route::get('/settings', 'index')->name('settings');
        Route::post('/settings/category', 'addCategory')->name('admin.category');
        Route::post('/settings/product', 'addProduct')->name('admin.product');
        Route::get('/settings/category', 'indexCategory')->name('admin.category.index');
        Route::get('/settings/product', 'indexProduct')->name('admin.product.index');
    });
});
require base_path('routes/auth.php');
