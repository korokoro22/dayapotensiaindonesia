import React from "react";

const items = [
    "Pemberian pendampingan terhadap individu yang terdampak bencana",
    "Pemberian sosialisasi dan edukasi mengenai isu-isu kesehatan mental",
];

const ListSosial = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-black font-inter">
            {items.map((item, idx) => (
                <div key={idx} className="border-b-4 pb-6 border-black">
                    <h2 className="font-bold xl:text-2xl lg:text-xl md:text-lg text-base leading-relaxed">
                        {item}
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default ListSosial;
