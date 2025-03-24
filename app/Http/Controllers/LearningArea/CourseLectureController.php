<?php

namespace App\Http\Controllers\LearningArea;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CourseLecture;
use App\Models\CourseTrack;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CourseLectureController extends Controller
{
    public function show(Course $course, CourseLecture $course_lecture)
    {
        $course->load('course_sections.course_lectures');

        $prev_course_lecture = CourseLecture::where('id', '<', $course_lecture->id)
            ->where('course_id', $course->id)
            ->orderBy('id', 'desc')
            ->first();

        $next_course_lecture = CourseLecture::where('id', '>', $course_lecture->id)
            ->where('course_id', $course->id)
            ->orderBy('id', 'asc')
            ->first();

        // return [
        //     'course' => $course,
        //     'prev_course_lecture' => $prev_course_lecture,
        //     'next_course_lecture' => $next_course_lecture,
        // ];
        return Inertia::render('LearningArea/CourseLecture/Show', compact('course', 'course_lecture', 'prev_course_lecture', 'next_course_lecture'));
    }

    public function finish_lecture(Request $request, Course $course, CourseLecture $course_lecture)
    {
        CourseTrack::create([
            'user_id' => Auth::user()->id,
            'course_id' => $course_lecture->course_id,
            'course_section_id' => $course_lecture->course_section_id,
            'course_lecture_id' => $course_lecture->id,
        ]);

        $next_course_lecture = CourseLecture::where('id', '>', $course_lecture->id)
            ->where('course_id', $course_lecture->course_id)
            ->orderBy('id', 'asc')
            ->first(); // jika tidak menemukan next lecture lagi arti nya course telah selesai


        return to_route('learning_area.course_lecture.show', [
            'course' => $next_course_lecture->course_id,
            'course_lecture' => $next_course_lecture->id,
        ]);
    }
}
