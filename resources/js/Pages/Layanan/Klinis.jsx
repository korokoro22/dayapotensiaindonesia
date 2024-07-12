import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import ContainerKlinis from '@/Components/LayananKonten/Klinis/ContainerKlinis'
import HeroKlinis from '@/Components/LayananKonten/Klinis/HeroKlinis'
import React from 'react'

const Klinis = () => {
  return (
    <div>
        <Header />
        <HeroKlinis />
        <ContainerKlinis />
        <Footer />
    </div>
  )
}

export default Klinis