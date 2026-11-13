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
        <section className="bg-[#E2E2E2] font-inter py-12">
            <h2 className="text-center font-bold text-3xl text-black">
                Klien Terpercaya
            </h2>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <Slider {...settings}>
                    {logoKlien.map((logo) => (
                        <div key={logo.id} className="px-2">
                            <img
                                src={logo?.image}
                                alt={logo?.alt}
                                className="mx-auto h-24 w-32 object-contain"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default KlienTerpercaya;
