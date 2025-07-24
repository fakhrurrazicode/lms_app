<?php

namespace App\Http\Controllers\UserArea;

use App\Models\ReferralCode;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReferralCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $referral_codes = ReferralCode::with(['event', 'owner'])->orWhere([
            ['code', 'LIKE', '%' . $request->search . '%'],
        ])->where('owner_id', Auth::user()->id)->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        // return $referral_codes;

        return Inertia::render('UserArea/ReferralCode/Index', [
            'referral_codes' => $referral_codes,
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
