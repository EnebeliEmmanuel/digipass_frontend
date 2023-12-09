import React from 'react'
import Image from "next/image";
import {useState} from "react"
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const Event = () => {
  const [focus, setFocus] = useState(false);

  const triggerFocus = () => {
    setFocus(!focus)
  }
  return (
    <div className="px-[50px]">
      <section className='flex flex-row justify-start items-center'>
        <div className="rounded-md ">
          <Image width={500} height={500} src="images/event_page_1.svg" />
        </div>
        <div className="flex flex-col px-[5px] ml-[30px] max-w-[600px] gap-[10px]">
          <div name="name" className="">
            <h3 className="text-[48px] text-[#0FC1D9] font-bold">Jacob small : Wild stories</h3>
          </div>
          <div name="price" className="text-[#0FC1D9] text-[36px] ">
            $30.00
          </div>
          <div name="genre" className="text-[24px] text-[#9AD770] ">
            Comedy
          </div>
          <div name="location" className="flex flex-row items-center gap-[8px] text-[#A16FD8]">
            <CiLocationOn /> Ten Club 2972 Westheimer Rd. Santa, Illinois 85486
          </div>
          <div name="status" className="flex flex-row items-center gap-[8px] text-[#9AD770] ">
            <GoDotFill /> Upcoming
          </div>
          <div className='my-[20px]'>
            <button className="text-[20px] font-normal bg-[#C243FE] px-[20px] py-[10px] rounded-[50px] border-white ">
              Buy Tickets
            </button>
          </div>
        </div>
      </section>
      <section className="">
        <div className="">
          <div className="
          flex flex-row justify-start items-center px-[58px] rounded-[8px] gap-[10px]
          h-[91px] w-full bg-[#171919]
          ">
            <div onClick={triggerFocus} className={focus ? `border-b-[4px] border-solid border-[#0FC1D9]` : `border-none`}>
              <h3 className="text-[24px] font-medium">
             About
              </h3>
            </div>
            <div onClick={triggerFocus} className={focus ? `border-b-[4px] border-solid border-[#0FC1D9]` : `border-none`}>
              <h3 className="text-[24px] font-medium">
                Description
              </h3>
            </div>
          </div>
          <div className="bg-[#171919] px-[20px] py-[10px]">
            <p>
            Buckle up for a side-splitting night of laughter with Jacob Small, the master of wild stories! Get ready for an evening of hilarious anecdotes, rib-tickling observations, and a whole lot of unexpected twists and turns. Jacob's storytelling prowess will have you gasping for air between fits of laughter as he takes you on a journey through his life's most outrageous and hilarious experiences.
            From childhood escapades that would make your parents blush to adult mishaps that would make you question your own sanity, Jacob's stories are sure to leave you in stitches. Whether you're a fan of observational comedy, absurdist humor, or just plain silliness, Jacob's Wild Stories is the show for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events