<?php

namespace App\Http\Controllers\LearningArea;

use App\Models\Course;
use App\Models\Thread;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use Inertia\Inertia;

class ThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request, Course $course)
    {

        $course = $course->load([
            'course_category',
            'course_sections.course_lectures.course_track',
            'course_sections.evaluation',
            'course_tracks'
        ]);

        $threads = Thread::query();

        $threads->where([
            ['threadable_type', '=', Course::class],
            ['threadable_id', '=', $course->id],
        ]);

        if ($request->has('search')) {
            $threads->where([
                ['title', 'LIKE', '%' . $request->search . '%'],
            ]);
        }

        $threads = $threads->orderBy($request->orderby, $request->ordermethod)
            ->with([
                'thread_posts',
                'user'
            ])
            ->paginate($request->perpage)
            ->withQueryString();

        return Inertia::render('LearningArea/Thread/Index', [
            'course' => $course,
            'threads' => $threads,
            'request' => $request,
        ]);
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
    public function show(string $id)
    {
        //
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
