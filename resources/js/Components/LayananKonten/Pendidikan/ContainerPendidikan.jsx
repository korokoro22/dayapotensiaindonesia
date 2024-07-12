import React from 'react'
import ListPendidikan from './ListPendidikan'

const ContainerPendidikan = () => {
  return (
    <div className='bg-[#E9E9E9]'>
        <div className='py-10 flex flex-col gap-10'>
            <ListPendidikan />
        </div>
    </div>
  )
}

export default ContainerPendidikan