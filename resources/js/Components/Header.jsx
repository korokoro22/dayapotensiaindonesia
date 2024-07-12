import React, { useState } from "react";
import DpiLogo from "../assets/logo/dpilogo.png";
import Avatar from "../assets/logo/avatar.png";
import { Link, Head } from "@inertiajs/react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [heading, setHeading] = useState("");

    const links = [
        {
            name: "Berita",
            submenu: true,
            sublinks: [
                {
                    id:1,
                    sublink: [
                        { id:1, name: "Kegiatan", link: "/" },
                        { id:2, name: "Artikel", link: "/" },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="w-full h-24 bg-[#020202]  flex sticky z-50 items-center justify-between top-0">
            <div className="text-white lg:ml-10 ml-3">
                <img src={DpiLogo} alt="" className="md:h-12 h-10 " />
                <h1 className="font-inter font-semibold text-xs lg:text-lg">
                    Daya Potensia Indonesia
                </h1>
            </div>

            <div className="flex items-center">
                <div className="lg:hidden">
                    {login ? (
                        <div className="flex items-center pr-2">
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={Avatar} />
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className=" m-1"
                                >
                                    <ion-icon
                                        name="chevron-down-outline"
                                        size="large"
                                        style={{
                                            color: "white",
                                        }}
                                    ></ion-icon>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a className="text-black text-md font-medium">
                                            {" "}
                                            Profil
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-black text-md font-medium">
                                            Jadwal Konsultasi
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            className="text-black text-md font-medium"
                                            onClick={() => {
                                                setLogin(false);
                                            }}
                                        >
                                            keluar
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <button
                            className=" w-full bg-[#020202] px-3 inline-block lg:cursor-pointer font-bold text-white text-left"
                            to="/"
                            onClick={() => setLogin(true)}
                        >
                            <span className="hover:bg-[#f3d457] hover:text-black bg-white text-black px-4 py-[0.35rem] rounded-lg">
                                Masuk
                            </span>
                        </button>
                    )}
                </div>
                <div
                    className="lg:hidden text-3xl text-white pr-5"
                    onClick={() => setOpen(!open)}
                >
                    <ion-icon
                        name={`${open ? "close" : "menu"}`}
                        className=" w-24 "
                    ></ion-icon>
                </div>
            </div>

            <ul className="text-white lg:flex items-center hidden xl:pr-10 ">
                <li>
                    <Link
                        className="font-inter font-medium xl:text-xl lg:text-lg lg:pr-10 xl:pr-14 hover:text-[#F3D457]"
                        href="/"
                    >
                        Beranda
                    </Link>
                </li>
                <li>
                    <Link
                        className="font-inter font-medium xl:text-xl lg:text-lg lg:pr-10 hover:text-[#F3D457] xl:pr-14 "
                        href="/layanan"
                    >
                        <a>Layanan Kami</a>
                    </Link>
                </li>
                <li>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className=" font-inter font-medium xl:text-xl lg:text-lg lg:pr-10 hover:text-[#F3D457] xl:pr-14"
                        >
                            Berita
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 mt-4 shadow bg-base-100 rounded-box w-40 mr-10 text-black"
                        >
                            <li>
                                <Link href="/kegiatan">Kegiatan </Link>
                            </li>
                            <li>
                                <Link href="/artikel">Artikel</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link
                        className="font-inter font-medium xl:text-xl lg:text-lg pr-10 hover:text-[#F3D457] "
                        to="/kontak"
                    >
                        Kontak Kami
                    </Link>
                </li>
                <li>
                    {/* {login ? (
                        <div className="flex items-center gap-1">
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src={Avatar} />
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className=" m-1"
                                >
                                    <ion-icon
                                        name="chevron-down-outline"
                                        size="large"
                                    ></ion-icon>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a className="text-black text-md font-medium">
                                            {" "}
                                            Profil
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-black text-md font-medium">
                                            Jadwal Konsultasi
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            className="text-black text-md font-medium"
                                            onClick={() => {
                                                setLogin(false);
                                            }}
                                        >
                                            keluar
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="font-inter font-semibold xl:text-xl lg:text-lg mr-10 px-4 hover:bg-[#f3d457] hover:text-black py-[0.30rem] rounded-xl	 text-black bg-white"
                            onClick={() => {
                                setLogin(true);
                            }}
                        >
                            Masuk
                        </button>
                    )} */}
                    {/* <Link href="/login-dpi">
                        <button className="font-inter font-semibold xl:text-xl lg:text-lg mr-10 px-4 hover:bg-[#f3d457] hover:text-black py-[0.30rem] rounded-xl	 text-black bg-white">
                            Masuk
                        </button>
                    </Link> */}
                </li>
            </ul>

            {/* Mobile */}
            <ul
                className={`
        lg:hidden bg-[#020202] absolute w-full h-full pt-[10rem] py-24 z-[-1] duration-500 ${
            open ? "left-0" : "left-[-100%]"
        }
      `}
            >
                <li>
                    <Link
                        className="pr-10 bg-[#020202] hover:text-[#F3D457]  py-7 px-3 inline-block lg:cursor-pointer font-bold text-white"
                        to="/"
                    >
                        Beranda
                    </Link>
                </li>
                <li>
                    <Link
                        className="pr-10 w-full bg-[#020202] hover:text-[#F3D457] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white"
                        to="/"
                    >
                        Layanan Kami
                    </Link>
                </li>
                {links.map((link) => (
                    <li>
                        <h1
                            className="w-full bg-[#020202] py-7 px-3 inline-block cursor-pointer font-bold text-white  hover:text-[#F3D457]"
                            onClick={() =>
                                heading !== link.name
                                    ? setHeading(link.name)
                                    : setHeading("")
                            }
                        >
                            {" "}
                            {link.name}
                        </h1>
                        {link.submenu && (
                            <div className="w-full bg-[#020202]">
                                <div>
                                    <div
                                        className={`
                    ${heading === link.name ? "md:hidden" : "hidden"} 
                  `}
                                    >
                                        {link.sublinks.map((mysublinks) => (
                                            <div className="grid grid-cols-1" key={mysublinks.id}>
                                                {mysublinks.sublink.map(
                                                    (slink) => (
                                                        <li key={slink.id} className="py-4 pl-7 font-semibold pr-5 text-sm text-white hover:text-[#F3D457]">
                                                            <Link
                                                                to={slink.link}
                                                            >
                                                                {slink.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
                <li>
                    <Link
                        className="pr-10 w-full bg-[#020202] hover:text-[#F3D457] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white"
                        to="/"
                    >
                        Kontak Kami
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
