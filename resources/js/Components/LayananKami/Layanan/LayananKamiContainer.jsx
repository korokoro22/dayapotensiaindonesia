import React from 'react'
import LayananKamiCard from './LayananKamiCard'

const LayananKamiContainer = ({ layanans }) => {
  return (
    <div className='bg-[#E9E9E9] px-4'>
        <div className='py-10 flex flex-col gap-6 max-w-4xl mx-auto'>
            {
                layanans.map((layanan) => (
                    <LayananKamiCard
                        key={layanan.id}
                        {...layanan}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default LayananKamiContainer