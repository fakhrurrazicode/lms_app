<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/payment/notification', [PaymentController::class, 'notification'])->name('payment.notification')->withoutMiddleware(VerifyCsrfToken::class);
Route::post('/payment/recurring', [PaymentController::class, 'recurring'])->name('payment.recurring')->withoutMiddleware(VerifyCsrfToken::class);
Route::post('/payment/account_linking', [PaymentController::class, 'account_linking'])->name('payment.account_linking')->withoutMiddleware(VerifyCsrfToken::class);
