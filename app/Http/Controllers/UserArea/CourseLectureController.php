<?php

namespace App\Http\Controllers\UserArea;

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
        // return Inertia::render('UserArea/CourseSection/Index', compact('course', 'course_section'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Course $course, CourseSection $course_section)
    {
        return Inertia::render('UserArea/CourseLecture/Create', compact('course', 'course_section'));
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
        return to_route('user_area.course_section.index', [
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
        return Inertia::render('UserArea/CourseLecture/Edit', compact('course', 'course_section', 'course_lecture'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseLectureUpdateRequest $request, Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $data = $request->validated();
        unset($data['video']);
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('images', 'public');
        }
        $course_lecture->update($data);
        return to_route('user_area.course_section.index', [
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
        return to_route('user_area.course_section.index', [
            'course' => $course,
            'course_section' => $course_section,
        ]);
    }

    public function set_as_preview(Request $request, Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $set_as_preview = $request->set_as_preview;

        $course_lecture->update([
            'set_as_preview' => $set_as_preview
        ]);
    }


    public function set_as_featured(Request $request, Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {

        CourseLecture::where('course_section_id', $course_section->id)->update([
            'set_as_featured' => 0,
        ]);

        $set_as_featured = $request->set_as_featured;

        $course_lecture->update([
            'set_as_featured' => $set_as_featured
        ]);
    }
}
