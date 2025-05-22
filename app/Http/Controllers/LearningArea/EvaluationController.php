<?php

namespace App\Http\Controllers\LearningArea;

use App\Models\Course;
use App\Models\Evaluation;
use Illuminate\Http\Request;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;
use App\Models\EvaluationAttempt;
use App\Models\Question;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EvaluationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Course $course, CourseSection $course_section)
    {
        $evaluation = $course_section->evaluation;

        $course = Course::with(['course_sections' => function ($query) {
            $query->with(['course_lectures', 'evaluation']);
        }])->find($course->id);

        $prev_course_lecture = CourseLecture::where([
            ['course_id', '=', $course->id],
            ['course_section_id', '=', $course_section->id],
            // ['id', '<', $course_lecture->id],
        ])->orderBy('id', 'desc')->first();

        $next_course_section = CourseSection::where('id', '>', $course_section->id)->orderBy('id', 'ASC')->first();

        $next_course_lecture = CourseLecture::where([
            ['course_id', '=', $course->id],
            ['course_section_id', '=', $next_course_section->id],
            // ['id', '<', $course_lecture->id],
        ])->orderBy('id', 'asc')->first();

        // return [$prev_course_lecture, $next_course_lecture];

        // $evaluation = Evaluation::where('course_section_id', $course_section->id)->first();

        return Inertia::render('LearningArea/Evaluation/Index', compact(
            'course',
            'course_section',
            'prev_course_lecture',
            'next_course_lecture',
            'evaluation',
        ));
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

    public function start(Course $course, CourseSection $course_section, Evaluation $evaluation)
    {
        $user = Auth::user();


        $evaluation_attempt = EvaluationAttempt::create([
            'user_id' => $user->id,
            'evaluation_id' => $evaluation->id,
            'started_at' => now(),
        ]);

        // return $evaluation_attempt;

        return to_route('learning_area.course.course_section.evaluation.run', [
            "course" => $course,
            "course_section" => $course_section,
            "evaluation" => $evaluation,
            "evaluation_attempt" => $evaluation_attempt,
        ]);
    }

    public function run(Course $course, CourseSection $course_section, Evaluation $evaluation, EvaluationAttempt $evaluation_attempt)
    {
        $evaluation->load('questions.choices');
        $course = Course::with(['course_sections' => function ($query) {
            $query->with(['course_lectures', 'evaluation']);
        }])->find($course->id);

        $user = Auth::user();


        $questions = $evaluation->questions;
        // return $questions;

        return Inertia::render('LearningArea/Evaluation/Run', compact(
            'course',
            'course_section',
            'evaluation',
            'evaluation_attempt',
            'questions'
        ));
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course, CourseSection $course_section, Evaluation $evaluation)
    {
        $course = Course::with(['course_sections' => function ($query) {
            $query->with(['course_lectures', 'evaluation']);
        }])->find($course->id);

        $prev_course_lecture = CourseLecture::where([
            ['course_id', '=', $course->id],
            ['course_section_id', '=', $course_section->id],
            // ['id', '<', $course_lecture->id],
        ])->orderBy('id', 'desc')->first();

        $next_course_section = CourseSection::where('id', '>', $course_section->id)->orderBy('id', 'ASC')->first();

        $next_course_lecture = CourseLecture::where([
            ['course_id', '=', $course->id],
            ['course_section_id', '=', $next_course_section->id],
            // ['id', '<', $course_lecture->id],
        ])->orderBy('id', 'asc')->first();

        // $evaluation = Evaluation::where('course_section_id', $course_section->id)->first();

        return Inertia::render('LearningArea/Evaluation/Show', compact(
            'course',
            'course_section',
            'prev_course_lecture',
            'next_course_lecture',
            'evaluation',
        ));
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
