<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\Voucher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Http\Requests\VoucherStoreRequest;
use App\Http\Requests\VoucherUpdateRequest;
use App\Http\Requests\VoucherStoreBatchRequest;



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

    public function create_batch()
    {

        $events = Event::all();
        $owners = User::role('instructor')->get();
        return Inertia::render('Backend/Voucher/CreateBatch', [
            'events' => $events,
            'owners' => $owners
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

    private function generateSingkatan($name, $minLength = 2)
    {
        $words = preg_split('/\s+/', trim($name));
        $singkatan = '';

        foreach ($words as $word) {
            if ($word !== '') {
                $singkatan .= strtoupper(mb_substr($word, 0, 1));
            }
        }

        if (count($words) === 1) {
            // Kalau hanya 1 kata, ambil minLength huruf pertama dari kata itu
            $singkatan = strtoupper(mb_substr($words[0], 0, $minLength));
        }

        return $singkatan;
    }

    public function store_batch(VoucherStoreBatchRequest $request)
    {
        // Voucher::create($request->validated());
        $users = User::role('instructor')->get();

        $validated = $request->validated();

        $data = collect($users)->map(function ($user) use ($validated, $request) {

            $voucher_exists = Voucher::where([
                'event_id' => $validated['event_id'],
                'owner_id' => $user->id,
            ])->first();

            if (!$voucher_exists) {
                return [
                    'code' => $validated['prefix_code'] . $this->generateSingkatan($user->name, 4),
                    'event_id' => $validated['event_id'],
                    'owner_id' => $user->id,
                    'customer_coin_reward' => $validated['customer_coin_reward'],
                    'owner_coin_reward' => $validated['owner_coin_reward'],
                    'usage_limit' => $validated['usage_limit'],
                    'expires_at' => $validated['expires_at'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        })->filter()->toArray();

        // dd($data);

        DB::table('vouchers')->insert($data);

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
