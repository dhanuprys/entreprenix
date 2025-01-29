<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisualPost extends Model
{
    protected $fillable = [
        'post_id',
        'caption'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function assets()
    {
        return $this->belongsTo(PostAsset::class);
    }
}
