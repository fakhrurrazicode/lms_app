<?php

namespace App\Http\Controllers\Auth;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered;
use Laravel\Socialite\Facades\Socialite;

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

        $user = User::where('google_id', $google_id)->first();


        if (!$user) {
            $user = User::create(
                [
                    'name' => $googleUser->getName(),
                    'username' => explode('@', $googleUser->getEmail())[0],
                    'email' => $googleUser->getEmail(),
                    'password' => bcrypt(Str::random(24)), // Just to satisfy fillable fields
                    'google_id' => $googleUser->getId(),
                ]
            );

            $user->assignRole('student');
            Cart::query()->firstOrCreate(['user_id' => $user->id]);
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
