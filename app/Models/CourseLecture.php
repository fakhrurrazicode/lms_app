<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseLecture extends BaseModel
{

    protected $guarded = [];

    protected $appends = ['video_url'];


    public function getVideoUrlAttribute()
    {
        return $this->image ? url('/storage/' . $this->image) : asset('videos/dummy/sample_video.mp4');
    }
}
