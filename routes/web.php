<?php


use Inertia\Inertia;
use App\Models\Enrollment;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\PageController;

use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Backend\TagController;
use App\Http\Controllers\Backend\RoleController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\CourseController;

use App\Http\Controllers\Backend\PermissionController;

use App\Http\Controllers\UserArea\DashboardController;
use App\Http\Controllers\Backend\ActivityLogController;
use App\Http\Controllers\UserArea\EnrollmentController;
use App\Http\Controllers\Backend\CourseLectureController;
use App\Http\Controllers\Backend\CourseSectionController;
use App\Http\Controllers\Backend\CourseCategoryController;
use App\Http\Controllers\Backend\InstructorInfoController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use App\Http\Controllers\UserArea\BecomeInstructorController;
use App\Http\Controllers\UserArea\OrderController as UserAreaOrderController;
use App\Http\Controllers\UserArea\CourseController as UserAreaCourseController;
use App\Http\Controllers\UserArea\ProfileController as UserAreaProfileController;
use App\Http\Controllers\UserArea\WishlistController as UserAreaWishlistController;
use App\Http\Controllers\LearningArea\CourseController as LearningAreaCourseController;
use App\Http\Controllers\UserArea\CourseLectureController as UserAreaCourseLectureController;
use App\Http\Controllers\UserArea\CourseSectionController as UserAreaCourseSectionController;
use App\Http\Controllers\LearningArea\CourseReviewController as LearningAreaCourseReviewController;
use App\Http\Controllers\LearningArea\CourseLectureController as LearningAreaCourseLectureController;
use App\Http\Controllers\NotificationController;

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
Route::get('/become_instructor', [PageController::class, 'become_instructor'])->name('become_instructor');
Route::post('/submit_become_instructor', [PageController::class, 'submit_become_instructor'])->name('submit_become_instructor');
Route::get('/course/{slug}', [PageController::class, 'course'])->name('course');

// Route::get('/dashboard', function () {})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/auth/google/redirect/{as_instructor?}', [GoogleController::class, 'redirect']);
Route::get('/auth/google/callback', [GoogleController::class, 'callback']);




