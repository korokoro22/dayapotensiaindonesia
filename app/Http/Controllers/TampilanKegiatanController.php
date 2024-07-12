<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use Inertia\Inertia;

class TampilanKegiatanController extends Controller
{
    public function index() {
        $kegiatan = Kegiatan::all();
        $kegiatansTerbaru = Kegiatan::latest()->take(3)->get();
        return Inertia::render('Kegiatan', [
            'kegiatan' => $kegiatan,
            'kegiatansTerbaru' => $kegiatansTerbaru
        ]);
    }

    public function show($id) {
        $kegiatan = Kegiatan::findOrFail($id);

        return Inertia::render('KegiatanContent', ['kegiatans' => $kegiatan]);
    }
}
