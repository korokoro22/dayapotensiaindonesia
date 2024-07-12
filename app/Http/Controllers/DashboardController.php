<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        $kegiatan = Kegiatan::all();
        $totalKegiatan = $kegiatan->count();
        $artikel = Artikel::all();
        $totalArtikel = $artikel->count();

        return Inertia::render("Dashboard", [
            'totalKegiatan' => $totalKegiatan,
            'totalArtikel' => $totalArtikel

        ]);
    }
}
