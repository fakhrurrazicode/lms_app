<?php

namespace App\Http\Controllers\LearningArea;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CourseLecture;
use Inertia\Inertia;

class CourseLectureController extends Controller
{
    public function show(Course $course, CourseLecture $course_lecture)
    {
        $course->load('course_sections.course_lectures');
        return Inertia::render('LearningArea/CourseLecture/Show', compact('course', 'course_lecture'));
    }
}
