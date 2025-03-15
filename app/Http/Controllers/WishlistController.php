<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function toggle(Request $request)
    {
        $user = $request->user();

        $wishlist = Wishlist::where([
            'user_id' => $user->id,
            'wishlistable_type' => $request->wishlistable_type,
            'wishlistable_id' => $request->wishlistable_id,
        ])->first();

        if ($wishlist) {
            $wishlist->delete();
        } else {
            Wishlist::create([
                'user_id' => $user->id,
                'wishlistable_type' => $request->wishlistable_type,
                'wishlistable_id' => $request->wishlistable_id,
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {}

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
    public function destroy(string $id)
    {
        //
    }
}
