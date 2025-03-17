<?php

namespace App\Http\Controllers\UserArea;

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PaginateRequest;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        // return $request->all();
        $orders = Order::orWhere([
            ['order_id', 'LIKE', '%' . $request->search . '%'],
        ])->where('user_id', Auth::user()->id)->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        return Inertia::render('UserArea/Order/Index', [
            'orders' => $orders,
            'request' => $request,
        ]);
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
    public function show(Order $order)
    {
        $order = Order::with(['order_items.itemable'])->findOrFail($order->id);
        return Inertia::render('UserArea/Order/Show', compact('order'));
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
