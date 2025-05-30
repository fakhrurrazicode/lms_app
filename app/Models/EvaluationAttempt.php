<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EvaluationAttempt extends BaseModel
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'evaluation_id',
        'score',
        'passed',
        'started_at',
        'submitted_at',
    ];

    protected $dates = ['started_at', 'submitted_at'];

    public function evaluation()
    {
        return $this->belongsTo(Evaluation::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
