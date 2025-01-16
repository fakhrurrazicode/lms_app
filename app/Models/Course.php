<?php

namespace App\Models;

use App\Models\User;
use App\Models\CourseCategory;
use App\Models\CourseSubCategory;
use Illuminate\Database\Eloquent\Model;

class Course extends BaseModel
{
    protected $guarded = [];
    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return $this->image ? url('/storage/' . $this->image) : null;
    }

    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id', 'id');
    }

    public function course_category()
    {
        return $this->belongsTo(CourseCategory::class);
    }

    public function course_sub_category()
    {
        return $this->belongsTo(CourseSubCategory::class);
    }
}
