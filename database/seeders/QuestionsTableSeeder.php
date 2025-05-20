<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class QuestionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('questions')->delete();
        
        \DB::table('questions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'evaluation_id' => 1,
                'question' => 'Pertanyaan 1 untuk Evaluasi untuk basic structure and components',
                'type' => 'multiple_choice',
                'created_at' => '2025-05-20 20:45:21',
                'updated_at' => '2025-05-20 20:45:21',
            ),
            1 => 
            array (
                'id' => 2,
                'evaluation_id' => 1,
                'question' => 'Pertanyaan 2 untuk Evaluasi untuk basic structure and components',
                'type' => 'multiple_choice',
                'created_at' => '2025-05-20 20:45:59',
                'updated_at' => '2025-05-20 20:45:59',
            ),
        ));
        
        
    }
}