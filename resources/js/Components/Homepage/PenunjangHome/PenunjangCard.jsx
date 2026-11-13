import React from "react";
import Penunjang from "../../../assets/Penunjang/Penunjang.jpg";
const PenunjangCard = ({ title, body }) => {
    return (
        <div className="font-inter bg-[#1A1A1A] w-full min-h-[13rem] text-white flex md:flex-row flex-col-reverse rounded-xl overflow-hidden shadow-lg">
            <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="md:text-xl text-base font-bold mb-2 text-center md:text-start">
                    {title}
                </h3>
                <p className="text-justify md:text-start text-sm text-gray-200 leading-relaxed">
                    {body}
                </p>
            </div>
            <img
                src={Penunjang}
                alt={title}
                className="h-48 md:h-auto md:w-[11rem] w-full shrink-0 object-cover"
            />
        </div>
    );
};

export default PenunjangCard;
