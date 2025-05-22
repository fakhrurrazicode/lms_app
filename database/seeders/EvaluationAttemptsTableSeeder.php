<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EvaluationAttemptsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('evaluation_attempts')->delete();
        
        
        
    }
}