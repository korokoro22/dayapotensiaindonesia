import React from "react";
import { Link } from "@inertiajs/react";

const CtaBanner = () => {
    return (
        <section className="bg-[#F4F6FA] py-14 font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#132B52] to-[#1E4073] px-6 py-10 sm:px-10 sm:py-12 text-white shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 right-0 w-56 h-56 bg-[#F3BA33]/15 rounded-full blur-2xl"
                    />
                    <div className="relative z-10 max-w-2xl">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F3BA33] mb-2">
                            Hubungi Kami
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold leading-snug">
                            Mari Diskusikan Kebutuhan SDM &amp; Layanan Psikologi Anda
                        </h2>
                        <p className="text-sm sm:text-base text-slate-200 mt-2">
                            Konsultasi awal tanpa biaya untuk perusahaan, instansi pemerintah, sekolah, maupun individu. Proposal penawaran dikirim maksimal 7 hari kerja.
                        </p>
                    </div>
                    <div className="relative z-10 shrink-0">
                        <Link
                            href={route("hubungikami.create")}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#F3BA33] hover:bg-[#e5ad22] text-[#0D1E3A] font-bold text-sm sm:text-base px-7 py-3.5 shadow-md transition-colors"
                        >
                            <span>Mulai Konsultasi Sekarang</span>
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;

