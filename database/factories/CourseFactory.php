<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use App\Models\CourseCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $randomCourseCategory = CourseCategory::inRandomOrder()->first();
        $randomInstructor = User::inRandomOrder()->role('Instructor')->first();

        $title = fake()->sentence();
        return [
            'course_category_id' => $randomCourseCategory->id,
            'instructor_id' => $randomInstructor->id,
            // 'image' => fake(),
            'title' => $title,
            'slug' => Str::slug(strtolower($title)),
            'description' => fake()->realText(200, 2),
            'prerequisites' => fake()->realText(200, 2),
            'goals' => fake()->realText(200, 2),
            'duration' => 100,
            'status' => 1,
        ];
    }
}
