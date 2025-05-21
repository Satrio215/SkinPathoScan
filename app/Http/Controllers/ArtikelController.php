<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\Artikel;

class ArtikelController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if (!$user) {
            return redirect()->route('login')->with('error', 'Harap login terlebih dahulu.');
        }

        $artikels = Artikel::where('user_id', $user->id)->latest()->paginate(5);

        return view('artikels.index', compact('artikels'));
    }

    public function create()
    {
        return view('artikels.create');
    }

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

        $gambar = $request->file('gambar');
        $namaGambar = time() . '_' . $gambar->getClientOriginalName();
        $path = 'uploads/artikels/' . $namaGambar;
        $gambar->move(public_path('uploads/artikels'), $namaGambar);

        Artikel::create([
            'user_id' => $user->id,
            'gambar' => $path,
            'judul' => $request->judul,
            'slug' => Str::slug($request->judul),
            'bio' => $request->bio,
        ]);

        return redirect()->route('artikels')->with('success', 'Artikel berhasil dibuat.');
    }

    public function show(Artikel $artikel)
    {
        $user = Auth::user();

        if (!$user || $user->id !== $artikel->user_id) {
            return response()->json(['error' => 'Artikel tidak ditemukan atau Anda tidak memiliki akses.'], 404);
        }

        return response()->json([
            'message' => 'Data artikel berhasil diambil',
            'data' => $artikel
        ], 200);
    }

    public function edit(Artikel $artikel)
    {
        $user = Auth::user();

        if (!$user || $user->id !== $artikel->user_id) {
            return redirect()->route('artikels.index')->with('error', 'Artikel tidak ditemukan atau bukan milik Anda.');
        }

        return view('artikels.update', compact('artikel'));
    }

    public function update(Request $request, Artikel $artikel)
    {
        $user = Auth::user();

        if (!$user || $user->id !== $artikel->user_id) {
            return redirect()->route('artikels.index')->with('error', 'Artikel tidak ditemukan atau bukan milik Anda.');
        }

        $validator = Validator::make($request->all(), [
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'judul' => 'required|string|max:255',
            'bio' => 'required|string',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        if ($request->hasFile('gambar')) {
            $oldPath = public_path($artikel->gambar);
            if ($artikel->gambar && file_exists($oldPath)) {
                unlink($oldPath);
            }

            $filename = time() . '.' . $request->file('gambar')->getClientOriginalExtension();
            $request->file('gambar')->move(public_path('uploads/artikels'), $filename);
            $artikel->gambar = 'uploads/artikels/' . $filename;
        }

        $artikel->judul = $request->judul;
        $artikel->slug = Str::slug($request->judul);
        $artikel->bio = $request->bio;
        $artikel->save();

        return redirect()->route('artikels')->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroy(Artikel $artikel)
    {
        $user = Auth::user();

        if (!$user || $user->id !== $artikel->user_id) {
            return redirect()->route('artikels')->with('error', 'Artikel tidak ditemukan atau bukan milik Anda.');
        }

        if ($artikel->gambar) {
            $gambarPath = public_path($artikel->gambar);
            if (file_exists($gambarPath)) {
                unlink($gambarPath);
            }
        }

        $artikel->delete();

        return redirect()->route('artikels')->with('success', 'Artikel berhasil dihapus.');
    }
}
