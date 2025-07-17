<?php

namespace App\Http\Controllers\UserArea;

use Inertia\Inertia;
use App\Models\OrderItem;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class WithdrawalController extends Controller
{

    protected function calculateAvailableBalance($instructor_id): int
    {
        $total_earned = OrderItem::whereHasMorph('itemable', [\App\Models\Course::class], function ($q) use ($instructor_id) {
            $q->where('instructor_id', $instructor_id);
        })
            ->join('orders', 'order_items.order_id', '=', 'orders.id')
            ->where('orders.transaction_status', 'settlement')
            ->selectRaw('SUM((order_items.price * (1 - discount_percentage / 100)) * 0.7) as total')
            ->value('total') ?? 0;

        $total_withdrawn = Withdrawal::where('instructor_id', $instructor_id)
            ->whereIn('status', ['approved', 'pending'])
            ->sum('amount');

        // return 100000;
        return intval($total_earned - $total_withdrawn);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $instructor_id = Auth::id();

        $withdrawals = Withdrawal::where('instructor_id', $instructor_id)
            ->orderByDesc('created_at')
            ->get();

        $available_balance = $this->calculateAvailableBalance($instructor_id);

        return Inertia::render('UserArea/Withdrawal/Index', [
            'withdrawals' => $withdrawals,
            'available_balance' => $available_balance,
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
        $request->validate([
            'amount' => 'required|integer|min:10000',
        ]);

        $instructor_id = Auth::id();
        $available = $this->calculateAvailableBalance($instructor_id);

        if ($request->amount > $available) {
            return back()->withErrors(['amount' => 'Jumlah melebihi saldo tersedia.']);
        }

        Withdrawal::create([
            'instructor_id' => $instructor_id,
            'amount' => $request->amount,
            'status' => 'pending',
        ]);

        return redirect()->route('user_area.withdrawal.index')->with('success', 'Permintaan penarikan berhasil diajukan.');
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
    public function destroy(string $id)
    {
        //
    }
}
