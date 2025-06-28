<?php

namespace App\Http\Controllers\UserArea;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseSection;
use App\Models\CourseCategory;
use App\Models\CourseSubCategory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PaginateRequest;
use Spatie\Permission\Models\Permission;
use App\Http\Requests\InstructorCourseStoreRequest;
use App\Http\Requests\InstructorCourseUpdateRequest;
use App\Http\Requests\CourseSetPermissionsRequest;


class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {

        $courses = Course::orWhere([
            ['title', 'LIKE', '%' . $request->search . '%'],
            ['slug', 'LIKE', '%' . $request->search . '%'],
        ])->where([
            'instructor_id' => Auth::user()->id,
        ])->orderBy($request->orderby, $request->ordermethod)
            ->with(['instructor', 'course_category'])
            ->paginate($request->perpage)
            ->withQueryString();

        // return $courses;

        return Inertia::render('UserArea/Course/Index', [
            'courses' => $courses,
            'course_categories' => CourseCategory::all(),
            'request' => $request,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        $course_categories = CourseCategory::all();
        return Inertia::render('UserArea/Course/Create', compact('course_categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(InstructorCourseStoreRequest $request)
    {
        $data = $request->except(['image']);
        $data['instructor_id'] = Auth::user()->id;
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('images', 'public');
        }
        Course::create($data);
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
    public function edit(Course $course)
    {

        $course_categories = CourseCategory::all();
        return Inertia::render('UserArea/Course/Edit', compact('course_categories', 'course'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(InstructorCourseUpdateRequest $request, Course $course)
    {
        $data = $request->except(['image']);
        $data['instructor_id'] = Auth::user()->id;
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('images', 'public');
        }
        $course->update($data);
        // return to_route('user_area.course.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();
        return to_route('user_area.course.index');
    }

    public function toggle_active(Request $request, Course $course)
    {
        $course->update([
            'status' => !$course->status
        ]);
    }
}
