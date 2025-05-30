<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends BaseModel
{
    protected $guarded = [];

    protected $appends = [
        'image_url',
    ];

    public function getImageUrlAttribute()
    {
        return $this->image ? url('/storage/' . $this->image) : asset('images/dummy/no-image.jpeg');
    }
}
