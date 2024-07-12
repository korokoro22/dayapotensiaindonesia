import React from "react";
import PenunjangCard from "./PenunjangCard";

const PenunjangContainer = ({ penunjangs }) => {
    return (
        <div className="bg-[#343434] ">
            <h1 className="font-inter text-center pt-10 md:text-3xl text-2xl font-bold text-white ">
                Penunjang layanan Psikologi{" "}
            </h1>
            <div className=" flex flex-wrap xl:w-[75em] gap-y-5 m-auto py-10">
                {penunjangs.map((penunjang) => (
                    <PenunjangCard id={penunjang.id} {...penunjang} />
                ))}
            </div>
        </div>
    );
};

export default PenunjangContainer;
