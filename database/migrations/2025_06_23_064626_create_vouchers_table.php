<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_id')->constrained()->cascadeOnDelete();
            $table->string('code')->unique(); // e.g., "DISKON50"
            $table->enum('type', ['nominal', 'percentage']);
            $table->integer('value'); // nominal dalam rupiah atau persen
            $table->integer('max_discount')->nullable(); // maksimal potongan jika tipe persentase
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('quota')->nullable(); // misalnya: 100 kali
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vouchers');
    }
};
