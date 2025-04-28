<?php

namespace App\Http\Controllers\Auth;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;
use App\Notifications\SendPasswordNotification;

class GoogleController extends Controller
{
    public function redirect($as_instructor = 0)
    {

        session(['as_instructor' => $as_instructor]);

        return Socialite::driver('google')->with(['prompt' => 'select_account'])->redirect();
    }

    public function callback()
    {
        $googleUser = Socialite::driver('google')->with(['prompt' => 'select_account'])->user();

        $google_id = $googleUser->getId();
        $google_email = $googleUser->getEmail();

        $user = User::where('google_id', $google_id)->orWhere('email', $google_email)->first();


        if (!$user) {

            // Get the avatar URL
            $avatarUrl = $googleUser->getAvatar();

            // Download the image content
            $avatarContents = Http::get($avatarUrl)->body();

            // Create a unique filename
            $avatarFilename = 'avatars/' . Str::uuid() . '.png'; // you can change jpg to png if needed

            // Save to storage (public disk)
            Storage::disk('public')->put($avatarFilename, $avatarContents);

            $randomPassword = Str::random(12);

            $user = User::create(
                [
                    'name' => $googleUser->getName(),
                    'username' => explode('@', $googleUser->getEmail())[0],
                    'email' => $googleUser->getEmail(),
                    'password' => bcrypt($randomPassword), // Just to satisfy fillable fields
                    'google_id' => $googleUser->getId(),
                    'photo' => $avatarFilename, // store relative path like users/xxxx.jpg
                    'email_verified_at' => now(),
                ]
            );

            $user->assignRole('student');
            Cart::query()->firstOrCreate(['user_id' => $user->id]);
            $user->notify(new SendPasswordNotification($randomPassword));

            // try {
            //     $user->notify(new SendPasswordNotification($randomPassword));
            // } catch (\Exception $e) {
            //     Log::error('Failed to send email: ' . $e->getMessage());
            // }
            event(new Registered($user));
        }

        Auth::login($user);

        if (session('as_instructor', 0)) {
            return redirect(route('user_area.become_instructor.create', absolute: false));
        } else {
            return redirect(route('home', absolute: false));
        }
    }
}
