<?php

namespace App\Http\Requests;

use App\Models\Course;
use Closure;
use Illuminate\Foundation\Http\FormRequest;

class JoinCourseRequest extends FormRequest
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
            'course_id' => ['required', function (string $attribute, mixed $course_id, Closure $fail) {
                $course = Course::find($course_id);
                if ($course) {
                    if ($course->price > 0) {
                        $fail("{$attribute} tidak dapat di akses karna berbayar");
                    }
                } else {
                    $fail("{$attribute} invalid.");
                }
            },]
        ];
    }
}
