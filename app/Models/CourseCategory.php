<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;

class CourseCategory extends BaseModel
{
    protected $guarded = [];

    // public $appends = ['course_count'];

    // public function getCourseCountAttribute()
    // {
    //     return $this->courses->count();
    // }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
