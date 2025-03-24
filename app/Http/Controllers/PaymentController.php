<?php

namespace App\Http\Controllers;

use Midtrans\Snap;
use App\Models\Cart;
use App\Models\Enrollment;
use App\Models\MidtransNotificationLog;
use Inertia\Inertia;
use Midtrans\Config;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

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
                'order_id' => $order_id,
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
            // $cart->emptyCart();

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
                    'price' => $item->itemable->price,
                    'discount_percentage' => $item->itemable->discount_percentage,
                ];
            }

            OrderItem::insert($order_items);

            $order_items_array = OrderItem::where([
                'order_id' => $order->id,
            ]);

            return response()->json(['token' => $snapToken]);

            // Finish URL https://guruteknik.com/payment/finish?order_id=ORDER-GRTKNK-20250315090624-67d543105e67d&status_code=200&transaction_status=settlement
            // Finish URL https://guruteknik.com/payment/finish?order_id=ORDER-GRTKNK-20250315090624-67d543105e67d&status_code=200&transaction_status=settlement
            // Finish URL https://guruteknik.com/payment/finish?order_id=ORDER-GRTKNK-20250315090624-67d543105e67d&status_code=200&transaction_status=settlement
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function finish()
    {
        return Inertia::render('UserArea/Payment/Finish');
    }
    public function unfinish()
    {
        return Inertia::render('UserArea/Payment/Unfinish');
    }
    public function error()
    {
        return Inertia::render('UserArea/Payment/Error');
    }

    public function notification(Request $request)
    {
        // Ambil data JSON dari request
        $data = $request->json()->all();

        // Log data untuk debugging (Opsional)
        Log::info('Webhook Data:', $data);

        // Contoh akses data tertentu
        // $transactionId = $data['transaction_id'] ?? null;
        $status = $data['status'] ?? null;
        MidtransNotificationLog::create([
            'json' => json_encode($data),
        ]);

        Order::where([
            'order_id' => $data['order_id']
        ])->update([
            'transaction_id' => $data['transaction_id'],
            'transaction_status' => $data['transaction_status'],
        ]);

        // Lakukan sesuatu berdasarkan status transaksi
        if (in_array($status, ['settlement'])) {
            // Update database atau kirim notifikasi
        }

        // Berikan respon ke pengirim webhook
        return response()->json([
            'message' => 'Webhook received',
            'data' => $data
        ], 200);
    }

    public function recurring() {}
    public function account_linking() {}
}
