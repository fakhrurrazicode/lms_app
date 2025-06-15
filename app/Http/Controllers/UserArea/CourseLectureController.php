<?php

namespace App\Http\Controllers\UserArea;

use FFMpeg\FFMpeg;
use FFMpeg\FFProbe;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\CourseLectureStoreRequest;
use App\Http\Requests\CourseLectureUpdateRequest;
use App\Models\Attachment;

class CourseLectureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, Course $course, CourseSection $course_section) {}

    /**
     * Show the form for creating a new resource.
     */
    public function create(Course $course, CourseSection $course_section)
    {

        $course->load('course_sections');

        // return $course;
        return Inertia::render('UserArea/Course/CourseSection/CourseLecture/Create', compact('course', 'course_section'));
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
            $full_path = storage_path('app/public/' . $data['video']);

            $ffmpeg = FFMpeg::create(
                // [
                //     'ffmpeg.binaries'  => 'C:\\ffmpeg\\bin\\ffmpeg.exe',
                //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
                //     'timeout' => 3600, // optional
                // ]
            );
            $video = $ffmpeg->open($full_path);

            $ffprobe = FFProbe::create(
                // [
                //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
                // ]
            );
            $duration = $ffprobe->format($full_path)->get('duration'); // in seconds

            $data['video_duration'] = $duration;
            // $data['video_duration'] = 0;
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
                    'filename' => $file->getClientOriginalName(),
                ]);
            }
        }

        // return to_route('user_area.course.course_section.index', [
        //     'course' => $course->id
        // ]);
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
        $course->load('course_sections');

        $course_lecture->load('attachments');
        // return $course_lecture;
        return Inertia::render('UserArea/Course/CourseSection/CourseLecture/Edit', compact('course', 'course_section', 'course_lecture'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseLectureUpdateRequest $request, Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {


        $data = $request->validated();
        unset($data['video'], $data['attachments'], $data['removed_attachment_ids']); // Remove file from mass-assignment
        if ($request->hasFile('video')) {
            $data['video'] = $request->file('video')->store('videos', 'public');
            $full_path = storage_path('app/public/' . $data['video']);

            $ffmpeg = FFMpeg::create(
                // [
                //     'ffmpeg.binaries'  => 'C:\\ffmpeg\\bin\\ffmpeg.exe',
                //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
                //     'timeout' => 3600, // optional
                // ]
            );
            $video = $ffmpeg->open($full_path);

            $ffprobe = FFProbe::create(
                // [
                //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
                // ]
            );
            $duration = $ffprobe->format($full_path)->get('duration'); // in seconds

            $data['video_duration'] = $duration;
            // $data['video_duration'] = 0;
        }
        $course_lecture->update($data);
        // return to_route('user_area.course_section.index', [
        //     'course' => $course,
        //     'course_section' => $course_section,
        // ]);

        foreach ($request->removed_attachment_ids ?? [] as $attachment_id) {
            $attachment = Attachment::find($attachment_id);
            if ($attachment && $attachment->attachable_type == CourseLecture::class && $attachment->attachable_id === $course_lecture->id) {
                // Storage::delete($attachment->file);
                $attachment->delete();
            }
        }

        // Upload and attach files (attachments)
        if ($request->hasFile('attachments')) {
            foreach ($request->file('attachments') as $file) {
                $path = $file->store('attachments', 'public');

                $course_lecture->attachments()->create([
                    'file' => $path,
                    'filename' => $file->getClientOriginalName(),
                ]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $course_lecture->delete();
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
