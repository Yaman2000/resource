import React from 'react'
import Image from 'next/image'
const footer = () => {
  return (
    <>
    <div className="flex bg-teal-700 border-2 border-gray-500  py-3 my-8 ">
    {/* <div className='flex border-2 my-14 border-gray-300 rounded-md px-1 py-4 mx-20 justify-between'> */}
     <div className="flex items-center ml-16 gap-28">
        <Image src={"/icon.png"} alt="icon" width={200} height={200} className='w-16 h-18' ></Image>
     <div className='text-2xl font-bold text-white '>Worlds leading chain of hotels and homes</div> 

     <div className=' flex items-center gap-5 text-white font-bold text-2xl'>
        <h3>Join our network and grow your business!</h3>
     <button className='text-sm  h-12 px-4 py-2 bg-neutral-400 rounded-md  '>List your property</button>
     </div>
     </div>
     
     </div>

     <div className="flex  border-2 bg-gray-300  py-3 justify-center ">
     2013-2022 © Oravel Stays Limited
        </div>
    
    </>
  )
}

export default footer
