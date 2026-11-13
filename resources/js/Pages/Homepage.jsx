import Header from "@/Components/Header";
import CarouselHero from "@/Components/Homepage/CarouselHero";
import LayananContainer from "@/Components/Homepage/LayananHome/LayananContainer/LayananContainer";
import { layananData } from "../utils/layanan";
import { penunjangData } from "@/utils/penunjang";
import PenunjangContainer from "@/Components/Homepage/PenunjangHome/PenunjangContainer";
import ProfileContainer from "@/Components/Homepage/ProfileHome/ProfileContainer";
import { teamData } from "@/utils/teamDpi";
import KlienTerpercaya from "@/Components/Homepage/KlienTerpercaya";
import Footer from "@/Components/Footer";

import React from "react";
import { Head } from "@inertiajs/react";

export default function Homepage() {
    return (
        <div>
            <Head title="Beranda" />
            <Header />
            <CarouselHero />
            <LayananContainer layanans={layananData()} />
            <PenunjangContainer penunjangs={penunjangData()} />
            <ProfileContainer profiles={teamData()} />
            <KlienTerpercaya />
            <Footer />
        </div>
    );
}
