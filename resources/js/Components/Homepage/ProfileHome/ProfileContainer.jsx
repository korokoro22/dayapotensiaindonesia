import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalProfile from "./ModalProfile";
import Avatar from "../../../assets/logo/avatar.png";

const ProfileContainer = ({ profiles }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    dots: false,
                },
            },
        ],
    };

    const [isModal, setIsModal] = useState(false);
    const [idData, setIdData] = useState(null);

    const openModal = (id) => {
        setIdData(id);
        setIsModal(true);
    };

    const filterData = idData
        ? profiles?.find((profile) => profile?.id === idData) || null
        : null;

    return (
        <section className="bg-[#F3D457] px-6 py-12">
            <h2 className="text-center font-bold md:text-3xl text-2xl font-inter text-black">
                Daya Potensia Indonesia Team
            </h2>
            <div className="slider-container max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-4">
                <Slider {...settings}>
                    {profiles.map((profile) => (
                        <div key={profile?.id} className="px-2">
                            <button
                                type="button"
                                onClick={() => openModal(profile?.id)}
                                className="w-full max-w-[18em] h-[22em] xl:h-[23em] rounded-2xl mx-auto bg-white shadow-xl font-inter flex flex-col items-center justify-between p-5 hover:scale-[1.02] transition-transform cursor-pointer text-center"
                            >
                                <figure className="pt-1">
                                    <img
                                        src={profile?.image || Avatar}
                                        alt={profile?.name}
                                        className="rounded-full xl:w-[12em] xl:h-[12em] w-[10.5em] h-[10.5em] mx-auto object-cover object-top"
                                    />
                                </figure>
                                <div className="flex flex-col items-center gap-2 text-black w-full">
                                    <h3 className="font-bold text-sm line-clamp-2 min-h-[2.5em] flex items-center">
                                        {profile?.name}
                                    </h3>
                                    <span className="text-xs font-semibold text-black bg-[#F3D457] py-1 px-3 rounded-xl">
                                        {profile?.job}
                                    </span>
                                </div>
                            </button>
                        </div>
                    ))}
                </Slider>
            </div>
            {isModal && filterData && (
                <ModalProfile
                    setIsmodal={setIsModal}
                    filterData={filterData}
                    setIdData={setIdData}
                />
            )}
        </section>
    );
};

export default ProfileContainer;
