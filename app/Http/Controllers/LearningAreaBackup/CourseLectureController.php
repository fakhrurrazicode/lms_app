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
        $course->load('course_sections.course_lectures.course_track');

        $course_section = $course_lecture->course_section;

        // return $course_section;

        return Inertia::render('LearningArea/CourseLecture/Show', compact('course', 'course_lecture'));
    }


    public function finish_lecture(Request $request, Course $course, CourseLecture $course_lecture)
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
            ->where('course_id', $course_lecture->course_id)
            ->orderBy('id', 'asc')
            ->first(); // jika tidak menemukan next lecture lagi arti nya course telah selesai

        if ($next_course_lecture) {
            return to_route('learning_area.course_lecture.show', [
                'course' => $next_course_lecture->course_id,
                'course_lecture' => $next_course_lecture->id,
            ]);
        } else {
            return to_route('learning_area.course.index', [
                'course' => $course->id,
            ]);
        }
    }
}
