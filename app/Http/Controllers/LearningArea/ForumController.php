<?php

namespace App\Http\Controllers\LearningArea;

use Inertia\Inertia;
use App\Models\Forum;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Models\ForumReply;
use Illuminate\Support\Facades\Auth;

class ForumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request, Course $course)
    {

        $course->load('course_sections.course_lectures');

        $forums = Forum::with(['user'])->where([
            'discussionable_type' => Course::class,
            'discussionable_id' => $course->id
        ])
            // ->orWhere([
            //     ['title', 'LIKE', '%' . $request->search . '%'],
            //     ['body', 'LIKE', '%' . $request->search . '%'],
            // ])
            ->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        // return $forums;

        return Inertia::render('LearningArea/Forum/Index', [
            'course' => $course,
            'forums' => $forums,
            'request' => $request,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Course $course)
    {
        $course->load('course_sections.course_lectures');

        return Inertia::render('LearningArea/Forum/Create', [
            'course' => $course,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function reply(Request $request, Course $course, Forum $forum)
    {
        $user = Auth::user();

        $request->validate([
            'body' => 'required|string',
        ]);

        $forum_reply = ForumReply::create([
            'forum_id' => $forum->id,
            'user_id' => $user->id,
            'body' => $request->body,
            'forum_reply_id' => null,
        ]);
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
    public function show(PaginateRequest $request, Course $course, Forum $forum)
    {

        $course->load('course_sections.course_lectures');
        $forum->load('user');

        $forum_replies = ForumReply::with(['user'])->where([
            'forum_id' => $forum->id,
        ])
            // ->orWhere([
            //     ['title', 'LIKE', '%' . $request->search . '%'],
            //     ['body', 'LIKE', '%' . $request->search . '%'],
            // ])
            ->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();


        return Inertia::render('LearningArea/Forum/Show', [
            'course' => $course,
            'forum' => $forum,
            'forum_replies' => $forum_replies
        ]);
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
