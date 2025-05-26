<?php

namespace App\Http\Controllers\UserArea;

use App\Models\Ticket;
use App\Models\TicketReply;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TicketReplyController extends Controller
{
    public function store(Request $request, Ticket $ticket)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        if ($ticket->status === 'closed') {
            return back()->with('error', 'Ticket sudah ditutup.');
        }

        TicketReply::create([
            'ticket_id' => $ticket->id,
            'user_id' => Auth::id(),
            'message' => $request->message,
        ]);

        // (Opsional) Ubah status jadi pending saat user membalas
        if (Auth::id() === $ticket->user_id) {
            $ticket->update(['status' => 'pending']);
        }

        return back()->with('success', 'Balasan terkirim.');
    }
}
