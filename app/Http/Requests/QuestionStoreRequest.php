<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuestionStoreRequest extends FormRequest
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
            'evaluation_id' => 'required|exists:evaluations,id',
            'question' => 'required|string|max:1000',
            'type' => 'required|string|in:multiple_choice,essay', // misal
            'items' => 'required|array|min:1',
            'items.*.text' => 'required|string|max:255',
            'items.*.is_correct' => 'required|boolean',
        ];
    }
}
