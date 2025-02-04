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
                'id' => 4,
                'name' => 'Fakhrurrazi',
                'username' => 'fakhrurrazi.code',
                'email' => 'fakhrurrazi.code@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$E.6bu0f8eMdThCY0GulJbeNMvut1huAkSGxE3rg.fR/bOilRHjfZS',
                'remember_token' => NULL,
                'created_at' => '2025-02-04 04:11:21',
                'updated_at' => '2025-02-04 04:11:21',
                'photo' => NULL,
            ),
        ));
        
        
    }
}