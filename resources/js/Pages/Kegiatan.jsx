import React from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import NewsHero from "@/Components/Berita/Shared/NewsHero";
import NewsHeadline from "@/Components/Berita/Shared/NewsHeadline";
import NewsGrid from "@/Components/Berita/Shared/NewsGrid";
import CtaBanner from "@/Components/Homepage/CtaBanner";

const Kegiatan = ({ kegiatan = [], kegiatansTerbaru = [] }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA]">
            <Head title="Kegiatan DPI" />
            <Header />
            <main className="flex-1">
                <NewsHero
                    breadcrumbLabel="Kegiatan"
                    badge="DOKUMENTASI & AKSI NYATA"
                    title="Kegiatan Daya Potensia Indonesia"
                    subtitle="Dokumentasi asesmen SDM, pelatihan pengembangan kompetensi, seminar, psikoedukasi komunitas, dan aksi kemanusiaan MOKSA DPI."
                />
                <NewsHeadline
                    items={kegiatansTerbaru}
                    basePath="/kegiatan"
                    label="Kegiatan"
                />
                <NewsGrid
                    items={kegiatan}
                    basePath="/kegiatan"
                    heading="Semua Dokumentasi Kegiatan"
                    label="Kegiatan"
                    emptyText="Belum ada dokumentasi kegiatan yang tersedia."
                />
                <CtaBanner />
            </main>
            <Footer />
        </div>
    );
};

export default Kegiatan;
