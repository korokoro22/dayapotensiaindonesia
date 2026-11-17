import React from "react";
import { companyProfile } from "@/utils/companyProfile";

const MengapaSection = () => {
    return (
        <section className="bg-[#F4F6FA] py-16 md:py-20 font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-10 md:mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#132B52] border-b-2 border-[#F3BA33] pb-1">
                        Mengapa DPI?
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132B52] mt-3">
                        Mitra Psikologi Berizin Praktik &amp; Berstandar Kode Etik
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companyProfile.whyDpi.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="inline-block rounded-lg bg-[#132B52]/5 text-[#132B52] text-xs font-semibold px-3 py-1">
                                        {item.badge}
                                    </span>
                                    <span className="font-display text-sm font-bold text-[#F3BA33]">
                                        0{item.id}
                                    </span>
                                </div>
                                <h3 className="font-display text-lg font-bold text-[#0D1E3A] leading-snug">
                                    {item.title}
                                </h3>
                                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MengapaSection;
