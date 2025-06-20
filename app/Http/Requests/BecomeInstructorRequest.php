<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class BecomeInstructorRequest extends FormRequest
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

        if (Auth::check()) {
            return [
                'id_card' => ['required', 'image'],
                'bio' => ['required'],
            ];
        } else {
            return [
                'name' => 'required|string|max:255',
                'username' => 'required|string|max:255',
                'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
                'password' => ['required', 'confirmed', Password::defaults()],
                'id_card' => ['required', 'image'],
                'bio' => ['required'],
                'phone_number' =>  ['required', 'regex:/^(\+62|08)[0-9]{8,13}$/'],
            ];
        }
    }

    public function messages(): array
    {
        return [
            // 'phone.required' => 'Nomor telepon wajib diisi.',
            'phone_number.regex' => 'Nomor telepon harus dimulai dengan +62 atau 08 dan diikuti 8–13 digit angka.',
        ];
    }
}
