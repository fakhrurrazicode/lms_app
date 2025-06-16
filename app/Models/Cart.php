<?php

namespace App\Models;

use App\Models\CartItem;
use Binafy\LaravelCart\Models\Cart as BaseCart;
use Illuminate\Database\Eloquent\Model;

class Cart extends BaseCart
{

    public $appends = ['sub_total_price', 'biaya_layanan', 'total_price', 'total_discounted_price', 'total_discount_percentage'];
    /**
     * Relation one-to-many, CartItem model.
     */

    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->format('d-m-Y H:i:s');
    }

    public function items(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getSubTotalPriceAttribute()
    {
        $sub_total_price = 0;
        $items = $this->items;

        foreach ($items as $item) {
            $sub_total_price += $item->itemable->discounted_price * $item->quantity;
        }

        return $sub_total_price;
    }

    public function getBiayaLayananAttribute()
    {
        $biaya_layanan = 0;
        if (env('PERSENTASE_BIAYA_LAYANAN')) {
            $biaya_layanan = $this->sub_total_price * (env('PERSENTASE_BIAYA_LAYANAN') / 100);
        }
        return ceil($biaya_layanan);
    }

    public function getTotalPriceAttribute()
    {
        $total_price = $this->sub_total_price;

        $total_price = $total_price + $this->biaya_layanan;

        if ($this->use_poin) {
            $total_price = $total_price - $this->user->coin_balance;
        }

        return $total_price;
    }

    public function getTotalDiscountedPriceAttribute()
    {
        $total_discounted_price = 0;
        $items = $this->items;

        foreach ($items as $item) {
            $total_discounted_price += $item->itemable->discounted_price * $item->quantity;
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
