<?php

namespace App\Http\Controllers\UserArea;

use App\Models\Cart;
use Inertia\Inertia;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $wishlists = Wishlist::where('user_id', Auth::user()->id)->get();
        return Inertia::render('UserArea/Wishlist/Index', compact('wishlists'));
    }

    public function add_to_cart(Request $request, Wishlist $wishlist)
    {

        $wishlist->delete();
        // dd($wishlist->wishlistable_type);
        // dd($wishlist->wishlistable_id);
        $product = $wishlist->wishlistable_type::find($wishlist->wishlistable_id);
        // dd($product);
        Cart::query()->firstOrCreateWithStoreItems(
            $product,
            1,
            Auth::user()->id
        );
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
        //
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
    public function destroy(Wishlist $wishlist)
    {
        $wishlist->delete();
    }
}
