import React from 'react';
import {Disclosure} from '@headlessui/react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrFormClose} from 'react-icons/gr';
import Image from 'next/image';
import lgImg from '../public/logo.svg';
import brImg from '../public/bar.svg';
import MnImg from '../public/menu.svg';
import Search from '../public/search.svg';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='shadow-sm fixed w-full z-10  bg-blue'>
         <div className='w-full '>
            <div className='flex items-center h-20 w-full'>
                <div className='flex items-center mx-20 justify-between w-full'>
                    <div className='flex justify-center items-center flex-shrink-0 text-white'>
                       <Image src={MnImg} alt="logo" width={50} height={50} />
                       <Image src={lgImg} alt="logo" width={50} height={50} />
                       <p className='w-24 ml-4'> Technical University of Munich</p>
                    </div>
                    <div className='hidden md:block'>
                        
                        <div className='ml-10 grid-cols-7  space-x-2  text-white font-semibold text-xs '>
                            {
                                ["STUDIES", "LEBENSLANGESLERNEN", "RESEARCH", "INNOVATION", "COMMUNITY", "ABOUT TUM"].map((v,k)=>{
                                    return <Link href={v} key={k} className='hover:underline'>{v}  </Link>
                                })
                            }
                            
                            {/* <Link href='Studies' className='hover:underline'>STUDIES</Link>
                            <Link href='Learning' className='hover:underline'>LEBENSLANGESLERNEN</Link>
                            <Link href='Projects' className='hover:underline'>RESEARCH </Link>
                            <Link href='Innovations' className='hover:underline'>INNOVATION </Link>
                            <Link href='Community' className='hover:underline'>COMMUNITY </Link>
                            <Link href='About' className='hover:underline'>ABOUT TUM </Link> */}
                        </div>
                    </div>
                    <div className='text-white font-bold grid grid-cols-2 sm:right-0'>
                        <div className='grid grid-cols-3'>
                            <Link href='Home'>Dev </Link>
                            <Link href='Home' className='bg-white w-1 ml-3 sm:ml-4'> </Link>
                            <Link href='Home'>EN </Link>
                        </div>
                       <div className='flex'>
                       <Image src={Search} alt="logo" width={30} height={30} />
                       <Image src={brImg} alt="logo" width={30} height={30} className=" lg:hidden" />
                       
                       </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Navbar