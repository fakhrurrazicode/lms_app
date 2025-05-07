<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Http\Requests\VoucherStoreRequest;
use App\Http\Requests\VoucherUpdateRequest;
use App\Models\Event;
use App\Models\User;
use App\Models\Voucher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $vouchers = Voucher::select([
            'vouchers.*',
            'users.name as owner_name',
            'events.title as event_title'
        ])
            ->join('users', 'users.id', '=', 'vouchers.owner_id')
            ->join('events', 'events.id', '=', 'vouchers.event_id')
            ->orWhere([
                ['code', 'LIKE', '%' . $request->search . '%'],
            ])->orderBy($request->orderby, $request->ordermethod)
            ->paginate($request->perpage)
            ->withQueryString();

        // return $vouchers;

        return Inertia::render('Backend/Voucher/Index', [
            'vouchers' => $vouchers,
            'request' => $request,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $events = Event::all();
        $owners = User::role('instructor')->get();
        return Inertia::render('Backend/Voucher/Create', [
            'events' => $events,
            'owners' => $owners
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VoucherStoreRequest $request)
    {
        Voucher::create($request->validated());
        return to_route('backend.voucher.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Voucher $voucher)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Voucher $voucher)
    {
        // return $voucher;
        $events = Event::all();
        $owners = User::role('instructor')->get();
        return Inertia::render('Backend/Voucher/Edit', [
            'voucher' => $voucher,
            'events' => $events,
            'owners' => $owners
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(VoucherUpdateRequest $request, Voucher $voucher)
    {
        $voucher->update($request->validated());
        return to_route('backend.voucher.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Voucher $voucher)
    {
        $voucher->delete();
        return to_route('backend.voucher.index');
    }
}
