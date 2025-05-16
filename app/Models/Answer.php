<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Answer extends Model
{
    use HasFactory;

    protected $fillable = [
        'evaluation_attempt_id',
        'question_id',
        'choice_id',
        'is_correct',
    ];

    public function attempt()
    {
        return $this->belongsTo(EvaluationAttempt::class, 'evaluation_attempt_id');
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function choice()
    {
        return $this->belongsTo(Choice::class);
    }
}
