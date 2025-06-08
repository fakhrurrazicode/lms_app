<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

class CourseLecture extends BaseModel
{

    protected $guarded = [];
    protected $appends = [
        'video_url',
        'video_duration_human_readable',
    ];

    // protected $with = ['course_track'];

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

    // public function getPrevCourseLectureAttribute()
    // {
    //     return self::where('id', '<', $this->id)->where('course_id', $this->course_id)->orderBy('id', 'desc')->first();
    // }

    // public function getNextCourseLectureAttribute()
    // {
    //     return self::where('id', '>', $this->id)->where('course_id', $this->course_id)->orderBy('id', 'desc')->first();
    // }
}
