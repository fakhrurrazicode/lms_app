<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CartController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Backend\TagController;
use App\Http\Controllers\StudentAreaController;
use App\Http\Controllers\Backend\RoleController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\CourseController;
use App\Http\Controllers\Backend\PermissionController;
use App\Http\Controllers\Backend\ActivityLogController;
use App\Http\Controllers\Backend\CourseLectureController;
use App\Http\Controllers\Backend\CourseSectionController;
use App\Http\Controllers\Backend\CourseCategoryController;
use App\Http\Controllers\Backend\CourseSubCategoryController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/courses', [PageController::class, 'courses'])->name('courses');
Route::get('/course/{slug}', [PageController::class, 'course'])->name('course');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::resource('/cart', CartController::class)->only(['index', 'store']);
    Route::delete('/cart', [CartController::class, 'destroy'])->name('cart.destroy');

    // student area
    Route::group(['prefix' => '/student_area', 'as' => 'student_area.'], function () {
        Route::get('/dashboard', [StudentAreaController::class, 'dashboard'])->name('dashboard');
    });



    // backend area

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::group(['prefix' => '/backend', 'as' => 'backend.'], function () {
        Route::resource('/role', RoleController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::put('/role/{role}/set-permission', [RoleController::class, 'setPermission'])->name('role.set-permission');

        Route::resource('/permission', PermissionController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::put('/permission/{permission}/set-role', [PermissionController::class, 'setRole'])->name('role.set-role');

        Route::resource('/user', UserController::class);
        Route::put('/user/{user}/update-password', [UserController::class, 'updatePassword'])->name('user.update-password');

        Route::resource('/course_category', CourseCategoryController::class);
        Route::resource('/tag', TagController::class);

        Route::resource('/course', CourseController::class)->only(['index', 'store', 'destroy']);
        Route::post('/course/{course}', [CourseController::class, 'update'])->name('course.update');

        Route::resource('/course_section', CourseSectionController::class)->only(['index', 'store', 'update', 'destroy']);

        Route::resource('/course_lecture', CourseLectureController::class)->only(['index', 'store', 'destroy']);
        Route::post('/course_lecture/{course_lecture}', [CourseLectureController::class, 'update'])->name('course_lecture.update');

        Route::resource('/activity_log', ActivityLogController::class)->only(['index']);
    });
});

require __DIR__ . '/auth.php';
