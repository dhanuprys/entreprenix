<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserQuizProgress extends Model
{
    protected $fillable = [
        'user_id',
        'current_level',
        'correct_count',
        'wrong_count',
        'total_duration',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
