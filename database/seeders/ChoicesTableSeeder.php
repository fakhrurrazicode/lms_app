<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ChoicesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('choices')->delete();
        
        \DB::table('choices')->insert(array (
            0 => 
            array (
                'id' => 20,
                'question_id' => 1,
                'text' => 'Jawaban 4 untuk Pertanyaan 1 untuk Evaluasi untuk basic structure and components',
                'is_correct' => 0,
                'created_at' => '2025-05-21 03:50:43',
                'updated_at' => '2025-05-21 03:50:43',
            ),
            1 => 
            array (
                'id' => 19,
                'question_id' => 1,
                'text' => 'Jawaban 3 untuk Pertanyaan 1 untuk Evaluasi untuk basic structure and components',
                'is_correct' => 1,
                'created_at' => '2025-05-21 03:50:43',
                'updated_at' => '2025-05-21 03:50:43',
            ),
            2 => 
            array (
                'id' => 18,
                'question_id' => 1,
                'text' => 'Jawaban 2 untuk Pertanyaan 1 untuk Evaluasi untuk basic structure and components',
                'is_correct' => 0,
                'created_at' => '2025-05-21 03:50:43',
                'updated_at' => '2025-05-21 03:50:43',
            ),
            3 => 
            array (
                'id' => 17,
                'question_id' => 1,
                'text' => 'Jawaban 1 untuk Pertanyaan 1 untuk Evaluasi untuk basic structure and components',
                'is_correct' => 0,
                'created_at' => '2025-05-21 03:50:43',
                'updated_at' => '2025-05-21 03:50:43',
            ),
            4 => 
            array (
                'id' => 5,
                'question_id' => 2,
                'text' => 'Jawaban 1 untuk Pertanyaan 2 untuk Evaluasi untuk basic structure and components',
                'is_correct' => 0,
                'created_at' => '2025-05-20 20:45:59',
                'updated_at' => '2025-05-20 20:45:59',
            ),
            5 => 
            array (
                'id' => 6,
                'question_id' => 2,
                'text' => 'Jawaban 2 untuk Pertanyaan 2 untuk Evaluasi untuk basic structure and components',
                'is_correct' => 1,
                'created_at' => '2025-05-20 20:45:59',
                'updated_at' => '2025-05-20 20:45:59',
            ),
            6 => 
            array (
                'id' => 7,
                'question_id' => 2,
                'text' => 'Jawaban 3 untuk Pertanyaan 2 untuk Evaluasi untuk basic structure and components',
                'is_correct' => 0,
                'created_at' => '2025-05-20 20:45:59',
                'updated_at' => '2025-05-20 20:45:59',
            ),
            7 => 
            array (
                'id' => 8,
                'question_id' => 2,
                'text' => 'Jawaban 4 untuk Pertanyaan 2 untuk Evaluasi untuk basic structure and components',
                'is_correct' => 0,
                'created_at' => '2025-05-20 20:45:59',
                'updated_at' => '2025-05-20 20:45:59',
            ),
        ));
        
        
    }
}