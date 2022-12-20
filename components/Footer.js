import Image from "next/image";
import React from "react";
import Log from "../public/logo.svg";
import icon from "../public/assets/two.svg";

const Footer = () => {
  return (
    <div className="bg-lightblue w-full pb-5">
      <div className="grid grid-cols-3 gap-1 p-10 text-white">
        <div>
          <div className="flex gap-4 text-white">
            <Image src={Log}/>
            <div>
              <p className="mt-8">Technical University of Munich</p>
              <p>Arcisstraße 21</p>
              <p className="mb-5">80333 München</p>
              <p className="text-sm">Phone: +49 (0)89-289-01</p>
              <p className="text-sm">Fax: +49 (0)89-289-22000</p>
            </div>
          </div>
        </div>
        <div className=" ml-6 mt-7">
          <p>Let's shape the future together.</p>
          <div className="grid grid-cols-2 gap-0">
              <p>Support us</p>
          </div>
        </div>
        <div className=" py-3 ">
          <p className="pb-2">Latest news</p>
          <p className="pb-2"> Germany's strongest university in business sciences</p>
          <p className="pb-2">TUM partners with Nobel Sustainability Trust</p>
          <p className="pb-2">Antihelium nuclei as messengers from the depths of the galaxy</p>
        </div>
      </div>
      <hr className=" bg-white mx-10" />
     <div className="flex text-white pt-4 gap-7 ml-4">
        <div>
          <p className="font-bold w-11 mr-10">Schools and Departments:</p>
        </div>
        <div>
          <div className="flex">
              <p>Computation, Information and Technology </p>
              <p>Engineering and Design</p>
              <p>Natural Sciences </p>
              <p>Life Sciences</p>
              <p>Management</p>
          </div>
          <div className="flex">
              <p>Social Sciences and Technology</p>
              <p>Medicine</p>
              <p>Sport and Health Sciences </p>
          </div>
        </div>
      </div>
      <div className="flex text-white pt-4 gap-7 ml-4">
        <div>
          <p className="font-bold w-11 mr-10">Quicklinks:</p>
        </div>
        <div>
          <div className="flex">
              <p>Persons (TUMonline)  </p>
              <p>IT Services</p>
              <p>Calendar </p>
              <p>MyTUM</p>
              <p>Rooms (TUMonline) </p>
              <p>University Library </p>
              <p>TUMshop </p>
          </div>
         
        </div>
      </div>
     </div>
   
  );
};

export default Footer;
