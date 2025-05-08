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
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Storage;

class RegisteredUserController extends Controller
{


    public function create(): Response
    {
        return Inertia::render('Auth/Register', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
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
            'voucher_code' => [
                'nullable',
                'string',
                function ($attribute, $value, $fail) {
                    $voucher = \App\Models\Voucher::where('code', $value)->first();

                    if (!$voucher) {
                        $fail('Kode Voucher tidak ditemukan.');
                        return;
                    }

                    if ($voucher->expires_at && now()->greaterThan($voucher->expires_at)) {
                        $fail('Kode voucher telah habis masa berlakunya.');
                        return;
                    }

                    if ($voucher->used_count >= $voucher->usage_limit) {
                        $fail('Kode voucher telah mencapai batas penggunaannya.');
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

        if (array_key_exists('voucher_code', $validated) && $validated['voucher_code']) {
            // Voucher code diisi DAN sudah valid
            $voucher = Voucher::where('code', $validated['voucher_code'])->first();
            // Lanjutkan logika untuk voucher yang sudah valid

            Coin::create([
                'user_id' => $user->id,
                'amount' => $voucher->customer_coin_reward,
                'source' => 'voucher_' . $voucher->code,
            ]);

            Coin::create([
                'user_id' => $voucher->owner_id,
                'amount' => $voucher->owner_coin_reward,
                'source' => 'referral_' . $voucher->code,
            ]);

            VoucherUsage::create([
                'voucher_id' => $voucher->id,
                'user_id' => $user->id,
            ]);

            $voucher->increment('used_count');
        }

        Cart::query()->firstOrCreate(['user_id' => $user->id]);

        event(new Registered($user));

        Auth::login($user);


        return redirect(route('user_area.dashboard', absolute: false));
    }
}
