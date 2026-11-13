import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import ContainerSosial from '@/Components/LayananKonten/Sosial/ContainerSosial'
import HeroSosial from '@/Components/LayananKonten/Sosial/HeroSosial'
import React from 'react'
import { Head } from '@inertiajs/react'

const Sosial = () => {
  return (
    <div>
        <Head title="Psikologi Sosial" />
        <Header />
        <HeroSosial />
        <ContainerSosial />
        <Footer />
    </div>
  )
}

export default Sosial