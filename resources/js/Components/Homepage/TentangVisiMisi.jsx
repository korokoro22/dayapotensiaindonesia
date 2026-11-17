import React from "react";
import { companyProfile } from "@/utils/companyProfile";

const TentangVisiMisi = () => {
    return (
        <section className="bg-white py-16 md:py-20 font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Tentang Kami */}
                <div className="lg:col-span-5 space-y-5">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#132B52] border-b-2 border-[#F3BA33] pb-1">
                        Tentang Kami
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132B52] leading-snug">
                        Mengoptimalkan Kualitas Hidup &amp; Produktivitas Organisasi
                    </h2>

                    <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {companyProfile.about.paragraphs.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="rounded-xl bg-[#F4F6FA] border border-slate-200/80 p-4 mt-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#132B52] mb-2">
                            Didirikan {companyProfile.foundedDate} Oleh
                        </p>
                        <ul className="space-y-1 text-sm text-slate-700 font-medium">
                            {companyProfile.founders.map((founder) => (
                                <li key={founder} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3BA33] shrink-0" />
                                    <span>{founder}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Visi & Misi Card */}
                <div className="lg:col-span-7 bg-[#132B52] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
                    <div className="h-1 w-24 bg-[#F3BA33] rounded-full mb-6" />

                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#F3BA33] mb-2">
                            Visi Kami
                        </p>
                        <p className="font-display text-lg sm:text-xl font-semibold text-white leading-relaxed">
                            &ldquo;{companyProfile.about.vision}&rdquo;
                        </p>
                    </div>

                    <div className="border-t border-white/15 pt-7">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#F3BA33] mb-4">
                            Misi Kami
                        </p>
                        <ol className="space-y-3">
                            {companyProfile.about.missions.map((mission, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3.5 text-sm text-slate-200 leading-relaxed"
                                >
                                    <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/10 text-[#F3BA33] font-display font-bold text-xs mt-0.5">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span>{mission}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TentangVisiMisi;

