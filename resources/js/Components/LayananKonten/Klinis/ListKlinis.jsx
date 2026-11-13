import React from "react";

const items = [
    "Deteksi dini Tumbuh Kembang Anak",
    "Konseling/terapi anak dan keluarga, terkait konflik dan relasi pada pasangan dan anak",
    "Penanganan psikologis pada individu yang mengalami kesulitan dalam menghadapi isu kehidupan sehari-hari",
    "Konseling kelompok yang dilakukan pada beberapa individu yang memiliki permasalahan yang sama",
];

const ListKlinis = () => {
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

export default ListKlinis;
