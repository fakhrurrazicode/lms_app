<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Question extends BaseModel
{
    use HasFactory;

    protected $fillable = [
        'evaluation_id',
        'question',
        'type',
    ];

    public function evaluation()
    {
        return $this->belongsTo(Evaluation::class);
    }

    public function choices()
    {
        return $this->hasMany(Choice::class);
    }
}
