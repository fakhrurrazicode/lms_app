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
                'id' => 'G3TcLvPaLT6dJW88xSuJLBgnlAaxb7HzwYLFbYEv',
                'user_id' => 11,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
                'payload' => 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoibFdJWWFqYWlQcG02V3ptNHg5WWRtdkNjYm1qaWRyMTE0ZTdiMGNvZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2VyX2FyZWEvcHJvZmlsZSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjExO30=',
                'last_activity' => 1744616859,
            ),
            1 => 
            array (
                'id' => 'fb87HtFAzPUN4Z0ddyljReYh9HGj9OklrMw31eAp',
                'user_id' => 7,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
                'payload' => 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiMG5FNk10dDJhd1Nibzk2ZFF6dEk1VlJzN3BzQU1oRkNZQThhYXhkdyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9iZWNvbWVfYW5faW5zdHJ1Y3RvciI7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjc7fQ==',
                'last_activity' => 1744602287,
            ),
            2 => 
            array (
                'id' => '96ZAkP6MBOqw1Zh9jgL3qFemFBLHKsHEkqZWobG6',
                'user_id' => 7,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
                'payload' => 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiQ1RGWG1GTHdvcWs2S0pKdTVKcVRVdnZHRUNCSnE2OTc5VUI3WElZQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9jb3Vyc2VzP3BhZ2U9MiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjc7fQ==',
                'last_activity' => 1744462369,
            ),
            3 => 
            array (
                'id' => 'LC6jHumYb1uHjxvMJVPUUqNuYLT8skAIqUJi0c21',
                'user_id' => NULL,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
                'payload' => 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT1ZsaDRkN3RENjB2WlpGc0g5RjB3SllUUDNDYXc0Ynl2a09leWtPVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjQ6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9jb3Vyc2UvZXRoaWNhbC1oYWNraW5nLXBlbmV0cmF0aW9uLXRlc3RpbmciO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',
                'last_activity' => 1744494433,
            ),
            4 => 
            array (
                'id' => 'g8V865eXgtCG36bRqcUZT4t6IcyB4iUEJ6ntwNL2',
                'user_id' => NULL,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
                'payload' => 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiYlpZMEdTVXJud0Y1VWc0RWt5aExsYVVUMkladVdUUzN5dW5NMjZDRiI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czo3MjoiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2JhY2tlbmQvY291cnNlLzMzL2NvdXJzZV9zZWN0aW9uP2NvdXJzZV9zZWN0aW9uPTkzIjt9czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NzI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9iYWNrZW5kL2NvdXJzZS8zMy9jb3Vyc2Vfc2VjdGlvbj9jb3Vyc2Vfc2VjdGlvbj05MyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',
                'last_activity' => 1744573460,
            ),
            5 => 
            array (
                'id' => 'TjWN7vvLbC0wsRI2Ibr1GtVpCkRzG6W7BtGRB89h',
                'user_id' => 10,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
                'payload' => 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiamt0QkFiQmtXaTk0N2EwTWtjY01pZDhyNFl1d01yYVEzc1RVcExWaCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTA7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9iZWNvbWVfYW5faW5zdHJ1Y3RvciI7fX0=',
                'last_activity' => 1744449662,
            ),
            6 => 
            array (
                'id' => '0q1NDyrZfcHhuUFx0c6Y9T7cwiR7SlVyVxHHdbrQ',
                'user_id' => 5,
                'ip_address' => '127.0.0.1',
            'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
                'payload' => 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiVVB1TjBBMERRVWhobmRWN3BGNFBoWGdkdkwyZVZzZXJ2YjlQaWF3ciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NzI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9iYWNrZW5kL2NvdXJzZS8zMy9jb3Vyc2Vfc2VjdGlvbj9jb3Vyc2Vfc2VjdGlvbj05MyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjU7fQ==',
                'last_activity' => 1744448606,
            ),
        ));
        
        
    }
}