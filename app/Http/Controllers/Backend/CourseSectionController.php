<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseSectionStoreRequest;
use App\Http\Requests\CourseSectionUpdateRequest;
use App\Models\CourseSection;
use Illuminate\Http\Request;

class CourseSectionController extends Controller
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
    public function store(CourseSectionStoreRequest $request)
    {
        CourseSection::create($request->validated());
        to_route('backend.course.index');
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
    public function update(CourseSectionUpdateRequest $request, CourseSection $course_section)
    {
        $course_section->update($request->validated());
        return to_route('backend.course.index', request()->query());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseSection $course_section)
    {
        $course_section->delete();
        return to_route('backend.course.index', request()->query());
    }
}
