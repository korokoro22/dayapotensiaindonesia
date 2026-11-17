import React from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import NewsHero from "@/Components/Berita/Shared/NewsHero";
import NewsArticleBody from "@/Components/Berita/Shared/NewsArticleBody";

const ArtikelContent = ({ artikels }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA]">
            <Head title={artikels?.judul || "Detail Artikel"} />
            <Header />
            <main className="flex-1">
                <NewsHero
                    breadcrumbLabel="Artikel"
                    badge="PUBLIKASI & EDUKASI DPI"
                    title="Artikel Daya Potensia Indonesia"
                    subtitle="Edukasi psikologi berbasis bukti ilmiah untuk individu, keluarga, dan organisasi."
                />
                <NewsArticleBody
                    item={artikels}
                    backPath="/artikel"
                    backLabel="Kembali ke Daftar Artikel"
                    categoryLabel="Artikel Psikologi"
                />
            </main>
            <Footer />
        </div>
    );
};

export default ArtikelContent;
