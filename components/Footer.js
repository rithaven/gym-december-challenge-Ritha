import Image from "next/image";
import React from "react";
import Log from "../public/logo.svg";
import icon from "../public/assets/two.svg";

const Footer = () => {
  return (
    <div className="bg-blue w-full ">
      <div className="grid grid-cols-3 gap-1 p-10 text-white">
        <div>
          <div className=" grid grid-cols-2 gap-0 text-white">
            <Image src={Log} />
            <div>
              <p>Technical University of Munich Arcisstraße 21 80333 München</p>
              <p className="text-sm">Phone: +49 (0)89-289-01</p>
              <p className="text-sm">Fax: +49 (0)89-289-22000</p>
            </div>
          </div>
        </div>
        <div className=" ml-6">
          <p>Let's shape the future together.</p>
          <div className="grid grid-cols-2 gap-0">
              <p>Support us</p>
            <Image src={icon} />
          </div>
        </div>
        <div className=" p-3">
          <p>Support us Latest news</p>
          <p>Latest news Germany's strongest university in business sciences</p>
          <p>TUM partners with Nobel Sustainability Trust</p>
          <p>Antihelium nuclei as messengers from the depths of the galaxy</p>
        </div>
      </div>
      <hr className=" bg-white mx-10" />
     <div className="flex text-white pt-4 gap-7">
        <div>
          <p className="font-bold w-11 mr-10">Schools and Departments:</p>
        </div>
        <div>
              <p>Computation, Information and Technology </p>
              <p>Engineering and Design</p>
              <p>Natural Sciences </p>
              <p>Life Sciences</p>
              <p>Management</p>
              <p>Social Sciences and Technology</p>
              <p>Medicine</p>
              <p>Sport and Health Sciences </p>
          
        </div>
      </div>
     </div>
   
  );
};

export default Footer;
