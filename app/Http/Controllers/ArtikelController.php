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
        return redirect()->route('login')->with('error', 'Harap login terlebih dahulu.');
    }

    $artikels = Artikel::where('user_id', $user->id)->paginate(5);

    return view('artikels.index', compact('artikels'));
}



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('artikels.create');
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
        return redirect()->back()->withErrors($validator)->withInput();
    }

    $user = Auth::user();

    $path = $request->file('gambar')->store('artikels', 'public');

    Artikel::create([
        'user_id' => $user->id,
        'gambar' => $path,
        'judul' => $request->judul,
        'bio' => $request->bio
    ]);

    return redirect()->route('artikels')->with('success', 'Artikel berhasil dibuat.');
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
        $user = Auth::user();

        if (!$user) {
            return redirect()->route('login')->with('error', 'Anda belum login.');
        }

        $artikel = Artikel::where('id', $id)->where('user_id', $user->id)->first();

        if (!$artikel) {
            return redirect()->route('artikels.index')->with('error', 'Artikel tidak ditemukan atau bukan milik Anda.');
        }

        return view('artikels.update', compact('artikel'));
    }


        /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
{
    $user = Auth::user();

    if (!$user) {
        return redirect()->route('login')->with('error', 'Anda belum login.');
    }

    $artikel = Artikel::where('id', $id)->where('user_id', $user->id)->first();

    if (!$artikel) {
        return redirect()->route('artikels.index')->with('error', 'Artikel tidak ditemukan atau bukan milik Anda.');
    }

    // Validasi input
    $validator = Validator::make($request->all(), [
        'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        'judul' => 'required|string|max:255',
        'bio' => 'required|string',
    ]);

    if ($validator->fails()) {
        return redirect()->back()->withErrors($validator)->withInput();
    }

    // Jika user mengunggah gambar baru
    if ($request->hasFile('gambar')) {
        // Hapus gambar lama dari storage
        if ($artikel->gambar && \Storage::disk('public')->exists($artikel->gambar)) {
            \Storage::disk('public')->delete($artikel->gambar);
        }

        // Simpan gambar baru
        $path = $request->file('gambar')->store('artikels', 'public');
        $artikel->gambar = $path;
    }

    // Update judul dan bio
    $artikel->judul = $request->judul;
    $artikel->bio = $request->bio;

    $artikel->save();

    return redirect()->route('artikels')->with('success', 'Artikel berhasil diperbarui.');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
{
    $user = Auth::user();

    if (!$user) {
        return redirect()->route('login')->with('error', 'Harap login terlebih dahulu.');
    }

    $artikel = Artikel::where('id', $id)->where('user_id', $user->id)->first();

    if (!$artikel) {
        return redirect()->route('artikels')->with('error', 'Artikel tidak ditemukan atau bukan milik Anda.');
    }

    // Hapus file gambar jika ada
    if ($artikel->gambar && \Storage::disk('public')->exists($artikel->gambar)) {
        \Storage::disk('public')->delete($artikel->gambar);
    }

    $artikel->delete();

    // Redirect ke halaman index (pagination tetap berfungsi)
    return redirect()->route('artikels')->with('success', 'Artikel berhasil dihapus.');
}



}
