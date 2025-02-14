<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CourseCategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('course_categories')->delete();
        
        \DB::table('course_categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Programming',
                'slug' => 'programming',
                'deleted_at' => NULL,
                'created_at' => '2025-02-14 07:32:10',
                'updated_at' => '2025-02-14 07:32:10',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Graphic Design',
                'slug' => 'graphic-design',
                'deleted_at' => NULL,
                'created_at' => '2025-02-14 07:32:17',
                'updated_at' => '2025-02-14 07:32:17',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Video Editing',
                'slug' => 'video-editing',
                'deleted_at' => NULL,
                'created_at' => '2025-02-14 07:32:22',
                'updated_at' => '2025-02-14 07:32:22',
            ),
        ));
        
        
    }
}