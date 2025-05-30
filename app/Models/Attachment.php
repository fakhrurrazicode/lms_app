<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Attachment extends BaseModel
{

    protected $guarded = [];
    public function attachable(): MorphTo
    {
        return $this->morphTo();
    }
}
