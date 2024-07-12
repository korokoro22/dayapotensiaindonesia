import React from "react";


const ProfileCard = ({name, job, image}) => {
    return (
        <div className="xl:w-[18em] w-[16em] h-[21em] xl:h-[23em] rounded-2xl m-auto bg-white shadow-xl font-inter">
            <figure className="pt-5">
                <img
                    src={image}
                    className="rounded-full xl:w-[13em] xl:h-[13em] m-auto object-cover object-center w-[11em] h-[11em]"
                />
            </figure>
            <div className="card-body items-center text-center  text-black ">
                <h2 className=" font-bold text-sm  xl:text-sm h-[2.5em]">
                {name}
                </h2>
                <p className=" text-sm xl:text-base font-semibold text-white bg-[#F3D457] mt-2 py-1 px-2 rounded-xl">{job}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
