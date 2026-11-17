import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import DpiLogo from "../assets/logo/dpilogo.png";
import { layananData } from "@/utils/layanan";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [mobileSection, setMobileSection] = useState("");
    const { url } = usePage();

    const services = layananData();
    const isActive = (path) => (path === "/" ? url === "/" : url.startsWith(path));
    const isServiceRoute =
        isActive("/layanan") ||
        services.some((service) => isActive(service.link));
    const isNewsRoute = isActive("/kegiatan") || isActive("/artikel");

    return (
        <header className="sticky top-0 z-50 w-full bg-[#132B52]/95 backdrop-blur-md border-b border-white/10 shadow-sm">
            <div className="h-1 w-full bg-gradient-to-r from-[#6A1B9A] via-[#F3BA33] to-[#1E4073]" />
            <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                <Link
                    href="/"
                    className="flex items-center gap-3 shrink-0 group"
                >
                    <img
                        src={DpiLogo}
                        alt="Logo Daya Potensia Indonesia"
                        className="h-9 sm:h-10 w-auto object-contain"
                    />
                    <div className="leading-tight">
                        <span className="block font-display font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-[#F3BA33] transition-colors">
                            Daya Potensia Indonesia
                        </span>
                        <span className="block text-[11px] font-medium text-slate-300">
                            Biro Psikologi &amp; Human Resource
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav
                    aria-label="Navigasi utama"
                    className="hidden lg:flex items-center gap-7"
                >
                    <Link
                        href="/"
                        className={`font-medium text-sm transition-colors py-1 border-b-2 ${
                            isActive("/")
                                ? "text-[#F3BA33] border-[#F3BA33]"
                                : "text-slate-100 border-transparent hover:text-[#F3BA33]"
                        }`}
                    >
                        Beranda
                    </Link>

                    <div className="dropdown dropdown-hover">
                        <Link
                            href="/layanan"
                            className={`inline-flex items-center gap-1 font-medium text-sm transition-colors py-1 border-b-2 ${
                                isServiceRoute
                                    ? "text-[#F3BA33] border-[#F3BA33]"
                                    : "text-slate-100 border-transparent hover:text-[#F3BA33]"
                            }`}
                        >
                            <span>Layanan Kami</span>
                            <svg
                                className="w-3.5 h-3.5 opacity-80"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Link>
                        <ul className="dropdown-content z-30 menu p-2 shadow-xl bg-white rounded-xl w-64 text-slate-800 border border-slate-100">
                            <li>
                                <Link
                                    href="/layanan"
                                    className="font-semibold text-[#132B52] hover:bg-slate-100"
                                >
                                    Semua Bidang Layanan
                                </Link>
                            </li>
                            <div className="my-1 border-t border-slate-100" />
                            {services.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={service.link}
                                        className={`text-sm hover:bg-slate-100 ${
                                            isActive(service.link)
                                                ? "font-semibold text-[#132B52] bg-amber-50"
                                                : ""
                                        }`}
                                    >
                                        {service.shortTitle}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="dropdown dropdown-hover">
                        <button
                            type="button"
                            className={`inline-flex items-center gap-1 font-medium text-sm transition-colors py-1 border-b-2 cursor-pointer ${
                                isNewsRoute
                                    ? "text-[#F3BA33] border-[#F3BA33]"
                                    : "text-slate-100 border-transparent hover:text-[#F3BA33]"
                            }`}
                        >
                            <span>Publikasi</span>
                            <svg
                                className="w-3.5 h-3.5 opacity-80"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <ul className="dropdown-content z-30 menu p-2 shadow-xl bg-white rounded-xl w-44 text-slate-800 border border-slate-100">
                            <li>
                                <Link
                                    href="/kegiatan"
                                    className="hover:bg-slate-100"
                                >
                                    Kegiatan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/artikel"
                                    className="hover:bg-slate-100"
                                >
                                    Artikel
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link
                        href={route("hubungikami.create")}
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all shadow-sm ${
                            isActive("/hubungikami")
                                ? "bg-white text-[#132B52]"
                                : "bg-[#F3BA33] text-[#0D1E3A] hover:bg-[#eab024]"
                        }`}
                    >
                        Hubungi Kami
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    aria-label={open ? "Tutup menu" : "Buka menu"}
                    className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Drawer */}
            {open && (
                <div className="lg:hidden bg-[#0D1E3A] border-t border-white/10 px-6 py-5 space-y-2 max-h-[calc(100vh-5.25rem)] overflow-y-auto">
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="block py-2.5 text-sm font-semibold text-white hover:text-[#F3BA33] border-b border-white/10"
                    >
                        Beranda
                    </Link>

                    <div className="border-b border-white/10">
                        <button
                            type="button"
                            onClick={() =>
                                setMobileSection(
                                    mobileSection === "layanan" ? "" : "layanan"
                                )
                            }
                            className="w-full py-2.5 flex items-center justify-between text-sm font-semibold text-white hover:text-[#F3BA33]"
                        >
                            <span>Layanan Kami</span>
                            <span className="text-xs text-[#F3BA33]">
                                {mobileSection === "layanan" ? "▲" : "▼"}
                            </span>
                        </button>
                        {mobileSection === "layanan" && (
                            <div className="pl-4 pb-3 space-y-1.5">
                                <Link
                                    href="/layanan"
                                    onClick={() => setOpen(false)}
                                    className="block py-1.5 text-sm font-semibold text-[#F3BA33]"
                                >
                                    Semua Bidang Layanan
                                </Link>
                                {services.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={service.link}
                                        onClick={() => setOpen(false)}
                                        className="block py-1.5 text-sm text-slate-200 hover:text-[#F3BA33]"
                                    >
                                        {service.shortTitle}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="border-b border-white/10">
                        <button
                            type="button"
                            onClick={() =>
                                setMobileSection(
                                    mobileSection === "berita" ? "" : "berita"
                                )
                            }
                            className="w-full py-2.5 flex items-center justify-between text-sm font-semibold text-white hover:text-[#F3BA33]"
                        >
                            <span>Publikasi</span>
                            <span className="text-xs text-[#F3BA33]">
                                {mobileSection === "berita" ? "▲" : "▼"}
                            </span>
                        </button>
                        {mobileSection === "berita" && (
                            <div className="pl-4 pb-3 space-y-1.5">
                                <Link
                                    href="/kegiatan"
                                    onClick={() => setOpen(false)}
                                    className="block py-1.5 text-sm text-slate-200 hover:text-[#F3BA33]"
                                >
                                    Kegiatan
                                </Link>
                                <Link
                                    href="/artikel"
                                    onClick={() => setOpen(false)}
                                    className="block py-1.5 text-sm text-slate-200 hover:text-[#F3BA33]"
                                >
                                    Artikel
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="pt-3">
                        <Link
                            href={route("hubungikami.create")}
                            onClick={() => setOpen(false)}
                            className="block w-full text-center rounded-full bg-[#F3BA33] text-[#0D1E3A] font-semibold text-sm py-3 hover:bg-[#eab024] transition-colors"
                        >
                            Hubungi &amp; Konsultasi
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
