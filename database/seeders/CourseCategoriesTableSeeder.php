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
        
        
        
    }
}