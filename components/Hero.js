import Image from 'next/image';
import React from 'react';
import lgImg from '../public/logo.svg';

const Hero = () => {
  return (
<div className=' relative flex md:flex-row flex-col  min-w-6xl pt-12'>
    <div className='flex md:flex-row justify-start  md:ml-20 mx-10 mt-10 md:mt-0 absolute top-32 left-2'>
        <div className=' flex flex-col items-start justify-start md:ml-20 mx-10 mt-10 md:mt-0 text-white  '>
            <h2 className='font-bold md:text-3xl text-5xl text-white '>
                TUM. The Entrepreneurial University</h2>
            <p className='font-semibold mt-5'> Innovation durch Talente, Exzellenz und Verantwortung</p>
        </div>
   
       
    </div>
    <video src={"/video.mp4"}
            autoplay loop muted
            className=" w-auto min-h-full ">
        </video>
   </div>
  )
}

export default Hero

