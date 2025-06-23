<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    protected $fillable = [
        'event_id',
        'code',
        'type',
        'value',
        'max_discount',
        'start_date',
        'end_date',
        'quota'
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function isValid()
    {
        return now()->between($this->start_date, $this->end_date)
            && ($this->quota === null || $this->quota > 0);
    }

    public function calculateDiscount($price)
    {
        if ($this->type === 'nominal') {
            return min($this->value, $price);
        }

        if ($this->type === 'percentage') {
            $discount = $price * $this->value / 100;
            return min($discount, $this->max_discount ?? $discount);
        }

        return 0;
    }
}
