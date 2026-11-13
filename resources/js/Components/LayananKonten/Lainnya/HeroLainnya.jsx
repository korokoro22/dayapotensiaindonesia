import React from "react";
import Lainnya from "../../../assets/Layanan/lainnya.jpg";

const HeroLainnya = () => {
    return (
        <div
            className="relative font-inter w-full xl:h-[30em] md:h-[25em] h-[15em] bg-cover bg-center"
            style={{
                backgroundImage: `url('${Lainnya}')`,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 h-full flex items-center">
                <h1 className="text-white xl:text-5xl lg:text-4xl md:text-3xl text-xl font-bold leading-tight">
                    Layanan Lainnya
                </h1>
            </div>
        </div>
    );
};

export default HeroLainnya;
