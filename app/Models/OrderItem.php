<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $guarded = [];
    public $with = ['itemable'];

    protected $appends = ['real_price'];

    public function itemable(): \Illuminate\Database\Eloquent\Relations\MorphTo
    {
        return $this->morphTo();
    }

    public function getPriceAttribute(): float
    {
        if ($this->attributes['discount_percentage']) {
            return $this->attributes['price'] - ($this->attributes['price'] * ($this->attributes['discount_percentage'] / 100));
        }
        return $this->attributes['price'];
    }

    public function getRealPriceAttribute()
    {
        return $this->attributes['price'];
    }
}
