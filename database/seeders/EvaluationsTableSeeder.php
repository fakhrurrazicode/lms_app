<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EvaluationsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('evaluations')->delete();
        
        \DB::table('evaluations')->insert(array (
            0 => 
            array (
                'id' => 1,
                'course_section_id' => 93,
                'title' => 'Evaluasi untuk basic structure and components',
                'instructions' => 'Instruksi untuk menyelesaikan Evaluasi untuk basic structure and components',
                'duration' => 100,
                'passing_score' => 10,
                'created_at' => '2025-05-20 20:44:36',
                'updated_at' => '2025-05-20 20:44:36',
            ),
        ));
        
        
    }
}