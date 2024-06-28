import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const Sidebar = ({ open, setOpen }) => {
    const menuItem = [
        {
            id: 1,
            path: "/admin-kegiatan",
            name: "Kegiatan",
            icon: <ion-icon name="receipt-outline"></ion-icon>,
        },
        {
            id: 2,
            path: "/admin-artikel",
            name: "Artikel",
            icon: <ion-icon name="reader-outline"></ion-icon>,
        },
        {
            id: 3,
            path: "/admin-konsultasi",
            name: "Konsultasi",
            icon: <ion-icon name="calendar-outline"></ion-icon>,
        },
    ];

    return (
        <div
            className={`${
                open ? "w-[15em]" : "w-[2.5em]"
            } bg-[#020202] h-screen sticky top-0 duration-300 font-inter`}
        >
            <div className="font-inter  ml-1 mt-16">
                <div className=" flex gap-10 items-center text-white text-3xl ">
                    <h1
                        className={` font-bold ${
                            !open && "hidden"
                        } duration-200 origin-left `}
                    >
                        Dashboard
                    </h1>

                    <div
                        className="flex items-center "
                        onClick={() => setOpen(!open)}
                    >
                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                    </div>
                </div>

                <div className="flex flex-col  gap-y-8 py-16 ">
                    {menuItem.map((item, index) => (
                        <div className="flex gap-5 w-[20em] " key={index}>
                            <div className=" text-white text-2xl ">
                                <Link href={item.path}> {item.icon} </Link>
                            </div>
                            <Link href={item.path}>
                                <p
                                    className={` text-xl font-semibold text-white ${
                                        !open && "hidden"
                                    } duration-150`}
                                >
                                    {item.name}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
