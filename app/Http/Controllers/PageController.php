<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Course;
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
            'instructor',
            'course_category',
            'course_reviews',
            'course_sections.course_lectures',
            'course_lectures',
            'course_reviews'
        ])->firstOrFail();

        // return $course;
        return Inertia::render('Course', compact('course'));
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
        ]);
        return to_route('user_area.become_instructor.create');
    }
}
