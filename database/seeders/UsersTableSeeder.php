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
            1 => 
            array (
                'id' => 5,
                'name' => 'Administrator',
                'username' => NULL,
                'email' => 'administrator@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$xmYO.X8pNRYawBiyeBvE5uzpwiS44TrVcfPrQu8TG9JllMtDfXnrS',
                'remember_token' => NULL,
                'created_at' => '2025-02-11 02:57:57',
                'updated_at' => '2025-02-11 02:57:57',
                'photo' => NULL,
            ),
            2 => 
            array (
                'id' => 6,
                'name' => 'Instructor',
                'username' => NULL,
                'email' => 'instructor@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$jTBuMP55vF1ugWReREvGIuqPQ1eRWDTk05Kb1fUxm.OivgHEVf612',
                'remember_token' => NULL,
                'created_at' => '2025-02-11 02:58:19',
                'updated_at' => '2025-02-11 02:58:19',
                'photo' => NULL,
            ),
            3 => 
            array (
                'id' => 7,
                'name' => 'Student',
                'username' => NULL,
                'email' => 'student@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm',
                'remember_token' => 'PF3ULgRFYcNtx9XANfqQuypRJ1PD3ojahlTbS2BvnYtoVMjvgqlVwXr7EP2D',
                'created_at' => '2025-02-11 02:58:36',
                'updated_at' => '2025-02-11 02:58:36',
                'photo' => NULL,
            ),
        ));
        
        
    }
}