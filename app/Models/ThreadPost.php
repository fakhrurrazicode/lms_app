<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ThreadPost extends Model
{
    use HasFactory;

    protected $fillable = ['thread_id', 'user_id', 'body', 'parent_id'];

    public function thread()
    {
        return $this->belongsTo(Thread::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(ThreadPost::class, 'parent_id');
    }

    public function parent()
    {
        return $this->belongsTo(ThreadPost::class, 'parent_id');
    }
}
