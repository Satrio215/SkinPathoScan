<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject; // Import JWTSubject
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements JWTSubject // Implement interface JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Tambahkan method untuk JWTSubject
    public function getJWTIdentifier()
    {
        return $this->getKey(); // Mengembalikan ID pengguna
    }

    public function getJWTCustomClaims()
    {
        return []; 
    }
}
