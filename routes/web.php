<?php

use App\Http\Controllers\Backend\ActivityLogController;
use Inertia\Inertia;
use App\Models\SubCourseCategory;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Backend\RoleController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\CourseController;
use App\Http\Controllers\Backend\PermissionController;
use App\Http\Controllers\Backend\CourseSectionController;
use App\Http\Controllers\Backend\CourseCategoryController;
use App\Http\Controllers\Backend\CourseLectureController;
use App\Http\Controllers\Backend\CourseSubCategoryController;
use App\Http\Controllers\Backend\SubCourseCategoryController;

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

        Route::resource('/course_category', CourseCategoryController::class)->only(['index', 'store', 'update', 'destroy']);

        // Route::resource('/sub_course_category', SubCourseCategoryController::class)->only(['index', 'store', 'update', 'destroy']);
        // Route::get('/sub_course_category/data/{course_category?}', [SubCourseCategoryController::class, 'data'])->name('sub_course_category.data');

        Route::resource('/course_sub_category', CourseSubCategoryController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::get('/course_sub_category/data/{course_category?}', [CourseSubCategoryController::class, 'data'])->name('course_sub_category.data');

        Route::resource('/course', CourseController::class)->only(['index', 'store', 'destroy']);
        Route::post('/course/{course}', [CourseController::class, 'update'])->name('course.update');

        Route::resource('/course_section', CourseSectionController::class)->only(['index', 'store', 'update', 'destroy']);

        Route::resource('/course_lecture', CourseLectureController::class)->only(['index', 'store', 'destroy']);
        Route::post('/course_lecture/{course_lecture}', [CourseLectureController::class, 'update'])->name('course_lecture.update');

        Route::resource('/activity_log', ActivityLogController::class)->only(['index']);
    });
});

require __DIR__ . '/auth.php';
