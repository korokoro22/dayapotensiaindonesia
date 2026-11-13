import React from "react";
import { Link } from "@inertiajs/react";
import { resolveMediaUrl } from "@/utils/media";

const ContentArtikel = ({ artikel }) => {
    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col py-10 gap-y-8 font-inter text-black">
            <div>
                <Link
                    href="/artikel"
                    className="inline-block text-sm font-semibold text-gray-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-sm"
                >
                    ← Kembali ke Artikel
                </Link>
            </div>
            <h1 className="text-center font-bold md:text-4xl text-2xl leading-snug">
                {artikel.judul}
            </h1>
            <div className="w-full">
                <img
                    src={resolveMediaUrl(artikel.gambar)}
                    alt={artikel.judul}
                    className="w-full max-h-[32em] object-cover rounded-xl shadow-md"
                />
                <div className="flex font-semibold text-sm md:text-base mt-3 gap-2 text-gray-700">
                    <p className="border-r-2 border-black pr-3">
                        {artikel.tanggal}
                    </p>
                    <p>Admin</p>
                </div>
            </div>
            <p className="text-justify leading-relaxed whitespace-pre-line text-gray-800">
                {artikel.isi}
            </p>
        </article>
    );
};

export default ContentArtikel;
