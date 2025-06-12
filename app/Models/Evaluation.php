<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Evaluation extends BaseModel
{
    use HasFactory;

    protected $appends = ['done'];
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

    public function getDoneAttribute()
    {
        if (Auth::check()) {
            $user = Auth::user();

            $latest_evaluation_attempt = EvaluationAttempt::where([
                ['user_id', '=', $user->id],
                ['evaluation_id', '=', $this->id],
                ['passed', '=', 1]
            ])->orderBy('created_at', 'DESC')->first();

            return $latest_evaluation_attempt ? true : false;
        } else {
            return false;
        }
    }
}
