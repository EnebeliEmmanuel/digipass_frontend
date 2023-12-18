import Image from "next/image";
import Link from "next/link";
import React from "react";

const events = [
  {
    img: "/images/event1.png",
    id: 1,
    title: "Ai and Our Future",
    project: "project#1",
    context:
      "Join us for an insightful and event exploring the transformative power of artificial intelligence. ",
  },
  {
    img: "/images/event2.png",
    id: 2,
    title: "Super Tech",
    project: "project#2",
    context:
      "Join us at SuperTech 2024, the event where cutting-edge technology meets visionary minds. ",
  },
  {
    img: "/images/event3.png",
    id: 2,
    title: "Game Fest",
    project: "project#3",
    context:
      "Calling all gamers, and adventure seekers! Prepare to embark on a celebration",
  },
];
const Levent = () => {
  return (
    <div className=" my-7 dash-card w-[97%] px-8 py-8 mx-auto max-w-[1200px]">
      <p className="font-semibold text-[1.2rem] mb-2">Events</p>
      <p className="text-[#A0AEC0] text-md">All post and present events</p>

      <div className="mt-7 flex gap-7 flex-wrap justify-center md:justify-between">
        {events.map((item) => (
          <div key={item.id} className="w-[95%] sm:w-[47%] md:max-w-[30%]">
            <Image
              src={item.img}
              className="rounded-xl"
              alt="cylinder"
              width={500}
              height={500}
            />
            <div>
              <p className="text-[#A0AEC0] text-[.85rem] my-3">{item.project}</p>
              <p className=" text-[1.15rem] my-3">{item.project}</p>
              <p className="text-[#A0AEC0] text-md mb-4">{item.context}</p>

              <Link href='/' className=" text-[.8rem] my-4 px-4 py-2 rounded-lg border-2 border-white" >
                VIEW ALL
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Levent;
