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
                'id' => 1,
                'name' => 'Fakhrurrazi',
                'username' => NULL,
                'email' => 'fakhrurrazi.code@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$Oz9ZkbkNpbpX3Oescf/jM.x42H3bY1QWXRRcdRMXE5HJIdBPpoExy',
                'remember_token' => NULL,
                'created_at' => '2025-02-03 09:03:18',
                'updated_at' => '2025-02-03 09:03:18',
                'photo' => NULL,
            ),
        ));
        
        
    }
}