<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\Artikel;


class ArtikelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        $artikels = Artikel::where('user_id', $user->id)->get();

        return response()->json([
            'message' => 'Data artikel berhasil diambil',
            'data' => $artikels
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'gambar' => 'required|image|mimes:jpg,jpeg,png|max:2048',
            'judul' => 'required|string|max:255',
            'bio' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();

        $path = $request->file('gambar')->store('artikels', 'public');

        $artikel = Artikel::create([
            'user_id' => $user->id,
            'gambar' => $path,
            'judul' => $request->judul,
            'bio' => $request->bio
        ]);

        return response()->json([
            'message' => 'Artikel berhasil dibuat',
            'data' => $artikel
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
{
    $user = Auth::user();

    if (!$user) {
        return response()->json(['error' => 'Unauthenticated.'], 401);
    }

    $artikel = Artikel::where('id', $id)->where('user_id', $user->id)->first();

    if (!$artikel) {
        return response()->json(['error' => 'Artikel tidak ditemukan atau Anda tidak memiliki akses.'], 404);
    }

    return response()->json([
        'message' => 'Data artikel berhasil diambil',
        'data' => $artikel
    ], 200);
}


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

        /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        $artikel = Artikel::where('id', $id)->where('user_id', $user->id)->first();

        if (!$artikel) {
            return response()->json(['error' => 'Artikel tidak ditemukan atau bukan milik Anda.'], 404);
        }

        $validator = Validator::make($request->all(), [
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'judul' => 'required|string|max:255',
            'bio' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Jika ada gambar baru, upload dan update path-nya
        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('artikels', 'public');
            $artikel->gambar = $path;
        }

        $artikel->judul = $request->judul;
        $artikel->bio = $request->bio;
        $artikel->save();

        return response()->json([
            'message' => 'Artikel berhasil diperbarui',
            'data' => $artikel
        ], 200);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        $artikel = Artikel::where('id', $id)->where('user_id', $user->id)->first();

        if (!$artikel) {
            return response()->json(['error' => 'Artikel tidak ditemukan atau bukan milik Anda.'], 404);
        }

        // Hapus file gambar jika ada
        if ($artikel->gambar && \Storage::disk('public')->exists($artikel->gambar)) {
            \Storage::disk('public')->delete($artikel->gambar);
        }

        $artikel->delete();

        return response()->json([
            'message' => 'Artikel berhasil dihapus'
        ], 200);
    }
}
