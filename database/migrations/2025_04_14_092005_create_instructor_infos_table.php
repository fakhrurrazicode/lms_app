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
        Schema::create('instructor_infos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('id_card');
            $table->text('bio');
            $table->tinyInteger('status')->nullable(); // 0 : pending, 1: accepted, 2: reject
            $table->text('verification_message')->nullable();
            $table->string('facebook_url')->nullable();
            $table->string('instagram_url')->nullable();
            $table->string('youtube_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructor_infos');
    }
};
