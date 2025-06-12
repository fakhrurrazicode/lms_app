<?php

namespace App\Models;

use App\Models\CartItem;
use Binafy\LaravelCart\Models\Cart as BaseCart;
use Illuminate\Database\Eloquent\Model;

class Cart extends BaseCart
{

    public $appends = ['total_price', 'total_discounted_price', 'total_discount_percentage'];
    /**
     * Relation one-to-many, CartItem model.
     */

    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->format('d-m-Y H:i:s');
    }

    public function items(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CartItem::class)->whereHas('itemable');
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

            $total_price += $item->itemable ? $item->itemable->price * $item->quantity : 0;
        }

        return $total_price;
    }

    public function getTotalDiscountedPriceAttribute()
    {
        $total_discounted_price = 0;
        $items = $this->items;

        foreach ($items as $item) {
            $total_discounted_price += $item->itemable ? ($item->itemable->discounted_price * $item->quantity) : 0;
        }

        return $total_discounted_price;
    }

    public function getTotalDiscountPercentageAttribute()
    {
        if ($this->total_discounted_price) {
            return round((($this->total_discounted_price - $this->total_price) / $this->total_discounted_price) * 100, 2);
        } else {
            return 0;
        }
    }
}
