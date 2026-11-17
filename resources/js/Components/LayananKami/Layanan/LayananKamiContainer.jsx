import React from "react";
import LayananKamiCard from "./LayananKamiCard";

const LayananKamiContainer = ({ layanans = [] }) => {
    return (
        <section className="bg-[#F4F6FA] py-14 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-6">
                {layanans.map((layanan) => (
                    <LayananKamiCard key={layanan.id} {...layanan} />
                ))}
            </div>
        </section>
    );
};

export default LayananKamiContainer;
