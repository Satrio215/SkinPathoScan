<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'gambar',
        'judul',
        'slug', // Tambahkan ini
        'bio'
    ];

    // Gunakan slug untuk route model binding
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
