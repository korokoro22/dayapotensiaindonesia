import React from "react";
import Industri from "../../../assets/Layanan/industri.jpg";
const ArtikelCard = ({ tanggal, judul, deskripsi, artikelz }) => {
    return (
        <div className="m-auto rounded-lg shadow-2xl w-[20em] font-inter text-black bg-white">
            <img src="" alt="" className="rounded-t-lg" />
            <p className=" pl-2 pt-2">{artikelz.tanggal}</p>
            <h1 className="mt-4 ml-2 font-bold text-lg">{artikelz.judul} </h1>
            <p className=" w-[95%] m-auto mt-3 pb-5 text-justify">
                {artikelz.deskripsi}
            </p>
        </div>
    );
};

export default ArtikelCard;
