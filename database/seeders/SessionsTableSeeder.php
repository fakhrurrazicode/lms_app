<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SessionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('sessions')->delete();
        
        \DB::table('sessions')->insert(array (
            0 => 
            array (
                'id' => 'G6rRZd2GgZcglQCb8Js9FyeEyllQAZcGdS6hTL22',
                'user_id' => NULL,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
                'payload' => 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMUkwdHZFczZRTVVacHZwTGlkNFNhQ2tuU3ZYMkk0NmlaQlNTaEFobyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fX0=',
                'last_activity' => 1739392018,
            ),
            1 => 
            array (
                'id' => 'WXIL8Hv8rxkiEOaAXvKndGUKsEBL8SzdZy3IxTOS',
                'user_id' => 5,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
                'payload' => 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiUTdzd1VuNDNVNmdib1ZBOXV4cTBIVFViajdiRGk2cTJ3U3hub2J4UyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9iYWNrZW5kL3RhZyI7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjU7fQ==',
                'last_activity' => 1739516223,
            ),
            2 => 
            array (
                'id' => '0V4BlPi3I8X3Ws3mIRktSf7LY7s8Yh1SkmhwT5TI',
                'user_id' => 7,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
                'payload' => 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoieW1FaW1pMk4xVFRWSzhVMlc0V29leXVrU0ZWNEJ4OEZBcHQzM3dPYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zdHVkZW50X2FyZWEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aTo3O30=',
                'last_activity' => 1739373604,
            ),
        ));
        
        
    }
}