import React from "react";
import layananHero from "../../assets/Layanan/layananHero.png";

const HeroLayanan = () => {
    return (
        <div className=" relative font-inter">
            <div
                className="w-full xl:h-[30em]  md:h-[25em] h-[15em] bg-cover static "
                style={{
                    backgroundImage: `url('${layananHero}')`,
                }}
            >
                <div className="bg-black w-full h-full opacity-50"></div>
            </div>
            <p className=" text-white opacity-100 absolute xl:text-5xl lg:text-4xl md:text-3xl text-lg font-bold xl:left-22 lg:left-24 xl:top-[4em] lg:top-[5em] top-[6em] md:left-12 left-5">
                Berkenalan dengan <br /> Layanan Daya Potensia <br /> Indonesia{" "}
            </p>
        </div>
    );
};

export default HeroLayanan;
