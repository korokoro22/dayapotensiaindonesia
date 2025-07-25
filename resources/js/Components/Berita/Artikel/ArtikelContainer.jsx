import React, { useEffect, useState } from "react";
import ArtikelCard from "./ArtikelCard";
import { Link } from "@inertiajs/react";
import ReactPaginate from "react-paginate"; // for pagination

const ArtikelContainer = ({ cobas, artikels }) => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const n = 6;

    useEffect(() => {
        setFilterData(
            artikels.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page]);

    return (
        <div className="bg-[#e9e9e9]">
            <div className="flex flex-wrap justify-center md:max-w-[45em] lg:max-w-[70em] m-auto py-5 gap-y-5 gap-6">
                {filterData?.map((artikelz, index) => (
                    <Link
                        href={`/artikel/${artikelz.id}`}
                        className="m-auto rounded-lg shadow-2xl w-[20em] font-inter text-black bg-white"
                    >
                        <div
                            className="m-auto rounded-lg shadow-2xl w-[20em] font-inter text-black bg-white pb-5"
                            key={index}
                        >
                            <img
                                src={`/storage/${artikelz.gambar}`}
                                alt=""
                                className="rounded-t-lg w-full h-[12em] object-cover object-center"
                            />
                            <p className=" pl-2 pt-2">{artikelz.tanggal}</p>
                            <h1 className="mt-4 ml-2 font-bold text-lg h-[3em] line-clamp-2">
                                {artikelz.judul}
                            </h1>
                            <p className=" w-[95%] m-auto mt-3 pb-5 text-justify line-clamp-4">
                                {artikelz.isi}
                            </p>
                        </div>
                    </Link>
                    // <ArtikelCard artikelz={artikels} key={art.id} {...art} />
                ))}
            </div>
            {/* <div className="text-center ">
                <Link >
                    <button className="bg-[#24A0ED] text-white my-5 px-2 py-[0.5em] rounded-xl text-base font-semibold ">
                        Berita Lainnya
                    </button>
                </Link>
            </div> */}
            <div className="flex m-auto items-center justify-center flex-col pb-5">
                <ReactPaginate
                    containerClassName={"join"}
                    activeClassName={"btn-active"}
                    pageClassName={"join-item btn"}
                    onPageChange={(event) => setPage(event.selected)}
                    breakLabel="..."
                    pageCount={Math.ceil(artikels.length / n)}
                    previousLabel={<button className="join-item btn">«</button>}
                    nextLabel={<button className="join-item btn">»</button>}
                />
            </div>
        </div>
    );
};

export default ArtikelContainer;
