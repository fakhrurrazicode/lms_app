<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ActivityLogTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('activity_log')->delete();
        
        \DB::table('activity_log')->insert(array (
            0 => 
            array (
                'id' => 1,
                'log_name' => 'default',
                'description' => 'created',
                'subject_type' => 'App\\Models\\User',
                'event' => 'created',
                'subject_id' => 1,
                'causer_type' => NULL,
                'causer_id' => NULL,
                'properties' => '{"attributes":{"id":1,"name":"Fakhrurrazi","username":null,"email":"fakhrurrazi.code@gmail.com","email_verified_at":null,"password":"$2y$12$Oz9ZkbkNpbpX3Oescf\\/jM.x42H3bY1QWXRRcdRMXE5HJIdBPpoExy","remember_token":null,"created_at":"2025-02-03 09:03:18","updated_at":"2025-02-03 09:03:18","photo":null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-03 09:03:18',
                'updated_at' => '2025-02-03 09:03:18',
            ),
            1 => 
            array (
                'id' => 2,
                'log_name' => 'default',
                'description' => 'created',
                'subject_type' => 'App\\Models\\User',
                'event' => 'created',
                'subject_id' => 2,
                'causer_type' => NULL,
                'causer_id' => NULL,
                'properties' => '{"attributes":{"id":2,"name":"Fakhrurrazi","username":"fakhrurrazi.code","email":"fakhrurrazi.code@gmail.com","email_verified_at":null,"password":"$2y$12$.TcDVEQ\\/mG1S56.M7TqLUu2JTS2Rrh\\/wbZSOJGYRk\\/VB5qFm9TJfW","remember_token":null,"created_at":"2025-02-04 02:38:07","updated_at":"2025-02-04 02:38:07","photo":null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-04 02:38:08',
                'updated_at' => '2025-02-04 02:38:08',
            ),
            2 => 
            array (
                'id' => 3,
                'log_name' => 'default',
                'description' => 'created',
                'subject_type' => 'App\\Models\\User',
                'event' => 'created',
                'subject_id' => 3,
                'causer_type' => NULL,
                'causer_id' => NULL,
                'properties' => '{"attributes":{"id":3,"name":"Fakhrurrazi","username":"fakhrurrazi.code","email":"fakhrurrazi.code@gmail.com","email_verified_at":null,"password":"$2y$12$9Xp50JkE2j5oPSzeH9tSk.W849gxRlO8WFRAVM\\/YyydTHleC3tSyS","remember_token":null,"created_at":"2025-02-04 03:18:00","updated_at":"2025-02-04 03:18:00","photo":null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-04 03:18:00',
                'updated_at' => '2025-02-04 03:18:00',
            ),
            3 => 
            array (
                'id' => 4,
                'log_name' => 'default',
                'description' => 'created',
                'subject_type' => 'App\\Models\\User',
                'event' => 'created',
                'subject_id' => 4,
                'causer_type' => NULL,
                'causer_id' => NULL,
                'properties' => '{"attributes":{"id":4,"name":"Fakhrurrazi","username":"fakhrurrazi.code","email":"fakhrurrazi.code@gmail.com","email_verified_at":null,"password":"$2y$12$E.6bu0f8eMdThCY0GulJbeNMvut1huAkSGxE3rg.fR\\/bOilRHjfZS","remember_token":null,"created_at":"2025-02-04 04:11:21","updated_at":"2025-02-04 04:11:21","photo":null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-04 04:11:21',
                'updated_at' => '2025-02-04 04:11:21',
            ),
        ));
        
        
    }
}