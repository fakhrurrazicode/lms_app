<?php

namespace App\Models;

use App\Models\User;
use App\Models\ReferralCodeUsage;
use Illuminate\Database\Eloquent\Model;

class ReferralCode extends Model
{
    protected $guarded = [];

    public $appends = ['usage_count', 'referral_url'];
    // public $with = ['owner', 'event'];

    public function getReferralUrlAttribute()
    {
        return route('register', [
            'referral_code' => $this->code
        ]);
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id', 'id');
    }

    public function usages()
    {
        return $this->hasMany(ReferralCodeUsage::class);
    }

    public function getUsageCountAttribute()
    {
        return $this->usages()->count();
    }
}
