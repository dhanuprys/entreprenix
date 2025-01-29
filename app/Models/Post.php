<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'user_id',
        'type', // visual, article
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function visual()
    {
        return $this->hasOne(VisualPost::class);
    }

    public function article()
    {
        return $this->hasOne(ArticlePost::class);
    }
}
