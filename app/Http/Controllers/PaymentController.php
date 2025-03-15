<?php

namespace App\Http\Controllers;

use Midtrans\Snap;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Midtrans\Config;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function token(Request $request)
    {
        $cart = Cart::query()->with(['user'])->firstOrCreate(['user_id' => Auth::user()->id]);

        // return $cart;

        Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        Config::$isProduction = env('MIDTRANS_IS_PRODUCTION', false);
        Config::$isSanitized = true;
        Config::$is3ds = true;

        $item_details = [];
        $order_items = [];

        foreach ($cart->items as $item) {
            $itemable = $item->itemable;
            $item_details[] = [
                'id' => $itemable->id,
                'price' => $itemable->price,
                'name' => $itemable->title . ' ' . ($itemable->discount_percentage ? ' Disc. ' . $itemable->discount_percentage . '%' : ''),
                'quantity' => $item->quantity,
            ];
        }

        $user = $cart->user;
        $name = explode(' ', $user->name);
        $first_name = array_shift($name);
        $last_name = count($name) ? implode(' ', $name) : ' ';
        $order_id = 'ORDER-GRTKNK-' . date('YmdHis') . '-' . uniqid();
        $params = [
            'transaction_details' => [
                'order_id' => 'ORDER-GRTKNK-' . date('YmdHis') . '-' . uniqid(),
                'gross_amount' => $cart->total_price, // Adjust price as needed
            ],
            'customer_details' => [
                'first_name' => $first_name,
                'last_name' => $last_name,
                'email' => $user->email,
            ],
            'item_details' => $item_details
        ];

        try {
            $snapToken = Snap::getSnapToken($params);
            $cart->emptyCart();

            $order = Order::create([
                'order_id' => $order_id,
                'gross_amount' => $cart->total_price,
                'user_id' => $user->id,
            ]);

            $order_items = [];
            foreach ($cart->items as $item) {
                $itemable = $item->itemable;
                $order_items[] = [
                    'order_id' => $order->id,
                    'itemable_type' => $item->itemable_type,
                    'itemable_id' => $item->itemable_id,
                    'quantity' => $item->quantity,
                ];
            }

            OrderItem::insert($order_items);

            return response()->json(['token' => $snapToken]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
