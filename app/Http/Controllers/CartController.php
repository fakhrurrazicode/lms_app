<?php

namespace App\Http\Controllers;

use App\Models\Cart;

use Inertia\Inertia;
use App\Models\CartItem;
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
        CartItem::where([
            'itemable_type' => $request->itemable_type,
            'itemable_id' => $request->itemable_id,
            'cart_id' => $cart->id,
        ])->delete();
    }
}
