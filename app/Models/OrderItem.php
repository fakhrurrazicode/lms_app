<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends BaseModel
{
    protected $guarded = [];
    public $with = ['itemable'];

    protected $appends = ['discounted_price'];

    public function itemable(): \Illuminate\Database\Eloquent\Relations\MorphTo
    {
        return $this->morphTo();
    }

    public function getDiscountedPriceAttribute()
    {
        return $this->discount_percentage ? $this->price - ($this->price * ($this->discount_percentage / 100)) : $this->price;
    }
}
