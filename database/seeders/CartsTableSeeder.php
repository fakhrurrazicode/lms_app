<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CartsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('carts')->delete();
        
        \DB::table('carts')->insert(array (
            0 => 
            array (
                'id' => 1,
                'user_id' => 10,
                'created_at' => '2025-02-28 02:55:29',
                'updated_at' => '2025-02-28 02:55:29',
                'coupon_id' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'user_id' => 7,
                'created_at' => '2025-02-28 02:55:29',
                'updated_at' => '2025-02-28 02:55:29',
                'coupon_id' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'user_id' => 6,
                'created_at' => '2025-03-25 19:48:04',
                'updated_at' => '2025-03-25 19:48:04',
                'coupon_id' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'user_id' => 5,
                'created_at' => '2025-04-11 03:18:09',
                'updated_at' => '2025-04-11 03:18:09',
                'coupon_id' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'user_id' => 11,
                'created_at' => '2025-04-14 07:45:50',
                'updated_at' => '2025-04-14 07:45:50',
                'coupon_id' => NULL,
            ),
        ));
        
        
    }
}