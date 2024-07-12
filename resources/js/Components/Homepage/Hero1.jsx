import React from "react";
import DpiLogo2 from "../../assets/logo/dpilogo2.png";

const Hero1 = () => {
    return (
        <div  className="flex relative w-full bg-[#E2E2E2] flex-col-reverse md:flex-row md:justify-center justify-end items-center md:h-[35em] h-[30em] xl:gap-32 lg:gap-24 md:gap-14  font-inter">
            <div className="flex md:block flex-col justify-center items-center gap-2">
                <h1 className="text-center xl:text-2xl lg:text-lg text-md font-bold text-black bg-[#F3D457] md:px-2 py-1 xl:w-[14.6em] lg:w-[14.8em] w-[14.9em] rounded-lg md:text-start">
                    DAYA POTENSIA INDONESIA
                </h1>
                <p className="xl:text-sm text-xs md:pt-4 font-medium text-justify md:text-start w-[26em] md:w-fit">
                    CV. DAYA POTENSIA INDONESIA ADALAH SEBUAH <br className="hidden md:block" />
                    PERUSAHAAN PENYEDIA JASA LAYANAN PSIKOLOG <br className="hidden md:block" />
                    PADA BIDANG SUMBER DAYA MANUSIA (HUMAN RESOURCE) <br className="hidden md:block" /> DAN
                    KESEHATAN MENTAL (MENTAL HEALTH). JASA YANG DISEDIAKAN{" "}
                    <br className="hidden md:block" /> ANTARA LAIN JASA REKRUTMEN, SELEKSI, PENEMPATAN,
                    EVALUASI, <br className="hidden md:block" /> DAN PENGEMBANGAN SDM PADA BIDANG HUMAN
                    RESOURCE.
                </p>
            </div>
            <img
                src={DpiLogo2}
                alt=""
                className=" xl:h-[13em] lg:h-[10em] h-[6.5em] my-10 md:my-0"
            />
        </div>
    );
};

export default Hero1;
