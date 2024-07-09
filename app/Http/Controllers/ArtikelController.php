<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    public function index()
    {
        $artikel = Artikel::all();

        return Inertia::render(
            'AdminArtikel/ArtikelDashboard',
            ['artikel' => $artikel]
        );
    }

    public function create()
    {
        return Inertia::render('AdminArtikel/ArtikelCreate');
    }

    public function show($id) {
        $artikel = Artikel::findOrFail($id);

        return Inertia::render(
            'AdminArtikel/ArtikelView',
            ['artikel' => $artikel]
        );
    }

    public function store(Request $request)
    {
        $validasiData = $request->validate([
            'judul' => 'required',
            'tanggal' => 'required|date',
            'isi' => 'required',
            'gambar'
        ]);

        if ($request->file('gambar')) {
            $validasiData['gambar'] = $request->file('gambar')->store('artikel', 'public');
        }

        Artikel::create($validasiData);
        return to_route('manajemenartikel');
    }

    public function edit($id)
    {
        $artikel = Artikel::findOrFail($id);

        return Inertia::render('AdminArtikel/ArtikelEdit', [
            'artikel' => $artikel
        ]);
    }

    // public function update(Request $request, $id)
    // {
    //     $request->validate([
    //         'judul' => 'required',
    //         'tanggal' => 'required',
    //         'isi' => 'required',
    //         'gambar' => '',
    //     ]);

    //     $artikel = Artikel::findOrFail($id);

    //     // $artikel->judul = $request->input('judul');
    //     // $artikel->tanggal = $request->input('tanggal');
    //     // $artikel->isi = $request->input('isi');

    //     if ($request->hasFile('gambar')) {
    //         //Delete old image from storage
    //         if ($artikel->gambar) {
    //             Storage::delete('public/storage/artikel/' . $artikel->gambar);
    //         }

    //         // Upload new image
    //         // $gambar = $request->file('gambar');
    //         // $filename = time() . '.' . $gambar->getClientOriginalExtension();
    //         // $gambar->storeAs('public/storage/artikel', $filename);

    //         // $request['gambar'] = $request->file('gambar')->store('artikel', 'public');

    //         // $artikel->gambar = $request->input('gambar');


    //         $gambar = $request->file('gambar');
    //         $nama = time() . '.' . $gambar->getClientOriginalExtension();
    //         $filename = $gambar->storeAs('/artikel', $nama, ['disk' => 'public']);
    //         $artikel->update(['gambar' => $filename]);
    //     }

    //     $artikel->update($request->except('gambar'));

    //     // $artikel->save();
    //     return to_route('manajemenartikel');
    // }

    public function update(Request $request, $id)
{
    $request->validate([
        'judul' => 'required',
        'tanggal' => 'required',
        'isi' => 'required',
        'gambar' => 'nullable|image',
    ]);

    $artikel = Artikel::findOrFail($id);

    $artikel->judul = $request->input('judul');
    $artikel->tanggal = $request->input('tanggal');
    $artikel->isi = $request->input('isi');

    if ($request->hasFile('gambar')) {
        // Delete old image from storage
        if ($artikel->gambar) {
            Storage::delete('public/' . $artikel->gambar);
        }
        $gambar = $request->file('gambar');
        $nama = time() . '.' . $gambar->getClientOriginalExtension();
        $filename = $gambar->storeAs('artikel', $nama, ['disk' => 'public']);
        $artikel->gambar = $filename;
    }

    $artikel->save();
    
    return to_route('manajemenartikel');
}

    public function destroy($id)
    {
        $artikel = Artikel::findOrFail($id);

        // Hapus gambar dari storage
        if ($artikel->gambar) {
            Storage::delete('public/' . $artikel->gambar);
        }

        // Hapus artikel
        $artikel->delete();

        return redirect()->route('manajemenartikel')->with('message', 'Artikel berhasil dihapus');
    }

}
