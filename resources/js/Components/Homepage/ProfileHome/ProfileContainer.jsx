import React from "react";
import ProfileCard from "./ProfileCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import ProfileTitle from "./ProfileTitle.jsx";

const ProfileContainer = ({profiles}) => {

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="bg-[#F3D457]">
            <h1 className="pt-10 text-center font-bold md:text-3xl text-xl  font-inter text-black">Daya Potensia Indonesia Team </h1>
            <div className=" slider-container xl:w-[60em] lg:w-[55em] md:w-[36em] w-[17em] m-auto py-10">
                <Slider {...settings}>
                    {
                      profiles.map((profile)=>(
                        <ProfileCard 
                        id={profile.id}
                        {...profile}
                        />
                      ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default ProfileContainer;
