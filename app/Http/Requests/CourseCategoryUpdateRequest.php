<?php

namespace App\Http\Requests;

use App\Models\CourseCategory;
use Illuminate\Foundation\Http\FormRequest;

class CourseCategoryUpdateRequest extends FormRequest
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
            'name' => ['required', 'max:50', 'unique:' . CourseCategory::class . ',name,' . $this->route('course_category')->id],
            'slug' => ['required', 'max:50', 'unique:' . CourseCategory::class . ',slug,' . $this->route('course_category')->id],
        ];
    }
}
