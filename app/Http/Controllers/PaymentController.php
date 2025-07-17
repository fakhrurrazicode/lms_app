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

        $user = Auth::user();

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
                'name' => $itemable->title,
                'quantity' => $item->quantity,
            ];

            if ($itemable->discount_percentage) {
                $item_details[] = [
                    'id' => 'disc-' . $itemable->id,
                    'price' => ($itemable->price - $itemable->discounted_price) * -1,
                    'name' => 'Discount ' . $itemable->discount_percentage . '% for : ' .   $itemable->title,
                    'quantity' => $item->quantity,
                ];
            }
        }

        $item_details[] = [
            'id' => 'biaya-layanan',
            'price' => $cart->biaya_layanan,
            'name' => 'Biaya Layanan',
            'quantity' => 1,
        ];


        if ($cart->voucher) {
            $item_details[] = [
                'id' => 'potongan-voucher',
                'price' => $cart->voucher_discount * -1,
                'name' => 'Potongan Voucher ' . $cart->voucher->code,
                'quantity' => 1,
            ];
        }

        if ($cart->use_poin) {
            $item_details[] = [
                'id' => 'potongan-coin',
                'price' => $cart->coin_discount * -1,
                'name' => 'Potongan coin',
                'quantity' => 1,
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
            $snap_token = Snap::getSnapToken($params);
            // $cart->emptyCart();

            $order = Order::create([
                'order_id' => $order_id,
                'gross_amount' => $cart->total_price,
                'user_id' => $user->id,
                'snap_token' => $snap_token,
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

            // $order_items_array = OrderItem::where([
            //     'order_id' => $order->id,
            // ]);


            $cart->delete();

            return response()->json(['token' => $snap_token]);

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
        $transaction_status = $data['transaction_status'] ?? null;
        $fraud_status = $data['fraud_status'] ?? null;

        MidtransNotificationLog::create([
            'json' => json_encode($data),
        ]);

        $order = Order::with(['order_items'])->where([
            'order_id' => $data['order_id']
        ])->first();

        // dd($order);

        $order->update([
            'transaction_id' => $data['transaction_id'],
            'transaction_status' => $data['transaction_status'],
        ]);

        // Lakukan sesuatu berdasarkan status transaksi
        if (in_array($transaction_status, ['settlement'])) {
            $order_items = $order->order_items;
            foreach ($order_items as $order_item) {

                $enrollment_exists = Enrollment::where([
                    'course_id' => $order_item->itemable->id,
                    'user_id' => $order->user_id,
                    'order_id' => $order->id,
                    'order_item_id' => $order_item->id
                ])->first();


                if (!$enrollment_exists) {
                    Enrollment::create([
                        'course_id' => $order_item->itemable->id,
                        'user_id' => $order->user_id,
                        'order_id' => $order->id,
                        'order_item_id' => $order_item->id,
                    ]);
                }
            }
        }

        if (in_array($transaction_status, ['capture'])) {
            if ($fraud_status === "accept") {
                $order_items = $order->order_items;
                foreach ($order_items as $order_item) {
                    $enrollment_exists = Enrollment::where([
                        'course_id' => $order_item->itemable->id,
                        'user_id' => $order->user_id,
                        'order_id' => $order->id,
                        'order_item_id' => $order_item->id
                    ])->first();


                    if (!$enrollment_exists) {
                        Enrollment::create([
                            'course_id' => $order_item->itemable->id,
                            'user_id' => $order->user_id,
                            'order_id' => $order->id,
                            'order_item_id' => $order_item->id,
                        ]);
                    }
                }
            }
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
