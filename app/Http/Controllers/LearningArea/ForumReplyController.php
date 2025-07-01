<?php

namespace App\Http\Controllers\LearningArea;

use App\Models\Forum;
use App\Models\Course;
use App\Models\ForumReply;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreForumReply;
use Illuminate\Support\Facades\Auth;

class ForumReplyController extends Controller
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
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreForumReply $request, Course $course, Forum $forum)
    {

        $user = Auth::user();
        $data = $request->validated();

        ForumReply::create([
            'user_id' => $user->id,
            'forum_id' => $forum->id,
            'body' => $data['body'],
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course, Forum $forum, ForumReply $forum_reply)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course, Forum $forum, ForumReply $forum_reply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course, Forum $forum, ForumReply $forum_reply)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course, Forum $forum, ForumReply $forum_reply)
    {
        //
    }
}
