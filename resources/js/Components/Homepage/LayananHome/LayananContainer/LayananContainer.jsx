import React from "react";
import LayananCard from "./LayananCard";

const LayananContainer = ({ layanans }) => {
    return (
        <section className="px-4 py-12 bg-white">
            <h2 className="font-inter text-center text-3xl font-bold text-black">
                Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
                {layanans.map((layanan) => (
                    <LayananCard key={layanan.id} {...layanan} />
                ))}
            </div>
        </section>
    );
};

export default LayananContainer;
