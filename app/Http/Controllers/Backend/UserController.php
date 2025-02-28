<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdatePasswordRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {

        $users = User::with(['roles'])->orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['email', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        // $users->append($_GET);

        // return $users;
        return Inertia::render('Backend/User/Index', [
            'users' => $users,
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
    public function store(UserStoreRequest $request)
    {
        $validated = $request->validated();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        $user->assignRole($validated['role']);

        return to_route('backend.user.index');
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
    public function update(UserUpdateRequest $request, User $user)
    {
        $validated = $request->validated();

        $user->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
        ]);

        return to_route('backend.user.index');
    }

    public function updatePassword(UserUpdatePasswordRequest $request, User $user)
    {
        $validated = $request->validated();

        $user = $user->update([
            'password' => Hash::make($validated['password']),
        ]);

        return to_route('backend.user.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return to_route('backend.user.index');
    }
}
