<?php

namespace App\Http\Controllers\LearningArea;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseLecture;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index(Course $course)
    {
        $course->load('course_sections.course_lectures');

        return Inertia::render('LearningArea/Course/Index', compact('course'));
    }
}
