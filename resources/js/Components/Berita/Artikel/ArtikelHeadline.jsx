import React from "react";
import Industri from "../../../assets/Layanan/industri.jpg";
import Forensik from "../../../assets/Layanan/forensik.jpg";
import Sosial from "../../../assets/Layanan/sosial.jpg";
import { Link } from "@inertiajs/react";

const ArtikelHeadline = ({ artikelTerbaru }) => {
    const firstArtikel = artikelTerbaru[0];
    const secondArtikel = artikelTerbaru[1];
    const thirdArtikel = artikelTerbaru[2];

    return (
        <div className="bg-[#E9E9E9] font-inter">
            <div className="flex flex-col md:flex-row justify-center items-center py-10 gap-5 static xl:w-[70em] lg:w-[60em] md:w-[45em] m-auto">
                <Link
                    className=" bg-cover bg-center xl:w-[30em] md:w-[20em] md:h-[30em] h-[14em] w-[20em] text-white bg-black rounded-xl"
                    style={{
                        backgroundImage: `url('/storage/${firstArtikel.gambar}')`,
                    }}
                    href={`/viewartikel/${firstArtikel.id}`}
                >
                    <div className=" text-white pl-2 mt-[9.5em] md:mt-[26em] ">
                        <p className=" text-lg"> {firstArtikel.tanggal} </p>
                        <h1 className="xl:text-2xl lg:text-base font-bold">
                            {firstArtikel.judul}
                        </h1>
                    </div>
                </Link>

                <div className=" w-[20em] md:w-[25em] lg:w-[40em] h-[30em]">
                    <Link href={`/viewartikel/${secondArtikel.id}`}>
                        <div
                            className=" bg-cover h-[14em] text-white bg-black rounded-xl"
                            style={{
                                backgroundImage: `url('/storage/${secondArtikel.gambar}')`,
                            }}
                        >
                            <div className=" text-white pl-2 pt-[9.5em]  ">
                                <p className=" text-lg">
                                    {" "}
                                    {secondArtikel.tanggal}{" "}
                                </p>
                                <h1 className="xl:text-2xl lg:text-xl font-bold">
                                    {secondArtikel.judul}
                                </h1>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/viewartikel/${thirdArtikel.id}`}>
                        <div
                            className=" bg-cover h-[14em] md:mt-[2em] mt-5 text-white bg-black rounded-xl"
                            style={{
                                backgroundImage: `url('/storage/${thirdArtikel.gambar}')`,
                            }}
                        >
                            <div className=" text-white pl-2 pt-[9.5em]  ">
                                <p className=" text-lg">
                                    {" "}
                                    {thirdArtikel.tanggal}{" "}
                                </p>
                                <h1 className="xl:text-2xl lg:text-xl font-bold">
                                    {thirdArtikel.judul}
                                </h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArtikelHeadline;
