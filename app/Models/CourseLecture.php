<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseLecture extends BaseModel
{

    protected $guarded = [];
    protected $appends = [
        'video_url',
    ];

    public function getVideoUrlAttribute()
    {
        return $this->video ? url('/storage/' . $this->video) : asset('videos/dummy/sample_video.mp4');
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
