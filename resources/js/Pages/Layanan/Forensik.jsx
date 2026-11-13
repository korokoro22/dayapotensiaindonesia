import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import ContainerForensik from '@/Components/LayananKonten/Foren/ContainerForensik'
import HeroForensik from '@/Components/LayananKonten/Foren/HeroForensik'
import React from 'react'
import { Head } from '@inertiajs/react'

const Forensik = () => {
  return (
    <div>
        <Head title="Psikologi Forensik" />
        <Header />
        <HeroForensik />
        <ContainerForensik />
        <Footer />
    </div>
  )
}

export default Forensik