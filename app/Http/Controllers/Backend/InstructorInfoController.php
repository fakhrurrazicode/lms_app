<?php

namespace App\Http\Controllers\Backend;

use App\Models\InstructorInfo;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Http\Requests\PaginateRequest;
use App\Http\Requests\InstructorInfoStoreRequest;
use App\Http\Requests\InstructorInfoRejectRequest;
use App\Http\Requests\InstructorInfoUpdateRequest;
use App\Http\Requests\InstructorInfoVerifyRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class InstructorInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {

        $instructor_infos = InstructorInfo::select('instructor_infos.*')
            ->with(['user'])
            ->join('users', 'instructor_infos.user_id', 'users.id')
            ->orWhere([
                ['users.name', 'LIKE', '%' . $request->search . '%'],
            ])
            ->orderBy($request->orderby, $request->ordermethod)
            ->paginate($request->perpage)
            ->withQueryString();

        // return $instructor_infos;



        // return $instructor_infos;
        return Inertia::render('Backend/InstructorInfo/Index', [
            'instructor_infos' => $instructor_infos,
            'request' => $request,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        return Inertia::render('Backend/InstructorInfo/Create');
    }

    public function approve(Request $request, InstructorInfo $instructor_info)
    {

        $instructor_info->update([
            'status' => 1,
        ]);

        $instructor_info->user->syncRoles([]);
        $instructor_info->user->assignRole('instructor');

        return to_route('backend.instructor_info.index');
    }

    public function reject(InstructorInfoRejectRequest $request, InstructorInfo $instructor_info)
    {

        $validated = $request->validated();

        $instructor_info->update([
            'status' => 2,
            'verification_message' => $validated['verification_message'],
        ]);

        if ($instructor_info->user->hasRole('instructor')) {
            $instructor_info->user->removeRole('instructor');
        }


        return to_route('backend.instructor_info.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(InstructorInfoStoreRequest $request)
    {
        $validated = $request->validated();

        $instructor_info = InstructorInfo::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        $instructor_info->assignRole($validated['role']);

        return to_route('backend.instructor_info.index');
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
    public function edit(InstructorInfo $instructor_info)
    {
        $roles = Role::all();
        return Inertia::render('Backend/InstructorInfo/Edit', compact('instructor_info', 'roles'));
    }


    public function editPassword(InstructorInfo $instructor_info)
    {
        return Inertia::render('Backend/InstructorInfo/EditPassword', compact('instructor_info'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(InstructorInfoUpdateRequest $request, InstructorInfo $instructor_info)
    {
        $validated = $request->validated();

        $instructor_info->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
        ]);

        $instructor_info->assignRole($validated['role']);

        return to_route('backend.instructor_info.index');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InstructorInfo $instructor_info)
    {
        $instructor_info->delete();
        return to_route('backend.instructor_info.index');
    }
}
