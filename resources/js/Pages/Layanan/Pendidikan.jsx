import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import ContainerPendidikan from '@/Components/LayananKonten/Pendidikan/ContainerPendidikan'
import HeroPendidikan from '@/Components/LayananKonten/Pendidikan/HeroPendidikan'
import React from 'react'
import { Head } from '@inertiajs/react'

const Pendidikan = () => {
  return (
    <div>
        <Head title="Psikologi Pendidikan" />
        <Header />
        <HeroPendidikan />
        <ContainerPendidikan />
        <Footer />
    </div>
  )
}

export default Pendidikan