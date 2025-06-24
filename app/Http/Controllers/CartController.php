<?php

namespace App\Http\Controllers;


use App\Models\Cart;

use Inertia\Inertia;
use App\Models\Voucher;
use App\Models\CartItem;
use App\Models\Wishlist;
use App\Models\VoucherUsage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cart = Cart::query()->firstOrCreate(['user_id' => Auth::user()->id]);
        // return $cart;
        return Inertia::render('Cart', compact('cart'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = $request->itemable_type::findOrFail($request->itemable_id);
        Cart::query()->firstOrCreateWithStoreItems(
            $product,
            1,
            Auth::user()->id
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {

        $cart = Cart::query()->firstOrCreate(['user_id' => Auth::user()->id]);
        $cart_item = CartItem::where([
            'itemable_type' => $request->itemable_type,
            'itemable_id' => $request->itemable_id,
            'cart_id' => $cart->id,
        ])->delete();

        // return response()->json([
        //     'status' => true,
        //     'message' => 'Berhasil dihapus dari keranjang belanja'
        // ]);
    }

    public function empty_cart()
    {
        $cart = Cart::query()->firstOrCreate(['user_id' => Auth::user()->id]);
        $cart->emptyCart();

        // return response()->json([
        //     'status' => true,
        //     'message' => 'Keranjang belanja berhasil di kosongkan',
        // ]);
    }

    public function add_to_wishlist(Request $request)
    {
        $cart = Cart::query()->firstOrCreate(['user_id' => Auth::user()->id]);

        Wishlist::create([
            'user_id' => Auth::user()->id,
            'wishlistable_type' => $request->itemable_type,
            'wishlistable_id' => $request->itemable_id,
        ]);

        $cart_item = CartItem::where([
            'itemable_type' => $request->itemable_type,
            'itemable_id' => $request->itemable_id,
            'cart_id' => $cart->id,
        ])->delete();
    }

    public function toggle_use_poin(Request $request)
    {
        $cart = Cart::query()->firstOrCreate(['user_id' => Auth::user()->id]);
        $cart->use_poin = !$cart->use_poin;
        $cart->update();
    }

    public function set_voucher(Request $request)
    {
        // $voucher = \App\Models\Voucher::where('code', $request->code)
        //     ->first();
        // dd($voucher);

        $request->validate([
            'code' => [
                'required',
                'string',
                function ($attribute, $value, $fail) use ($request) {
                    $voucher = \App\Models\Voucher::where('code', $value)
                        ->first();

                    // dd($voucher);

                    if (!$voucher || !$voucher->isValid()) {
                        return $fail('Voucher tidak valid atau telah kedaluwarsa.');
                    }

                    $used = \App\Models\VoucherUsage::where('voucher_id', $voucher->id)
                        ->where('user_id', Auth::id())
                        ->exists();

                    if ($used) {
                        return $fail('Voucher ini sudah pernah digunakan oleh Anda.');
                    }

                    // Jika kamu butuh voucher-nya nanti, bisa simpan di $request:
                    $request->merge(['_voucher' => $voucher]);
                },
            ],
        ]);

        $voucher = $request->get('_voucher'); // akses voucher valid dari closure
        $cart = Cart::query()->firstOrCreate(['user_id' => Auth::user()->id]);
        $cart->voucher_id = $voucher->id;
        $cart->update();
    }

    public function remove_voucher()
    {
        $cart = Cart::query()->firstOrCreate(['user_id' => Auth::user()->id]);
        $cart->voucher_id = null;
        $cart->update();
    }
}
