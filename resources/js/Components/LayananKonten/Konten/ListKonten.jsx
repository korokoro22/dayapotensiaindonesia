import React from "react";

const ListKonten = ({ content }) => {
    return (
        <div>
            {/* <div className=" xl:w-[70em] m-auto lg:w-[60em] md:w-[45em] w-[21em]">
                <div className=" flex items-center border-b-4 pb-6 border-black	">
                    <p className=" text-white lg:w-[2.5em] lg:h-[2.5em] md:w-[3.2em] w-[6em] h-[2.5em] rounded-full bg-black flex items-center justify-center md:text-xl text-base font-bold">
                        1
                    </p>
                    <h1 className="pl-10 font-bold xl:text-2xl lg:text-xl md:text-lg text-sm">
                        {content[2]}
                    </h1>
                </div>
            </div> */}
            {
                content.map((a)=>(
                    <div className=" xl:w-[70em] m-auto lg:w-[60em] md:w-[45em] w-[21em]">
                <div className=" flex items-center border-b-4 pb-6 border-black	">
                    <p className=" text-white lg:w-[2.5em] lg:h-[2.5em] md:w-[3.2em] w-[6em] h-[2.5em] rounded-full bg-black flex items-center justify-center md:text-xl text-base font-bold">
                        1
                    </p>
                    <h1 className="pl-10 font-bold xl:text-2xl lg:text-xl md:text-lg text-sm">
                        {a}
                    </h1>
                </div>
            </div>
                ))
            }
        </div>
    );
};

export default ListKonten;