Route::middleware(['auth'])->group(function () {



    Route::resource('/cart', CartController::class)->only(['index', 'store']);
    Route::delete('/cart', [CartController::class, 'destroy'])->name('cart.destroy');
    Route::delete('/cart/empty', [CartController::class, 'empty_cart'])->name('cart.empty');
    Route::post('/cart/add_to_wishlist', [CartController::class, 'add_to_wishlist'])->name('cart.add_to_wishlist');

    Route::post('/wishlist/toggle', [WishlistController::class, 'toggle'])->name('wishlist.toggle');

    // Route::post('/checkout', [PaymentController::class, 'checkout'])->name('checkout');
    Route::post('/midtrans/token', [PaymentController::class, 'token'])->name('midtrans.token')->middleware('verified');

    Route::get('/payment/finish', [PaymentController::class, 'finish'])->name('payment.finish')->middleware('verified');
    Route::get('/payment/unfinish', [PaymentController::class, 'unfinish'])->name('payment.unfinish')->middleware('verified');
    Route::get('/payment/error', [PaymentController::class, 'error'])->name('payment.error')->middleware('verified');

    Route::get('/notification/open_notification/{notification}', [NotificationController::class, 'open_notification'])->name('notification.open_notification')->middleware('verified');



    Route::group(['prefix' => '/user_area', 'as' => 'user_area.'], function () {

        Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');

        Route::resource('/become_instructor', BecomeInstructorController::class)->only(['index', 'store'])->middleware('verified');
        Route::get('/become_instructor/status', [BecomeInstructorController::class, 'status'])->name('become_instructor.status');
        // Route::get('/become_instructor/pending', [BecomeInstructorController::class, 'pending'])->name('become_instructor.pending');
        // Route::get('/become_instructor/approved', [BecomeInstructorController::class, 'approved'])->name('become_instructor.approved');
        // Route::get('/become_instructor/reject', [BecomeInstructorController::class, 'reject'])->name('become_instructor.reject');

        Route::resource('/wishlist', UserAreaWishlistController::class);
        Route::post('/wishlist/{wishlist}/add_to_cart', [UserAreaWishlistController::class, 'add_to_cart'])->name('wishlist.add-to-cart');

        Route::resource('/order', UserAreaOrderController::class);

        Route::get('/profile', [UserAreaProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [UserAreaProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [UserAreaProfileController::class, 'destroy'])->name('profile.destroy');

        Route::resource('/enrollment', EnrollmentController::class);
        // ->middleware('verified');

        Route::resource('/course', UserAreaCourseController::class)->except(['update']);
        Route::post('/course/{course}', [UserAreaCourseController::class, 'update'])->name('course.update');
        Route::resource('/course/{course}/course_section', UserAreaCourseSectionController::class);
        Route::resource('/course/{course}/course_section/{course_section}/course_lecture', UserAreaCourseLectureController::class)->except(['index', 'update']);
        Route::post('/course/{course}/course_section/{course_section}/course_lecture/{course_lecture}/update', [UserAreaCourseLectureController::class, 'update'])->name('course_lecture.update');
        Route::put('/course/{course}/course_section/{course_section}/course_lecture/{course_lecture}/set_as_preview', [UserAreaCourseLectureController::class, 'set_as_preview'])->name('course.set_as_preview');
        Route::put('/course/{course}/course_section/{course_section}/course_lecture/{course_lecture}/set_as_featured', [UserAreaCourseLectureController::class, 'set_as_featured'])->name('course.set_as_featured');
    });

    Route::group(['prefix' => '/learning_area/{course}', 'as' => 'learning_area.'], function () {
        Route::get('/course', [LearningAreaCourseController::class, 'index'])->name('course.index');
        Route::get('/course_lecture/{course_lecture}', [LearningAreaCourseLectureController::class, 'show'])->name('course_lecture.show');
        Route::post('/course_lecture/{course_lecture}/finish_lecture', [LearningAreaCourseLectureController::class, 'finish_lecture'])->name('course_lecture.finish_lecture');

        Route::resource('/course_review', LearningAreaCourseReviewController::class);
    });

    // backend area

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::group(['prefix' => '/backend', 'as' => 'backend.'], function () {


        Route::get('/dashboard', function () {
            return Inertia::render('Backend/Dashboard');
        })->name('dashboard');

        Route::resource('/role', RoleController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::put('/role/{role}/set-permission', [RoleController::class, 'setPermission'])->name('role.set-permission');

        Route::resource('/permission', PermissionController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::put('/permission/{permission}/set-role', [PermissionController::class, 'setRole'])->name('role.set-role');

        Route::resource('/instructor_info', InstructorInfoController::class)->only(['index', 'destroy']);
        Route::put('/instructor_info/{instructor_info}/approve', [InstructorInfoController::class, 'approve'])->name('instructor_info.approve');
        Route::put('/instructor_info/{instructor_info}/reject', [InstructorInfoController::class, 'reject'])->name('instructor_info.reject');

        Route::resource('/user', UserController::class);
        Route::get('/user/{user}/edit_password', [UserController::class, 'editPassword'])->name('user.edit_password');
        Route::put('/user/{user}/update_password', [UserController::class, 'updatePassword'])->name('user.update_password');

        Route::resource('/course_category', CourseCategoryController::class);
        Route::resource('/tag', TagController::class);

        Route::resource('/course', CourseController::class);
        Route::post('/course/{course}', [CourseController::class, 'update'])->name('course.update');


        Route::resource('/course/{course}/course_section', CourseSectionController::class);
        Route::resource('/course/{course}/course_section/{course_section}/course_lecture', CourseLectureController::class)->except(['index', 'update']);
        Route::post('/course/{course}/course_section/{course_section}/course_lecture/{course_lecture}/update', [CourseLectureController::class, 'update'])->name('course_lecture.update');
        Route::put('/course/{course}/course_section/{course_section}/course_lecture/{course_lecture}/set_as_preview', [CourseLectureController::class, 'set_as_preview'])->name('course.set_as_preview');
        Route::put('/course/{course}/course_section/{course_section}/course_lecture/{course_lecture}/set_as_featured', [CourseLectureController::class, 'set_as_featured'])->name('course.set_as_featured');

        Route::resource('/activity_log', ActivityLogController::class)->only(['index']);
    });
});

require __DIR__ . '/auth.php';
