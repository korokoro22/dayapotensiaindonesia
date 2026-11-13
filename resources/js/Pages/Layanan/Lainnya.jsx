import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import ContainerLainnya from '@/Components/LayananKonten/Lainnya/ContainerLainnya'
import HeroLainnya from '@/Components/LayananKonten/Lainnya/HeroLainnya'
import React from 'react'
import { Head } from '@inertiajs/react'

const Lainnya = () => {
  return (
    <div>
        <Head title="Layanan Lainnya" />
        <Header />
        <HeroLainnya />
        <ContainerLainnya /> 
        <Footer />
    </div>
  )
}

export default Lainnya