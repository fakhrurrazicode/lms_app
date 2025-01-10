<?php

use App\Http\Controllers\Backend\PermissionController;
use App\Http\Controllers\Backend\RoleController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    return redirect('/login');
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::group(['prefix' => '/backend', 'as' => 'backend.'], function () {

        Route::resource('/role', RoleController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::put('/role/{role}/set-permission', [RoleController::class, 'setPermission'])->name('role.set-permission');

        Route::resource('/permission', PermissionController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::put('/permission/{permission}/set-role', [PermissionController::class, 'setRole'])->name('role.set-role');

        Route::resource('/user', UserController::class)->only(['index', 'store', 'update', 'destroy']);;
        Route::put('/user/{user}/update-password', [UserController::class, 'updatePassword'])->name('user.update-password');
    });
});

require __DIR__ . '/auth.php';
