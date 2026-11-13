import React from "react";
import { Link } from "@inertiajs/react";
import { resolveMediaUrl } from "@/utils/media";

const KegiatanHeadline = ({ kegiatanTerbaru = [] }) => {
    const firstKegiatan = kegiatanTerbaru[0];
    const secondKegiatan = kegiatanTerbaru[1];
    const thirdKegiatan = kegiatanTerbaru[2];

    if (!firstKegiatan) {
        return null;
    }

    return (
        <div className="bg-[#E9E9E9] font-inter px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 max-w-6xl mx-auto">
                <Link
                    href={`/kegiatan/${firstKegiatan.id}`}
                    className="relative bg-cover bg-center min-h-[16em] md:min-h-[30em] text-white bg-black rounded-xl overflow-hidden flex flex-col justify-end group"
                    style={{
                        backgroundImage: `url('${resolveMediaUrl(firstKegiatan.gambar)}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors"></div>
                    <div className="relative z-10 p-5">
                        <p className="text-sm md:text-base text-gray-200">
                            {firstKegiatan.tanggal}
                        </p>
                        <h2 className="xl:text-2xl lg:text-xl text-lg font-bold line-clamp-2">
                            {firstKegiatan.judul}
                        </h2>
                    </div>
                </Link>

                {(secondKegiatan || thirdKegiatan) && (
                    <div className="flex flex-col gap-5 justify-between">
                        {secondKegiatan && (
                            <Link
                                href={`/kegiatan/${secondKegiatan.id}`}
                                className="relative bg-cover bg-center h-[14em] flex-1 text-white bg-black rounded-xl overflow-hidden flex flex-col justify-end group"
                                style={{
                                    backgroundImage: `url('${resolveMediaUrl(secondKegiatan.gambar)}')`,
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors"></div>
                                <div className="relative z-10 p-5">
                                    <p className="text-sm md:text-base text-gray-200">
                                        {secondKegiatan.tanggal}
                                    </p>
                                    <h2 className="xl:text-2xl lg:text-xl text-lg font-bold line-clamp-2">
                                        {secondKegiatan.judul}
                                    </h2>
                                </div>
                            </Link>
                        )}
                        {thirdKegiatan && (
                            <Link
                                href={`/kegiatan/${thirdKegiatan.id}`}
                                className="relative bg-cover bg-center h-[14em] flex-1 text-white bg-black rounded-xl overflow-hidden flex flex-col justify-end group"
                                style={{
                                    backgroundImage: `url('${resolveMediaUrl(thirdKegiatan.gambar)}')`,
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors"></div>
                                <div className="relative z-10 p-5">
                                    <p className="text-sm md:text-base text-gray-200">
                                        {thirdKegiatan.tanggal}
                                    </p>
                                    <h2 className="xl:text-2xl lg:text-xl text-lg font-bold line-clamp-2">
                                        {thirdKegiatan.judul}
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

export default KegiatanHeadline;
