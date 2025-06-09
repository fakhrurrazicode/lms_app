<?php

namespace App\Http\Controllers\Backend;

use FFMpeg\FFMpeg;
use FFMpeg\FFProbe;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;
use App\Http\Requests\CourseLectureStoreRequest;
use App\Http\Requests\CourseLectureUpdateRequest;

class CourseLectureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, Course $course)
    {
        $course->load(['course_sections' => function ($query) {
            $query->orderBy('id', 'ASC');
        }]);

        $course_sections = CourseSection::where([
            'course_id' => $course->id,
        ])->orderBy('id', 'ASC')
            ->with(['course_lectures'])
            ->get();

        return Inertia::render('Backend/Course/CourseLecture/Index', [
            'course' => $course,
            'course_sections' => $course_sections,
        ]);
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
        unset($data['video'], $data['attachments']); // Remove file from mass-assignment

        // Upload video
        if ($request->hasFile('video')) {
            $data['video'] = $request->file('video')->store('videos', 'public');
            $data['video_duration'] = 0; // TODO: calculate duration if needed
        }

        if ($course->course_lectures->count() === 0) {
            $data['set_as_featured'] = 1;
        }

        $course_lecture = CourseLecture::create($data);

        // Upload and attach files (attachments)
        if ($request->hasFile('attachments')) {
            foreach ($request->file('attachments') as $file) {
                $path = $file->store('attachments', 'public');

                $course_lecture->attachments()->create([
                    'file' => $path,
                ]);
            }
        }

        // return response or redirect if needed
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
        unset($data['video']);
        if ($request->hasFile('video')) {
            $data['video'] = $request->file('video')->store('videos', 'public');
            $full_path = storage_path('app/public/' . $data['video']);

            // $ffmpeg = FFMpeg::create([
            //     'ffmpeg.binaries'  => 'C:\\ffmpeg\\bin\\ffmpeg.exe',
            //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
            //     'timeout' => 3600, // optional
            // ]);
            // $video = $ffmpeg->open($full_path);

            // $ffprobe = FFProbe::create([
            //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
            // ]);
            // $duration = $ffprobe->format($full_path)->get('duration'); // in seconds

            // $data['video_duration'] = $duration;
            $data['video_duration'] = 0;
        }
        $course_lecture->update($data);
        // return to_route('user_area.course_section.index', [
        //     'course' => $course,
        //     'course_section' => $course_section,
        // ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $course_lecture->delete();
        // return to_route('user_area.course_section.index', [
        //     'course' => $course,
        //     'course_section' => $course_section,
        // ]);
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

        CourseLecture::where('course_id', $course->id)->update([
            'set_as_featured' => 0,
        ]);

        $set_as_featured = $request->set_as_featured;

        $course_lecture->update([
            'set_as_featured' => $set_as_featured
        ]);
    }
}
