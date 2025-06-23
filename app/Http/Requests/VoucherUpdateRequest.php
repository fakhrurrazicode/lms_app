<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VoucherUpdateRequest extends FormRequest
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
            'event_id' => ['required'],
            'code' => ['required'],
            'type' => ['required'],
            'value' => ['required'],
            'max_discount' => ['required'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date'],
            'quota' => ['required'],
        ];
    }
}
