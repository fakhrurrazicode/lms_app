<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wishlist extends BaseModel
{
    protected $table = 'wishlists';
    protected $guarded = [];

    public $with = ['wishlistable'];

    public function wishlistable(): \Illuminate\Database\Eloquent\Relations\MorphTo
    {
        return $this->morphTo();
    }
}
