<?php

namespace App\Http\Controllers\LearningArea;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\ForumReply;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Models\ForumThread;

class ForumReplyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request, Course $course, ForumThread $forum_thread)
    {
        $course = $course->load([
            'course_category',
            'course_sections.course_lectures.course_track',
            'course_sections.evaluation',
            'course_sections.course_tracks',
        ]);


        $forum_replies = ForumReply::with(['forum_thread'])->where([
            [
                'forum_thread_id',
                '=',
                $forum_thread->id,
            ],
        ])->orWhere([
            ['title', 'LIKE', '%' . $request->search . '%'],
            ['body', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        // $forum_replies->append($_GET);

        // return $forum_replies;
        return Inertia::render('LearningArea/ForumThread/ForumReply/Index', [

            'course' => $course,
            'forum_thread' => $forum_thread,
            'forum_replies' => $forum_replies,
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
