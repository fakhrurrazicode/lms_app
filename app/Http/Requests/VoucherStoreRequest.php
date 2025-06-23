<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class VoucherStoreRequest extends FormRequest
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

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $start = Carbon::parse($this->input('start_date'));
            $end = Carbon::parse($this->input('end_date'));

            if ($start->greaterThanOrEqualTo($end)) {
                $validator->errors()->add('start_date', 'Start date must be before the end date.');
            }
        });
    }
}
