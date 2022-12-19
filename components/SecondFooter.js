import React from 'react'
import Facebook from '../public/assets/soc-facebook.svg';
import Youtube from '../public/assets/soc-youtube.svg';
import Twitter from '../public/assets/soc-twitter.svg';
import Instagram from '../public/assets/soc-instagram.svg';
import Linkd from '../public/assets/soc-linkedin.svg';
import Network from '../public/assets/rss.svg';
import FtIcon from '../public/assets/partners-of-excellence.svg'
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
        <div className=" flex gap-5 p-4">
            <div>
            <Image  src={FtIcon} />
            </div>
            <div className='grid grid-rows-2 justify-start text-white'>
                <h2>TUM Partners of Excellence</h2>
                <p className='text-sm'>Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW · Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN · Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon · Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen Wirtschaft · Volkswagen · Wacker Chemie</p>
            </div>

      </div>

    </div>
  )
}

export default SecondFooter