import React from "react";
import { Link } from "@inertiajs/react";
import { resolveMediaUrl } from "@/utils/media";

const NewsHeadline = ({ items = [], basePath, label }) => {
    const first = items[0];
    const second = items[1];
    const third = items[2];

    if (!first) {
        return null;
    }

    const renderCard = (item, large = false) => (
        <Link
            href={`${basePath}/${item.id}`}
            className={`group relative overflow-hidden rounded-2xl bg-[#132B52] text-white flex flex-col justify-end shadow-md ${
                large ? "min-h-[18em] md:min-h-[28em]" : "min-h-[13em] flex-1"
            }`}
        >
            <img
                src={resolveMediaUrl(item.gambar)}
                alt={item.judul}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3A]/95 via-[#0D1E3A]/45 to-transparent" />
            <div className="relative z-10 p-5 sm:p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-[#F3BA33] text-[#0D1E3A] font-bold px-2.5 py-0.5">
                        {label} Terbaru
                    </span>
                    <span className="text-slate-200 font-medium">
                        {item.tanggal}
                    </span>
                </div>
                <h2
                    className={`font-display font-bold leading-snug line-clamp-2 group-hover:text-[#F3BA33] transition-colors ${
                        large ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                    }`}
                >
                    {item.judul}
                </h2>
            </div>
        </Link>
    );

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 font-inter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {renderCard(first, true)}
                {(second || third) && (
                    <div className="flex flex-col gap-5 justify-between">
                        {second && renderCard(second, false)}
                        {third && renderCard(third, false)}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsHeadline;

