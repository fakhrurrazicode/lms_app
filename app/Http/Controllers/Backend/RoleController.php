<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Http\Requests\RoleSetPermissionsRequest;
use App\Http\Requests\RoleStoreRequest;
use App\Http\Requests\RoleUpdateRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $roles = Role::with(['permissions'])->orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['guard_name', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        $roles->map(function ($role) {
            return $role->permission_names = $role->permissions->map(function ($permission) {
                return $permission->name;
            });
        });



        return Inertia::render('Backend/Role/Index', [
            'roles' => $roles,
            'request' => $request,
            'permissions' => Permission::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleStoreRequest $request)
    {
        Role::create($request->validated());
        return to_route('backend.role.index');
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
    public function update(RoleUpdateRequest $request, Role $role)
    {
        $role->update($request->validated());
        return to_route('backend.role.index');
    }

    public function setPermission(RoleSetPermissionsRequest $request, Role $role)
    {

        $validated = $request->validated();
        $role->syncPermissions($validated['permissions']);
        return to_route('backend.role.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $role->delete();
        return to_route('backend.role.index');
    }
}
