import React from "react";
import { Link } from "@inertiajs/react";
import LayananCard from "./LayananCard";

const LayananContainer = ({ layanans }) => {
    return (
        <section className="bg-[#F4F6FA] py-16 md:py-20 font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
                    <div className="max-w-2xl">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#132B52] border-b-2 border-[#F3BA33] pb-1">
                            Layanan Kami
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132B52] mt-3">
                            Solusi Psikologi Terpadu untuk Individu &amp; Organisasi
                        </h2>
                    </div>

                    <Link
                        href="/layanan"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#132B52] hover:text-[#DDA31C] transition-colors shrink-0"
                    >
                        <span>Lihat Ringkasan Semua Layanan</span>
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {layanans.map((layanan) => (
                        <LayananCard key={layanan.id} {...layanan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LayananContainer;
