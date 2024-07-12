import React from 'react'
import Industri from "../../../assets/Layanan/industri.jpg" 
import { Link } from '@inertiajs/react'

const LayananKamiCard = ({ title, image, body, link }) => {
  return (
    <div className='w-[20rem] md:w-[40rem] lg:w-[45rem]  m-auto shadow-lg rounded-lg font-inter md:flex bg-white'>
          <img src={image} alt="" className=' md:rounded-l-lg md:rounded-none rounded-t-lg md:w-[15rem] object-cover' />
          <div className='py-4 px-6'>
              <h1 className=' lg:text-2xl md:text-xl font-bold'>{title}</h1>
              <p className='text-justify text-sm py-4 md:py-2 md:text-base'>{body}</p>
              <div className='flex justify-between'>
                  <div>
                  </div>
                  <Link href={link}><button className='text-white  text-sm bg-[#24A0ED] py-2 px-3 font-semibold rounded-lg mb-1'> Selengkapnya</button></Link> 
              </div>
          </div>
      </div>

  )
}

export default LayananKamiCard