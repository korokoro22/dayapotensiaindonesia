import React from 'react'
import Penunjang from '../../../assets/Penunjang/Penunjang.jpg'
const PenunjangCard = ({title, body, image}) => {
  return (
    <div className='font-inter bg-[#1A1A1A]  md:w-[35em] w-[20em]  md:h-[12em] h-[23em] m-auto text-white flex md:flex-row flex-col-reverse  rounded-xl md:items-center justify-end md:justify-'>
        <div className=' md:pl-7'>
            <h1 className='md:text-xl text-base font-bold mb-2 text-center md:text-start pt-5 md:pt-0' >{title}</h1>
            <p className='text-justify md:text-start w-[18em] m-auto md:w-fit md:m-0 '>{body}</p>
        </div>
        <img src={Penunjang} alt="" className='md:h-[12em] md:w-[10em] object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl' />
    </div>
  )
}

export default PenunjangCard