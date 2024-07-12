import React from 'react'
import LayananKamiCard from './LayananKamiCard'

const LayananKamiContainer = ({ layanans }) => {
  return (
    <div className='bg-[#E9E9E9]'>
        <div className='py-10 flex flex-col gap-5'>
            {
                layanans.map((layanan)=>(
                    <LayananKamiCard 
                        id={layanan.id}
                        {...layanan}
                    />
                ))
            }
        </div>
        
    </div>
  )
}

export default LayananKamiContainer