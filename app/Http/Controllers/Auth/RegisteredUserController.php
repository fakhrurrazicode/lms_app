<?php

namespace App\Http\Controllers\Auth;

use App\Models\Coin;
use App\Models\User;
use Inertia\Inertia;

use Inertia\Response;
use App\Models\Voucher;
use Illuminate\Support\Str;
use Laravolt\Avatar\Avatar;
use App\Models\VoucherUsage;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Binafy\LaravelCart\Models\Cart;
use App\Http\Controllers\Controller;
use App\Models\ReferralCode;
use App\Models\ReferralCodeUsage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Storage;

class RegisteredUserController extends Controller
{


    public function create($referral_code = null): Response
    {
        return Inertia::render('Auth/Register', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'referral_code' => $referral_code
        ]);
    }


    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'referral_code' => [
                'nullable',
                'string',
                function ($attribute, $value, $fail) {
                    $referral_code = \App\Models\ReferralCode::where('code', $value)->first();

                    if (!$referral_code) {
                        $fail('Kode Referral tidak ditemukan.');
                        return;
                    }

                    if ($referral_code->expires_at && now()->greaterThan($referral_code->expires_at)) {
                        $fail('Kode Referral telah habis masa berlakunya.');
                        return;
                    }

                    if ($referral_code->used_count >= $referral_code->usage_limit) {
                        $fail('Kode Referral telah mencapai batas penggunaannya.');
                        return;
                    }
                },
            ],
        ]);




        $avatar = new Avatar();
        $generatedAvatar = $avatar->create($request->name)->toBase64();

        $imageName = Str::random(10) . '.png'; // Generate random filename
        $path = 'avatars/' . $imageName;
        Storage::disk('public')->put($path, base64_decode(str_replace('data:image/png;base64,', '', $avatar)));


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'photo' => $path,
        ]);

        $user->assignRole('student');

        if (array_key_exists('referral_code', $validated) && $validated['referral_code']) {
            // Voucher code diisi DAN sudah valid
            $referral_code = ReferralCode::where('code', $validated['referral_code'])->first();
            // Lanjutkan logika untuk referral_code yang sudah valid

            Coin::create([
                'user_id' => $user->id,
                'amount' => $referral_code->customer_coin_reward,
                'source' => 'referral_code_' . $referral_code->code,
            ]);

            Coin::create([
                'user_id' => $referral_code->owner_id,
                'amount' => $referral_code->owner_coin_reward,
                'source' => 'referral_code_' . $referral_code->code,
            ]);

            ReferralCodeUsage::create([
                'referral_code_id' => $referral_code->id,
                'user_id' => $user->id,
            ]);

            $referral_code->increment('used_count');
        }

        Cart::query()->firstOrCreate(['user_id' => $user->id]);

        event(new Registered($user));

        Auth::login($user);


        return redirect(route('user_area.dashboard', absolute: false));
    }
}
