import Image from "next/image";
import React from "react";
import GImg1 from "../public/teach.jpg";
import Photo from "../public/g.PNG";
import Leibniz from '../public/boy.jpg';
import Sastain from '../public/sustain.jpg';


const GridCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-16 px-5">
      <div className="flex flex-col">
        <h2 className="bg-cyan-200 mb-5 w-64 text-3xl font-bold text-white">
          News from TUM
        </h2>
        <p className="w-5/6 mb-3">
          News, research results and events: everything that enthuses people at
          our university.
        </p>
        <button className="bg-sky-600 w-1/6 py-3 ">SEE ALL</button>
      </div>
      <div className=" grid grid-cols-2 gap-6">
        <div className="relative flex">
          <Image src={Photo} alt="/" />
          <p className="absolute bottom-0 bg-slate-100 px-2">TUM in rankings</p>
        </div>
        <div className="relative flex">
          <Image src={GImg1} alt="/" />

          <p className="absolute bottom-0 bg-slate-100 px-2">Research</p>
        </div>
        <div>
          <p>WirtschaftsWoche rankings</p>
          <h2 className="font-bold">
            Germany's strongest university in business sciences
          </h2>
          <p>
            TUM has retained its ranking as Germany’s strongest research
            university in business sciences. The latest issue of the...
          </p>
          <div className="grid grid-cols-2">
            <p>12/16/2022</p>
            <p>Reading Tim 2 min.</p>
          </div>
        </div>
        <div>
          <p>Search for dark matter</p>
          <h2 className="font-bold">
            Antihelium nuclei as messengers from the depths of the galaxy
          </h2>
          <p>
            How are galaxies born, and what holds them together? Astronomers
            assume that dark matter plays an essential role. However,...
          </p>
          <div className="grid grid-cols-2 mt-5">
            <p>12/13/2022</p>
            <p>Reading Tim 2 min.</p>
          </div>
        </div>
      </div>
      <div className=" flex w-full ml-96">
            <div className=" grid grid-cols-2 gap-6">
                <div className="relative flex">
                <Image src={Leibniz} alt="/" />
                <p className="absolute bottom-0 bg-slate-100 px-2">TUM in rankings</p>
                </div>
            <div className="relative flex">
                <Image src={Sastain} alt="/" />

                <p className="absolute bottom-0 bg-slate-100 px-2">Research</p>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default GridCards;
