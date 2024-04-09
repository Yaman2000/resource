"use client"

import React , {useEffect, useState} from 'react'
import Hotel from '../components/Hotel'
import Header1 from '../components/Header1'
import Filters from '../components/Filters'
import axios from "axios";



// const hotels = ({hotels}) => {
//   const [price, setPrice] = useState(3500);
//   // const [price, setprice] = useState(second)
//   const [list, setlist] = useState([])



//   const handlePrice = async ()=>{
//     const { data } = await axios.get(`/api/facilities/search/range?price=${price}`);
//     if(data?.hotels) {
//       setList(data.hotels);
//     }

//   }
  
//   return (
//     <div>
      
//       <Header1/>

//       <div className='grid grid-cols-12'>
//         <div className='col-span-3'>
//         <Filters price={price} setPrice={setPrice} handlePrice={handlePrice}/>
//         </div>


//         <div className="col-span-9">
//         {
//         list.length > 0 ? list.map((e)=>{
//        return (
//         <div className='m-5' key={e._id}>
//           <Hotel e={e}/>
//           </div>
//        );
       
//     }) : hotels ? hotels.map((e) =>{
//       return (
//         <div className='m-5' key={e._id}>
//           <Hotel e={e}/>
//           </div>
//       );
//     }):""
//     }
  
//         </div>
//       </div>
     
    
//     </div>
//   )
// }


// //server side data
// export async function getServerSideProps(ctx){
//   const res = await fetch(
//     // `http://localhost:3000/api/hotels?city=${ctx.query.city}`

//     `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`

//   );
//   const data = await res.json();
  

//   return {
//     props: {
//       hotels: data.hotels? data.hotels : data.allhotels,

//     },
//   }

// }
// export default hotels
















// // import React, { useState, useEffect } from 'react';
// // import Hotel from '../components/Hotel';
// // import Header1 from '../components/Header1';
// // import Filters from '../components/Filters';
// // import axios from 'axios';

// // const Hotels = ({ hotels }) => {
// //   const [price, setPrice] = useState(3500);
// //   const [list, setList] = useState([]);

// //   const handlePrice = async () => {
// //     try {
// //       const { data } = await axios.get(`/api/facilities/range?price=${price}`);
// //       if (data?.hotels) {
// //         setList(data.hotels);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     handlePrice();
// //   }, [price]);

// //   return (
// //     <div>
// //       <Header1 />
// //       <div className='grid grid-cols-12'>
// //         <div className='col-span-3'>
// //           <Filters price={price} setPrice={setPrice} handlePrice={handlePrice} />
// //         </div>
// //         <div className="col-span-9">
// //           {list.length > 0 ? 
// //             list.map((e) => (
// //               <div className='m-5' key={e._id}>
// //                 <Hotel e={e} />
// //               </div>
// //             ))
// //           ) : hotels ? (
// //             hotels.map((e) => (
// //               <div className='m-5' key={e._id}>
// //                 <Hotel e={e} />
// //               </div>
// //             ))
// //           ) : null}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export async function getServerSideProps(ctx) {
// //   const res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`);
// //   const data = await res.json();

// //   return {
// //     props: {
// //       hotels: data.hotels ? data.hotels : data.allhotels,
// //     },
// //   };
// // }

// // export default Hotels;

// import Filters from "@/components/Filters";
// import Header1 from "@/components/Header1";
// import Hotel from "@/components/Hotel";
// import axios from "axios";
// import { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  // const [checkedList, setCheckedList] = useState([]);

//   const handleCheckList = async () => {
//     const { data } = await axios.get(`/api/facilities/search?val=${checkedList}`);
//     if (data?.hotels) {
//       setList(data.hotels);
//     }
//   };

//  useEffect(()=>{
//   if(checkedList){
//     handleCheckList();
//   }
//  })

  // useEffect(()=>{
  //   if(checkedList){
  //     handleCheckedList();
  //   }
  // },[checkedList])

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);
    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className=" col-span-3">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            // checkedList={checkedList}
            // setCheckedList={setCheckedList}
          />
        </div>
        <div className="col-span-9">
          {list.length > 0
            ? list.map((e) => {
                return (
                  <div className="" key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;