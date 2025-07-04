<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Question;
use App\Models\Evaluation;
use Illuminate\Http\Request;
use App\Models\CourseSection;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuestionStoreRequest;

class QuestionController extends Controller
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
    public function create(Course $course, CourseSection $course_section, Evaluation $evaluation)
    {
        $course->load(['course_sections.evaluation' => function ($query) {
            $query->orderBy('id', 'ASC');
        }]);

        // return $course;

        return Inertia::render('Backend/Course/CourseSection/Evaluation/Question/Create', compact('course', 'course_section', 'evaluation'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Course $course, CourseSection $course_section, Evaluation $evaluation)
    {
        $request->validate([
            'evaluation_id' => 'required|exists:evaluations,id',
            'question' => 'required|string|max:1000',
            'type' => 'required|string|in:multiple_choice,essay',
            'items' => 'required|array|min:1',
            'items.*.text' => 'required|string|max:255',
            'items.*.is_correct' => 'required|boolean',
        ]);

        $question = Question::create([
            'evaluation_id' => $request->evaluation_id,
            'question' => $request->question,
            'type' => $request->type,
        ]);

        foreach ($request->items as $item) {
            $question->choices()->create([
                'text' => $item['text'],
                'is_correct' => $item['is_correct'],
            ]);
        }
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
    public function edit(Course $course, CourseSection $course_section, Evaluation $evaluation, Question $question)
    {
        $course->load(['course_sections.evaluation' => function ($query) {
            $query->orderBy('id', 'ASC');
        }]);

        $question->load('choices');

        // return $course;

        return Inertia::render('Backend/Course/CourseSection/Evaluation/Question/Edit', compact('course', 'course_section', 'evaluation', 'question'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course, CourseSection $course_section, Evaluation $evaluation, Question $question)
    {
        $validated = $request->validate([
            'evaluation_id' => 'required|exists:evaluations,id',
            'question' => 'required|string|max:1000',
            'type' => 'required|string|in:multiple_choice,essay',
            'items' => 'required|array|min:1',
            'items.*.id' => 'nullable|exists:choices,id',
            'items.*.text' => 'required|string|max:255',
            'items.*.is_correct' => 'required|boolean',
        ]);


        $question->update([
            'evaluation_id' => $request->evaluation_id,
            'question' => $validated['question'],
            'type' => $validated['type'],
        ]);

        $existingChoiceIds = $question->choices()->pluck('id')->toArray();
        $incomingChoiceIds = collect($validated['items'])->pluck('id')->filter()->toArray();

        // Delete choices yang tidak ada di request
        $choicesToDelete = array_diff($existingChoiceIds, $incomingChoiceIds);
        $question->choices()->whereIn('id', $choicesToDelete)->delete();

        // Simpan atau update items
        foreach ($validated['items'] as $item) {
            if (!empty($item['id'])) {
                // Update existing choice
                $choice = $question->choices()->find($item['id']);
                if ($choice) {
                    $choice->update([
                        'text' => $item['text'],
                        'is_correct' => $item['is_correct'],
                    ]);
                }
            } else {
                // Create new choice
                $question->choices()->create([
                    'text' => $item['text'],
                    'is_correct' => $item['is_correct'],
                ]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        $question->delete();
    }
}
