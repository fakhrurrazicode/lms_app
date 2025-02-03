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
        ));
        
        
    }
}