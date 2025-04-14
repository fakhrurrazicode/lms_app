<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MidtransNotificationLogsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('midtrans_notification_logs')->delete();
        
        
        
    }
}