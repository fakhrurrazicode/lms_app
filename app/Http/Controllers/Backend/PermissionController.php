<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Http\Requests\PermissionSetRolesRequest;
use App\Http\Requests\PermissionStoreRequest;
use App\Http\Requests\PermissionUpdateRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

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

        $permissions->map(function ($permission) {
            return $permission->role_names = $permission->roles->map(function ($role) {
                return $role->name;
            });
        });

        // $permissions->append($_GET);

        // return $permissions;
        return Inertia::render('Backend/Permission/Index', [
            'permissions' => $permissions,
            'request' => $request,
            'roles' => Role::all()
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

    public function setRole(PermissionSetRolesRequest $request, Permission $permission)
    {

        $validated = $request->validated();
        $permission->syncRoles($validated['roles']);
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
