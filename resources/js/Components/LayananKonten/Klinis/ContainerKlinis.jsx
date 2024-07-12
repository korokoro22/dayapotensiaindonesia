import React from 'react'
import ListKlinis from "./ListKlinis"

const ContainerKlinis = () => {
  return (
    <div className='bg-[#E9E9E9]'>
        <div className='py-10 flex flex-col gap-10'>
            <ListKlinis />
        </div>
    </div>
  )
}

export default ContainerKlinis