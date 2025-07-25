// import LayananCard from "@/Components/Homepage/LayananHome/LayananCard";
import React, { useEffect, useState } from "react";
// import KegiatanCard from "./KegiatanCard";
import ReactPaginate from "react-paginate"; // for pagination
import { Link } from "@inertiajs/react";

const KegiatanContainer = ({ cobas, kegiatans }) => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const n = 6;

    useEffect(() => {
        setFilterData(
            kegiatans.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page]);

    return (
        <div className="bg-[#e9e9e9]">
            <div className="flex flex-wrap justify-center md:max-w-[45em] lg:max-w-[70em] m-auto py-5 gap-y-5 gap-6">
                {filterData?.map((Kegiatanz, index) => (
                    <Link
                        href={`/artikel/${Kegiatanz.id}`}
                        className="m-auto rounded-lg shadow-2xl w-[20em] font-inter text-black bg-white"
                    >
                        <div
                            className="m-auto rounded-lg shadow-2xl w-[20em] font-inter text-black bg-white pb-5"
                            key={index}
                        >
                            <img
                                src={`/storage/${Kegiatanz.gambar}`}
                                alt=""
                                className="rounded-t-lg w-full h-[12em] object-cover object-center"
                            />
                            <p className=" pl-2 pt-2">{Kegiatanz.tanggal}</p>
                            <h1 className="mt-4 ml-2 font-bold text-lg h-[3em] line-clamp-2">
                                {Kegiatanz.judul}
                            </h1>
                            <p className=" w-[95%] m-auto mt-3 pb-5 text-justify line-clamp-4">
                                {Kegiatanz.isi}
                            </p>
                        </div>
                    </Link>
                    // <ArtikelCard artikelz={artikels} key={art.id} {...art} />
                ))}
            </div>
            <div className="flex m-auto items-center justify-center flex-col pb-5">
                <ReactPaginate
                    containerClassName={"join"}
                    activeClassName={"btn-active"}
                    pageClassName={"join-item btn"}
                    onPageChange={(event) => setPage(event.selected)}
                    breakLabel="..."
                    pageCount={Math.ceil(kegiatans.length / n)}
                    previousLabel={<button className="join-item btn">«</button>}
                    nextLabel={<button className="join-item btn">»</button>}
                />
            </div>
        </div>
    );
};

export default KegiatanContainer;
