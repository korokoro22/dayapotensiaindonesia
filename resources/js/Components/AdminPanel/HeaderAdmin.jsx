import React, { useState } from "react";
import LogoDpi from "../../assets/logo/dpilogo.png";
import Avatar from "../../assets/logo/avatar.png";
import { Link } from "@inertiajs/react";

const HeaderAdmin = () => {
    const [login, setLogin] = useState(false);

    return (
        <div
            className={`bg-[#020202] w-full h-[5.5em] py-5 duration-300 flex items-center justify-between rounded-b-2xl`}
        >
            <div className="">
                <img src={LogoDpi} alt="" className="w-24 ml-4" />
            </div>
            {login ? (
                <div className="flex items-center gap-1 pr-5">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src={Avatar} />
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" m-1">
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
                    className="font-inter font-semibold xl:text-xl lg:text-lg mr-10 px-4 hover:bg-[#f3d457] hover:text-black py-[0.30rem] rounded-xl text-black bg-white"
                    onClick={() => {
                        setLogin(true);
                    }}
                >
                    Masuk
                </button>
            )}
        </div>
    );
};

export default HeaderAdmin;
