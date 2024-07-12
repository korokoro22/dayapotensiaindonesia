import React from "react";
import LayananCard from "./LayananCard";

const LayananContainer = ({layanans}) => {
    return (
        <div>
          <h1 className="font-inter text-center mt-10 text-3xl font-bold text-black ">Layanan Kami </h1>
            <div className="flex flex-wrap md:max-w-[45em]  lg:bg-white lg:max-w-[70em] m-auto my-10 gap-y-5">
              {
                layanans.map((layanan)=>(
                  <LayananCard 
                  id={layanan.id}
                  {...layanan}
                  />
                ))
              }
            </div>
        </div>
    );
};

export default LayananContainer;
