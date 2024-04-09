"use client"

import React from 'react'
import Image from "next/image"

const Header4 = () => {
  return (
    <div className='flex border-2 my-14 border-gray-300 rounded-md px-1 py-4 mx-20 justify-between'>
        {/* <div className='flex items-center'> */}
   
      <div className='flex items-center'>
        <Image src={"/fire.jpg"} alt="fire" height={200} width={200} className='h-20 w-20 rounded-full'/>
        <div className='text-xl ml-5'>
            <p className='font-bold'>Get access
            to exclusive deals</p>
            <p>Only the best deals reach your inbox</p>
        </div>
        </div>

        <div className='flex items-center'>
        <input type="email" className =' flex py-3 px-24 h-12 rounded-lg mr-16
        outline-none border  border-gray-300' placeholder ='e.g. john@gmail.com'/>
        <button type="submit" className=' h-12 px-12 py-12 bg-red-500 text-xl text-white rounded-md mr-10'>Notify</button>
        </div>
      </div>
   
    // </div>
    
  )
}

export default Header4
