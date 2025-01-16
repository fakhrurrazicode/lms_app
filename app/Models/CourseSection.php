<?php

namespace App\Models;

use App\Models\CourseLecture;
use Illuminate\Database\Eloquent\Model;

class CourseSection extends BaseModel
{

    protected $guarded = [];

    public function course_lectures()
    {
        return $this->hasMany(CourseLecture::class, 'course_section_id', 'id');
    }
}
