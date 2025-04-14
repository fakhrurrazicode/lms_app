<?php

namespace App\Http\Controllers\UserArea;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\InstructorInfo;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\BecomeInstructorRequest;

class BecomeInstructorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('UserArea/BecomeInstructor/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BecomeInstructorRequest $request)
    {
        $data = $request->except(['id_card']);
        // return $data;
        if ($request->hasFile('id_card')) {
            $data['id_card'] = $request->file('id_card')->store('id_card', 'public');
        }

        $data['user_id'] = Auth::user()->id;
        InstructorInfo::create($data);
        return to_route('user_area.become_instructor.create');
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
