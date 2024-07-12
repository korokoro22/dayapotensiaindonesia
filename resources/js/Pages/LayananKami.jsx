import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HeroLayanan from "@/Components/LayananKami/HeroLayanan";
import LayananKamiContainer from "@/Components/LayananKami/Layanan/LayananKamiContainer";
import { layananData } from "@/utils/layanan";

const LayananKami = () => {

    console.log(layananData())
  
    return (
      <div>
          <Header />
          <HeroLayanan />
          <LayananKamiContainer layanans={layananData()} />
          <Footer />
      </div>
    )
  }
  
  export default LayananKami