import React from "react";
import { Link } from "@inertiajs/react";
import { resolveMediaUrl } from "@/utils/media";

const NewsArticleBody = ({ item, backPath, backLabel, categoryLabel }) => {
    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-12 font-inter">
            <div className="mb-6">
                <Link
                    href={backPath}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#132B52] hover:text-[#DDA31C] bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-xs transition-colors"
                >
                    <span>← {backLabel}</span>
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="p-6 sm:p-10 space-y-6">
                    <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            <span className="rounded-full bg-[#132B52] text-[#F3BA33] font-bold px-3 py-1">
                                {categoryLabel}
                            </span>
                            <span className="text-slate-500 font-medium">
                                {item.tanggal}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500">Tim Daya Potensia Indonesia</span>
                        </div>

                        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1E3A] leading-snug">
                            {item.judul}
                        </h1>
                    </div>

                    <div className="overflow-hidden rounded-xl bg-slate-100 border border-slate-200/70">
                        <img
                            src={resolveMediaUrl(item.gambar)}
                            alt={item.judul}
                            className="w-full max-h-[30em] object-cover"
                        />
                    </div>

                    <div className="pt-2 text-slate-700 text-base leading-relaxed whitespace-pre-line text-justify">
                        {item.isi}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default NewsArticleBody;

