<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class IseedAllTables extends Command
{
    protected $signature = 'iseed:all {--exclude=migrations}';
    protected $description = 'Generate seeders for all database tables using iSeed';

    public function handle()
    {
        $database = config('database.connections.' . config('database.default') . '.database');
        $this->info("🔌 Connected to database: $database");

        // Use SHOW TABLES instead of information_schema
        $rawTables = DB::select('SHOW TABLES');

        if (empty($rawTables)) {
            $this->warn('⚠️ No tables found in this database.');
            return 1;
        }

        // Extract table names dynamically
        $key = 'Tables_in_' . $database;
        $tables = collect($rawTables)
            ->pluck($key)
            ->map(fn($t) => trim($t))
            ->filter()
            ->toArray();

        // Handle exclude option
        $exclude = collect(explode(',', $this->option('exclude')))
            ->map(fn($t) => trim($t))
            ->filter()
            ->toArray();

        $tables = array_diff($tables, $exclude);

        if (empty($tables)) {
            $this->warn('⚠️ No tables left to seed after exclusions.');
            return 1;
        }

        $tableList = implode(',', $tables);
        $this->info("📦 Running iSeed for: $tableList");

        $this->call('iseed', [
            'tables' => $tableList,
            '--force' => true,
        ]);

        $this->info('✅ iSeed generation complete.');
        return 0;
    }
}
