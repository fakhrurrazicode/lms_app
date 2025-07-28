<?php

// app/Http/Controllers/Auth/CustomVerifyEmailController.php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class CustomVerifyEmailController extends Controller
{
    public function verify(Request $request, $id, $hash)
    {
        $user = User::findOrFail($id);

        // Cek hash valid
        if (! hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
            abort(403, 'Invalid verification link.');
        }

        // Kalau sudah diverifikasi
        if ($user->hasVerifiedEmail()) {
            Auth::login($user); // Auto-login
            return redirect('/home')->with('status', 'Email sudah diverifikasi.');
        }

        // Tandai sebagai verified
        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        Auth::login($user); // Auto-login setelah verifikasi

        return redirect('/home')->with('status', 'Email berhasil diverifikasi dan Anda telah login.');
    }
}
