<?php

namespace App\Http\Requests;

use App\Models\CourseCategory;
use App\Models\SubCourseCategory;
use Illuminate\Foundation\Http\FormRequest;

class SubCourseCategoryUpdateRequest extends FormRequest
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
            'course_category_id' => ['required', 'exists:' . CourseCategory::class . ',id'],
            'name' => ['required', 'max:50', 'unique:' . SubCourseCategory::class . ',name,' . $this->route('sub_course_category')->id],
            'slug' => ['required', 'max:50', 'unique:' . SubCourseCategory::class . ',slug,' . $this->route('sub_course_category')->id],
        ];
    }
}
