<?php

namespace App\Http\Controllers\UserArea;

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PaginateRequest;
use App\Http\Requests\CourseSectionStoreRequest;
use App\Http\Requests\CourseSectionUpdateRequest;

class CourseSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, Course $course)
    {
        $course_sections = CourseSection::with([
            'course_lectures.attachments'
        ])->where([
            'course_id' => $course->id,
        ])->orderBy('id', 'ASC')
            ->get();

        // return $course_sections;

        return Inertia::render('UserArea/Course/CourseSection/Index', [
            'course' => $course,
            'course_sections' => $course_sections,
        ]);
    }

    public function course_lectures(Request $request, Course $course)
    {
        $course_sections = CourseSection::with([
            'course_lectures.attachments'
        ])->where([
            'course_id' => $course->id,
        ])->get();

        // return $course_sections;

        return Inertia::render('UserArea/Course/CourseSection/CourseLectures', [
            'course' => $course,
            'course_sections' => $course_sections,
        ]);
    }

    public function evaluations(Request $request, Course $course)
    {
        $course_sections = CourseSection::with([
            'evaluation.questions.choices'
        ])->where([
            'course_id' => $course->id,
        ])->orderBy('id', 'ASC')
            ->get();

        // return $course_sections;

        return Inertia::render('UserArea/Course/CourseSection/Evaluations', [
            'course' => $course,
            'course_sections' => $course_sections,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Course $course)
    {

        // return 'test';
        return Inertia::render('UserArea/Course/CourseSection/Create', compact('course'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseSectionStoreRequest $request, Course $course)
    {
        CourseSection::create($request->validated());
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
        return Inertia::render('UserArea/Course/CourseSection/Edit', compact('course', 'course_section'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseSectionUpdateRequest $request, Course $course, CourseSection $course_section)
    {
        $course_section->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course, CourseSection $course_section)
    {
        $course_section->delete();
    }

    public function move_order_up(Course $course, CourseSection $course_section)
    {
        $course_section->moveOrderUp();
    }

    public function move_order_down(Course $course, CourseSection $course_section)
    {

        $course_section->moveOrderDown();
    }
}
