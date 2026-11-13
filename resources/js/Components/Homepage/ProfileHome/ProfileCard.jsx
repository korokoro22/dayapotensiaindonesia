import React from "react";
import Avatar from "../../../assets/logo/avatar.png";

const ProfileCard = ({ name, job, image }) => {
    return (
        <div className="xl:w-[18em] w-[16em] h-[21em] xl:h-[23em] rounded-2xl m-auto bg-white shadow-xl font-inter">
            <figure className="pt-5">
                <img
                    src={image || Avatar}
                    alt={name}
                    className="rounded-full xl:w-[13em] xl:h-[13em] m-auto object-cover object-top w-[11em] h-[11em]"
                />
            </figure>
            <div className="card-body items-center text-center text-black">
                <h2 className="font-bold text-sm xl:text-sm h-[2.5em]">
                    {name}
                </h2>
                <p className="text-sm font-semibold text-black bg-[#F3D457] mt-2 py-1 px-3 rounded-xl">
                    {job}
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
