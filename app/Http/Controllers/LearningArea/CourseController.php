<?php

namespace App\Http\Controllers\LearningArea;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\CourseTrack;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function start(Course $course)
    {
        $latest_course_tracks = CourseTrack::where([
            ['course_id', '=', $course->id]
        ])->orderBy('created_at', 'DESC')->first();

        return to_route('learning_area.course.course_section.course_lecture.show', [
            'course' => $latest_course_tracks->course_id,
            'course_section' => $latest_course_tracks->course_section_id,
            'course_lecture' => $latest_course_tracks->course_lecture_id,
        ]);
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
    public function show(Course $course)
    {

        $course = $course->load([
            'course_category',
            'course_sections.course_lectures.course_track',
            'course_sections.evaluation',
        ]);

        // return $course;

        return Inertia::render('LearningArea/Course/Show', compact('course'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        //
    }
}
