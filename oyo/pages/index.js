import React from 'react'
import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import Image from "next/image";
import Header4 from './components/Header4';
import Footer from './components/Footer';
 


const Home= () => {
  return (
    <div>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className='mx-20'>
        <Image 
        src={"/banner1.avif"} 
        alt="banner1"
        width={200}
        height={200}
        className="h-80 w-full mt-10"/>

      </div>

      <div className='mx-20'>
        <Image 
        src={"/banner2.avif"} 
        alt="banner2"
        width={200}
        height={150}
        className="h-50 w-full mt-10 rounded-sm"/>

      </div>
      <Header4/>
      <Footer/>
   

    </div>
  )
}

export default Home;
