import React from "react";
import { Link } from "@inertiajs/react";

const LayananKamiCard = ({
    category,
    title,
    image,
    body,
    link,
    itemCount,
    previewItems = [],
}) => {
    return (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col md:flex-row font-inter">
            <div className="md:w-72 lg:w-80 h-52 md:h-auto shrink-0 relative overflow-hidden bg-slate-100">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
                {category && (
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#132B52] shadow-sm">
                        {category}
                    </span>
                )}
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-4">
                <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#132B52]">
                            {title}
                        </h2>
                        {itemCount && (
                            <span className="rounded-full bg-[#F4F6FA] border border-slate-200 px-3 py-1 text-xs font-semibold text-[#132B52]">
                                {itemCount} Ruang Lingkup
                            </span>
                        )}
                    </div>

                    <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {body}
                    </p>

                    {previewItems.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {previewItems.map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#F4F6FA] px-3 py-1.5 text-xs font-medium text-slate-700"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA33]" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-end">
                    <Link
                        href={link}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#132B52] hover:bg-[#0D1E3A] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
                    >
                        <span>Lihat Detail Layanan</span>
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LayananKamiCard;
