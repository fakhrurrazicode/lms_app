<?php

namespace App\Models;

use Binafy\LaravelCart\Models\CartItem as BaseCartItem;
use Illuminate\Database\Eloquent\Model;

class CartItem extends BaseCartItem
{
    public $with = ['itemable'];
}
