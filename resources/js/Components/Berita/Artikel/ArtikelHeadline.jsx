import React from "react";
import { Link } from "@inertiajs/react";

const ArtikelHeadline = ({ artikelTerbaru = [] }) => {
    const firstArtikel = artikelTerbaru[0];
    const secondArtikel = artikelTerbaru[1];
    const thirdArtikel = artikelTerbaru[2];

    if (!firstArtikel) {
        return null;
    }

    return (
        <div className="bg-[#E9E9E9] font-inter px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 max-w-6xl mx-auto">
                <Link
                    href={`/artikel/${firstArtikel.id}`}
                    className="relative bg-cover bg-center min-h-[16em] md:min-h-[30em] text-white bg-black rounded-xl overflow-hidden flex flex-col justify-end group"
                    style={{
                        backgroundImage: `url('/storage/${firstArtikel.gambar}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors"></div>
                    <div className="relative z-10 p-5">
                        <p className="text-sm md:text-base text-gray-200">
                            {firstArtikel.tanggal}
                        </p>
                        <h2 className="xl:text-2xl lg:text-xl text-lg font-bold line-clamp-2">
                            {firstArtikel.judul}
                        </h2>
                    </div>
                </Link>

                {(secondArtikel || thirdArtikel) && (
                    <div className="flex flex-col gap-5 justify-between">
                        {secondArtikel && (
                            <Link
                                href={`/artikel/${secondArtikel.id}`}
                                className="relative bg-cover bg-center h-[14em] flex-1 text-white bg-black rounded-xl overflow-hidden flex flex-col justify-end group"
                                style={{
                                    backgroundImage: `url('/storage/${secondArtikel.gambar}')`,
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors"></div>
                                <div className="relative z-10 p-5">
                                    <p className="text-sm md:text-base text-gray-200">
                                        {secondArtikel.tanggal}
                                    </p>
                                    <h2 className="xl:text-2xl lg:text-xl text-lg font-bold line-clamp-2">
                                        {secondArtikel.judul}
                                    </h2>
                                </div>
                            </Link>
                        )}
                        {thirdArtikel && (
                            <Link
                                href={`/artikel/${thirdArtikel.id}`}
                                className="relative bg-cover bg-center h-[14em] flex-1 text-white bg-black rounded-xl overflow-hidden flex flex-col justify-end group"
                                style={{
                                    backgroundImage: `url('/storage/${thirdArtikel.gambar}')`,
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors"></div>
                                <div className="relative z-10 p-5">
                                    <p className="text-sm md:text-base text-gray-200">
                                        {thirdArtikel.tanggal}
                                    </p>
                                    <h2 className="xl:text-2xl lg:text-xl text-lg font-bold line-clamp-2">
                                        {thirdArtikel.judul}
                                    </h2>
                                </div>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArtikelHeadline;
