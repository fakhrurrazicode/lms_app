<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Http\Requests\PermissionStoreRequest;
use App\Http\Requests\PermissionUpdateRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $permissions = Permission::with(['roles'])->orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['guard_name', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

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
    public function store(PermissionStoreRequest $request)
    {
        Permission::create($request->validated());
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
    public function update(PermissionUpdateRequest $request, Permission $permission)
    {
        $permission->update($request->validated());
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
