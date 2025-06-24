<?php

namespace App\Http\Requests;

use Closure;
use App\Models\Voucher;
use App\Models\VoucherUsage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class SetVoucherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'code' => [
                'required',
                'string',
                // function (string $attribute, mixed $value, Closure $fail) {
                //     $voucher = Voucher::where('code', $value)->first();



                //     if (!$voucher || !$voucher->isValid()) {
                //         $fail("The {$attribute} is invalid.");
                //     }

                //     // Cek apakah user sudah pernah pakai voucher ini
                //     $user_id = Auth::id();
                //     $used = VoucherUsage::where('voucher_id', $voucher->id)
                //         ->where('user_id', $user_id)
                //         ->exists();

                //     if ($used) {
                //         $fail('Voucher ini sudah pernah digunakan oleh Anda.');
                //     }
                // },
            ],
        ];
    }
}
