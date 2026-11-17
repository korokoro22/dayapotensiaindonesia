import React from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HeroLayanan from "@/Components/LayananKami/HeroLayanan";
import LayananKamiContainer from "@/Components/LayananKami/Layanan/LayananKamiContainer";
import FasilitasSection from "@/Components/Homepage/FasilitasSection";
import CtaBanner from "@/Components/Homepage/CtaBanner";
import { layananData } from "@/utils/layanan";

const LayananKami = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA]">
            <Head title="Layanan Kami" />
            <Header />
            <main className="flex-1">
                <HeroLayanan />
                <LayananKamiContainer layanans={layananData()} />
                <FasilitasSection />
                <CtaBanner />
            </main>
            <Footer />
        </div>
    );
};

export default LayananKami;
