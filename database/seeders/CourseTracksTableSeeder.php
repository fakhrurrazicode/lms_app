<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseTracksTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('course_tracks')->delete();
        
        \DB::table('course_tracks')->insert(array (
            0 => 
            array (
                'id' => 4,
                'user_id' => 7,
                'course_id' => 7,
                'course_section_id' => 19,
                'course_lecture_id' => 56,
                'created_at' => '2025-03-24 21:46:55',
                'updated_at' => '2025-03-24 21:46:55',
            ),
            1 => 
            array (
                'id' => 3,
                'user_id' => 7,
                'course_id' => 7,
                'course_section_id' => 19,
                'course_lecture_id' => 55,
                'created_at' => '2025-03-24 21:33:39',
                'updated_at' => '2025-03-24 21:33:39',
            ),
            2 => 
            array (
                'id' => 5,
                'user_id' => 7,
                'course_id' => 7,
                'course_section_id' => 19,
                'course_lecture_id' => 57,
                'created_at' => '2025-03-24 21:47:00',
                'updated_at' => '2025-03-24 21:47:00',
            ),
            3 => 
            array (
                'id' => 6,
                'user_id' => 7,
                'course_id' => 7,
                'course_section_id' => 20,
                'course_lecture_id' => 58,
                'created_at' => '2025-03-24 21:47:03',
                'updated_at' => '2025-03-24 21:47:03',
            ),
            4 => 
            array (
                'id' => 7,
                'user_id' => 7,
                'course_id' => 7,
                'course_section_id' => 20,
                'course_lecture_id' => 59,
                'created_at' => '2025-03-24 21:52:01',
                'updated_at' => '2025-03-24 21:52:01',
            ),
            5 => 
            array (
                'id' => 8,
                'user_id' => 7,
                'course_id' => 7,
                'course_section_id' => 20,
                'course_lecture_id' => 60,
                'created_at' => '2025-03-28 21:49:31',
                'updated_at' => '2025-03-28 21:49:31',
            ),
            6 => 
            array (
                'id' => 9,
                'user_id' => 7,
                'course_id' => 7,
                'course_section_id' => 21,
                'course_lecture_id' => 61,
                'created_at' => '2025-03-28 21:49:33',
                'updated_at' => '2025-03-28 21:49:33',
            ),
            7 => 
            array (
                'id' => 10,
                'user_id' => 7,
                'course_id' => 7,
                'course_section_id' => 21,
                'course_lecture_id' => 62,
                'created_at' => '2025-03-28 21:49:36',
                'updated_at' => '2025-03-28 21:49:36',
            ),
            8 => 
            array (
                'id' => 11,
                'user_id' => 7,
                'course_id' => 7,
                'course_section_id' => 21,
                'course_lecture_id' => 63,
                'created_at' => '2025-03-28 23:00:57',
                'updated_at' => '2025-03-28 23:00:57',
            ),
        ));
        
        
    }
}