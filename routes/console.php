<?php

use Illuminate\Foundation\Inspiring;
use App\Console\Commands\ProcessQueue;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


// $schedule->command(ProcessQueue::class)->everyMinute();
