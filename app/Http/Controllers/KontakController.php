<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class KontakController extends Controller
{
    public function create()
    {
        return Inertia::render('Kontak');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'keluhan' => 'required|string',
        ]);

        $nama = $request->input('nama');
        $keluhan = $request->input('keluhan');

        $whatsappNumber = '082248238013'; // Ganti dengan nomor WhatsApp tujuan
        $message = "Nama: $nama\nKeluhan: $keluhan";
        $url = "https://wa.me/$whatsappNumber?text=" . urlencode($message);

        return redirect()->away($url);
    }
}
