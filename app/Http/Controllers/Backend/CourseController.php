<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Models\CourseSubCategory;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use Spatie\Permission\Models\Permission;
use App\Http\Requests\CourseStoreRequest;
use App\Http\Requests\CourseUpdateRequest;
use App\Http\Requests\CourseSetPermissionsRequest;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {

        $selected_course_category_id = $request->get('selected_course_category_id');

        $courses = Course::orWhere([
            ['title', 'LIKE', '%' . $request->search . '%'],
            ['slug', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        // return CourseSubCategory::where('course_category_id', $selected_course_category_id)->get() ?? [];

        // return User::role('instructor')->get();

        return Inertia::render('Backend/Course/Index', [
            'courses' => $courses,
            'request' => $request,
            'courseCategories' => CourseCategory::all(),
            'courseSubCategories' => fn() => CourseSubCategory::where('course_category_id', $selected_course_category_id)->get() ?? [],
            'instructors' => User::role('instructor')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseStoreRequest $request)
    {
        Course::create($request->validated());
        return to_route('backend.course.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseUpdateRequest $request, Course $course)
    {
        $course->update($request->validated());
        return to_route('backend.course.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();
        return to_route('backend.course.index');
    }
}