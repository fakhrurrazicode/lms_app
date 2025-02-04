<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('permissions')->delete();
        
        \DB::table('permissions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'backend.role.index',
                'guard_name' => 'web',
                'created_at' => '2025-02-03 09:06:58',
                'updated_at' => '2025-02-03 09:06:58',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'backend.role.create',
                'guard_name' => 'web',
                'created_at' => '2025-02-03 09:07:04',
                'updated_at' => '2025-02-03 09:07:04',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'backend.role.store',
                'guard_name' => 'web',
                'created_at' => '2025-02-03 09:07:12',
                'updated_at' => '2025-02-03 09:07:12',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'backend.role.edit',
                'guard_name' => 'web',
                'created_at' => '2025-02-03 09:07:17',
                'updated_at' => '2025-02-03 09:07:17',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'backend.role.update',
                'guard_name' => 'web',
                'created_at' => '2025-02-03 09:07:22',
                'updated_at' => '2025-02-03 09:07:22',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'backend.role.destroy',
                'guard_name' => 'web',
                'created_at' => '2025-02-03 09:07:38',
                'updated_at' => '2025-02-03 09:07:38',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'backend.permission.index',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:38:52',
                'updated_at' => '2025-02-04 02:38:52',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'backend.permission.create',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:39:01',
                'updated_at' => '2025-02-04 02:39:01',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'backend.permission.store',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:39:06',
                'updated_at' => '2025-02-04 02:39:06',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'backend.permission.edit',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:39:13',
                'updated_at' => '2025-02-04 02:39:13',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'backend.permission.update',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:39:19',
                'updated_at' => '2025-02-04 02:39:19',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'backend.permission.destroy',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:39:27',
                'updated_at' => '2025-02-04 02:39:27',
            ),
            12 => 
            array (
                'id' => 13,
                'name' => 'backend.user.index',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:39:46',
                'updated_at' => '2025-02-04 02:39:46',
            ),
            13 => 
            array (
                'id' => 14,
                'name' => 'backend.user.create',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:39:52',
                'updated_at' => '2025-02-04 02:39:52',
            ),
            14 => 
            array (
                'id' => 15,
                'name' => 'backend.user.store',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:39:58',
                'updated_at' => '2025-02-04 02:39:58',
            ),
            15 => 
            array (
                'id' => 16,
                'name' => 'backend.user.edit',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:40:04',
                'updated_at' => '2025-02-04 02:40:04',
            ),
            16 => 
            array (
                'id' => 17,
                'name' => 'backend.user.update',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:40:09',
                'updated_at' => '2025-02-04 02:40:09',
            ),
            17 => 
            array (
                'id' => 18,
                'name' => 'backend.user.destroy',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 02:40:15',
                'updated_at' => '2025-02-04 02:40:15',
            ),
            18 => 
            array (
                'id' => 19,
                'name' => 'backend.course_category.index',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:20:20',
                'updated_at' => '2025-02-04 03:20:20',
            ),
            19 => 
            array (
                'id' => 20,
                'name' => 'backend.course_category.create',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:20:27',
                'updated_at' => '2025-02-04 03:20:27',
            ),
            20 => 
            array (
                'id' => 21,
                'name' => 'backend.course_category.store',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:20:32',
                'updated_at' => '2025-02-04 03:20:32',
            ),
            21 => 
            array (
                'id' => 22,
                'name' => 'backend.course_category.edit',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:20:37',
                'updated_at' => '2025-02-04 03:20:37',
            ),
            22 => 
            array (
                'id' => 23,
                'name' => 'backend.course_category.update',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:20:43',
                'updated_at' => '2025-02-04 03:20:43',
            ),
            23 => 
            array (
                'id' => 24,
                'name' => 'backend.course_category.destroy',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:20:49',
                'updated_at' => '2025-02-04 03:20:49',
            ),
            24 => 
            array (
                'id' => 25,
                'name' => 'backend.course_sub_category.index',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:21:19',
                'updated_at' => '2025-02-04 03:21:19',
            ),
            25 => 
            array (
                'id' => 26,
                'name' => 'backend.course_sub_category.create',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:21:25',
                'updated_at' => '2025-02-04 03:21:25',
            ),
            26 => 
            array (
                'id' => 27,
                'name' => 'backend.course_sub_category.store',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:21:33',
                'updated_at' => '2025-02-04 03:21:33',
            ),
            27 => 
            array (
                'id' => 28,
                'name' => 'backend.course_sub_category.edit',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:21:38',
                'updated_at' => '2025-02-04 03:21:38',
            ),
            28 => 
            array (
                'id' => 29,
                'name' => 'backend.course_sub_category.update',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:21:56',
                'updated_at' => '2025-02-04 03:21:56',
            ),
            29 => 
            array (
                'id' => 30,
                'name' => 'backend.course_sub_category.destroy',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:22:02',
                'updated_at' => '2025-02-04 03:22:02',
            ),
            30 => 
            array (
                'id' => 31,
                'name' => 'backend.course.index',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:22:21',
                'updated_at' => '2025-02-04 03:22:21',
            ),
            31 => 
            array (
                'id' => 32,
                'name' => 'backend.course.create',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:22:33',
                'updated_at' => '2025-02-04 03:22:33',
            ),
            32 => 
            array (
                'id' => 33,
                'name' => 'backend.course.store',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:22:39',
                'updated_at' => '2025-02-04 03:22:39',
            ),
            33 => 
            array (
                'id' => 34,
                'name' => 'backend.course.edit',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:22:45',
                'updated_at' => '2025-02-04 03:22:59',
            ),
            34 => 
            array (
                'id' => 35,
                'name' => 'backend.course.update',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:23:05',
                'updated_at' => '2025-02-04 03:23:05',
            ),
            35 => 
            array (
                'id' => 36,
                'name' => 'backend.course.destroy',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:23:12',
                'updated_at' => '2025-02-04 03:23:12',
            ),
            36 => 
            array (
                'id' => 37,
                'name' => 'backend.course_section.index',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:30:27',
                'updated_at' => '2025-02-04 03:30:27',
            ),
            37 => 
            array (
                'id' => 38,
                'name' => 'backend.course_section.create',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:30:36',
                'updated_at' => '2025-02-04 03:30:36',
            ),
            38 => 
            array (
                'id' => 39,
                'name' => 'backend.course_section.store',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:30:42',
                'updated_at' => '2025-02-04 03:30:42',
            ),
            39 => 
            array (
                'id' => 40,
                'name' => 'backend.course_section.edit',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:31:03',
                'updated_at' => '2025-02-04 03:31:03',
            ),
            40 => 
            array (
                'id' => 41,
                'name' => 'backend.course_section.update',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:31:10',
                'updated_at' => '2025-02-04 03:31:10',
            ),
            41 => 
            array (
                'id' => 42,
                'name' => 'backend.course_section.destroy',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:31:17',
                'updated_at' => '2025-02-04 03:31:17',
            ),
            42 => 
            array (
                'id' => 43,
                'name' => 'backend.course_lecture.index',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:31:43',
                'updated_at' => '2025-02-04 03:31:43',
            ),
            43 => 
            array (
                'id' => 44,
                'name' => 'backend.course_lecture.create',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:31:55',
                'updated_at' => '2025-02-04 03:31:55',
            ),
            44 => 
            array (
                'id' => 45,
                'name' => 'backend.course_lecture.store',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:32:01',
                'updated_at' => '2025-02-04 03:32:01',
            ),
            45 => 
            array (
                'id' => 46,
                'name' => 'backend.course_lecture.edit',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:32:08',
                'updated_at' => '2025-02-04 03:32:08',
            ),
            46 => 
            array (
                'id' => 47,
                'name' => 'backend.course_lecture.update',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:32:13',
                'updated_at' => '2025-02-04 03:32:13',
            ),
            47 => 
            array (
                'id' => 48,
                'name' => 'backend.course_lecture.destroy',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:32:22',
                'updated_at' => '2025-02-04 03:32:22',
            ),
            48 => 
            array (
                'id' => 49,
                'name' => 'backend.activity_logs.index',
                'guard_name' => 'web',
                'created_at' => '2025-02-04 03:32:46',
                'updated_at' => '2025-02-04 03:34:32',
            ),
        ));
        
        
    }
}