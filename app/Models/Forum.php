<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{

    public $appends = ['created_at_diff_for_humans', 'updated_at_diff_for_humans', 'reply_count'];

    public function getReplyCountAttribute()
    {
        return $this->forum_replies()->count();
    }

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

    public function forum_replies()
    {
        return $this->hasMany(ForumReply::class);
    }

    public function votes()
    {
        return $this->morphMany(ForumVote::class, 'votable');
    }
}
