<?php

namespace App\Http\Controllers\UserArea;

use FFMpeg\FFMpeg;
use FFMpeg\FFProbe;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Setting;
use App\Models\Attachment;
use Illuminate\Http\Request;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use Google\Client as GoogleClient;
use App\Http\Controllers\Controller;
use Google\Service\YouTube\VideoStatus;

use Illuminate\Support\Facades\Storage;
use Google\Service\YouTube\VideoSnippet;
use Google\Service\YouTube as GoogleYouTube;
use App\Http\Requests\CourseLectureStoreRequest;
use App\Http\Requests\CourseLectureUpdateRequest;
use Google\Service\YouTube\Video as GoogleYouTubeVideo;


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
    // public function store(CourseLectureStoreRequest $request, Course $course, CourseSection $course_section)
    // {
    //     $data = $request->validated();
    //     unset($data['video'], $data['attachments']); // Remove file from mass-assignment

    //     // Upload video
    //     if ($request->hasFile('video')) {
    //         $data['video'] = $request->file('video')->store('videos', 'public');
    //         $full_path = storage_path('app/public/' . $data['video']);

    //         $ffmpeg = FFMpeg::create(
    //             // [
    //             //     'ffmpeg.binaries'  => 'C:\\ffmpeg\\bin\\ffmpeg.exe',
    //             //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
    //             //     'timeout' => 3600, // optional
    //             // ]
    //         );
    //         $video = $ffmpeg->open($full_path);

    //         $ffprobe = FFProbe::create(
    //             // [
    //             //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
    //             // ]
    //         );
    //         $duration = $ffprobe->format($full_path)->get('duration'); // in seconds

    //         $data['video_duration'] = $duration;
    //         // $data['video_duration'] = 0;
    //     }

    //     if ($course->course_lectures->count() === 0) {
    //         $data['set_as_featured'] = 1;
    //     }

    //     $course_lecture = CourseLecture::create($data);

    //     // Upload and attach files (attachments)
    //     if ($request->hasFile('attachments')) {
    //         foreach ($request->file('attachments') as $file) {
    //             $path = $file->store('attachments', 'public');

    //             $course_lecture->attachments()->create([
    //                 'file' => $path,
    //                 'filename' => $file->getClientOriginalName(),
    //             ]);
    //         }
    //     }

    //     // return to_route('user_area.course.course_section.course_lectures', [
    //     //     'course' => $course->id
    //     // ]);
    // }





    public function store(CourseLectureStoreRequest $request, Course $course, CourseSection $course_section)
    {
        $data = $request->validated();
        unset($data['video'], $data['attachments']); // hapus sebelum mass-assign

        if ($request->hasFile('video')) {

            $video = $request->file('video')->store('videos', 'public');
            $localPath = storage_path('app/public/' . $video);


            // Hitung durasi video menggunakan ffprobe
            $ffprobe = FFProbe::create();
            $duration = $ffprobe->format($localPath)->get('duration');
            $data['video_duration'] = $duration;

            // Setup Google Client dan YouTube service
            $token = json_decode(Setting::where('key', 'youtube_tokens')->value('value'), true);

            $client = new GoogleClient();
            $client->setClientId(config('services.youtube.client_id'));
            $client->setClientSecret(config('services.youtube.client_secret'));
            $client->setAccessToken($token);

            // Refresh token jika expired
            if ($client->isAccessTokenExpired()) {
                $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
                Setting::updateOrCreate(['key' => 'youtube_tokens'], ['value' => json_encode($client->getAccessToken())]);
            }

            $youtube = new GoogleYouTube($client);

            // Prepare metadata video
            $snippet = new VideoSnippet();
            $snippet->setTitle($data['title'] ?? 'Video Pembelajaran');

            $rawDescription = $data['description'] ?? '';
            $description = strip_tags($rawDescription); // 💥 penting
            $description = trim($description);
            $description = substr($description, 0, 5000); // batasi max 5000 char
            $description = preg_replace('/[\x00-\x1F\x7F]/u', '', $description); // hapus karakter kontrol
            $snippet->setDescription($description);


            $snippet->setTags(['LMS', 'Guruteknik']);
            $snippet->setCategoryId('27'); // Kategori Education

            $status = new VideoStatus();
            $status->setPrivacyStatus('unlisted'); // Bisa diubah jadi 'public' atau 'private'

            $video = new GoogleYouTubeVideo();
            $video->setSnippet($snippet);
            $video->setStatus($status);

            // Upload video ke YouTube (multipart upload)
            $videoStream = file_get_contents($localPath);
            $mimeType = mime_content_type($localPath);

            $uploadedVideo = $youtube->videos->insert(
                'snippet,status',
                $video,
                [
                    'data' => $videoStream,
                    'mimeType' => $mimeType,
                    'uploadType' => 'multipart'
                ]
            );

            // Simpan video ID YouTube ke data
            $data['youtube_video_id'] = $uploadedVideo->id;

            // Hapus file sementara
            Storage::delete($localPath);
        }

        // Set featured video jika ini video pertama
        if ($course->course_lectures->count() === 0) {
            $data['set_as_featured'] = 1;
        }

        // Simpan data lecture
        $course_lecture = CourseLecture::create($data);

        // Upload dan simpan attachments seperti biasa
        if ($request->hasFile('attachments')) {
            foreach ($request->file('attachments') as $file) {
                $path = $file->store('attachments', 'public');
                $course_lecture->attachments()->create([
                    'file' => $path,
                    'filename' => $file->getClientOriginalName(),
                ]);
            }
        }

        // return redirect()->back()->with('success', 'Video berhasil diupload ke YouTube!');
        return to_route('user_area.course.course_section.course_lectures', [
            'course' => $course->id
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
        $course->load('course_sections');

        $course_lecture->load('attachments');
        // return $course_lecture;
        return Inertia::render('UserArea/Course/CourseSection/CourseLecture/Edit', compact('course', 'course_section', 'course_lecture'));
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(CourseLectureUpdateRequest $request, Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    // {


    //     $data = $request->validated();
    //     unset($data['video'], $data['attachments'], $data['removed_attachment_ids']); // Remove file from mass-assignment
    //     if ($request->hasFile('video')) {
    //         $data['video'] = $request->file('video')->store('videos', 'public');
    //         $full_path = storage_path('app/public/' . $data['video']);

    //         $ffmpeg = FFMpeg::create(
    //             // [
    //             //     'ffmpeg.binaries'  => 'C:\\ffmpeg\\bin\\ffmpeg.exe',
    //             //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
    //             //     'timeout' => 3600, // optional
    //             // ]
    //         );
    //         $video = $ffmpeg->open($full_path);

    //         $ffprobe = FFProbe::create(
    //             // [
    //             //     'ffprobe.binaries' => 'C:\\ffmpeg\\bin\\ffprobe.exe',
    //             // ]
    //         );
    //         $duration = $ffprobe->format($full_path)->get('duration'); // in seconds

    //         $data['video_duration'] = $duration;
    //         // $data['video_duration'] = 0;
    //     }
    //     $course_lecture->update($data);
    //     // return to_route('user_area.course_section.index', [
    //     //     'course' => $course,
    //     //     'course_section' => $course_section,
    //     // ]);

    //     foreach ($request->removed_attachment_ids ?? [] as $attachment_id) {
    //         $attachment = Attachment::find($attachment_id);
    //         if ($attachment && $attachment->attachable_type == CourseLecture::class && $attachment->attachable_id === $course_lecture->id) {
    //             // Storage::delete($attachment->file);
    //             $attachment->delete();
    //         }
    //     }

    //     // Upload and attach files (attachments)
    //     if ($request->hasFile('attachments')) {
    //         foreach ($request->file('attachments') as $file) {
    //             $path = $file->store('attachments', 'public');

    //             $course_lecture->attachments()->create([
    //                 'file' => $path,
    //                 'filename' => $file->getClientOriginalName(),
    //             ]);
    //         }
    //     }
    // }

    public function update(CourseLectureUpdateRequest $request, Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $data = $request->validated();
        unset($data['video'], $data['attachments']); // hapus sebelum mass-assign

        if ($request->hasFile(('video'))) {

            $video = $request->file('video')->store('videos', 'public');
            $localPath = storage_path(('app/public/' . $video));

            // hitung durasi video menggunakn ffprobe
            $ffprobe = FFProbe::create();
            $duration = $ffprobe->format($localPath)->get('duration');
            $data['video_duration'] = $duration;

            // Setup Google Client dan YouTube service
            $token = json_decode(Setting::where('key', 'youtube_tokens')->value('value'), true);

            $client = new GoogleClient();
            $client->setClientId(config('service.youtube.client_id'));
            $client->setClientSecret(config('service.youtube.client_secret'));
            $client->setAccessToken($token);

            // Refresh token jika expired
            if ($client->isAccessTokenExpired()) {
                $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
                Setting::updateOrCreate(['key' => 'youtube_tokens'], ['value' => json_encode($client->getAccessToken())]);
            }

            $youtube = new GoogleYouTube($client);

            // Prepare metadata video
            $snippet = new VideoSnippet();
            $snippet->setTitle($data['title'] ?? 'Video Pembelajaran');

            $rawDescription = $data['description'] ?? '';
            $description = strip_tags($rawDescription); // 💥 penting
            $description = trim($description);
            $description = substr($description, 0, 5000); // batasi max 5000 char
            $description = preg_replace('/[\x00-\x1F\x7F]/u', '', $description); // hapus karakter kontrol
            $snippet->setDescription($description);

            $snippet->setTags(['LMS', 'Guruteknik']);
            $snippet->setCategoryId('27'); // Kategori Education

            $status = new VideoStatus();
            $status->setPrivacyStatus('unlisted'); // Bisa diubah jadi 'public' atau 'private'

            $video = new GoogleYouTubeVideo();
            $video->setSnippet($snippet);
            $video->setStatus($status);

            // Upload video ke YouTube (multipart upload)
            $videoStream = file_get_contents($localPath);
            $mimeType = mime_content_type($localPath);

            $uploadedVideo = $youtube->videos->insert(
                'snippet,status',
                $video,
                [
                    'data' => $videoStream,
                    'mimeType' => $mimeType,
                    'uploadType' => 'multipart'
                ]
            );

            // Simpan video ID YouTube ke data
            $data['youtube_video_id'] = $uploadedVideo->id;

            // Hapus file sementara
            Storage::delete($localPath);
        }

        // Update data lecture
        $course_lecture->update($data);

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
