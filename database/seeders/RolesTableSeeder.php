<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('roles')->delete();
        
        \DB::table('roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Administrator',
                'guard_name' => 'web',
                'created_at' => '2025-02-03 09:05:53',
                'updated_at' => '2025-02-03 09:05:53',
                'redirect_url' => '/backend',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Instructor',
                'guard_name' => 'web',
                'created_at' => '2025-02-03 09:06:00',
                'updated_at' => '2025-02-03 09:06:00',
                'redirect_url' => '/instructor_area',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Student',
                'guard_name' => 'web',
                'created_at' => '2025-02-03 09:06:05',
                'updated_at' => '2025-02-03 09:06:05',
                'redirect_url' => '/student_area',
            ),
        ));
        
        
    }
}