<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Ticket;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;

use App\Http\Requests\TicketStoreRequest;
use App\Http\Requests\TicketUpdateRequest;
use App\Http\Requests\TicketUpdateStatusRequest;
use App\Models\User;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $users = User::all();
        $tickets = Ticket::orWhere([
            ['subject', 'LIKE', '%' . $request->search . '%'],
            ['description', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        return Inertia::render('Backend/Ticket/Index', [
            'tickets' => $tickets,
            'request' => $request,
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(TicketStoreRequest $request)
    {
        Ticket::create($request->validated());
        return to_route('backend.ticket.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Ticket $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TicketUpdateRequest $request, Ticket $ticket)
    {
        $ticket->update($request->validated());
        return to_route('backend.ticket.index', request()->query());
    }

    public function updateStatus(TicketUpdateStatusRequest $request, Ticket $ticket)
    {
        $ticket->update($request->validated());
        return to_route('backend.ticket.index', request()->query());
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
        return to_route('backend.ticket.index');
    }
}
