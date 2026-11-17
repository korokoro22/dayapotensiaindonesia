import React from "react";
import { Link } from "@inertiajs/react";
import DpiLogo2 from "../../assets/logo/dpilogo2.png";
import { companyProfile } from "@/utils/companyProfile";

const Hero1 = () => {
    return (
        <section className="relative overflow-hidden bg-[#132B52] text-white font-inter">
            {/* Subtle Geometric Diagonal Accents matching Company Profile 2026 */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#1E4073]/50 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 w-72 h-24 bg-[#F3BA33] opacity-90"
                style={{ clipPath: "polygon(35% 100%, 100% 0, 100% 100%)" }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 w-44 h-14 bg-[#0D1E3A]"
                style={{ clipPath: "polygon(45% 100%, 100% 0, 100% 100%)" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#F3BA33]">
                        <span className="w-2 h-2 rounded-full bg-[#F3BA33]" />
                        <span>BIRO PSIKOLOGI &amp; HUMAN RESOURCE · SEJAK 2016</span>
                    </div>

                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
                        {companyProfile.heroTagline}
                    </h1>

                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                        &ldquo;{companyProfile.heroQuote}&rdquo;
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                            href={route("hubungikami.create")}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#F3BA33] hover:bg-[#e5ad22] text-[#0D1E3A] font-semibold text-sm sm:text-base px-6 py-3.5 shadow-md transition-all"
                        >
                            <span>Konsultasi Awal Gratis</span>
                            <span aria-hidden="true">→</span>
                        </Link>
                        <Link
                            href="/layanan"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 hover:bg-white/15 text-white font-semibold text-sm sm:text-base px-6 py-3.5 transition-all"
                        >
                            <span>Jelajahi 6 Layanan</span>
                        </Link>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
                        <span>{companyProfile.contact.shortAddress}</span>
                        <span className="hidden sm:inline text-white/30">•</span>
                        <span>Telp / WA: {companyProfile.contact.phoneDisplay}</span>
                    </div>
                </div>

                {/* Right Brand Card */}
                <div className="lg:col-span-5">
                    <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
                        <div className="bg-[#F4F6FA] rounded-xl p-5 flex items-center justify-center border border-slate-200/70">
                            <img
                                src={DpiLogo2}
                                alt="Daya Potensia Indonesia — Biro Psikologi & Human Resource"
                                className="w-full max-w-[18rem] h-auto object-contain"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3.5 mt-5">
                            {companyProfile.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-xl bg-[#F4F6FA] p-3.5 border border-slate-200/70"
                                >
                                    <p className="font-display text-2xl font-extrabold text-[#132B52]">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero1;
