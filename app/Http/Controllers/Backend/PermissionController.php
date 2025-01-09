<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perpage = $request->has('perpage') ? $request->perpage : 10;
        $orderby = $request->has('orderby') ? $request->orderby : 'created_at';
        $ordermethod = $request->has('ordermethod') ? $request->ordermethod : 'DESC';

        $permissions = Permission::with(['roles'])->orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['guard_name', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($orderby, $ordermethod)->paginate($perpage)->withQueryString();

        // $permissions->append($_GET);

        // return $permissions;
        return Inertia::render('Backend/Permission/Index', [
            'permissions' => $permissions,
            'request' => $request
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Permission::create($request->validate([
            'name' => ['required', 'max:50'],
        ]));

        return to_route('backend.permission.index');
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
    public function update(Request $request, Permission $permission)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
        ]);

        $permission->update($validated);

        return to_route('backend.permission.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();
        return to_route('backend.permission.index');
    }
}
