<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;

class Enrollment extends BaseModel
{
    protected $guarded = [];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
