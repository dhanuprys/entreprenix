<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostAsset extends Model
{
    protected $fillable = [
        'post_id',
        'asset_url',
        'type'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
