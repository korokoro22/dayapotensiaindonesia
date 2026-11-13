import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import React from 'react'
import { Head } from '@inertiajs/react'
import HeroIndustri from '@/Components/LayananKonten/Industri/HeroIndustri'
import ContainerIndustri from '@/Components/LayananKonten/Industri/ContainerIndustri'

const Industri = () => {
  return (
    <div>
        <Head title="Psikologi Industri dan Organisasi" />
        <Header />
        <HeroIndustri />
        <ContainerIndustri />
        <Footer />
    </div>
  )
}

export default Industri