<?php

use App\Http\Controllers\CustomerCreditController;
use App\Http\Controllers\SupplierCreditController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ChargeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SalesController;
use App\Models\SupplierCreditModel;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view("pages.dashboard");
});

Route::get('/dashboard', [DashboardController::class, 'index'])->name('pages.dash');
Route::get('/login', [LoginController::class, 'index'])->name('login');


Route::prefix('charges')->group( function () {
    Route::get('/', [ChargeController::class, 'index'])->name('charge.index');
    Route::get('/create', [ChargeController::class, 'create'])->name('charge.create');
    Route::post('/store', [ChargeController::class, 'store'])->name('charge.store');
    Route::get('{charge}/edit', [ChargeController::class, 'edit'])->name('charge.edit');
    Route::get('{charge}/show', [ChargeController::class, 'show'])->name('charge.show');
    Route::delete('{charge}/destroy', [ChargeController::class, 'destroy'])->name('charge.destroy');
});


Route::prefix('credits')->group(function () {
    Route::get('/', [CustomerCreditController::class, 'index'])->name('credits.index');
});
Route::prefix('customer-credit')->group( function () {
    Route::get('/', [CustomerCreditController::class, 'index'])->name('credits.customer.index');
    Route::get('/create', [CustomerCreditController::class, 'create'])->name('credits.customer.create');
    Route::post('/store', [CustomerCreditController::class, 'store'])->name('credits.customer.store');
    Route::get('{credit}/edit', [CustomerCreditController::class, 'edit'])->name('credits.customer.edit');
    Route::get('{credit}/show', [CustomerCreditController::class, 'show'])->name('credits.customer.show');
    Route::delete('{credit}/destroy', [CustomerCreditController::class, 'destroy'])->name('credits.customer.destroy');
});
Route::prefix('supplier-credit')->group( function () {
    Route::get('/', [SupplierCreditController::class, 'index'])->name('credits.supplier.index');
    Route::get('/create', [SupplierCreditController::class, 'create'])->name('credits.supplier.create');
    Route::post('/store', [SupplierCreditController::class, 'store'])->name('credits.supplier.store');
    Route::get('{credit}/edit', [SupplierCreditController::class, 'edit'])->name('credits.supplier.edit');
    Route::get('{credit}/show', [SupplierCreditController::class, 'show'])->name('credits.supplier.show');
    Route::delete('{credit}/destroy', [SupplierCreditController::class, 'destroy'])->name('credits.supplier.destroy');
});



Route::prefix('products')->group( function () {
    Route::get('/', [ProductController::class, 'index'])->name('products.index');
    Route::get('/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('/store', [ProductController::class, 'store'])->name('products.store');
    Route::get('{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
    Route::get('{product}/show', [ProductController::class, 'show'])->name('products.show');
    Route::delete('{product}/destroy', [ProductController::class, 'destroy'])->name('products.destroy');
});



Route::prefix('sales')->group( function () {
    Route::get('/', [SalesController::class, 'index'])->name('sales.index');
    Route::get('/create', [SalesController::class, 'create'])->name('sales.create');
    Route::post('/store', [SalesController::class, 'store'])->name('sales.store');
    Route::put('{sale}/edit', [SalesController::class, 'edit'])->name('sales.edit');
    Route::get('{sale}/show', [SalesController::class, 'show'])->name('sales.show');
    Route::delete('{sale}/destroy', [SalesController::class, 'destroy'])->name('sales.destroy');
});


