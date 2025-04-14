<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EnrollmentsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('enrollments')->delete();
        
        \DB::table('enrollments')->insert(array (
            0 => 
            array (
                'id' => 1,
                'course_id' => 7,
                'user_id' => 7,
                'order_id' => 7,
                'order_item_id' => 7,
                'progress' => 0.0,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}