<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PaginateRequest;


class PageController extends Controller
{
    public function home()
    {

        $course_categories = CourseCategory::orderBy('created_at', 'DESC')->limit(8)->get();
        $latest_courses = Course::with(['course_category'])->orderBy('created_at', 'DESC')->limit(8)->get();
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
            'course_lectures'
        ])->firstOrFail();


        // return $course;
        return Inertia::render('Course', compact('course'));
    }
}
