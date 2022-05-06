<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'post_id', 'username', 'content'
    ];

    /**
     * Relationship with replies table.
     *
     * @return HasMany
     */
    public function replies()
    {
        return $this->hasMany('App\Models\Reply', 'comment_id');
    }
}
