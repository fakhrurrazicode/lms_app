<?php

namespace App\Http\Requests;

use App\Models\Course;
use App\Models\CourseCategory;
use Illuminate\Foundation\Http\FormRequest;

class CourseStoreRequest extends FormRequest
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
            'course_sub_category_id' => ['required'],
            // 'instructor_id' => ['required'],

            // 'image' => ['required'],
            'title' => ['required'],
            'slug' => ['required'],
            // 'description' => ['required'],
            // 'prerequisites' => ['required'],
            // 'goals' => ['required'],
            // 'duration' => ['required'],
            // 'status' => ['required'],
        ];
    }
}
