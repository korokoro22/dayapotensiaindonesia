import React from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import NewsHero from "@/Components/Berita/Shared/NewsHero";
import NewsArticleBody from "@/Components/Berita/Shared/NewsArticleBody";

const KegiatanContent = ({ kegiatans }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA]">
            <Head title={kegiatans?.judul || "Detail Kegiatan"} />
            <Header />
            <main className="flex-1">
                <NewsHero
                    breadcrumbLabel="Kegiatan"
                    badge="DOKUMENTASI & AKSI NYATA"
                    title="Kegiatan Daya Potensia Indonesia"
                    subtitle="Liputan program layanan psikologi, pelatihan, dan pengabdian masyarakat DPI."
                />
                <NewsArticleBody
                    item={kegiatans}
                    backPath="/kegiatan"
                    backLabel="Kembali ke Daftar Kegiatan"
                    categoryLabel="Dokumentasi Kegiatan"
                />
            </main>
            <Footer />
        </div>
    );
};

export default KegiatanContent;
