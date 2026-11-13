<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Inertia\Inertia;

class TampilanArtikelController extends Controller
{
    public function index() {
        $artikel = Artikel::latest()->get();
        $artikelsTerbaru = $artikel->take(3)->values();
        return Inertia::render('Artikel', [
            'artikel' => $artikel,
            'artikelsTerbaru' => $artikelsTerbaru
        ]);
    }

    public function show($id) {
        $artikel = Artikel::findOrFail($id);

        return Inertia::render('ArtikelContent', ['artikels' => $artikel]);
    }
}
