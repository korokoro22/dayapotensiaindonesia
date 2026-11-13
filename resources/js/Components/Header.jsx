import React, { useState } from "react";
import DpiLogo from "../assets/logo/dpilogo.png";
import { Link } from "@inertiajs/react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [heading, setHeading] = useState("");

    const links = [
        {
            id: 1,
            name: "Berita",
            submenu: true,
            sublinks: [
                { id: 1, name: "Kegiatan", link: "/kegiatan" },
                { id: 2, name: "Artikel", link: "/artikel" },
            ],
        },
    ];

    return (
        <header className="w-full h-24 bg-[#020202] flex sticky z-50 items-center justify-between top-0 px-4 lg:px-10">
            <Link href="/" className="text-white flex flex-col items-start">
                <img src={DpiLogo} alt="Daya Potensia Indonesia" className="md:h-12 h-10" />
                <h1 className="font-inter font-semibold text-xs lg:text-lg">
                    Daya Potensia Indonesia
                </h1>
            </Link>

            <button
                type="button"
                aria-label={open ? "Tutup menu" : "Buka menu"}
                className="lg:hidden text-3xl text-white p-2 cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </button>

            <ul className="text-white lg:flex items-center hidden gap-8 xl:gap-12">
                <li>
                    <Link
                        className="font-inter font-medium xl:text-xl lg:text-lg hover:text-[#F3D457] transition-colors"
                        href="/"
                    >
                        Beranda
                    </Link>
                </li>
                <li>
                    <Link
                        className="font-inter font-medium xl:text-xl lg:text-lg hover:text-[#F3D457] transition-colors"
                        href="/layanan"
                    >
                        Layanan Kami
                    </Link>
                </li>
                <li>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="font-inter font-medium xl:text-xl lg:text-lg hover:text-[#F3D457] transition-colors"
                        >
                            Berita
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 mt-4 shadow bg-base-100 rounded-box w-40 text-black"
                        >
                            <li>
                                <Link href="/kegiatan">Kegiatan</Link>
                            </li>
                            <li>
                                <Link href="/artikel">Artikel</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link
                        className="font-inter font-medium xl:text-xl lg:text-lg hover:text-[#F3D457] transition-colors"
                        href={route("hubungikami.create")}
                    >
                        Kontak Kami
                    </Link>
                </li>
            </ul>

            {/* Mobile Drawer */}
            <ul
                className={`lg:hidden fixed top-24 w-full h-[calc(100vh-6rem)] bg-[#020202] overflow-y-auto px-6 py-6 z-40 transition-all duration-300 ${
                    open ? "left-0" : "-left-full"
                }`}
            >
                <li>
                    <Link
                        className="w-full hover:text-[#F3D457] py-4 px-2 block font-bold text-white border-b border-gray-800"
                        href="/"
                        onClick={() => setOpen(false)}
                    >
                        Beranda
                    </Link>
                </li>
                <li>
                    <Link
                        className="w-full hover:text-[#F3D457] py-4 px-2 block font-bold text-white border-b border-gray-800"
                        href="/layanan"
                        onClick={() => setOpen(false)}
                    >
                        Layanan Kami
                    </Link>
                </li>
                {links.map((link) => (
                    <li key={link.id} className="border-b border-gray-800">
                        <button
                            type="button"
                            className="w-full text-left py-4 px-2 flex items-center justify-between cursor-pointer font-bold text-white hover:text-[#F3D457]"
                            onClick={() =>
                                setHeading(heading !== link.name ? link.name : "")
                            }
                        >
                            <span>{link.name}</span>
                            <span className="text-sm">
                                {heading === link.name ? "▲" : "▼"}
                            </span>
                        </button>
                        {link.submenu && heading === link.name && (
                            <ul className="pl-5 pb-3 space-y-2">
                                {link.sublinks.map((slink) => (
                                    <li key={slink.id}>
                                        <Link
                                            href={slink.link}
                                            className="block py-2 font-semibold text-sm text-gray-200 hover:text-[#F3D457]"
                                            onClick={() => setOpen(false)}
                                        >
                                            {slink.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
                <li>
                    <Link
                        className="w-full hover:text-[#F3D457] py-4 px-2 block font-bold text-white border-b border-gray-800"
                        href={route("hubungikami.create")}
                        onClick={() => setOpen(false)}
                    >
                        Kontak Kami
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
