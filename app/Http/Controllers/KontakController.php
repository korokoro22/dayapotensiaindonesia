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

        $whatsappNumber = '6285756297170';
        $message = "Assalamu'alaikum, Selamat Pagi/Siang/Sore/Malam\nPerkenalkan saya,\n*Nama:* $nama\n*Keluhan:* $keluhan\nSaya ingin konsultasi, Terima kasih atas perhatiannya.";
        $url = "https://wa.me/$whatsappNumber?text=" . urlencode($message);

        return redirect()->away($url);
    }
}
