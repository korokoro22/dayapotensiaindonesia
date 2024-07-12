<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Inertia\Inertia;

class TampilanArtikelController extends Controller
{
    public function index() {
        $artikel = Artikel::all();
        $artikelsTerbaru = Artikel::latest()->take(3)->get();
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
