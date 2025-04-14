<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CartItemsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cart_items')->delete();
        
        \DB::table('cart_items')->insert(array (
            0 => 
            array (
                'id' => 16,
                'cart_id' => 2,
                'itemable_type' => 'App\\Models\\Course',
                'itemable_id' => 33,
                'quantity' => 1,
                'options' => NULL,
                'created_at' => '2025-04-12 12:16:03',
                'updated_at' => '2025-04-12 12:16:03',
            ),
        ));
        
        
    }
}