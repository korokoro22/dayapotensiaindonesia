import React, { useState } from "react";
import PenunjangCard from "./PenunjangCard";
import { companyProfile } from "@/utils/companyProfile";

const PenunjangContainer = ({ penunjangs = [] }) => {
    const [showAllTimeline, setShowAllTimeline] = useState(false);
    const { moksa, moksaContact } = companyProfile;
    const displayedActivities = showAllTimeline
        ? moksa.activities
        : moksa.activities.slice(0, 4);

    return (
        <section className="bg-[#0D1E3A] text-white py-16 md:py-20 font-inter relative overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#6A1B9A] via-[#F3BA33] to-[#1E4073] absolute top-0 left-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* MOKSA DPI Featured Block (Company Profile Page 18) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    <div className="lg:col-span-5 space-y-5">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#6A1B9A]/25 border border-[#6A1B9A]/50 px-3.5 py-1 text-xs font-semibold text-purple-200">
                            <span className="w-2 h-2 rounded-full bg-[#F3BA33]" />
                            <span>DAMPAK SOSIAL · EST. {moksa.established}</span>
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl font-bold leading-snug text-white">
                            MOKSA DPI — Pusat Krisis &amp; Pengabdian Masyarakat
                        </h2>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            {moksa.summary}
                        </p>

                        <blockquote className="rounded-xl bg-white/5 border-l-4 border-[#F3BA33] p-4 text-sm text-slate-200 italic leading-relaxed">
                            &ldquo;{moksa.vision}&rdquo;
                        </blockquote>

                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#F3BA33] mb-3">
                                Lima Pilar MOKSA
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {moksa.pillars.map((pillar, idx) => (
                                    <span
                                        key={pillar}
                                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100"
                                    >
                                        <span className="text-[#F3BA33] font-bold">
                                            {idx + 1}.
                                        </span>
                                        {pillar}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2 text-xs text-slate-300 space-y-1">
                            <p className="italic text-[#F3BA33]">
                                &ldquo;{moksaContact.tagline}&rdquo;
                            </p>
                            <p>
                                Kontak MOKSA DPI:{" "}
                                <span className="font-semibold text-white">
                                    {moksaContact.phoneDisplay}
                                </span>{" "}
                                · {moksaContact.instagramHandle} ·{" "}
                                {moksaContact.email}
                            </p>
                        </div>
                    </div>

                    {/* Timeline Kegiatan MOKSA 2023-2026 */}
                    <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-5">
                            <div>
                                <h3 className="font-display text-lg font-bold text-[#132B52]">
                                    Jejak Kegiatan &amp; Respon Krisis (2023–2026)
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    Berbasis {moksa.basis}
                                </p>
                            </div>
                            <span className="text-xs font-semibold bg-amber-100 text-[#132B52] px-3 py-1 rounded-full">
                                {moksa.activities.length} Aksi Tercatat
                            </span>
                        </div>

                        <ol className="space-y-4">
                            {displayedActivities.map((act) => (
                                <li
                                    key={`${act.date}-${act.title}`}
                                    className="flex gap-3.5 pb-4 border-b border-slate-100 last:border-b-0 last:pb-0"
                                >
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#F3BA33] ring-4 ring-amber-100 shrink-0 mt-1.5" />
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-xs font-bold text-[#132B52]">
                                                {act.date}
                                            </span>
                                            {act.badge && (
                                                <span className="text-[11px] font-bold bg-[#6A1B9A] text-white px-2 py-0.5 rounded-full">
                                                    {act.badge}
                                                </span>
                                            )}
                                        </div>
                                        <h4 className="font-semibold text-sm sm:text-base text-slate-900 mt-0.5">
                                            {act.title}
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            {act.partner}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        {moksa.activities.length > 4 && (
                            <button
                                type="button"
                                onClick={() =>
                                    setShowAllTimeline(!showAllTimeline)
                                }
                                className="mt-5 text-xs font-bold text-[#132B52] hover:text-[#6A1B9A] transition-colors cursor-pointer"
                            >
                                {showAllTimeline
                                    ? "Tampilkan Lebih Ringkas ↑"
                                    : `Lihat Semua ${moksa.activities.length} Kegiatan (2023–2026) ↓`}
                            </button>
                        )}
                    </div>
                </div>

                {/* Program Penunjang Lainnya */}
                <div className="border-t border-white/10 pt-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#F3BA33] mb-5">
                        Program Penunjang &amp; Pengembangan Kompetensi
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {penunjangs
                            .filter((item) => !item.title.toLowerCase().includes("moksa"))
                            .map((penunjang, index) => (
                                <PenunjangCard
                                    key={penunjang.id}
                                    index={index}
                                    {...penunjang}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PenunjangContainer;
