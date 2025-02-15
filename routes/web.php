<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\ScheduleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/profile', [ProfileController::class, 'index']);
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile');
    Route::post('/profile/photo', [ProfileController::class, 'updatePhoto'])->name('profile.photo');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/pustaka', function () {
        return Inertia::render('Reference');
    });
    Route::get('/video', function () {
        return Inertia::render('Video');
    });

    Route::get('/posting', [PostController::class, 'index']);
    Route::post('/posting', [PostController::class, 'storeContent']);
    Route::post('/upload', [PostController::class, 'uploadFile']);
    Route::get('/eksplorasi', [PostController::class, 'explore'])->name('explore');

    Route::get('/quiz', [QuizController::class, 'index']);
    Route::post('/quiz', [QuizController::class, 'submitAnswer']);
    Route::get('/quiz/{level}', [QuizController::class, 'answerQuestion']);

    Route::get('/komunitas/{date?}', [ScheduleController::class, 'index'])->name('community');
    Route::post('/komunitas', [ScheduleController::class, 'store']);
    Route::delete('/schedule/{schedule}', [ScheduleController::class, 'destroy']);
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
