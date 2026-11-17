import React, { useMemo, useState } from "react";
import ModalProfile from "./ModalProfile";
import { teamCategories } from "@/utils/teamDpi";
import { companyProfile } from "@/utils/companyProfile";

const ProfileContainer = ({ profiles = [] }) => {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [showAll, setShowAll] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const filteredProfiles = useMemo(() => {
        if (activeCategory === "Semua") return profiles;
        return profiles.filter((p) => p.category === activeCategory);
    }, [profiles, activeCategory]);

    const visibleProfiles =
        activeCategory === "Semua" && !showAll
            ? filteredProfiles.slice(0, 8)
            : filteredProfiles;

    const selectedProfile = selectedId
        ? profiles.find((profile) => profile.id === selectedId) || null
        : null;

    const handleSelectCategory = (category) => {
        setActiveCategory(category);
        setShowAll(false);
    };

    return (
        <section className="bg-[#F4F6FA] py-16 md:py-20 font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                    <div className="max-w-2xl">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#132B52] border-b-2 border-[#F3BA33] pb-1">
                            Tim Profesional Kami
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132B52] mt-3">
                            &ldquo;{companyProfile.teamMotto}&rdquo;
                        </h2>
                        <p className="text-sm text-slate-600 mt-2">
                            Klik profil masing-masing psikolog dan tim pendukung untuk melihat latar belakang pendidikan, sertifikasi, dan bidang keahlian.
                        </p>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {teamCategories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => handleSelectCategory(category)}
                                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                    isActive
                                        ? "bg-[#132B52] text-white shadow-sm"
                                        : "bg-white text-slate-700 border border-slate-200 hover:border-[#132B52]/40 hover:text-[#132B52]"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Responsive Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {visibleProfiles.map((profile) => (
                        <button
                            key={profile.id}
                            type="button"
                            onClick={() => {
                                setSelectedId(profile.id);
                                setIsModal(true);
                            }}
                            className="group bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all text-left flex flex-col justify-between cursor-pointer"
                        >
                            <div>
                                <div className="flex justify-center mb-4">
                                    {profile.image ? (
                                        <img
                                            src={profile.image}
                                            alt={profile.name}
                                            className="w-28 h-28 rounded-full object-cover object-top ring-4 ring-[#F4F6FA] group-hover:ring-[#F3BA33]/60 transition-all"
                                        />
                                    ) : (
                                        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#132B52] to-[#1E4073] text-white ring-4 ring-[#F4F6FA] group-hover:ring-[#F3BA33]/60 flex items-center justify-center font-display text-2xl font-bold transition-all">
                                            {profile.initials}
                                        </div>
                                    )}
                                </div>

                                <div className="text-center space-y-2">
                                    <span className="inline-block rounded-full bg-amber-50 border border-amber-200/70 text-[#132B52] text-[11px] font-semibold px-3 py-0.5">
                                        {profile.job}
                                    </span>
                                    <h3 className="font-display font-bold text-sm sm:text-base text-[#0D1E3A] leading-snug line-clamp-2">
                                        {profile.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-100 text-center text-xs font-semibold text-[#132B52] group-hover:text-[#DDA31C] transition-colors">
                                Lihat Profil Lengkap →
                            </div>
                        </button>
                    ))}
                </div>

                {activeCategory === "Semua" && filteredProfiles.length > 8 && (
                    <div className="mt-8 text-center">
                        <button
                            type="button"
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 rounded-xl border border-[#132B52] bg-white hover:bg-[#132B52] text-[#132B52] hover:text-white font-semibold text-sm px-6 py-3 transition-colors cursor-pointer"
                        >
                            {showAll
                                ? "Tampilkan Lebih Ringkas ↑"
                                : `Lihat Seluruh ${filteredProfiles.length} Anggota Tim ↓`}
                        </button>
                    </div>
                )}
            </div>

            {isModal && selectedProfile && (
                <ModalProfile
                    setIsmodal={setIsModal}
                    filterData={selectedProfile}
                    setIdData={setSelectedId}
                />
            )}
        </section>
    );
};

export default ProfileContainer;
