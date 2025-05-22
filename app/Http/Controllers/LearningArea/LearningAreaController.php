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
        return Inertia::render('LearningArea/Index', compact('course'));
    }
}
