<?php

namespace App\Http\Controllers\LearningArea;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CourseSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course, CourseSection $course_section)
    {
        return Inertia::render('LearningArea/CourseSection/Show', compact(
            'course',
            'course_section',
            'course_lecture',
            'prev_course_lecture',
            'next_course_lecture',
        ));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CourseSection $course_section)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CourseSection $course_section)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseSection $course_section)
    {
        //
    }
}
