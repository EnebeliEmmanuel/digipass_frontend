import Image from "next/image";
import React from "react";
import { TiArrowRight } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="py-24 md:py-32 relative w-[95%] mx-auto max-w-[1200px]">
        <Image
            src='images/cylinder.svg'
            className="absolute top-6 hidden md:block"
            alt='cylinder'
            width={200}
            height={200}
        />
         <Image
            src='images/circle.svg'
            className="absolute bottom-10 left-24  hidden md:block"
            alt='cylinder'
            width={70}
            height={70}
        />
         <Image
            src='images/cube.svg'
            className="absolute bottom-0 right-0  hidden md:block" 
            alt='cylinder'
            width={150}
            height={150}
        />
      <p className="text-center text-[#A2B2EE] font-semibold text-2xl">ETHERCKET</p>
      <div className="fut text-[2rem] md:text-[4rem] w-[98%] max-w-[800px] mx-auto my-6"> The Future of Event Ticketing <br /> <span className="text-[2rem] md:text-[4rem]"> is Here!</span></div>
      <p className="text-[#CED8DD] w-[98%] max-w-[550px] mx-auto my-7 leading-10 text-[18px]  text-center font-semibold">A decentralized events ticketing system that puts power back in the hands of fans and event organizers.</p>
      <div className="flex flex-col md:flex-row gap-8 items-center w-fit mx-auto mt-10">
        <div className="relative">
        <button className="reflex  "></button>
        <button className="btn-e py-3 px-5 font-semibold text-[17px] flex gap-4 items-center">Explore event <TiArrowRight size={30} /></button>
        </div>

        <div className="relative">
        <button className="reflex2  ">ht</button>
        <button className="btn-e2 py-3 px-5 font-semibold text-[17px] flex gap-4 items-center">Create event <TiArrowRight size={30} /></button>
        </div>
      </div>
    </div>
  );
}


export default Hero;