import React, { useMemo, useState } from "react";
import { Link } from "@inertiajs/react";
import ReactPaginate from "react-paginate";

const ArtikelContainer = ({ artikels = [] }) => {
    const [page, setPage] = useState(0);
    const perPage = 6;

    const filterData = useMemo(
        () => artikels.slice(page * perPage, (page + 1) * perPage),
        [artikels, page]
    );

    const pageCount = Math.ceil(artikels.length / perPage);

    return (
        <div className="bg-[#e9e9e9] px-4">
            {filterData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto py-8 gap-6">
                    {filterData.map((artikelz) => (
                        <Link
                            key={artikelz.id}
                            href={`/artikel/${artikelz.id}`}
                            className="rounded-lg shadow-xl w-full max-w-[22em] mx-auto font-inter text-black bg-white overflow-hidden hover:shadow-2xl transition-shadow flex flex-col"
                        >
                            <img
                                src={`/storage/${artikelz.gambar}`}
                                alt={artikelz.judul}
                                className="w-full h-[12em] object-cover object-center"
                            />
                            <div className="p-4 flex-1 flex flex-col">
                                <p className="text-sm text-gray-500">
                                    {artikelz.tanggal}
                                </p>
                                <h3 className="mt-2 font-bold text-lg line-clamp-2 min-h-[3.2em]">
                                    {artikelz.judul}
                                </h3>
                                <p className="mt-2 text-sm text-gray-700 text-justify line-clamp-4">
                                    {artikelz.isi}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center py-12 text-gray-600 font-inter">
                    Belum ada artikel yang tersedia.
                </p>
            )}

            {pageCount > 1 && (
                <div className="flex items-center justify-center pb-8">
                    <ReactPaginate
                        containerClassName={"join"}
                        activeLinkClassName={"bg-[#F3D457] text-black font-bold"}
                        pageLinkClassName={"join-item btn btn-sm md:btn-md"}
                        onPageChange={(event) => setPage(event.selected)}
                        breakLabel="..."
                        breakLinkClassName={"join-item btn btn-sm md:btn-md"}
                        pageCount={pageCount}
                        previousLabel="«"
                        previousLinkClassName={"join-item btn btn-sm md:btn-md"}
                        nextLabel="»"
                        nextLinkClassName={"join-item btn btn-sm md:btn-md"}
                    />
                </div>
            )}
        </div>
    );
};

export default ArtikelContainer;
