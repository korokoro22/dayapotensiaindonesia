import React from "react";
import Industri from "../../../assets/Layanan/industri.jpg";
import Forensik from "../../../assets/Layanan/forensik.jpg";
import Sosial from "../../../assets/Layanan/sosial.jpg";
import { Link } from "@inertiajs/react";

const KegiatanHeadline = ({ kegiatanTerbaru }) => {
    const firstKegiatan = kegiatanTerbaru[0];
    const secondKegiatan = kegiatanTerbaru[1];
    const thirdKegiatan = kegiatanTerbaru[2];
    return (
        <div className="bg-[#E9E9E9] font-inter">
            <div className="flex flex-col md:flex-row justify-center items-center py-10 gap-5 static xl:w-[70em] lg:w-[60em] md:w-[45em] m-auto">
                <Link
                    className=" bg-cover bg-center xl:w-[30em] md:w-[20em] md:h-[30em] h-[14em] w-[20em] text-white bg-black rounded-xl"
                    style={{
                        backgroundImage: `url('/storage/${firstKegiatan.gambar}')`,
                    }}
                    href={`/viewkegiatan/${firstKegiatan.id}`}
                >
                    <div className=" text-white pl-2 mt-[9.5em] md:mt-[26em] ">
                        <p className=" text-lg"> {firstKegiatan.tanggal} </p>
                        <h1 className="xl:text-2xl lg:text-base font-bold">
                            {firstKegiatan.judul}
                        </h1>
                    </div>
                </Link>

                <div className=" w-[20em] md:w-[25em] lg:w-[40em] h-[30em]">
                    <Link href={`/viewkegiatan/${secondKegiatan.id}`}>
                        <div
                            className=" bg-cover h-[14em] text-white bg-black rounded-xl"
                            style={{
                                backgroundImage: `url('/storage/${secondKegiatan.gambar}')`,
                            }}
                        >
                            <div className=" text-white pl-2 pt-[9.5em]  ">
                                <p className=" text-lg">
                                    {secondKegiatan.tanggal}
                                </p>
                                <h1 className="xl:text-2xl lg:text-xl font-bold">
                                    {secondKegiatan.judul}
                                </h1>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/viewkegiatan/${thirdKegiatan.id}`}>
                        <div
                            className=" bg-cover h-[14em] md:mt-[2em] mt-5 text-white bg-black rounded-xl"
                            style={{
                                backgroundImage: `url('/storage/${thirdKegiatan.gambar}')`,
                            }}
                        >
                            <div className=" text-white pl-2 pt-[9.5em]  ">
                                <p className=" text-lg">
                                    {thirdKegiatan.tanggal}
                                </p>
                                <h1 className="xl:text-2xl lg:text-xl font-bold">
                                    {thirdKegiatan.judul}
                                </h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default KegiatanHeadline;
