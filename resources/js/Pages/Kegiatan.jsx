import HeroKegiatan from "@/Components/Berita/Kegiatan/HeroKegiatan";
import KegiatanContainer from "@/Components/Berita/Kegiatan/KegiatanContainer";
import KegiatanHeadline from "@/Components/Berita/Kegiatan/KegiatanHeadline";
import KegiatanLainnya from "@/Components/Berita/Kegiatan/KegiatanLainnya";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import { cobaPaginator } from "@/utils/paginator";

const Kegiatan = ({ kegiatan, kegiatansTerbaru }) => {
    const coba = cobaPaginator();
    // console.log(coba);

    return (
        <div>
            <Header />
            <HeroKegiatan />
            <KegiatanHeadline kegiatanTerbaru={kegiatansTerbaru} />
            <KegiatanLainnya />
            <KegiatanContainer cobas={coba} kegiatans={kegiatan} />
            <Footer />
        </div>
    );
};

export default Kegiatan;
