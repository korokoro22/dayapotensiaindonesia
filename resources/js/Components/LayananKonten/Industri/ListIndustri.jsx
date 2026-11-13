import React from "react";

const items = [
    "Pemetaan kompetensi dan potensi dari karyawan/pegawai dalam sebuah lembaga atau instansi",
    "Proses rekrutmen dan penempatan yang sesuai dengan kebutuhan sebuah lembaga atau instansi",
    "Pengembangan potensi dan kompetensi karyawan / pegawai dalam sebuah lembaga atau instansi berupa outdoor activity dan training development",
    "Peningkatan produktivitas lembaga atau instansi yang berkaitan dengan aspek-aspek psikologi",
    "Analisis jabatan dan analisis beban kerja dalam sebuah lembaga atau instansi.",
];

const ListIndustri = () => {
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

export default ListIndustri;
