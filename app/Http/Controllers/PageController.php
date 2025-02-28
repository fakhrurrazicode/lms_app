<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaginateRequest;
use App\Models\Course;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\CourseCategory;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function courses(PaginateRequest $request)
    {
        // return $request;
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

        // return $courses;


        return Inertia::render('Courses', [
            'courses' => $courses,
            'request' => $request,
            'course_categories' => CourseCategory::whereHas('courses')->orderBy('name', 'asc')->get(),
        ]);
    }
}
