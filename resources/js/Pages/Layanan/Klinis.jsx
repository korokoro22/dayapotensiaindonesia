import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ContainerKlinis from "@/Components/LayananKonten/Klinis/ContainerKlinis";
import HeroKlinis from "@/Components/LayananKonten/Klinis/HeroKlinis";
import React from "react";
import { Head } from "@inertiajs/react";

const Klinis = () => {
    return (
        <div>
            <Head title="Psikologi Klinis" />
            <Header />
            <HeroKlinis />
            <ContainerKlinis />
            <Footer />
        </div>
    );
};

export default Klinis;
