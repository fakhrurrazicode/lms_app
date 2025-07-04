<?php

namespace App\Http\Controllers\Backend;

use App\Models\Choice;
use App\Models\Course;
use App\Models\Question;
use App\Models\Evaluation;
use Illuminate\Http\Request;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;

class ChoiceController extends Controller
{
    public function set_as_correct_answer(Request $request, Course $course, CourseSection $course_section, Evaluation $evaluation, Question $question, Choice $choice)
    {

        Choice::where('question_id', $question->id)->update([
            'is_correct' => 0
        ]);

        $is_correct = 1;
        $choice->update([
            'is_correct' => $is_correct
        ]);
    }
}
