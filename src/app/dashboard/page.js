
import React from "react";
import Image from "next/image";
import { IoWallet } from "react-icons/io5";
import Details from "../components/Dashboard/Details";
import Levent from "../components/Dashboard/Levent";


const card = [
  {
    title: "Today's Money",
    id: 1,
    amount: "$2,130",
    percent: "+5%",
    icon: <IoWallet size={45} className="bg-[#0FC1D9] p-2 rounded-xl " />,
  },
  {
    title: "Ticket’s sold today",
    id: 2,
    amount: "38",
    percent: "+5%",
    icon: <IoWallet size={45} className="bg-[#0FC1D9] p-2 rounded-xl " />,
  },
  {
    title: "Total sales",
    id: 3,
    amount: "8,300",
    percent: "+5%",
    icon: <IoWallet size={45} className="bg-[#0FC1D9] p-2 rounded-xl " />,
  },
];

export default function Page () {
  return (
    <div className="w-[95%] px-[10px] mx-auto max-w-[1200px]">
      <div className="flex gap-y-5 flex-wrap  justify-between my-12">
        {card?.map((item) => (
          <div
            key={item.id}
            className="dash-card flex justify-between py-5 px-5 items-center basis-full sm:basis-[48%] md:basis-[30%]"
          >
            <div className="">
              <p className="text-[#A0AEC0] font-semibold text-[.85rem]">
                {item.title}
              </p>
              <div className="flex items-end gap-3">
                <p className="text-[1.7rem] font-bold">{item.amount}</p>
                <p className="text-[#01B574] text-[.8rem] mb-2">
                  {item.percent}
                </p>
              </div>
            </div>
            {item.icon}
          </div>
        ))}
      </div>

      <div className="dash-card flex flex-wrap gap-6 justify-between items-center py-6 px-5 my-12 ">
        <div className="flex gap-3 items-center">
          <div className="relative ">
            <Image
              src="images/siva.svg"
              className="rounded-xl"
              alt="cylinder"
              width={55}
              height={55}
            />
            <Image
              src="images/edit.svg"
              className="edit absolute right-0 -bottom-[6px] p-1"
              alt="cylinder"
              width={25}
              height={25}
            />
          </div>
          <div className="h-fit">
            <div className="flex flex-col gap-1">
              <p className="text-[1rem]">Siva Tech</p>
              <p className="text-[#A0AEC0] text-[.9rem] ">technology</p>
            </div>
          </div>
        </div>
        <div className="flex h-fit px-4 py-3 font-semibold text-[.8rem] rounded-xl bg-[#0FC1D9] gap-1 justify-center">
          <Image
            src="images/overview.svg"
            className=""
            alt="cylinder"
            width={20}
            height={20}
          />
          OVERVIEW
        </div>
      </div>

      <Details />
      {/* <List /> */}
      <Levent />
      
    </div>
  );
};
