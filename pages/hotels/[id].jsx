"use client";

import React from 'react'
// import Link from "next/link";
import Image from "next/image";
// import { Head } from 'next/document';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Head from "next/head";






const SingleHotel = ({ hotel }) => {
  let auth;
  if(typeof window !== 'undefined'){
    auth = Cookies.get("user")
  }
  return (
    <>
    <Head>
     <title>{hotel?.name}</title>
    </Head>
    
      <div className="w-7/12 mx-auto my-10 ">
      
        <Image
          src=
            {hotel?.banner}
            alt="hotel"
            width={2000}
            height={2000}
            className='w-full h-large-box my-5'
          
        />
        <div className=" ">
          <h3 className=" text-3xl font-bold ">
           {hotel?.name}
          </h3>
         
          <p className=" text-xl my-5 text-justify ">
           {hotel?.description}

          </p>
         <div className='flex items-center '>
            <button className='w-60 h-14 rounded-lg bg-blue-400 text-lg'>
                Price : &#8377;{hotel?.price}
            </button>
           
           </div>
            <p className='text-3xl font-bold my-5'>Facilities: </p>
            <div className='flex text-xl justify-between'>
                {
                  hotel && hotel.facilities ? hotel.facilities.map((e) => {
                   return (
                    <li key={e.name} className='mr-5 mb-3'>
                    <span>
                      <Image src={e.img}
                      width={200} height={200}
                      className='w-10 h-10 ml-12 rounded-full'/>
                      

                        </span>
                        
                        <span className='ml-5'>{e.name}</span>
                    </li>
                   )
                  }):""
                }
                {/* <li>Swimming Pool</li>
                <li>Dogs</li>
                <li>garden</li>
                <li>Loundry</li>
                <li>cricket</li> */}
            </div>
           {
            auth ?(   
              <Link href={`/payment/${hotel?._id}`}>
              <button className='w-60  h-12 
            bg-red-500 rounded-md mt-4'>Book now</button>
              </Link>
            )
:
            (<span>Please <Link href="/Login" className="text-blue-500">Login</Link> to get new offers !!</span>)
             
        
            
           }

            {/* <Link href={'/hotels/2'} className='text-xl
            font-bold text-red-600
            ml-10'>See details</Link> */}

      


        </div>
      </div>
    </>
  );
};

// export async function getServerSideProps(ctx) {
  
//   const res = await fetch(`http://localhost:3000/api/hotels/${ctx.query.id}`);
//   const data = await res.json();


//   // console.log(ctx.query.id)
//   return {
//     props: {
//       hotel: data.hotel,
//     },
//   }
// }


// youtube code
// export async function getServerSideProps(ctx) {
//   const res = await fetch(`http://localhost:3000/api/hotels/${ctx.query.id}`);
//   const data = await res.json();

//   return {
//     props: {
//       hotel: data.hotel,
//     },
//   };
// }


// export default SingleHotel



export async function getServerSideProps(ctx) {
  try {
    // const res = await fetch(`http://localhost:3000/api/hotels/${ctx.query.id}`);
    const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return {
      props: {
        hotel: data.hotel,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        hotel: null,
      },
    };
  }
}
export default SingleHotel
