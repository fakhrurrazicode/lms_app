<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Evaluation extends BaseModel
{
    use HasFactory;

    protected $fillable = [
        'course_section_id',
        'title',
        'instructions',
        'duration',
        'passing_score',
    ];

    public function courseSection()
    {
        return $this->belongsTo(CourseSection::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function attempts()
    {
        return $this->hasMany(EvaluationAttempt::class);
    }
}
