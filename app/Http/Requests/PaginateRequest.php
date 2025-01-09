<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaginateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function prepareForValidation()
    {
        $this->merge([
            'perpage' => request()->query('perpage') ? request()->query('perpage') : 10,
            'orderby' => request()->query('orderby') ? request()->query('orderby') : 'created_at',
            'ordermethod' => request()->query('ordermethod') ? request()->query('ordermethod') : 'DESC',
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }
}
