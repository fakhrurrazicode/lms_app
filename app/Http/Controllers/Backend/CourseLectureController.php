<?php

namespace App\Http\Controllers\Backend;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;
use App\Http\Requests\CourseLectureStoreRequest;
use App\Http\Requests\CourseLectureUpdateRequest;
use Inertia\Inertia;

class CourseLectureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Course $course, CourseSection $course_section)
    {
        // return Inertia::render('Backend/CourseSection/Index', compact('course', 'course_section'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Course $course, CourseSection $course_section)
    {
        return Inertia::render('Backend/CourseLecture/Create', compact('course', 'course_section'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseLectureStoreRequest $request, Course $course, CourseSection $course_section)
    {
        $data = $request->validated();
        unset($data['video']);
        if ($request->hasFile('video')) {
            $data['video'] = $request->file('video')->store('videos', 'public');
        }
        CourseLecture::create($data);
        return to_route('backend.course_section.index', [
            'course' => $course,
            'course_section' => $course_section,
        ]);
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
    public function edit(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        return Inertia::render('Backend/CourseLecture/Edit', compact('course', 'course_section', 'course_lecture'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseLectureUpdateRequest $request, Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $data = $request->validated();

        if ($request->hasFile('video')) {
            $data['video'] = $request->file('video')->store('videos', 'public');
        }
        $course_lecture->update($data);
        return to_route('backend.course_section.index', [
            'course' => $course,
            'course_section' => $course_section,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $course_lecture->delete();
        return to_route('backend.course_section.index', [
            'course' => $course,
            'course_section' => $course_section,
        ]);
    }
}
