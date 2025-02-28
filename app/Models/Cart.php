<?php

namespace App\Models;

use App\Models\CartItem;
use Binafy\LaravelCart\Models\Cart as BaseCart;
use Illuminate\Database\Eloquent\Model;

class Cart extends BaseCart
{

    public $appends = ['total_price'];
    /**
     * Relation one-to-many, CartItem model.
     */
    public function items(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CartItem::class);
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
}
