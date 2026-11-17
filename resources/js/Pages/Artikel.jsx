import React from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import NewsHero from "@/Components/Berita/Shared/NewsHero";
import NewsHeadline from "@/Components/Berita/Shared/NewsHeadline";
import NewsGrid from "@/Components/Berita/Shared/NewsGrid";
import CtaBanner from "@/Components/Homepage/CtaBanner";

const Artikel = ({ artikel = [], artikelsTerbaru = [] }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA]">
            <Head title="Artikel Psikologi" />
            <Header />
            <main className="flex-1">
                <NewsHero
                    breadcrumbLabel="Artikel"
                    badge="PUBLIKASI & EDUKASI DPI"
                    title="Artikel & Wawasan Psikologi"
                    subtitle="Tulisan edukatif seputar kesehatan mental, pengembangan sumber daya manusia, keluarga, pendidikan, dan isu psikologi terkini dari tim psikolog DPI."
                />
                <NewsHeadline
                    items={artikelsTerbaru}
                    basePath="/artikel"
                    label="Artikel"
                />
                <NewsGrid
                    items={artikel}
                    basePath="/artikel"
                    heading="Semua Artikel"
                    label="Artikel"
                    emptyText="Belum ada artikel yang dipublikasikan."
                />
                <CtaBanner />
            </main>
            <Footer />
        </div>
    );
};

export default Artikel;
