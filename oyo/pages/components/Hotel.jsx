import React from 'react'
import Image from "next/image"
import Link from 'next/link';



const Hotel = ({e}) => {
  return (
    <>
    <div className='border-2 flex  border-red-500 rounded-lg
     h-96 w-full mb-5 p-5'>
      <div className='flex'>
        <Image 
        src={e?.banner}

         alt="hotel" width={200} height={200} className="w-96 h-large-box mr-3">

         
        </Image>


        <div className='grid grid-rows-3 '>
       {
        e ? e.gallery?.map((ele)=>{
            return (
            <Image 
            src={e}
    
             alt="hotel" width={200} height={200} 
            className="w-28">
    
             
            </Image>
            );
            
        }):""
       }
      
        </div>
        <div className='ml-10'>
           <h2 className='font-bold text-2xl line-clamp-1'>
            {e?.name}
           </h2> 
    <p>{e?.description}</p>
    <p className=' text-2xl my-5'>
        <span className='font-bold'>Facilities : </span>
         <ul className='flex'>
         {e
              ? e.facilities?.map((ele)=>{
                  return (
                    <li key={ele.name} className='mr-5 mb-3'>
                    <span>
                      <Image src={ele.img}
                      width={200} height={200}
                      className='w-10 h-10 ml-12 rounded-full'/>
                      

                        </span>
                        
                        <span className='ml-5'>{ele.name}</span>
                    </li>
                
                  );
                }) : ""}
    
         </ul>
           
        
    </p>
<button className='w-60 bg-blue-400 px-8 py-4 rounded-md'>Price : &#8377;{e?.price}
</button>
        <Link 
        href={`/hotels/${e?._id}`} 
        className='text-xl font-bold ml-4 text-red-500'>See Details</Link>
        </div>

      </div>
    </div>








    {/* <div className='border-2 flex  border-red-500 rounded-lg
     h-96 w-full mb-5 p-5'>
      <div className='flex'>
        <Image 
        src={
            "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"

        } alt="hotel" width={200} height={200} className="w-96 h-large-box mr-3">

         
        </Image>


        <div className='grid grid-rows-3 '>
        <Image 
        src={
            "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"

        } alt="hotel" width={200} height={200} className="w-28">

         
        </Image>


        <Image 
        src={
            "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"

        } alt="hotel" width={200} height={200} className="w-28">

         
        </Image>


        <Image 
        src={
            "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"

        } alt="hotel" width={200} height={200} className="w-28">

         
        </Image>

        <Image 
        src={
            "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"

        } alt="hotel" width={200} height={200} className="w-28">

         
        </Image>
       
        </div>
        <div className='ml-10'>
           <h2 className='font-bold text-2xl line-clamp-1'>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero.
           </h2> 
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
    ipisci necessitatibus placeat obcaecati totam m
    agni, aut ipsam illo dolor e
    ligendi, accusamus magnam!</p>
    <p className=' text-2xl my-5'>
        <span className='font-bold'>Facilities : </span>
        <span>Free Wifi , petCare, Swimming, Beaches, Resort</span>
    </p>
    <button className='w-60 bg-blue-400 px-8 py-4 rounded-md'>Price: 1500</button>
    <Link href={"/hotels/2"} className='text-xl font-bold ml-4 text-red-500'>See Details</Link>

        </div> */}


      
      {/* </div>
    </div> */}


   


    



</>
  )
 
}

export default Hotel
