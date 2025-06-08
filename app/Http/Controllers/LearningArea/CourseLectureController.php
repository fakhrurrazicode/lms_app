<?php

namespace App\Http\Controllers\LearningArea;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Evaluation;
use App\Models\CourseTrack;
use Illuminate\Http\Request;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CourseLectureController extends Controller
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
    public function show(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $course = Course::with(['course_sections' => function ($query) {
            $query->with(['course_lectures', 'evaluation']);
        }])->find($course->id);

        $prev_course_lecture = CourseLecture::where([
            ['course_id', '=', $course->id],
            ['id', '<', $course_lecture->id],
        ])->first();

        $next_course_lecture = CourseLecture::where([
            ['course_id', '=', $course->id],
            ['id', '>', $course_lecture->id],
        ])->first();



        return Inertia::render('LearningArea/CourseLecture/Show', compact(
            'course',
            'course_section',
            'course_lecture',
            'prev_course_lecture',
            'next_course_lecture',
        ));
    }


    public function finish(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $course_track = CourseTrack::where([
            'user_id' => Auth::user()->id,
            'course_id' => $course->id,
            'course_section_id' => $course_section->id,
            'course_lecture_id' => $course_lecture->id,
        ])->first();

        if (!$course_track) {
            CourseTrack::create([
                'user_id' => Auth::user()->id,
                'course_id' => $course->id,
                'course_section_id' => $course_section->id,
                'course_lecture_id' => $course_lecture->id,
            ]);
        }

        $next_course_lecture = CourseLecture::where('id', '>', $course_lecture->id)
            ->where('course_id', $course_section->course_id)
            ->orderBy('id', 'asc')
            ->first(); // jika tidak menemukan next lecture lagi arti nya course telah selesai

        if ($next_course_lecture) {
            return to_route('learning_area.course.course_section.course_lecture.show', [
                'course' => $next_course_lecture->course_id,
                'course_section' => $next_course_lecture->course_section_id,
                'course_lecture' => $next_course_lecture->id,
            ]);
        } else {
            return to_route('learning_area.course.show', [
                'course' => $course->id,
            ]);
        }
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CourseLecture $course_lecture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CourseLecture $course_lecture)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseLecture $course_lecture)
    {
        //
    }
}
