<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ForumReply extends Model
{

    protected $guarded = [];
    public $appends = ['created_at_diff_for_humans', 'updated_at_diff_for_humans'];

    public function getCreatedAtDiffForHumansAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getUpdatedAtDiffForHumansAttribute()
    {
        return $this->updated_at->diffForHumans();
    }

    public function forum()
    {
        return $this->belongsTo(Forum::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function votes()
    {
        return $this->morphMany(ForumVote::class, 'votable');
    }
}
