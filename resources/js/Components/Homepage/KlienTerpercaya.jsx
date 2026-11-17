import React from "react";
import { logoData, partnerData } from "@/utils/logoDump";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const KlienTerpercaya = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2200,
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 5 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    const logoKlien = logoData();
    const partners = partnerData();

    return (
        <section className="bg-white py-16 md:py-20 font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#132B52] border-b-2 border-[#F3BA33] pb-1">
                        Klien &amp; Partner Kami
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132B52] mt-3">
                        Dipercaya 22+ Institusi, Perusahaan &amp; Lembaga Publik
                    </h2>
                    <p className="text-sm text-slate-600 mt-2">
                        Dari sektor pertambangan, F&amp;B, perguruan tinggi, hingga lembaga negara dan organisasi masyarakat sipil.
                    </p>
                </div>

                {/* Client Logos Carousel */}
                <div className="py-4">
                    <Slider {...settings}>
                        {logoKlien.map((logo) => (
                            <div key={logo.id} className="px-2.5 py-2">
                                <div className="h-24 rounded-xl bg-[#F4F6FA] border border-slate-200/80 px-4 py-3 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
                                    <img
                                        src={logo.image}
                                        alt={logo.alt}
                                        className="max-h-14 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Partner Strategis (Page 17) */}
                <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col items-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
                        Partner Strategis
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className="h-20 px-7 rounded-xl bg-[#F4F6FA] border border-slate-200/80 flex items-center justify-center"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="max-h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KlienTerpercaya;
