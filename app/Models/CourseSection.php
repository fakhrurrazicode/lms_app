<?php

namespace App\Models;

use App\Models\Evaluation;
use App\Models\CourseLecture;
use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class CourseSection extends BaseModel
{



    protected $guarded = [];

    public $appends = ['has_evaluation'];
    protected $with = ['course_lectures'];

    public function getHasEvaluationAttribute()
    {
        return $this->evaluation ? true : false;
    }

    public function course_lectures()
    {
        return $this->hasMany(CourseLecture::class, 'course_section_id', 'id');
    }

    public function evaluation()
    {
        return $this->hasOne(Evaluation::class);
    }
}
