<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class WishlistsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('wishlists')->delete();
        
        \DB::table('wishlists')->insert(array (
            0 => 
            array (
                'id' => 1,
                'user_id' => 6,
                'wishlistable_type' => 'App\\Models\\Course',
                'wishlistable_id' => 32,
                'created_at' => '2025-04-10 01:34:36',
                'updated_at' => '2025-04-10 01:34:36',
            ),
            1 => 
            array (
                'id' => 11,
                'user_id' => 6,
                'wishlistable_type' => 'App\\Models\\Course',
                'wishlistable_id' => 31,
                'created_at' => '2025-04-10 02:46:52',
                'updated_at' => '2025-04-10 02:46:52',
            ),
            2 => 
            array (
                'id' => 8,
                'user_id' => 6,
                'wishlistable_type' => 'App\\Models\\Course',
                'wishlistable_id' => 9,
                'created_at' => '2025-04-10 02:02:56',
                'updated_at' => '2025-04-10 02:02:56',
            ),
            3 => 
            array (
                'id' => 5,
                'user_id' => 6,
                'wishlistable_type' => 'App\\Models\\Course',
                'wishlistable_id' => 6,
                'created_at' => '2025-04-10 01:47:00',
                'updated_at' => '2025-04-10 01:47:00',
            ),
            4 => 
            array (
                'id' => 9,
                'user_id' => 6,
                'wishlistable_type' => 'App\\Models\\Course',
                'wishlistable_id' => 10,
                'created_at' => '2025-04-10 02:02:59',
                'updated_at' => '2025-04-10 02:02:59',
            ),
        ));
        
        
    }
}