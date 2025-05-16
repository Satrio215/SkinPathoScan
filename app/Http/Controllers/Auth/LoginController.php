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

        // Coba login via JWT
        if (! $token = JWTAuth::attempt($credentials)) {
            return redirect()->back()->with('error', 'Email atau password salah');
        }

        // Ambil user dari JWT
        $user = JWTAuth::user();

        // Login ke session (web guard)
        Auth::guard('web')->login($user);

        // Simpan token ke session (opsional jika ingin akses API dengan token ini)
        session(['jwt_token' => $token]);

        return redirect()->route('artikels')->with('success', 'Berhasil login!');
    }

    public function logout(Request $request)
{
    try {
        // Logout dari session Laravel
        Auth::guard('web')->logout();

        // Jika ada JWT token, invalidasi
        if ($token = JWTAuth::getToken()) {
            JWTAuth::invalidate($token);
        }

        // Clear Laravel session
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login')->with('success', 'Berhasil logout!');
    } catch (\Exception $e) {
        return redirect()->route('login')->with('error', 'Logout gagal atau token tidak valid');
    }
}
}
