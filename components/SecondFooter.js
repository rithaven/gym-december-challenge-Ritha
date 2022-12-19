import React from 'react'
import Facebook from '../public/assets/soc-facebook.svg';
import Youtube from '../public/assets/soc-youtube.svg';
import Twitter from '../public/assets/soc-twitter.svg';
import Instagram from '../public/assets/soc-instagram.svg';
import Linkd from '../public/assets/soc-linkedin.svg';
import Network from '../public/assets/rss.svg';
import Image from 'next/image';

const SecondFooter = () => {
  return (
    <div className='bg-blue w-full'>
        <div className='flex justify-between items-center text-white p-5'>
            <div className='flex gap-4'>
                <p>Jobs</p>
                <p>Feedback</p>
                <p>Press and Media</p>
                <p>Accessibility</p>
                <p>Privacy Policy</p>
                <p>Legal Notice</p>
            </div>
            <div className='flex gap-4'>
              <Image src={Facebook} alt='Social Icon'/>
              <Image src={Youtube} alt='Social Icon'/>
              <Image src={Twitter} alt='Social Icon'/>
              <Image src={Instagram} alt='Social Icon'/>
              <Image src={Linkd} alt='Social Icon'/>
              <Image src={Network} alt='Social Icon'/>
             
            </div>

        </div>
    </div>
  )
}

export default SecondFooter