<?php

namespace App\Http\Controllers\LearningArea;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\CourseReview;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CourseReviewStoreRequest;

class CourseReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Course $course)
    {
        $course->load(['course_review', 'course_sections.course_lectures.course_track']);

        // return $course;
        return Inertia::render('LearningArea/CourseReview/Index', compact('course'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Course $course) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseReviewStoreRequest $request, Course $course)
    {
        CourseReview::create($request->validated());
        return to_route('learning_area.course_review.index', [
            'course' => $course
        ]);
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
