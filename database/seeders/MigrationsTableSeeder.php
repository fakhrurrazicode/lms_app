<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MigrationsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('migrations')->delete();
        
        \DB::table('migrations')->insert(array (
            0 => 
            array (
                'id' => 1,
                'migration' => '0001_01_01_000000_create_users_table',
                'batch' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'migration' => '0001_01_01_000001_create_cache_table',
                'batch' => 1,
            ),
            2 => 
            array (
                'id' => 3,
                'migration' => '0001_01_01_000002_create_jobs_table',
                'batch' => 1,
            ),
            3 => 
            array (
                'id' => 4,
                'migration' => '2025_01_07_165106_create_permission_tables',
                'batch' => 1,
            ),
            4 => 
            array (
                'id' => 5,
                'migration' => '2025_01_10_024950_create_course_categories_table',
                'batch' => 1,
            ),
            5 => 
            array (
                'id' => 6,
                'migration' => '2025_01_10_034942_create_sub_course_categories_table',
                'batch' => 1,
            ),
            6 => 
            array (
                'id' => 7,
                'migration' => '2025_01_13_011700_add_custom_users_table_field',
                'batch' => 1,
            ),
            7 => 
            array (
                'id' => 8,
                'migration' => '2025_01_13_012323_create_courses_table',
                'batch' => 1,
            ),
            8 => 
            array (
                'id' => 9,
                'migration' => '2025_01_13_045332_create_course_sub_categories_table',
                'batch' => 1,
            ),
            9 => 
            array (
                'id' => 10,
                'migration' => '2025_01_15_021417_create_course_sections_table',
                'batch' => 1,
            ),
            10 => 
            array (
                'id' => 11,
                'migration' => '2025_01_15_021435_create_course_lectures_table',
                'batch' => 1,
            ),
            11 => 
            array (
                'id' => 12,
                'migration' => '2025_01_16_041821_create_activity_log_table',
                'batch' => 1,
            ),
            12 => 
            array (
                'id' => 13,
                'migration' => '2025_01_16_041822_add_event_column_to_activity_log_table',
                'batch' => 1,
            ),
            13 => 
            array (
                'id' => 14,
                'migration' => '2025_01_16_041823_add_batch_uuid_column_to_activity_log_table',
                'batch' => 1,
            ),
        ));
        
        
    }
}