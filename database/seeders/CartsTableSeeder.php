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
        ));
        
        
    }
}