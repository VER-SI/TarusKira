<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('statistics', function () {
    return Inertia::render('statistics');
})->name('statistics');

// Inventory Route
Route::get('inventory', function () {
    return Inertia::render('inventory/inventory'); // Points to inventory/inventory.tsx
})->name('inventory');

// Profile & Account Management Routes
Route::get('profile', function () {
    return Inertia::render('profile/profile'); 
})->name('profile');

Route::get('profile/personal-information', function () {
    return Inertia::render('profile/personalinformation');
})->name('profile.personalinformation');

Route::get('profile/transaction-history', function () {
    return Inertia::render('profile/transactionhistory');
})->name('profile.transactionhistory');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';