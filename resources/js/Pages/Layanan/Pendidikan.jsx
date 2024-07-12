import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import ContainerPendidikan from '@/Components/LayananKonten/Pendidikan/ContainerPendidikan'
import HeroPendidikan from '@/Components/LayananKonten/Pendidikan/HeroPendidikan'
import React from 'react'

const Pendidikan = () => {
  return (
    <div>
        <Header />
        <HeroPendidikan />
        <ContainerPendidikan />
        <Footer />
    </div>
  )
}

export default Pendidikan