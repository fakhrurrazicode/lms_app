<?php

namespace App\Http\Requests;

use App\Models\Course;
use App\Models\CourseSection;
use Illuminate\Foundation\Http\FormRequest;

class CourseLectureStoreRequest extends FormRequest
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
            'course_id' => ['required', 'exists:' . Course::class . ',id'],
            'course_section_id' => ['required', 'exists:' . CourseSection::class . ',id'],

            'video' => [
                'required',          // The video file is required
                'file',              // The uploaded input must be a file
                'mimes:mp4,mov,avi', // Specify allowed file types
                'max:51200',         // Maximum file size in kilobytes (50MB in this case)
            ],
            'title' => ['required'],
            'description' => ['required'],
        ];
    }
}
