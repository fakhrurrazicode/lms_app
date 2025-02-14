<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tags')->delete();
        
        \DB::table('tags')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Programming',
                'slug' => 'programming',
                'created_at' => '2025-02-14 06:52:24',
                'updated_at' => '2025-02-14 06:53:41',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Web Programming',
                'slug' => 'web-programming',
                'created_at' => '2025-02-14 06:53:33',
                'updated_at' => '2025-02-14 06:53:33',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Mobile Programming',
                'slug' => 'mobile-programming',
                'created_at' => '2025-02-14 06:53:51',
                'updated_at' => '2025-02-14 06:53:51',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Design',
                'slug' => 'design',
                'created_at' => '2025-02-14 06:53:59',
                'updated_at' => '2025-02-14 06:53:59',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Graphic Design',
                'slug' => 'graphic-design',
                'created_at' => '2025-02-14 06:54:05',
                'updated_at' => '2025-02-14 06:54:05',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Logo Design',
                'slug' => 'logo-design',
                'created_at' => '2025-02-14 06:54:12',
                'updated_at' => '2025-02-14 06:54:12',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Font Design',
                'slug' => 'font-design',
                'created_at' => '2025-02-14 06:54:24',
                'updated_at' => '2025-02-14 06:54:24',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Video Editing',
                'slug' => 'video-editing',
                'created_at' => '2025-02-14 06:54:35',
                'updated_at' => '2025-02-14 06:54:35',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'Photo Editing',
                'slug' => 'photo-editing',
                'created_at' => '2025-02-14 06:54:40',
                'updated_at' => '2025-02-14 06:54:40',
            ),
        ));
        
        
    }
}