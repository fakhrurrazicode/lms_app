<?php

namespace App\Models;

use App\Models\Thread;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Model;

class CourseLecture extends BaseModel
{

    public static function boot()
    {
        parent::boot();

        CourseLecture::deleting(function ($course_lecture) {
            $course_lecture->attachments()->delete();
            $file = public_path('storage/' . $course_lecture->video);
            // dd(File::exists($file));
            if (File::isFile($file)) {
                File::delete($file);
            }
        });
    }

    protected $guarded = [];
    protected $appends = [
        'video_url',
        'video_duration_human_readable',
        'done'
    ];

    // protected $with = ['course_track'];

    public function threads()
    {
        return $this->morphMany(Thread::class, 'threadable');
    }

    public function attachments()
    {
        return $this->morphMany(Attachment::class, 'attachable');
    }

    public function course_section()
    {
        return $this->belongsTo(CourseSection::class);
    }

    public function getVideoUrlAttribute()
    {
        return $this->video ? url('/storage/' . $this->video) : asset('videos/dummy/sample_video.mp4');
    }

    public function getVideoDurationHumanReadableAttribute()
    {
        return gmdate('H:i:s', $this->video_duration);
    }

    public function course_track()
    {
        if (!Auth::check()) {
            return null;
        }

        return $this->belongsTo(CourseTrack::class, 'id', 'course_lecture_id')
            ->where('user_id', Auth::user()->id);
    }

    public function getDoneAttribute()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $course_track = CourseTrack::where([
                ['user_id', '=', $user->id],
                ['course_lecture_id', '=', $this->id]
            ])->first();

            return $course_track ? true : false;
        } else {
            return false;
        }
    }

    // public function getPrevCourseLectureAttribute()
    // {
    //     return self::where('id', '<', $this->id)->where('course_id', $this->course_id)->orderBy('id', 'desc')->first();
    // }

    // public function getNextCourseLectureAttribute()
    // {
    //     return self::where('id', '>', $this->id)->where('course_id', $this->course_id)->orderBy('id', 'desc')->first();
    // }
}
