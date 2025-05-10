<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        // Validasi input
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);

        // Coba login dengan JWT
        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Email atau password salah'], 401);
        }

        // Ambil user yang berhasil login dari token
        $user = Auth::user();

        // Kembalikan token dan data user (tanpa session)
        return response()->json([
            'token' => $token,
            'user' => $user,
        ]);
    }

    public function logout(Request $request)
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());

            return response()->json(['message' => 'Logout berhasil']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Logout gagal atau token tidak valid'], 400);
        }
    }
}
