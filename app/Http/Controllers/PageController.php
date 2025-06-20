<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Voucher;
use App\Models\Enrollment;
use Illuminate\Support\Str;
use Laravolt\Avatar\Avatar;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Models\InstructorInfo;
use Binafy\LaravelCart\Models\Cart;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\PaginateRequest;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\BecomeInstructorRequest;
use App\Http\Requests\JoinCourseRequest;

class PageController extends Controller
{
    public function home()
    {

        $course_categories = CourseCategory::orderBy('created_at', 'DESC')->limit(8)->get();
        $latest_courses = Course::with(['course_category'])->orderBy('created_at', 'DESC')->limit(9)->get();


        return Inertia::render('Home', compact('latest_courses', 'course_categories'));
    }

    public function courses(PaginateRequest $request)
    {
        $courses = Course::query();

        if ($request->has('course_category_ids')) {
            $courses->whereIn('course_category_id', $request->course_category_ids);
        }

        if ($request->has('search')) {
            $courses->where([
                ['title', 'LIKE', '%' . $request->search . '%'],
                ['slug', 'LIKE', '%' . $request->search . '%'],
            ]);
        }

        $courses = $courses->orderBy($request->orderby, $request->ordermethod)
            ->with(['instructor', 'course_category', 'course_reviews'])
            ->paginate($request->perpage)
            ->withQueryString();



        $course_categories = CourseCategory::whereHas('courses')->orderBy('name', 'asc')->get();


        return Inertia::render('Courses', [
            'courses' => $courses,
            'request' => $request,
            'course_categories' => $course_categories,
        ]);
    }

    public function course($slug)
    {
        $course = Course::where('slug', $slug)->with([
            'instructor.instructor_info',
            'course_category',
            'course_reviews',
            'course_sections.course_lectures',
            'course_lectures',
            'course_reviews'
        ])->firstOrFail();

        // return $course;

        $more_courses = Course::with(['course_category'])->where('instructor_id', $course->instructor_id)->inRandomOrder()->limit(2)->get();

        // return $course;
        return Inertia::render('Course', compact('course', 'more_courses'));
    }


    public function join_course(JoinCourseRequest $request)
    {
        $enrollment_exists = Enrollment::where([
            'course_id' => $request->course_id,
            'user_id' => Auth::user()->id,
        ])->first();


        if (!$enrollment_exists) {
            Enrollment::create([
                'course_id' => $request->course_id,
                'user_id' => Auth::user()->id,

            ]);


            return to_route('learning_area.course.show', [
                'course' => $request->course_id
            ]);
        } else {
            return to_route('learning_area.course.show', [
                'course' => $request->course_id
            ]);
        }
    }

    public function become_instructor()
    {
        return Inertia::render('BecomeInstructor');
    }

    public function submit_become_instructor(BecomeInstructorRequest $request)
    {
        $data = $request->validated();
        $data = collect($data)->except('id_card')->toArray();
        // return $data;
        if ($request->hasFile('id_card')) {
            $data['id_card'] = $request->file('id_card')->store('id_card', 'public');
        }

        // $data['user_id'] = Auth::user()->id;

        $avatar = new Avatar();
        $generatedAvatar = $avatar->create($request->name)->toBase64();

        $imageName = Str::random(10) . '.png'; // Generate random filename
        $path = 'avatars/' . $imageName;
        Storage::disk('public')->put($path, base64_decode(str_replace('data:image/png;base64,', '', $avatar)));

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'photo' => $path,
        ]);

        $user->assignRole('student');

        Cart::query()->firstOrCreate(['user_id' => $user->id]);

        event(new Registered($user));

        Auth::login($user);

        $data['user_id'] = Auth::user()->id;
        InstructorInfo::create([
            'user_id' => $data['user_id'],
            'id_card' => $data['id_card'],
            'bio' => $data['bio'],
            'phone_number' => $data['phone_number'],
            'status' => 0,
        ]);

        return to_route('user_area.become_instructor.status');
    }

    public function instructor_info(User $user)
    {
        // return $user;
        $instructor = $user->load(['courses', 'instructor_info']);
        // return $instructor;

        return Inertia::render('InstructorInfo', ['instructor' => $instructor]);
    }

    public function check_voucher(Request $request)
    {
        $request->validate([
            'code' => 'required|string',
        ]);

        $voucher = Voucher::where('code', $request->code)->first();

        if (!$voucher) {
            return response()->json([
                'valid' => false,
                'message' => 'Kode voucher tidak valid.',
            ], 404);
        }

        if ($voucher->expires_at && now()->greaterThan($voucher->expires_at)) {
            return response()->json([
                'valid' => false,
                'message' => 'Kode voucher telah kedaluwarsa.',
            ], 422);
        }

        if ($voucher->used_count >= $voucher->usage_limit) {
            return response()->json([
                'valid' => false,
                'message' => 'Kode voucher telah mencapai batas penggunaannya.',
            ], 422);
        }

        // Success - valid
        return response()->json([
            'valid' => true,
            'message' => 'Kode voucher valid. anda akan mendapatkan coin senilai ' . $voucher->customer_coin_reward . ' setelah proses registrasi berhasil',
            'voucher' => $voucher,
        ]);
    }
}
