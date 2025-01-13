<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseSubCategory extends Model
{
    protected $guarded = [];

    public function course_category()
    {
        return $this->belongsTo(CourseCategory::class, 'course_category_id', 'id');
    }
}
