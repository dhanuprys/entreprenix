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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('type', 10); // article, visual
            $table->timestamps();
        });

        Schema::create('visual_posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_id')->constrained('posts')->cascadeOnDelete();
            $table->text('caption')->nullable();
            $table->timestamps();
        });

        Schema::create('post_assets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('visual_post_id')->constrained('visual_posts')->cascadeOnDelete();
            $table->string('asset_path');
            $table->string('type', 10);
            $table->timestamps();
        });

        Schema::create('article_posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_id')->constrained('posts')->cascadeOnDelete();
            $table->string('cover_path')->nullable();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
        Schema::dropIfExists('visual_posts');
        Schema::dropIfExists('post_assets');
        Schema::dropIfExists('article_posts');
    }
};
