import React from "react";
import { Link } from "@inertiajs/react";

const HeroLayanan = () => {
    return (
        <section className="relative overflow-hidden bg-[#132B52] text-white font-inter">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 w-64 h-20 bg-[#F3BA33] opacity-90"
                style={{ clipPath: "polygon(35% 100%, 100% 0, 100% 100%)" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
                <nav aria-label="Breadcrumb" className="text-xs text-slate-300 mb-4 flex items-center gap-2">
                    <Link href="/" className="hover:text-[#F3BA33] transition-colors">
                        Beranda
                    </Link>
                    <span>/</span>
                    <span className="text-[#F3BA33] font-semibold">Layanan Kami</span>
                </nav>

                <div className="max-w-3xl space-y-4">
                    <span className="inline-block rounded-full bg-white/10 border border-white/15 px-3.5 py-1 text-xs font-semibold text-[#F3BA33]">
                        6 BIDANG LAYANAN PSIKOLOGI TERPADU
                    </span>
                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Layanan Daya Potensia Indonesia
                    </h1>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                        Seluruh layanan ditangani langsung oleh psikolog berizin praktik aktif berdasarkan Kode Etik Himpunan Psikologi Indonesia (HIMPSI) dan instrumen psikotes terstandar.
                    </p>
                    <div className="pt-2">
                        <Link
                            href={route("hubungikami.create")}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#F3BA33] hover:bg-[#e5ad22] text-[#0D1E3A] font-semibold text-sm px-6 py-3 shadow-md transition-colors"
                        >
                            <span>Konsultasi Kebutuhan Layanan</span>
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroLayanan;
