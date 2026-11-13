<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class KegiatanController extends Controller
{
    public function index()
    {
        $kegiatan = Kegiatan::latest()->get();
        return Inertia::render('AdminKegiatan/KegiatanDashboard', ['kegiatan' => $kegiatan]);
    }

    public function create()
    {
        return Inertia::render('AdminKegiatan/KegiatanCreate');
    }

    public function show($id) {
        $kegiatan = Kegiatan::findOrFail($id);

        return Inertia::render('AdminKegiatan/KegiatanView', ['kegiatan' => $kegiatan]);
    }

    public function store(Request $request)
    {
        $validasiData = $request->validate([
            'judul' => 'required|string|max:255',
            'tanggal' => 'required|date',
            'isi' => 'required|string',
            'gambar' => 'required|image|max:5120',
        ]);

        if ($request->file('gambar')) {
            $validasiData['gambar'] = $request->file('gambar')->store('kegiatan', 'public');
        }

        Kegiatan::create($validasiData);
        return to_route('manajemenkegiatan');
    }

    public function edit($id) {
        $kegiatan = Kegiatan::findOrFail($id);

        return Inertia::render('AdminKegiatan/KegiatanEdit', ['kegiatan' => $kegiatan]);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'judul' => 'required|string|max:255',
            'tanggal' => 'required|date',
            'isi' => 'required|string',
            'gambar' => 'nullable|image|max:5120',
        ]);
    
        $kegiatan = Kegiatan::findOrFail($id);
    
        $kegiatan->judul = $request->input('judul');
        $kegiatan->tanggal = $request->input('tanggal');
        $kegiatan->isi = $request->input('isi');
    
        if ($request->hasFile('gambar')) {
            // Delete old image from storage
            if ($kegiatan->gambar) {
                Storage::disk('public')->delete($kegiatan->gambar);
            }
            $gambar = $request->file('gambar');
            $nama = time() . '.' . $gambar->getClientOriginalExtension();
            $filename = $gambar->storeAs('kegiatan', $nama, ['disk' => 'public']);
            $kegiatan->gambar = $filename;
        }
    
        $kegiatan->save();
        
        return to_route('manajemenkegiatan');
    }

    public function destroy($id)
    {
        $kegiatan = Kegiatan::findOrFail($id);

        // Hapus gambar dari storage
        if ($kegiatan->gambar) {
            Storage::disk('public')->delete($kegiatan->gambar);
        }

        // Hapus kegiatan
        $kegiatan->delete();

        return redirect()->route('manajemenkegiatan')->with('message', 'Kegiatan berhasil dihapus');
    }
}
