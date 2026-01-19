import React from "react";
import { logoData } from "@/utils/logoDump";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const KlienTerpercaya = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Default xl
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1280, // Tailwind xl: Default (tidak perlu dideklarasikan)
                settings: { slidesToShow: 5 },
            },
            {
                breakpoint: 1024, // Tailwind lg
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768, // Tailwind md
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 640, // Tailwind sm
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480, // Tailwind <sm
                settings: { slidesToShow: 2 },
            },
        ],
    };

    const logoKlien = logoData();

    return (
        <div className="bg-[#E2E2E2] font-inter">
            <h1 className="pt-10 text-center font-bold text-3xl">
                Klien Terpercaya
            </h1>
            {/* <div className="py-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center m-auto justify-center lg:gap-20 md:gap-14 md:gap-y-4 gap-8 gap-y-2  xl:w-[75em] lg:w-[60em] md:w-[45em] sm:w-[35em] w-[20em] ">
                {logoKlien?.map((logo) => (
                    <img key={logo?.id} src={logo?.image} alt={logo?.alt} />
                ))}
            </div> */}

            <div className="w-full p-4 py-24">
                <Slider {...settings} className="">
                    {logoKlien.map((logo, index) => (
                        <div key={index} className="">
                            <img
                                src={logo?.image}
                                alt={logo?.alt}
                                className="mx-auto h-24 w-32 object-contain"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default KlienTerpercaya;
