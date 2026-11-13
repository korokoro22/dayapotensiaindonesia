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
        <footer className="w-full font-inter bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
                <div>
                    <h2 className="text-2xl font-bold border-l-4 border-white pl-4 uppercase">
                        Kontak
                    </h2>
                    <p className="pt-6 text-base md:text-lg leading-relaxed">
                        Jl. Raya Pendidikan Blok G1 No. 9,
                        <br /> Makassar, Sulawesi Selatan.
                    </p>
                    <p className="py-4 text-base md:text-lg">
                        <a
                            href="mailto:dayapotensiaindonesia@gmail.com"
                            className="hover:text-[#F3D457] transition-colors break-all"
                        >
                            dayapotensiaindonesia@gmail.com
                        </a>
                    </p>
                    <div className="flex gap-4 items-center">
                        <img src={Facebook} alt="Facebook" className="w-9 h-9 object-contain" />
                        <img src={Instagram} alt="Instagram" className="w-9 h-9 object-contain" />
                        <img src={Linkedin} alt="LinkedIn" className="w-9 h-9 object-contain" />
                        <a
                            href="https://wa.me/6285756297170"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp Daya Potensia Indonesia"
                        >
                            <img src={Whatsapp} alt="WhatsApp" className="w-9 h-9 object-contain hover:opacity-80 transition-opacity" />
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold border-l-4 border-white pl-4 uppercase">
                        Layanan
                    </h2>
                    <ul className="pt-6 space-y-2 text-base md:text-lg">
                        <li>
                            <Link href="/industri" className="hover:text-[#F3D457] transition-colors">
                                Industri/Organisasi
                            </Link>
                        </li>
                        <li>
                            <Link href="/klinis" className="hover:text-[#F3D457] transition-colors">
                                Klinis
                            </Link>
                        </li>
                        <li>
                            <Link href="/forensik" className="hover:text-[#F3D457] transition-colors">
                                Forensik
                            </Link>
                        </li>
                        <li>
                            <Link href="/pendidikan" className="hover:text-[#F3D457] transition-colors">
                                Pendidikan
                            </Link>
                        </li>
                        <li>
                            <Link href="/sosial" className="hover:text-[#F3D457] transition-colors">
                                Bidang Psikologi Sosial
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="self-center md:self-start">
                    <img
                        src={Dpilogo}
                        alt="Logo Daya Potensia Indonesia"
                        className="w-40 md:w-52 lg:w-64"
                    />
                </div>
            </div>
            <div className="bg-[#141414] py-5 px-4 text-center flex justify-center items-center">
                <p className="text-white font-semibold text-sm">
                    Copyright © 2024 Daya Potensia Indonesia
                </p>
            </div>
        </footer>
    );
};

export default Footer;
