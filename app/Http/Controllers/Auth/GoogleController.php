<?php

namespace App\Http\Controllers\Auth;

use App\Models\Cart;
use App\Models\User;
use App\Models\Setting;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Google\Client as Google_Client;
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
            return redirect(route('user_area.become_instructor.index', absolute: false));
        } else {
            return redirect(route('user_area.dashboard', absolute: false));
        }
    }


    public function youtubeConnect()
    {
        $client = new Google_Client();
        $client->setClientId(config('services.google.client_id'));
        $client->setClientSecret(config('services.google.client_secret'));
        $client->setRedirectUri(config('services.google.redirect'));
        $client->setScopes(['https://www.googleapis.com/auth/youtube.upload']);
        $client->setAccessType('offline');
        $client->setPrompt('consent');

        return redirect()->away($client->createAuthUrl());
    }

    public function youtubeCallback(Request $request)
    {
        $client = new Google_Client();
        $client->setClientId(config('services.google.client_id'));
        $client->setClientSecret(config('services.google.client_secret'));
        $client->setRedirectUri(config('services.google.redirect'));

        $token = $client->fetchAccessTokenWithAuthCode($request->code);

        // Simpan refresh_token ke database (misal ke settings table)
        Setting::updateOrCreate([
            'key' => 'youtube_tokens',
        ], [
            'value' => json_encode($token),
        ]);

        return redirect()->route('dashboard')->with('success', 'Terhubung dengan YouTube!');
    }
}
