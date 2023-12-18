"use client";

import React from "react";
import { FaBell } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import Chart from "./Chart";
import Chart2 from "./Chart2";

import {
  Chart as ChartJS,
  ArcElement,
  // Tooltip,
  // Legend
} from "chart.js";
import { MdElectricCar } from "react-icons/md";

ChartJS.register(
  ArcElement
  // Tooltip,
  // Legend
);


const Details = () => {

  const order = [
    {
      icon: <FaBell className="text-[#0FC1D9] mt-1" />,
      id: 1,
      title: "New purchase #4219426",
      date: "22 DEC 7:20 PM",
    },
    {
      icon: <FaBell className="text-[#0FC1D9]" />,
      id: 2,
      title: "New purchase #4219426",
      date: "22 DEC 7:20 PM",
    },
    {
      icon: <FaBell className="text-[#0FC1D9] mt-1" />,
      id: 3,
      title: "New purchase #4219426",
      date: "22 DEC 7:20 PM",
    },
    {
      icon: <FaBell className="text-[#0FC1D9]" />,
      id: 4,
      title: "New purchase #4219426",
      date: "22 DEC 7:20 PM",
    },
    {
      icon: <FaBell className="text-[#0FC1D9] mt-1" />,
      id: 5,
      title: "New purchase #4219426",
      date: "22 DEC 7:20 PM",
    },
    {
      icon: <FaBell className="text-[#0FC1D9]" />,
      id: 6,
      title: "New purchase #4219426",
      date: "22 DEC 7:20 PM",
    },
    {
      icon: <FaBell className="text-[#0FC1D9] mt-1" />,
      id: 7,
      title: "New purchase #4219426",
      date: "22 DEC 7:20 PM",
    },
    {
      icon: <FaBell className="text-[#0FC1D9]" />,
      id: 8,
      title: "New purchase #4219426",
      date: "22 DEC 7:20 PM",
    },
    {
      icon: <FaBell className="text-[#0FC1D9] mt-1" />,
      id: 9,
      title: "New purchase #4219426",
      date: "22 DEC 7:20 PM",
    },
  ];
  // const data = {
  //   labels: ["show", "Hide"],
  //   datasets: [
  //     {
  //       label: "shop 1",
  //       data: [3, 6],
  //       backgroundColor: ["#61DBFB", "black"],
  //       borderColor: ["#61DBFB", "black"],
  //       circumference: 180,
  //       rotation: 270,
  //     },
  //   ],
  // };

  // const options = {
  //   aspecRatio: 2,
  //   Plugin: {
  //     // tooltip: {
  //     //   enabled: false
  //     // },
  //     title: {
  //       display: true,
  //       text: "Doughnut Chart",
  //       color: "blue",
  //       font: {
  //         size: 24,
  //       },
  //       padding: {
  //         top: 40,
  //         bottom: 30,
  //       },
  //       responsive: true,
  //       animation: {
  //         animateScale: true,
  //       },
  //     },
  //     legend: {
  //       display: false,
  //     },
  //   },
  // };
  return (
    <div className="flex flex-col md:flex-row my-10 gap-4">
      <div className=" basis-[60%]">
        <div className=" flex gap-5  flex-col sm:flex-row  basis-[50%] ">
          <div className="dash-card py-8 px-7 ">
            <p className="font-bold text-[1.56em] ">Welcome back!</p>
            <p className="text-[.8rem] ">Nice to see you, siva Tech</p>
          </div>
          <div className="dash-card py-8 px-7 basis-[50%]">
            <p className="font-bold text-[1rem] ">Satisfaction Rate</p>
            <p className="text-[.8em] text-[#A0AEC0]">From all event</p>
           
            <Chart />
          </div>
        </div>
        <div className="dash-card py-8 px-5  mt-5">
          <p className="font-bold text-[1rem] ">Analysis</p>
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="">
              <Chart2 />
            </div>
          
            <div className="flex justify-between flex-wrap mt-auto gap-y-3 w-full">
              <div className="flex h-fit justify-between w-[48%] order p-3 ">
                <div>
                  <p className="text-[.7rem] text-[#A0AEC0]">Open event</p>
                  <p className="text-[1.2rem] font-bold">1</p>
                </div>
                <div>
                  <MdElectricCar
                    size={35}
                    className="bg-[#0FC1D9] p-2 rounded-xl "
                  />
                </div>
              </div>

              <div className="flex h-fit justify-between w-[48%] order p-3 ">
                <div>
                  <p className="text-[.7rem] text-[#A0AEC0]">Open event</p>
                  <p className="text-[1.2rem] font-bold">1</p>
                </div>
                <div>
                  <MdElectricCar
                    size={35}
                    className="bg-[#0FC1D9] p-2 rounded-xl "
                  />
                </div>
              </div>
              <div className="flex h-fit justify-between w-[48%] order p-3 ">
                <div>
                  <p className="text-[.7rem] text-[#A0AEC0]">Open event</p>
                  <p className="text-[1.2rem] font-bold">1</p>
                </div>
                <div>
                  <MdElectricCar
                    size={35}
                    className="bg-[#0FC1D9] p-2 rounded-xl "
                  />
                </div>
              </div>
              <div className="flex h-fit justify-between w-[48%] order p-3 ">
                <div>
                  <p className="text-[.7rem] text-[#A0AEC0]">Open event</p>
                  <p className="text-[1.2rem] font-bold">1</p>
                </div>
                <div>
                  <MdElectricCar
                    size={35}
                    className="bg-[#0FC1D9] p-2 rounded-xl "
                  />
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
      <div className="order p-8 text-[.95rem] gap-y-3 flex flex-col basis-[40%]">
        <p className="font-semibold text-[1.2rem]">Order overview</p>
        <div className="flex gap-2 mb-3 -mt-1 items-center">
          <FaCircleCheck className="text-[#01B574]" />
          <p>+30% this month</p>
        </div>

        {order?.map((item) => (
          <div key={item.id} className="flex gap-3 justify-start ">
            <div className="">{item.icon}</div>
            <div className="mb-auto">
              <p className=" mb-[.5]">{item.title}</p>
              <p className="text-[.8em] text-[#A0AEC0]">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
