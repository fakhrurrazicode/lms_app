<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class ProcessQueue extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'queue:process';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Process the Laravel queue for shared hosting';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Processing the queue...');
        Artisan::call('queue:work', ['--once' => true]);
    }
}
