import React from "react";
import DpiLogo2 from "../../assets/logo/dpilogo2.png";

const Hero1 = () => {
    return (
        <div className="flex relative w-full bg-[#E2E2E2] flex-col-reverse md:flex-row justify-center items-center md:min-h-[32em] py-12 px-6 md:px-10 xl:gap-32 lg:gap-24 md:gap-14 gap-8 font-inter">
            <div className="flex md:block flex-col justify-center items-center gap-4 max-w-xl">
                <h1 className="text-center md:text-left xl:text-2xl lg:text-lg text-base font-bold text-black bg-[#F3D457] px-4 py-1.5 w-fit rounded-lg">
                    DAYA POTENSIA INDONESIA
                </h1>
                <p className="xl:text-sm text-xs md:pt-4 font-medium text-justify md:text-start leading-relaxed text-black">
                    CV. DAYA POTENSIA INDONESIA ADALAH SEBUAH{" "}
                    <br className="hidden md:block" />
                    PERUSAHAAN PENYEDIA JASA LAYANAN PSIKOLOG{" "}
                    <br className="hidden md:block" />
                    PADA BIDANG SUMBER DAYA MANUSIA (HUMAN RESOURCE){" "}
                    <br className="hidden md:block" /> DAN KESEHATAN MENTAL
                    (MENTAL HEALTH). JASA YANG DISEDIAKAN{" "}
                    <br className="hidden md:block" /> ANTARA LAIN JASA
                    REKRUTMEN, SELEKSI, PENEMPATAN, EVALUASI,{" "}
                    <br className="hidden md:block" /> DAN PENGEMBANGAN SDM PADA
                    BIDANG HUMAN RESOURCE.
                </p>
            </div>
            <img
                src={DpiLogo2}
                alt="Logo Daya Potensia Indonesia"
                className="xl:h-[13em] lg:h-[10em] h-[6.5em] my-2 md:my-0"
            />
        </div>
    );
};

export default Hero1;
