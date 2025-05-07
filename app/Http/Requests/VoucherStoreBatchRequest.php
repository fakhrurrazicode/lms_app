<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VoucherStoreBatchRequest extends FormRequest
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
            // 'code' => ['required'],
            'event_id' => ['required'],
            'prefix_code' => ['required'],
            // 'owner_id' => ['required'],
            'customer_coin_reward' => ['required'],
            'owner_coin_reward' => ['required'],
            'usage_limit' => ['required'],
            'expires_at' => ['required'],
        ];
    }
}
