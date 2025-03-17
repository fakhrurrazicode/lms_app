<?php

namespace App\Http\Controllers\UserArea;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseSectionStoreRequest;
use App\Http\Requests\CourseSectionUpdateRequest;
use App\Models\Course;
use App\Models\CourseSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Course $course)
    {
        $course_sections = CourseSection::with(['course_lectures'])->where('course_id', $course->id)->get();
        return Inertia::render('UserArea/CourseSection/Index', compact('course', 'course_sections'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Course $course)
    {
        return Inertia::render('UserArea/CourseSection/Create', compact('course'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseSectionStoreRequest $request, Course $course)
    {
        CourseSection::create($request->validated());
        return to_route('user_area.course_section.index', [
            'course' => $course
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course, CourseSection $course_section)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course, CourseSection $course_section)
    {
        return Inertia::render('UserArea/CourseSection/Edit', compact('course', 'course_section'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseSectionUpdateRequest $request, Course $course, CourseSection $course_section)
    {
        $course_section->update($request->validated());
        return to_route('user_area.course_section.index', [
            'course' => $course
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course, CourseSection $course_section)
    {
        $course_section->delete();
        return to_route('user_area.course_section.index', [
            'course' => $course
        ]);
    }
}
