import React from "react";
import { Link } from "@inertiajs/react";
import DpiLogo from "../assets/logo/dpilogo.png";
import { companyProfile } from "@/utils/companyProfile";
import { layananData } from "@/utils/layanan";

const Footer = () => {
    const services = layananData();

    return (
        <footer className="w-full bg-[#0D1E3A] text-slate-200 font-inter">
            <div className="h-1 w-full bg-gradient-to-r from-[#6A1B9A] via-[#F3BA33] to-[#1E4073]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                {/* Brand Column */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={DpiLogo}
                            alt="Logo Daya Potensia Indonesia"
                            className="h-11 w-auto object-contain"
                        />
                        <div>
                            <h2 className="font-display font-bold text-lg text-white leading-tight">
                                Daya Potensia Indonesia
                            </h2>
                            <p className="text-xs text-[#F3BA33] font-medium">
                                {companyProfile.subBrand}
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                        &ldquo;{companyProfile.heroTagline}&rdquo;
                    </p>
                    <p className="text-xs text-slate-400">
                        Berdiri sejak {companyProfile.foundedDate} · Layanan Psikologi Berizin Praktik Aktif &amp; Berstandar Kode Etik HIMPSI.
                    </p>
                </div>

                {/* Layanan Column */}
                <div className="lg:col-span-3">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F3BA33]" />
                        Bidang Layanan
                    </h3>
                    <ul className="space-y-2.5 text-sm">
                        {services.map((service) => (
                            <li key={service.id}>
                                <Link
                                    href={service.link}
                                    className="text-slate-300 hover:text-[#F3BA33] transition-colors"
                                >
                                    {service.shortTitle}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navigasi Column */}
                <div className="lg:col-span-2">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F3BA33]" />
                        Tautan
                    </h3>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <Link
                                href="/"
                                className="text-slate-300 hover:text-[#F3BA33] transition-colors"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/layanan"
                                className="text-slate-300 hover:text-[#F3BA33] transition-colors"
                            >
                                Semua Layanan
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/kegiatan"
                                className="text-slate-300 hover:text-[#F3BA33] transition-colors"
                            >
                                Kegiatan
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/artikel"
                                className="text-slate-300 hover:text-[#F3BA33] transition-colors"
                            >
                                Artikel
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("hubungikami.create")}
                                className="text-slate-300 hover:text-[#F3BA33] transition-colors"
                            >
                                Hubungi Kami
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Kontak Column */}
                <div className="lg:col-span-3 space-y-3 text-sm">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F3BA33]" />
                        Kontak Resmi
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                        {companyProfile.contact.address}
                    </p>
                    <p>
                        <span className="text-slate-400">Telp / WhatsApp: </span>
                        <a
                            href={`https://wa.me/${companyProfile.contact.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#F3BA33] hover:underline"
                        >
                            {companyProfile.contact.phoneDisplay}
                        </a>
                    </p>
                    <p>
                        <a
                            href={`mailto:${companyProfile.contact.email}`}
                            className="text-slate-300 hover:text-[#F3BA33] transition-colors break-all"
                        >
                            {companyProfile.contact.email}
                        </a>
                    </p>
                    <p className="text-xs text-slate-400">
                        Instagram: {companyProfile.contact.instagramHandle} · LinkedIn: {companyProfile.contact.linkedinName}
                    </p>
                    <div className="pt-2 border-t border-white/10 text-xs text-slate-400">
                        <span className="font-semibold text-slate-200">
                            MOKSA DPI (Krisis &amp; Sosial):
                        </span>{" "}
                        {companyProfile.moksaContact.phoneDisplay} ·{" "}
                        {companyProfile.moksaContact.instagramHandle}
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 bg-[#09152B] py-5 px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
                    <p>
                        Copyright © 2026 Daya Potensia Indonesia. Biro Psikologi &amp; Human Resource.
                    </p>
                    <p>Makassar, Sulawesi Selatan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
