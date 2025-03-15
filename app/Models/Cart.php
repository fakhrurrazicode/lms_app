<?php

namespace App\Models;

use App\Models\CartItem;
use Binafy\LaravelCart\Models\Cart as BaseCart;
use Illuminate\Database\Eloquent\Model;

class Cart extends BaseCart
{

    public $appends = ['total_price', 'total_real_price', 'total_discount_percentage'];
    /**
     * Relation one-to-many, CartItem model.
     */
    public function items(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getTotalPriceAttribute()
    {
        $total_price = 0;
        $items = $this->items;

        foreach ($items as $item) {
            $total_price += $item->itemable->price * $item->quantity;
        }

        return $total_price;
    }

    public function getTotalRealPriceAttribute()
    {
        $total_real_price = 0;
        $items = $this->items;


        foreach ($items as $item) {
            $total_real_price += $item->itemable->real_price * $item->quantity;
        }

        return $total_real_price;
    }

    public function getTotalDiscountPercentageAttribute()
    {
        if ($this->total_real_price) {
            return round((($this->total_real_price - $this->total_price) / $this->total_real_price) * 100, 2);
        } else {
            return 0;
        }
    }
}
