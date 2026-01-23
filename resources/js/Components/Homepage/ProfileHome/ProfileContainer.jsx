import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalProfile from "./ModalProfile";
// import ProfileTitle from "./ProfileTitle.jsx";

const ProfileContainer = ({ profiles }) => {
    let settings = {
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
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [isModal, setIsModal] = useState(false);
    const [idData, setIdData] = useState("");
    const [filterData, setFilterData] = useState({});

    const openModal = (id) => {
        setIsModal(true);
        setIdData(id);
    };

    useEffect(() => {
        const filteredData = idData
            ? profiles?.find((profile) => profile?.id === idData)
            : null;
        setFilterData(filteredData);
    }, [idData]);

    return (
        <div className="bg-[#F3D457]">
            <h1 className="pt-10 text-center font-bold md:text-3xl text-xl  font-inter text-black">
                Daya Potensia Indonesia Team{" "}
            </h1>
            <div className=" slider-container xl:w-[60em] lg:w-[55em] md:w-[36em] w-[17em] m-auto py-10">
                <Slider {...settings}>
                    {profiles.map((profile) => (
                        // <ProfileCard id={profile.id} {...profile} />
                        <div key={profile?.id}>
                            <div className="xl:w-[18em] w-[16em] h-[21em] xl:h-[23em] rounded-2xl m-auto bg-white shadow-xl font-inter">
                                <figure className="pt-5">
                                    <img
                                        src={profile?.image}
                                        className="rounded-full xl:w-[13em] xl:h-[13em] m-auto object-cover object-center w-[11em] h-[11em]"
                                    />
                                </figure>
                                <div className="card-body items-center text-center  text-black ">
                                    <h2 className=" font-bold text-sm  xl:text-sm h-[2.5em]">
                                        {profile?.name}
                                    </h2>
                                    <p
                                        onClick={() => openModal(profile?.id)}
                                        className=" text-sm  font-semibold text-white bg-[#F3D457]  cursor-pointer mt-2 py-1 px-2 rounded-xl"
                                    >
                                        {profile?.job}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {isModal && (
                <ModalProfile
                    setIsmodal={setIsModal}
                    filterData={filterData}
                    setIdData={setIdData}
                />
            )}
        </div>
    );
};

export default ProfileContainer;
