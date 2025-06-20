<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{

    public $appends = ['created_at_diff_for_humans', 'updated_at_diff_for_humans'];

    public function getCreatedAtDiffForHumansAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getUpdatedAtDiffForHumansAttribute()
    {
        return $this->updated_at->diffForHumans();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function discussionable()
    {
        return $this->morphTo();
    }

    public function replies()
    {
        return $this->hasMany(ForumReply::class);
    }

    public function votes()
    {
        return $this->morphMany(ForumVote::class, 'votable');
    }
}
