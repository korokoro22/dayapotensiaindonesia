import React from "react";
import { Link } from "@inertiajs/react";
import Facebook from "../assets/logo/Sosmed/facebook.png"
import Instagram from "../assets/logo/Sosmed/instagram.png"
import Linkedin from "../assets/logo/Sosmed/linkedin.png"
import Whatsapp from "../assets/logo/Sosmed/whatsapp.png"
import Dpilogo from "../assets/logo/dpilogo.png"
// import Dpilogo2 from "../assets/logo/dpilogo2.png"

const Footer = () => {
    return (
        <div className="w-full h-[50rem] md:h-[25rem] font-inter bg-black">
            <div className="md:bg-black h-[50em] md:pt-14 md:h-[20rem] flex justify-center md:flex-row flex-col md:w-fit md:items-start m-auto xl:gap-[6rem] lg:gap-[2em] md:gap-0 gap-14 w-[21em]">
                <div className="px-8 text-white">
                    <h1 className=" text-2xl font-bold border-l-4 border-white pl-5 uppercase">
                        Kontak
                    </h1>
                    <p className="pt-6 lg:pt-10 text-lg">
                        Jl. Raya Pendidikan Blok G1 No. 9,<br /> Makassar, Sulawesi
                        Selatan.{" "}
                    </p>
                    <p className=" py-4 text-lg">
                    dayapotensiaindonesia@gmail.com
                    </p>
                    <div className="flex gap-5">
                        <img src={Facebook} alt="" className="w-[2.5em] " />
                        <img src={Instagram} alt="" className="w-[2.5em]" />
                        <img src={Linkedin} alt="" className="w-[2.5em]" />
                        <img src={Whatsapp} alt="" className="w-[2.5em]" />
                    </div>
                </div>
                <div className="px-8 md:pt-0 text-white">
                    <h1 className=" text-2xl font-bold border-l-4 border-white pl-5 uppercase">
                        Layanan
                    </h1>
                    <p className="pt-6 text-lg">
                        <Link>Industri/Organisasi</Link>
                    </p>
                    <p className="pt-2 text-lg">
                        <Link>Klinis</Link>
                    </p>
                    <p className="pt-2 text-lg">
                        <Link>Forensik</Link>
                    </p>
                    <p className="pt-2 text-lg">
                        <Link>Pendidikan</Link>
                    </p>
                    <p className="pt-2 text-lg">
                        <Link>Bidang Psikologi Sosial</Link>
                    </p>
                </div>
                <div className="px-8 md:pt-0 text-white">
                    <img src={Dpilogo} alt="" className="xl:w-[18em] lg:w-[15em] w-[10em]" />
                </div>
            </div>
            <div className="bg-[#141414] h-[5rem] text-center flex justify-center items-center">
                <h1 className="text-white  font-semibold text-sm">
                Copyright © 2024 Daya Potensia Indonesia
                </h1>
            </div>
        </div>
    );
};

export default Footer;
