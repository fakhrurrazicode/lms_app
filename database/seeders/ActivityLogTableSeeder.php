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
                'properties' => '{"attributes": {"id": 1, "name": "Fakhrurrazi", "email": "fakhrurrazi.code@gmail.com", "photo": null, "password": "$2y$12$Oz9ZkbkNpbpX3Oescf/jM.x42H3bY1QWXRRcdRMXE5HJIdBPpoExy", "username": null, "created_at": "2025-02-03 09:03:18", "updated_at": "2025-02-03 09:03:18", "remember_token": null, "email_verified_at": null}}',
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
                'properties' => '{"attributes": {"id": 2, "name": "Fakhrurrazi", "email": "fakhrurrazi.code@gmail.com", "photo": null, "password": "$2y$12$.TcDVEQ/mG1S56.M7TqLUu2JTS2Rrh/wbZSOJGYRk/VB5qFm9TJfW", "username": "fakhrurrazi.code", "created_at": "2025-02-04 02:38:07", "updated_at": "2025-02-04 02:38:07", "remember_token": null, "email_verified_at": null}}',
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
                'properties' => '{"attributes": {"id": 3, "name": "Fakhrurrazi", "email": "fakhrurrazi.code@gmail.com", "photo": null, "password": "$2y$12$9Xp50JkE2j5oPSzeH9tSk.W849gxRlO8WFRAVM/YyydTHleC3tSyS", "username": "fakhrurrazi.code", "created_at": "2025-02-04 03:18:00", "updated_at": "2025-02-04 03:18:00", "remember_token": null, "email_verified_at": null}}',
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
                'properties' => '{"attributes": {"id": 4, "name": "Fakhrurrazi", "email": "fakhrurrazi.code@gmail.com", "photo": null, "password": "$2y$12$E.6bu0f8eMdThCY0GulJbeNMvut1huAkSGxE3rg.fR/bOilRHjfZS", "username": "fakhrurrazi.code", "created_at": "2025-02-04 04:11:21", "updated_at": "2025-02-04 04:11:21", "remember_token": null, "email_verified_at": null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-04 04:11:21',
                'updated_at' => '2025-02-04 04:11:21',
            ),
            4 => 
            array (
                'id' => 5,
                'log_name' => 'default',
                'description' => 'created',
                'subject_type' => 'App\\Models\\User',
                'event' => 'created',
                'subject_id' => 5,
                'causer_type' => 'App\\Models\\User',
                'causer_id' => 4,
                'properties' => '{"attributes": {"id": 5, "name": "Administrator", "email": "administrator@gmail.com", "photo": null, "password": "$2y$12$xmYO.X8pNRYawBiyeBvE5uzpwiS44TrVcfPrQu8TG9JllMtDfXnrS", "username": null, "created_at": "2025-02-11 02:57:57", "updated_at": "2025-02-11 02:57:57", "remember_token": null, "email_verified_at": null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-11 02:57:57',
                'updated_at' => '2025-02-11 02:57:57',
            ),
            5 => 
            array (
                'id' => 6,
                'log_name' => 'default',
                'description' => 'created',
                'subject_type' => 'App\\Models\\User',
                'event' => 'created',
                'subject_id' => 6,
                'causer_type' => 'App\\Models\\User',
                'causer_id' => 4,
                'properties' => '{"attributes": {"id": 6, "name": "Instructor", "email": "instructor@gmail.com", "photo": null, "password": "$2y$12$jTBuMP55vF1ugWReREvGIuqPQ1eRWDTk05Kb1fUxm.OivgHEVf612", "username": null, "created_at": "2025-02-11 02:58:19", "updated_at": "2025-02-11 02:58:19", "remember_token": null, "email_verified_at": null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-11 02:58:19',
                'updated_at' => '2025-02-11 02:58:19',
            ),
            6 => 
            array (
                'id' => 7,
                'log_name' => 'default',
                'description' => 'created',
                'subject_type' => 'App\\Models\\User',
                'event' => 'created',
                'subject_id' => 7,
                'causer_type' => 'App\\Models\\User',
                'causer_id' => 4,
                'properties' => '{"attributes": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": null, "email_verified_at": null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-11 02:58:36',
                'updated_at' => '2025-02-11 02:58:36',
            ),
            7 => 
            array (
                'id' => 8,
                'log_name' => 'default',
                'description' => 'updated',
                'subject_type' => 'App\\Models\\User',
                'event' => 'updated',
                'subject_id' => 7,
                'causer_type' => 'App\\Models\\User',
                'causer_id' => 7,
                'properties' => '{"old": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": null, "email_verified_at": null}, "attributes": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": "vrPIOYPkNmgaiOEgpbLBeLQ3fvuAmgTdSSaTV4yqQOPuyrTvfkgt65gRIb3Y", "email_verified_at": null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-11 02:59:13',
                'updated_at' => '2025-02-11 02:59:13',
            ),
            8 => 
            array (
                'id' => 9,
                'log_name' => 'default',
                'description' => 'updated',
                'subject_type' => 'App\\Models\\User',
                'event' => 'updated',
                'subject_id' => 7,
                'causer_type' => 'App\\Models\\User',
                'causer_id' => 7,
                'properties' => '{"old": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": "vrPIOYPkNmgaiOEgpbLBeLQ3fvuAmgTdSSaTV4yqQOPuyrTvfkgt65gRIb3Y", "email_verified_at": null}, "attributes": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": "ahodTd6YHjWSXe826lfMiR3PFw9eRZQVwzBBddVgGb0ypn3zmhzivT8VPsOJ", "email_verified_at": null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-11 03:25:19',
                'updated_at' => '2025-02-11 03:25:19',
            ),
            9 => 
            array (
                'id' => 10,
                'log_name' => 'default',
                'description' => 'updated',
                'subject_type' => 'App\\Models\\User',
                'event' => 'updated',
                'subject_id' => 7,
                'causer_type' => 'App\\Models\\User',
                'causer_id' => 7,
                'properties' => '{"old": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": "ahodTd6YHjWSXe826lfMiR3PFw9eRZQVwzBBddVgGb0ypn3zmhzivT8VPsOJ", "email_verified_at": null}, "attributes": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": "xKFl4pEB1sGeZILezdQm2AHuYLmy6BmL5J1dBkfz8g8DeOm90fm7CL1pT29W", "email_verified_at": null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-11 03:32:12',
                'updated_at' => '2025-02-11 03:32:12',
            ),
            10 => 
            array (
                'id' => 11,
                'log_name' => 'default',
                'description' => 'updated',
                'subject_type' => 'App\\Models\\User',
                'event' => 'updated',
                'subject_id' => 7,
                'causer_type' => 'App\\Models\\User',
                'causer_id' => 7,
                'properties' => '{"old": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": "xKFl4pEB1sGeZILezdQm2AHuYLmy6BmL5J1dBkfz8g8DeOm90fm7CL1pT29W", "email_verified_at": null}, "attributes": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": "w4qSp9g01c9n93HfIcGbDfbZdO9XIHvdBqvwMlkpvFjFCRDADJ5K2ukYNsmX", "email_verified_at": null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-11 03:59:35',
                'updated_at' => '2025-02-11 03:59:35',
            ),
            11 => 
            array (
                'id' => 12,
                'log_name' => 'default',
                'description' => 'updated',
                'subject_type' => 'App\\Models\\User',
                'event' => 'updated',
                'subject_id' => 7,
                'causer_type' => 'App\\Models\\User',
                'causer_id' => 7,
                'properties' => '{"old": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": "w4qSp9g01c9n93HfIcGbDfbZdO9XIHvdBqvwMlkpvFjFCRDADJ5K2ukYNsmX", "email_verified_at": null}, "attributes": {"id": 7, "name": "Student", "email": "student@gmail.com", "photo": null, "password": "$2y$12$O/VLHJ/I90kVPccPVc8AdOC00SfxtU7igGZ52iRNrjFzeR1ujYPBm", "username": null, "created_at": "2025-02-11 02:58:36", "updated_at": "2025-02-11 02:58:36", "remember_token": "PF3ULgRFYcNtx9XANfqQuypRJ1PD3ojahlTbS2BvnYtoVMjvgqlVwXr7EP2D", "email_verified_at": null}}',
                'batch_uuid' => NULL,
                'created_at' => '2025-02-11 04:02:12',
                'updated_at' => '2025-02-11 04:02:12',
            ),
        ));
        
        
    }
}