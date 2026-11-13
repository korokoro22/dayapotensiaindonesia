<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use App\Services\ImageStorageService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KegiatanController extends Controller
{
    public function __construct(private readonly ImageStorageService $imageStorage)
    {
    }
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
            $validasiData['gambar'] = $this->imageStorage->store($request->file('gambar'), 'kegiatan');
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
            $newImage = $this->imageStorage->store($request->file('gambar'), 'kegiatan');
            $this->imageStorage->delete($kegiatan->gambar);
            $kegiatan->gambar = $newImage;
        }
    
        $kegiatan->save();
        
        return to_route('manajemenkegiatan');
    }

    public function destroy($id)
    {
        $kegiatan = Kegiatan::findOrFail($id);

        $this->imageStorage->delete($kegiatan->gambar);

        $kegiatan->delete();

        return redirect()->route('manajemenkegiatan')->with('message', 'Kegiatan berhasil dihapus');
    }
}
