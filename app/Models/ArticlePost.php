<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArticlePost extends Model
{
    protected $fillable = [
        'post_id',
        'cover_path',
        'title',
        'content'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
