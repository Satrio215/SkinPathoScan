<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Artikel;


class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $artikels = Artikel::latest()->paginate(5);

        return response()->json([
            'message' => 'Daftar artikel berhasil diambil.',
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $artikel = Artikel::where('slug', $slug)->first();

        if (!$artikel) {
            return response()->json(['error' => 'Artikel tidak ditemukan.'], 404);
        }

        return response()->json([
            'message' => 'Detail artikel berhasil diambil.',
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
