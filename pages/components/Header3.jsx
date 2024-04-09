'use client'
import React, { useState } from 'react'
import Link from 'next/link';


  const Header3 = ()=>{
    const [city, setCity] = useState(" ");

  
  return (
    <>
      <div className='h-60 bg-gradient-to-r from-red-600 to-red-400 items-center'>
     <div className='mx-10 p-5'>
      <h2 className='flex text-4xl justify-center text-white font-bold'>Hello, over 15000 people across
      Hotels and homes across globe
</h2>


<div className='flex justify-center  my-5  rounded-md '>
        <input type="text" placeholder='Search..' className='h-12 w-96   rounded-sm outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2'
          onChange={(e)=>{setCity(e.target.value)}}
      
        ></input>
        {/* <input type="text" placeholder='Search..' className='h-12  rounded-sm outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1'></input>
        <input type="text" placeholder='Search..' className='h-12  rounded-sm outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1'></input> */}
        <button type="submit" className='h-12 w-36 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white'>
        <Link href={`/hotels?city=${city}`}>
        Search
        </Link>
        </button>

    </div>
    <button type="submit" className='h-12 px-3 py-2 ml-24 font-bold hover:cursor-pointer  text-white text-xl mr-5'>
        Continue your search
       
    </button>

    <button
    type="submit" 
    className='h-12 px-3 py-2 hover:cursor-pointer
    border-2 border-white text-xl mr-5 hover:bg-gray-500 rounded-2xl'>
        Homestay in India
    </button>
      </div>
    </div>    

     </>


  )
}

export default Header3
