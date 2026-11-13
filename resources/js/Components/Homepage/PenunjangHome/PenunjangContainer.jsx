import React from "react";
import PenunjangCard from "./PenunjangCard";

const PenunjangContainer = ({ penunjangs }) => {
    return (
        <section className="bg-[#343434] px-4 py-12">
            <h2 className="font-inter text-center md:text-3xl text-2xl font-bold text-white">
                Notable Project
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto pt-10">
                {penunjangs.map((penunjang) => (
                    <PenunjangCard key={penunjang.id} {...penunjang} />
                ))}
            </div>
        </section>
    );
};

export default PenunjangContainer;
