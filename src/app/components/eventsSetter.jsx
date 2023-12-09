import React from 'react'

import { MdOutlineDateRange } from "react-icons/md";

const Setter = () => {
  return (
    <div className="flex flex-col gap-[30px] w-[380px] min-h-screen px-[20px] py-[20px] rounded-[16px] bg-[#171919] ">
      <div className="border-b border-[#49454F] w-full">
        <h3 className="text-[24px] font-semibold text-[#0FC1D9] leading-[29px] ">Filters</h3>
      </div>
      <div className="w-full">
        <div className="relative w-full mb-[20px]">
          <h3 className="text-[24px] text-[#0FC1D9] leading-[29px]">Price</h3>
          <input type="range" max="10000" min="0" className="outline-none w-[full] bg-[#0FC1D9] " />
          
          <div className="relative w-full flex justify-between items-center">
            <span>$0</span>
            <span>$10000</span>
          </div>
        </div>
        <div className="relative w-full my-[20px]">
          <h3 className="text-[24px]  text-[#0FC1D9] leading-[20px]">
            Location
          </h3>
          <div className="py-[10px]">
            <input className="outline-none text-white bg-[#1C1F21]" type="text" />
          </div>
        </div>
        <div className="relative w-full my-[20px]">
          <div className="relative w-full flex justify-between text-[24px] text-[#0FC1D9] "><h3>Enter Date</h3> <MdOutlineDateRange /></div>
          <div className="py-[10px]">
            <input className="outline-none text-white color-white bg-[#1C1F21]" name="date" type="date" />
          </div>
        </div>
        <div className="relative w-full">
          <h3 className="text-[24px] text-[#0FC1D9] leading-[20px]">
            Categories
          </h3>
          <div className="py-[10px]">
            <div className="flex justify-start items-center py-[10px] gap-[5px]">
              <input className="outline-none text-white bg-[#1C1F21]" name="all" type="checkbox" />
              <label className="text-[16px] text-[#0FC1D9] font-semibold" for="all">All</label>
            </div>
            <div className="flex justify-start items-center py-[10px] gap-[5px]">
              <input className="outline-none text-white bg-[#1C1F21]" name="concert" type="checkbox" />
              <label className="text-[16px] text-[#0FC1D9] font-semibold" for="concert">Concert</label>
            </div>
            <div className="flex justify-start items-center py-[10px] gap-[5px]">
              <input className="outline-none text-white bg-[#1C1F21]" name="comedy" type="checkbox" />
              <label className="text-[16px] text-[#0FC1D9] font-semibold" for="comedy">Comedy</label>
            </div>
            <div className="flex justify-start items-center py-[10px] gap-[5px]">
              <input className="outline-none text-white bg-[#1C1F21]" name="movie" type="checkbox" />
              <label className="text-[16px] text-[#0FC1D9] font-semibold" for="movie">Movie</label>
            </div>
            <div className="flex justify-start items-center py-[10px] gap-[5px]">
              <input className="outline-none text-white bg-[#1C1F21]" name="sports" type="checkbox" />
              <label className="text-[16px] text-[#0FC1D9] font-semibold" for="sports">Sports</label>
            </div>
            <div className="flex justify-start items-center py-[10px] gap-[5px]">
              <input className="outline-none text-white bg-[#1C1F21]" name="conference" type="checkbox" />
              <label className="text-[16px] text-[#0FC1D9] font-semibold" for="conference">Conference</label>
            </div>
            <div className="flex justify-start items-center py-[10px] gap-[5px]">
              <input className="outline-none text-white bg-[#1C1F21]" name="drama" type="checkbox" />
              <label className="text-[16px] text-[#0FC1D9] font-semibold" for="drama">Drama and musicals</label>
            </div>
            <div className="flex justify-start items-center py-[10px] gap-[5px]">
              <input className="outline-none text-white bg-[#1C1F21]" name="others" type="checkbox" />
              <label className="text-[16px] text-[#0FC1D9] font-semibold" for="others">Drama and musicals</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setter