<?php

namespace App\Http\Controllers\UserArea;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Http\Requests\ProfilePhotoUpdateRequest;
use App\Http\Requests\InstructorProfileUpdateRequest;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('UserArea/Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    public function update_photo(ProfilePhotoUpdateRequest $request)
    {
        $user = $request->user();

        if ($request->hasFile('photo')) {
            // Hapus foto lama kalau ada
            if ($user->photo) {
                Storage::disk('public')->delete($user->photo);
            }

            $path = $request->file('photo')->store('avatars', 'public');
            $validated['photo'] = $path;
        }

        $user->update($validated);

        return Redirect::route('user_area.profile.edit');
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('user_area.profile.edit');
    }

    public function update_instructor_info(InstructorProfileUpdateRequest $request): RedirectResponse
    {
        $user = Auth::user();

        $instructor_info = $user->instructor_info;
        $instructor_info->update($request->validated());

        return Redirect::route('user_area.profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
