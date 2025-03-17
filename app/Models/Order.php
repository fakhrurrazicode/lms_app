<?php

namespace App\Models;

use App\Models\User;
use App\Models\BaseModel;
use App\Models\OrderItem;
use App\Models\Enrollment;


class Order extends BaseModel
{
    protected $guarded = [];

    protected static function booted()
    {
        static::updated(function (Order $order) {
            if (in_array($order->transaction_status, ['settlement', 'capture', 'success'])) {
                $order_items = OrderItem::where('order_id', $order->id)->get();
                foreach ($order_items as $order_item) {
                    Enrollment::create([
                        'course_id' => $order_item->course_id,
                        'user_id' => $order->user_id,
                        'order_id' => $order->id,
                        'order_item_id' => $order_item->id,
                        'progress' => 0,
                    ]);
                }
            }
        });
    }

    public function order_items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
