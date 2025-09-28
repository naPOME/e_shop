<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;

Route::middleware('api')->group(function () {
    Route::apiResource('products', ProductController::class);
    Route::get('/categories', [CategoryController::class, 'index']);
});

Route::middleware(['api', 'admin.auth'])->group(function () {
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::put('/categories/{category}', [CategoryController::class, 'update']);
    Route::delete('/categories/{category}', [CategoryController::class, 'destroy']);
});
