"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Filters = ({price, setPrice, handlePrice
    // , checkedList, setCheckedList
})=>{
    const [list, setlist] = useState([]);

    const fetchFacilities = async () => {
     try {
        // {data} destructuring getting the faclties
         const {data} = await axios.get(`/api/facilities`);
         if(data?.facilities){
            setlist(data.facilities)
         }
        
     } catch (error) {
        console.log(err);
        
     }
    };
    // const handleCheckedList = (e)=>{
    //     let newList = [];
    //    if(e.target.checked){
        
    //     newList.push(e.target.value);
    //     setCheckedList(newList);
    //     return ;
    //    }

    //    newList = newList.filter( (i) => i!== e.target.value );
    //    setCheckedList(newList);
    // }

    // useEffect(() => {
    //   fetchFacilities();
    // }, []);
    

  return (
    <>
   <div className=" border-2 border-red-500 rounded-md m-5 h-44 py-10 px-3">
        <label htmlFor="price" className=" text-xl mr-3 font-bold">
          Price :{" "}
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={1000}
          max={3500}
          onChange={(e)=>setPrice(e.target.value)}
          defaultValue= { price ? price : 0}
          />
          

        <span className=" ml-10">&#8377; {price ? price : " "}</span>
        <div>
            <button className='w-40 h-10 bg-blue-400 cursor-pointer my-3'
            onClick={handlePrice}>Search</button>
        </div>
        <div className=" my-10 ">
          {/* <h3 className=" text-xl font-bold my-3">Filter by Facilities : </h3>
         {
           list?.map((e)=>{
            return (
                <p key={e} className='flex-items-center my-3'>
                   <label htmlFor='checkbox'>{e}</label>
                   <input 
                   type="checkbox"
                   name="checkbox"
                   id="checkbox"
                //    value={e}
                   className='w-5 h-5 ml-3 col-span-1'
                //    onChange={handleCheckedList}
                   
                   /> 
                </p>
            );

           })

         } */}
                </div>
   </div>
   </>
  );
}



export default Filters
