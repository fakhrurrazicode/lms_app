<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class InstructorInfosTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('instructor_infos')->delete();
        
        \DB::table('instructor_infos')->insert(array (
            0 => 
            array (
                'id' => 1,
                'user_id' => 11,
                'id_card' => '',
                'bio' => '',
                'status' => 1,
                'verification_message' => NULL,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}