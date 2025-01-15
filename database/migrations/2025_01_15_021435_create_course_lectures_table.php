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
        Schema::create('course_lectures', function (Blueprint $table) {
            $table->id();
            $table->integer('course_id');
            $table->integer('course_section_id');
            $table->string('title');
            $table->string('video');
            $table->string('url');
            $table->string('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_lectures');
    }
};
