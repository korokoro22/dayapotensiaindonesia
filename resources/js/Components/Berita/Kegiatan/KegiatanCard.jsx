import React from "react";
import Industri from "../../../assets/Layanan/industri.jpg";

const KegiatanCard = ({tanggal, judul, deskripsi}) => {
    return (
        <div className="m-auto rounded-lg shadow-2xl w-[20em] font-inter text-black bg-white">
            <img src={Industri} alt="" className="rounded-t-lg" />
            <p className=" pl-2 pt-2">{tanggal}</p>
            <h1 className="mt-4 ml-2 font-bold text-lg">
                {judul}{" "}
            </h1>
            <p className=" w-[95%] m-auto mt-3 pb-5 text-justify">
                {deskripsi}
            </p>
        </div>
    );
};

export default KegiatanCard;
