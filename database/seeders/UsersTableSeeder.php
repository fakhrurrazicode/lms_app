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
                'id' => 11,
                'name' => 'Fakhrurrazi',
                'username' => 'fakhrurrazi.code',
                'email' => 'fakhrurrazi.code@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$4tF.dUofG6aHhgJVSBc50O6CsYnl7U4Q995smlQsPOXPpNGt42TgG',
                'remember_token' => NULL,
                'created_at' => '2025-04-14 07:45:50',
                'updated_at' => '2025-04-14 07:45:50',
                'photo' => 'avatars/qfkDFjj7QP.png',
                'bio' => NULL,
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
                'bio' => NULL,
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
                'bio' => NULL,
            ),
            3 => 
            array (
                'id' => 7,
                'name' => 'Student',
                'username' => NULL,
                'email' => 'student@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm',
                'remember_token' => 'cL8Vd45ibiYyilhrhSbsppofRIYREqgp2bVDXGhtie4HcXAHe0oD3YuSiEZ0',
                'created_at' => '2025-02-11 02:58:36',
                'updated_at' => '2025-02-11 02:58:36',
                'photo' => NULL,
                'bio' => NULL,
            ),
            4 => 
            array (
                'id' => 8,
                'name' => 'Instructor B',
                'username' => NULL,
                'email' => 'instructor.b@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$b9znWh.8TU2101DWNY/XMeFMjY4cBkTU5ODFwT6g791BaHTA9lPiS',
                'remember_token' => NULL,
                'created_at' => '2025-02-14 07:37:34',
                'updated_at' => '2025-02-14 07:37:34',
                'photo' => NULL,
                'bio' => NULL,
            ),
            5 => 
            array (
                'id' => 9,
                'name' => 'Instructor C',
                'username' => NULL,
                'email' => 'instructor.c@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$4qq34dpipKsFfuONwKOlNO5AeZ713ZiIGY4FMHqz8riYbOZjVLk0O',
                'remember_token' => NULL,
                'created_at' => '2025-02-14 07:37:57',
                'updated_at' => '2025-02-14 07:37:57',
                'photo' => NULL,
                'bio' => NULL,
            ),
            6 => 
            array (
                'id' => 10,
                'name' => 'Vishwas',
                'username' => NULL,
                'email' => 'vishwas@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$JiQhPzZn2XgdJZukK71CXenXBzG1x53Bn9wxSuEhs.ex7vrgCTg9u',
                'remember_token' => NULL,
                'created_at' => '2025-04-12 02:40:52',
                'updated_at' => '2025-04-12 02:40:52',
                'photo' => NULL,
                'bio' => NULL,
            ),
        ));
        
        
    }
}