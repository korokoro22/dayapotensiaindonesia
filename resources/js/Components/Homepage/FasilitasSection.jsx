import React from "react";
import { companyProfile } from "@/utils/companyProfile";

const FasilitasSection = () => {
    return (
        <section className="bg-white py-16 md:py-20 font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-10 md:mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#132B52] border-b-2 border-[#F3BA33] pb-1">
                        Fasilitas &amp; Instrumen
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132B52] mt-3">
                        Ruang Layanan Kondusif &amp; Alat Tes Terstandar
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Ruang Layanan */}
                    <div className="lg:col-span-5 bg-[#132B52] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
                        <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                            <h3 className="font-display text-xl font-bold text-white">
                                Ruang Layanan
                            </h3>
                            <span className="text-xs font-semibold bg-[#F3BA33] text-[#0D1E3A] px-3 py-1 rounded-full">
                                4 Fasilitas
                            </span>
                        </div>

                        <div className="space-y-5">
                            {companyProfile.facilities.rooms.map((room, idx) => (
                                <div key={room.title} className="flex gap-3.5">
                                    <span className="shrink-0 w-7 h-7 rounded-lg bg-white/10 text-[#F3BA33] font-display font-bold text-xs flex items-center justify-center mt-0.5">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm sm:text-base">
                                            {room.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                                            {room.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Alat Tes Psikologi Terstandar */}
                    <div className="lg:col-span-7 bg-[#F4F6FA] rounded-2xl p-6 sm:p-8 border border-slate-200/80">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                            <h3 className="font-display text-xl font-bold text-[#132B52]">
                                Alat Tes Psikologi Terstandar
                            </h3>
                            <span className="text-xs font-semibold bg-[#132B52]/10 text-[#132B52] px-3 py-1 rounded-full">
                                6 Kategori
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {companyProfile.facilities.tools.map((tool) => (
                                <div
                                    key={tool.title}
                                    className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-sm"
                                >
                                    <h4 className="font-semibold text-[#132B52] text-sm sm:text-base">
                                        {tool.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                                        {tool.detail}
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

export default FasilitasSection;

