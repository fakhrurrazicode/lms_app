<?php

namespace App\Http\Controllers\Backend;

use FFMpeg\FFMpeg;
use FFMpeg\FFProbe;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\Evaluation;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;
use App\Http\Requests\EvaluationStoreRequest;
use App\Http\Requests\EvaluationUpdateRequest;

class EvaluationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, Course $course)
    {
        $course->load(['course_sections' => function ($query) {
            $query->orderBy('id', 'ASC');
        }]);

        $course_sections = CourseSection::where([
            'course_id' => $course->id,
        ])->orderBy('id', 'ASC')
            ->with(['evaluation.questions.choices'])
            ->get();

        // return $course_sections;

        return Inertia::render('Backend/Course/Evaluation/Index', [
            'course' => $course,
            'course_sections' => $course_sections,
        ]);
        // return Inertia::render('Backend/CourseSection/Index', compact('course', 'course_section'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Course $course, CourseSection $course_section)
    {
        return Inertia::render('Backend/Evaluation/Create', compact('course', 'course_section'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EvaluationStoreRequest $request, Course $course, CourseSection $course_section)
    {


        $data = $request->validated();
        Evaluation::create($data);
        // return to_route('user_area.course_section.index', [
        //     'course' => $course,
        //     'course_section' => $course_section,
        // ]);
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
    public function edit(Course $course, CourseSection $course_section, Evaluation $course_lecture)
    {
        return Inertia::render('Backend/Evaluation/Edit', compact('course', 'course_section', 'course_lecture'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EvaluationUpdateRequest $request, Course $course, CourseSection $course_section, Evaluation $evaluation)
    {
        $data = $request->validated();
        $evaluation->update($data);
        // return to_route('user_area.course_section.index', [
        //     'course' => $course,
        //     'course_section' => $course_section,
        // ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course, CourseSection $course_section, Evaluation $evaluation)
    {
        $evaluation->delete();
        // return to_route('user_area.course_section.index', [
        //     'course' => $course,
        //     'course_section' => $course_section,
        // ]);
    }

    public function set_as_preview(Request $request, Course $course, CourseSection $course_section, Evaluation $evaluation)
    {
        $set_as_preview = $request->set_as_preview;

        $evaluation->update([
            'set_as_preview' => $set_as_preview
        ]);
    }


    public function set_as_featured(Request $request, Course $course, CourseSection $course_section, Evaluation $evaluation)
    {

        Evaluation::where('course_id', $course->id)->update([
            'set_as_featured' => 0,
        ]);

        $set_as_featured = $request->set_as_featured;

        $evaluation->update([
            'set_as_featured' => $set_as_featured
        ]);
    }
}
