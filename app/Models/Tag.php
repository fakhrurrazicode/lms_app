<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;

class Tag extends BaseModel
{
    protected $guarded = [];

    public function courses()
    {
        return $this->morphedByMany(Course::class, 'taggable');
    }
}
