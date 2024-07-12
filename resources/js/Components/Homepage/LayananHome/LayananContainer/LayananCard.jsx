import { Link } from '@inertiajs/react'
import React from 'react'



export default function LayananCard ({ title, body, image, link}) {

  return (
    <div className='m-auto rounded-lg shadow-2xl w-[20em] h-[26em] font-inter text-black'> 
        <img src={image} alt=""  className='rounded-t-lg'/>
        <h1 className='mt-4 ml-2 font-bold text-lg' >{title}</h1>
        <p className='ml-2 h-[6.5em] '>{body}</p>
        <div className='text-end '>
            <Link href={link}><button className="bg-[#24A0ED] text-white mr-4 px-2 py-[0.5em] rounded-xl text-sm font-semibold">Lebih Lengkap</button></Link>
        </div>
    </div>
  )
}
