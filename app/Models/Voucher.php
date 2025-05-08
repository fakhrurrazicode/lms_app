<?php

namespace App\Models;

use App\Models\User;
use App\Models\Event;
use App\Models\VoucherUsage;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    protected $guarded = [];

    public $appends = ['usage_count'];
    // public $with = ['owner', 'event'];

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
        return $this->hasMany(VoucherUsage::class);
    }

    public function getUsageCountAttribute()
    {
        return $this->usages()->count();
    }
}
