<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InstructorProfileUpdateRequest extends FormRequest
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
            'bio' => ['required', 'string', 'max:255'],
            'facebook_url' => ['required', 'url:http,https', 'string', 'max:255'],
            'instagram_url' => ['required', 'url:http,https', 'string', 'max:255'],
            'youtube_url' => ['required', 'url:http,https', 'string', 'max:255'],
        ];
    }
}
