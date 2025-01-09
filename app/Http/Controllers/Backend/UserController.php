<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perpage = $request->has('perpage') ? $request->perpage : 10;
        $orderby = $request->has('orderby') ? $request->orderby : 'created_at';
        $ordermethod = $request->has('ordermethod') ? $request->ordermethod : 'asc';

        $users = User::with(['roles'])->orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['email', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($orderby, $ordermethod)->paginate($perpage)->withQueryString();

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
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Password::defaults()],
            'role' => ['required', 'exists:' . Role::class . ',name']
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);


        $user->assignRole($request->role);


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
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class . ',email,' . $user->id,
        ]);

        $user->update($validated);

        return to_route('backend.user.index');
    }

    public function updatePassword(Request $request, User $user)
    {


        $request->validate([
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        $user = $user->update([
            'password' => Hash::make($request->password),
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
