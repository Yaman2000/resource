"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Block from './Block';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';




const Header1 = () => {
  const [auth, setAuth] = useState(false)
//check cookoies
  useEffect(() => {
    const key = Cookies.get("user");
    if(key){
      setAuth(true);
      return ;
    }
    setAuth(false);
  },
  [auth]);
  const router = useRouter();


  const handlelog = () => {
        Cookies.remove('user');
        setAuth(false);
        router.push('/');
  };


    return (
    <div className='flex border-b-2 border-gray-300 justify-between items-center h-28 px-5'>
        <Image src={'/logo.png'} alt='logo' width={160} height={200} className='w-28 h-28'/>
     
      {/* <div className='border-r-2 border-gray-300 h-full'></div> */}
       <div className='h-full flex '>
       <Block title={'Become a member'} para={'Additional 0% off on stays. '}/>
       <Block title={'OYO for business'} para={'Trusted by 5000 corporates'}/>
       <Block title={'List your property'} para={'Start earning in 30 min. '}/>
       <Block title={'98748995940'} para={'Call us to back now'}/>
       {/* <Block title={'Login/SignUp'}/> */}
       <div className='flex items-center px-3'>
        <Image
        src={"/demo.svg"}
        alt="demo"
        width={200}
        height={200}
        className='w-10 h-10 rounded-full mr-5'       
       />
       {
        auth ? (
         
          <h3 className='font-bold cursor-pointer' onClick={handlelog}>Logout</h3>
          
        
        ):
        (  
        <Link href={'/Login'}>
           <h3 className='font-bold cursor-pointer'>Login / Signup</h3>
           
         </Link>
        )
       }
      

        
        
          
      
       </div>
       
       </div>
      
      
    </div>
  )
}

export default Header1
