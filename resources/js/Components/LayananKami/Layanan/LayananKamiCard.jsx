import React from 'react'
import { Link } from '@inertiajs/react'

const LayananKamiCard = ({ title, image, body, link }) => {
  return (
    <div className='w-full shadow-lg rounded-lg font-inter md:flex bg-white overflow-hidden'>
          <img src={image} alt={title} className='h-48 md:h-auto md:w-[15rem] w-full shrink-0 object-cover' />
          <div className='py-5 px-6 flex-1 flex flex-col justify-between'>
              <div>
                  <h2 className='lg:text-2xl md:text-xl text-lg font-bold text-black'>{title}</h2>
                  <p className='text-justify text-sm py-3 md:text-base text-gray-700 leading-relaxed'>{body}</p>
              </div>
              <div className='flex justify-end pt-2'>
                  <Link href={link} className='text-white text-sm bg-[#24A0ED] hover:bg-[#1b86c7] transition-colors py-2 px-4 font-semibold rounded-lg'>
                      Selengkapnya
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default LayananKamiCard