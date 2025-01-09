<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perpage = $request->has('perpage') ? $request->perpage : 10;
        $orderby = $request->has('orderby') ? $request->orderby : 'created_at';
        $ordermethod = $request->has('ordermethod') ? $request->ordermethod : 'asc';

        $roles = Role::orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['guard_name', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($orderby, $ordermethod)->paginate($perpage)->withQueryString();

        // $roles->append($_GET);

        // return $roles;
        return Inertia::render('Backend/Role/Index', [
            'roles' => $roles,
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
        Role::create($request->validate([
            'name' => ['required', 'max:50'],
        ]));

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
    public function update(Request $request, Role $role)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
        ]);

        $role->update($validated);

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
