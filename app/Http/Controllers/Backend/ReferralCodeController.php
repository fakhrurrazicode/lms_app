<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\ReferralCode;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Http\Requests\ReferralCodeStoreRequest;
use App\Http\Requests\ReferralCodeUpdateRequest;
use App\Notifications\NewReferralCodeDistributed;
use Illuminate\Support\Facades\Notification;
use App\Http\Requests\ReferralCodeStoreBatchRequest;

class ReferralCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $referral_codes = ReferralCode::select([
            'referral_codes.*',
            'users.name as owner_name',
            'events.title as event_title'
        ])
            ->join('users', 'users.id', '=', 'referral_codes.owner_id')
            ->join('events', 'events.id', '=', 'referral_codes.event_id')
            ->orWhere([
                ['code', 'LIKE', '%' . $request->search . '%'],
            ])->orderBy($request->orderby, $request->ordermethod)
            ->paginate($request->perpage)
            ->withQueryString();

        // return $referral_codes;

        return Inertia::render('Backend/ReferralCode/Index', [
            'referral_codes' => $referral_codes,
            'request' => $request,
        ]);
    }

    public function create_batch()
    {

        $events = Event::all();
        $owners = User::role('instructor')->get();
        return Inertia::render('Backend/ReferralCode/CreateBatch', [
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
        return Inertia::render('Backend/ReferralCode/Create', [
            'events' => $events,
            'owners' => $owners
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReferralCodeStoreRequest $request)
    {
        ReferralCode::create($request->validated());
        return to_route('backend.referral_code.index');
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

    public function store_batch(ReferralCodeStoreBatchRequest $request)
    {
        // ReferralCode::create($request->validated());
        $users = User::role('instructor')->get();

        $validated = $request->validated();

        $data = collect($users)->map(function ($user) use ($validated, $request) {

            $referral_code_exists = ReferralCode::where([
                'event_id' => $validated['event_id'],
                'owner_id' => $user->id,
            ])->first();

            if (!$referral_code_exists) {
                return [
                    'code' => $validated['prefix_code'] . $this->generateSingkatan($user->name, 4) . strtoupper(Str::random(4)),
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


        ReferralCode::insert($data);

        $insertedReferralCodes = ReferralCode::whereBetween('created_at', [now()->subMinutes(5), now()])->get();

        foreach ($insertedReferralCodes as $insertedReferralCode) {
            $insertedReferralCode->load(['owner']);
            $referral_code_owner = $insertedReferralCode->owner;

            // $referral_code_owner->notify(new NewReferralCodeDistributed($insertedReferralCode));
        }


        // DB::table('referral_codes')->insert($data);

        return to_route('backend.referral_code.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(ReferralCode $referral_code)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ReferralCode $referral_code)
    {
        // return $referral_code;
        $events = Event::all();
        $owners = User::role('instructor')->get();
        return Inertia::render('Backend/ReferralCode/Edit', [
            'referral_code' => $referral_code,
            'events' => $events,
            'owners' => $owners
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ReferralCodeUpdateRequest $request, ReferralCode $referral_code)
    {
        $referral_code->update($request->validated());
        return to_route('backend.referral_code.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ReferralCode $referral_code)
    {
        $referral_code->delete();
        return to_route('backend.referral_code.index');
    }
}
