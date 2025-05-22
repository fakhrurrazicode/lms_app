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

class LearningAreaController extends Controller
{

    public function index(Course $course)
    {
        $course = $course->load([
            'course_sections' => function ($query) {
                $query->with(['course_lectures', 'evaluation']);
            },
        ]);
        return Inertia::render('LearningArea/Index', compact('course'));
    }

    public function learn(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $course = $course->load([
            'course_sections' => function ($query) {
                $query->with(['course_lectures', 'evaluation']);
            },
        ]);


        $prev_course_lecture = CourseLecture::where('id', '<', $course_lecture->id)
            ->where('course_id', $course->id)
            ->where('course_section_id', $course_section->id)
            ->orderBy('id', 'desc')
            ->first();

        $next_course_lecture = CourseLecture::where('id', '>', $course_lecture->id)
            ->where('course_id', $course->id)
            ->where('course_section_id', $course_section->id)
            ->orderBy('id', 'asc')
            ->first();

        $evaluation = Evaluation::where('course_section_id', $course_section->id)->first();

        return Inertia::render('LearningArea/Learn', compact(
            'course',
            'course_section',
            'course_lecture',
            'evaluation',
            'prev_course_lecture',
            'next_course_lecture'
        ));
    }

    public function finish_lecture(Course $course, CourseLecture $course_lecture)
    {


        $course_track = CourseTrack::where([
            'user_id' => Auth::user()->id,
            'course_id' => $course_lecture->course_id,
            'course_section_id' => $course_lecture->course_section_id,
            'course_lecture_id' => $course_lecture->id,
        ])->first();

        if (!$course_track) {
            CourseTrack::create([
                'user_id' => Auth::user()->id,
                'course_id' => $course_lecture->course_id,
                'course_section_id' => $course_lecture->course_section_id,
                'course_lecture_id' => $course_lecture->id,
            ]);
        }

        $next_course_lecture = CourseLecture::where('id', '>', $course_lecture->id)
            ->where('course_section_id', $course_lecture->course_section_id)
            ->where('course_id', $course_lecture->course_id)
            ->orderBy('id', 'asc')
            ->first(); // jika tidak menemukan next lecture lagi arti nya course_section telah selesai

        if ($next_course_lecture) {
            return to_route('learning_area.learn', [
                'course' => $next_course_lecture->course_id,
                'course_section' => $next_course_lecture->course_section_id,
                'course_lecture' => $next_course_lecture->id,
            ]);
        } else {
            return to_route('learning_area.course.index', [
                'course' => $course->id,
            ]);
        }
    }

    public function evaluation(Course $course, CourseSection $course_section)
    {
        $course = $course->load([
            'course_sections' => function ($query) {
                $query->with(['course_lectures', 'evaluation']);
            },
        ]);

        $course_section->load('evaluation');

        return $course_section;
        return Inertia::render('LearningArea/Learn', compact(
            'course',
            'course_section',
        ));
    }
}
