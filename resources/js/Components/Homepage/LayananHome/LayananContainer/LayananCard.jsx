import { Link } from "@inertiajs/react";
import React from "react";

export default function LayananCard({
    category,
    title,
    body,
    image,
    link,
    itemCount,
}) {
    return (
        <Link
            href={link}
            className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col justify-between font-inter"
        >
            <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3A]/60 via-transparent to-transparent" />
                    {category && (
                        <span className="absolute top-3.5 left-3.5 inline-block rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-[#132B52] shadow-sm">
                            {category}
                        </span>
                    )}
                </div>
                <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-[#132B52] group-hover:text-[#1E4073] leading-snug">
                        {title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                        {body}
                    </p>
                </div>
            </div>

            <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
                <span className="text-xs font-medium text-slate-500">
                    {itemCount ? `${itemCount} Ruang Lingkup` : "Detail Layanan"}
                </span>
                <span className="font-semibold text-[#132B52] group-hover:text-[#DDA31C] inline-flex items-center gap-1 transition-colors">
                    Pelajari <span aria-hidden="true">→</span>
                </span>
            </div>
        </Link>
    );
}
