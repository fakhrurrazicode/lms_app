<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class ActivityLogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $activity_logs = Activity::orWhere([
            ['log_name', 'LIKE', '%' . $request->search . '%'],
            ['description', 'LIKE', '%' . $request->search . '%'],
            ['subject_type', 'LIKE', '%' . $request->search . '%'],
            ['event', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->has('orderby') ? $request->orderby : 'id', $request->has('ordermethod') ? $request->ordermethod : 'desc')->paginate($request->perpage)->withQueryString();

        // return $activity_logs;

        return Inertia::render('Backend/ActivityLog/Index', [
            'activity_logs' => $activity_logs,
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
