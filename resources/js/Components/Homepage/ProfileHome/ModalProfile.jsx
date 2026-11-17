import React, { useEffect } from "react";

const ModalProfile = ({ setIsmodal, filterData, setIdData }) => {
    const closeModal = () => {
        setIsmodal(false);
        setIdData(null);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D1E3A]/70 backdrop-blur-xs p-4 font-inter"
            onClick={closeModal}
        >
            <div
                className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="h-1.5 bg-gradient-to-r from-[#132B52] via-[#F3BA33] to-[#6A1B9A]" />

                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                    <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#DDA31C]">
                            {filterData?.category || "Tim DPI"}
                        </span>
                        <h2 className="font-display text-lg font-bold text-[#132B52]">
                            Profil Profesional
                        </h2>
                    </div>
                    <button
                        type="button"
                        aria-label="Tutup modal"
                        onClick={closeModal}
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center cursor-pointer transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <div className="shrink-0">
                        {filterData?.image ? (
                            <img
                                src={filterData.image}
                                alt={filterData.name}
                                className="w-40 h-48 rounded-xl object-cover object-top shadow-md border border-slate-200"
                            />
                        ) : (
                            <div className="w-40 h-48 rounded-xl bg-gradient-to-br from-[#132B52] to-[#1E4073] text-white flex items-center justify-center font-display text-4xl font-bold shadow-md">
                                {filterData?.initials}
                            </div>
                        )}
                    </div>

                    <div className="flex-1 space-y-3 text-center sm:text-left">
                        <div>
                            <h3 className="font-display text-xl font-bold text-[#0D1E3A] leading-snug">
                                {filterData?.name}
                            </h3>
                            <span className="inline-block mt-2 rounded-full bg-[#F3BA33]/20 text-[#132B52] text-xs font-semibold px-3 py-1">
                                {filterData?.title}
                            </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed text-justify sm:text-left">
                            {filterData?.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalProfile;
