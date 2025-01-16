<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseLectureStoreRequest;
use App\Http\Requests\CourseLectureUpdateRequest;
use App\Models\CourseLecture;
use Illuminate\Http\Request;

class CourseLectureController extends Controller
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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseLectureStoreRequest $request)
    {
        $data = $request->validated();
        unset($data['video']);
        if ($request->hasFile('video')) {
            $data['video'] = $request->file('video')->store('videos', 'public');
        }
        CourseLecture::create($data);
        return to_route('backend.course.index', request()->query());
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
    public function update(CourseLectureUpdateRequest $request, CourseLecture $course_lecture)
    {
        $data = $request->validated();
        unset($data['video']);
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('images', 'public');
        }
        $course_lecture->update($data);
        return to_route('backend.course.index', request()->query());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseLecture $course_lecture)
    {
        $course_lecture->delete();
        return to_route('backend.course.index', request()->query());
    }
}
