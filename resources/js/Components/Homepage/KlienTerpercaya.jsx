import React from 'react'
import Amanah from "../../assets/logo/Klien/amanah.png"
import Darma from "../../assets/logo/Klien/darma.png"
import Funworld from "../../assets/logo/Klien/funworld.png"
import Pizza from "../../assets/logo/Klien/pizza.png"
import Kisel from "../../assets/logo/Klien/kisel.png"
import Multi from "../../assets/logo/Klien/multii.png"
import Richesee from "../../assets/logo/Klien/rici.png"
import Suritani from "../../assets/logo/Klien/suritani.png"
import Penutup from "../../assets/logo/Klien/pnup.png"
import Multilogistik from "../../assets/logo/Klien/multilogis.png"
import Orbita from "../../assets/logo/Klien/orbito.png"
import Zarinda from "../../assets/logo/Klien/zarindah.png"


const KlienTerpercaya = () => {
  return (
    <div className='bg-[#E2E2E2] font-inter'>
        <h1 className='pt-10 text-center font-bold text-3xl'>Klien Terpercaya</h1>
        <div className='py-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center m-auto justify-center lg:gap-20 md:gap-14 md:gap-y-4 gap-8 gap-y-2  xl:w-[75em] lg:w-[60em] md:w-[45em] sm:w-[35em] w-[20em] '>
            <img src={Amanah} alt="" className='w-[13em]' />
            <img src={Darma} alt="" className='w-[20em]' />
            <img src={Funworld} alt="" className='w-[12em]' />
            <img src={Pizza} alt="" className='w-[10em]' />
            <img src={Kisel} alt="" className='sm:w-[10em] w-[8em]' />
            <img src={Multi} alt="" className='w-[18em]' />
            <img src={Richesee} alt="" className='w-[13em]' />
            <img src={Suritani} alt="" className='w-[13em]' />
            <img src={Penutup} alt="" className='sm:w-[8em] md:w-[10em] w-[7em]' />
            <img src={Multilogistik} alt="" className='w-[15em]' />
            <img src={Orbita} alt="" className='w-[17em]' />
            <img src={Zarinda} alt="" className='sm:w-[10em] w-[7em]' />
        </div>
    </div>
  )
}

export default KlienTerpercaya