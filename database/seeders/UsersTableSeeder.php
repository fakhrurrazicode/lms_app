<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 3,
                'name' => 'Fakhrurrazi',
                'username' => 'fakhrurrazi.code',
                'email' => 'fakhrurrazi.code@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$9Xp50JkE2j5oPSzeH9tSk.W849gxRlO8WFRAVM/YyydTHleC3tSyS',
                'remember_token' => NULL,
                'created_at' => '2025-02-04 03:18:00',
                'updated_at' => '2025-02-04 03:18:00',
                'photo' => NULL,
            ),
        ));
        
        
    }
}