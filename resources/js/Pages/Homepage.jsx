import React from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import CarouselHero from "@/Components/Homepage/CarouselHero";
import MengapaSection from "@/Components/Homepage/MengapaSection";
import TentangVisiMisi from "@/Components/Homepage/TentangVisiMisi";
import LayananContainer from "@/Components/Homepage/LayananHome/LayananContainer/LayananContainer";
import FasilitasSection from "@/Components/Homepage/FasilitasSection";
import PenunjangContainer from "@/Components/Homepage/PenunjangHome/PenunjangContainer";
import ProfileContainer from "@/Components/Homepage/ProfileHome/ProfileContainer";
import KlienTerpercaya from "@/Components/Homepage/KlienTerpercaya";
import CtaBanner from "@/Components/Homepage/CtaBanner";
import Footer from "@/Components/Footer";
import { layananData } from "../utils/layanan";
import { penunjangData } from "@/utils/penunjang";
import { teamData } from "@/utils/teamDpi";

export default function Homepage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA]">
            <Head title="Beranda — Biro Psikologi & Human Resource" />
            <Header />
            <main className="flex-1">
                <CarouselHero />
                <MengapaSection />
                <TentangVisiMisi />
                <LayananContainer layanans={layananData()} />
                <FasilitasSection />
                <PenunjangContainer penunjangs={penunjangData()} />
                <ProfileContainer profiles={teamData()} />
                <KlienTerpercaya />
                <CtaBanner />
            </main>
            <Footer />
        </div>
    );
}
