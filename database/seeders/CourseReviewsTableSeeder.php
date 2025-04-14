<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseReviewsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('course_reviews')->delete();
        
        \DB::table('course_reviews')->insert(array (
            0 => 
            array (
                'id' => 1,
                'user_id' => 7,
                'course_id' => 7,
                'stars' => 5,
                'comment' => 'Review dan Komentar anda sangatlah berarti bagi kami untuk kemajuan di masa depan',
                'created_at' => '2025-03-27 21:43:06',
                'updated_at' => '2025-03-27 21:43:06',
            ),
        ));
        
        
    }
}