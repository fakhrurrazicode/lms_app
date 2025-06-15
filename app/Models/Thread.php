<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Thread extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'title'];

    public function threadable()
    {
        return $this->morphTo();
    }

    public function posts()
    {
        return $this->hasMany(ThreadPost::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
