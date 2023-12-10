import React from 'react';
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import eventsData from './EventsPage/event_data';

const EventList = () => {
  const data = eventsData;
  return (
    <div className="min-h-screen max-w-[700px]">
      <div className="text-white bg-[#171919] rounded-[28px] w-full flex items-center justify-between px-[20px] py-[10px] mb-[30px]">
        <input className="outline-none border-none w-full bg-[#171919]" name="search" type="search" placeholder='Search by events or Venue' />
        <IoIosSearch />
      </div>
      <div>
      {
        data.map((item) => {
          return (
            <Link href={item.slug}>
              <div className="flex flex-col md:flex-row justify-start items-center px-[5px] md:px-[20px] py-[20px] w-full md:w-[800px] rounded-lg md:rounded-[32px] bg-[#171919] mb-[20px]">       
                <div className="rounded-[16px] bg-[#171919]">
                  <Image width={200} height={216} src={item.image} />
                </div>
                <div className="flex flex-col px-[5px] ml-[30px] max-w-[600px] gap-[10px]">
                  <div name="name" className="">
                    <h3 className="text-[20px] md:text-[24px] text-[#0FC1D9] font-bold">{item.name}</h3>
                  </div>
                  <div name="price" className="text-[#0FC1D9] text-[20px] ">
                    ${item.price}
                  </div>
                  <div name="genre" className="flex items-center text-[20px] gap-[8px] text-[#D7D390] ">
                    <MdOutlineDateRange />{item.date}
                  </div>
                  
                  <div name="status" className={item.status === `Ongoing` ? `text-[#9AD770] flex items-center gap-[8px] text-[20px] text-[#9AD770]` : `text-[#9AD770] flex items-center gap-[8px] text-[20px] text-[#9AD770]` }>
                    <GoDotFill /> {item.status}
                  </div>
                  <div name="location" className="flex flex-row items-center gap-[8px] text-[20px] text-[#A16FD8]">
                    <CiLocationOn /> {item.location}
                  </div>
                </div>
              </div>
            </Link>
          )
        })
        
      }
      </div>
    </div>
  )
}

export default EventList