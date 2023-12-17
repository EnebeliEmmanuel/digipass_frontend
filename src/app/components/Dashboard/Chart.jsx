import React from "react";
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";
import Image from "next/image";

export default function Progress() {
  return (
    <Card className="w-[240px]  h-[240px] border-none ">
      <CardBody className="relative justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
      />
         <Image
                src='images/face.svg'
                // className="my-auto"
                className="absolute top-[38%] mr-0.5  p-2.5 bg-[#0FC1D9] rounded-full"
                alt='cylinder'
                width={60}
                height={60}
            />
      </CardBody>
      <CardFooter className=" items-center py-3 order ">
        {/* <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          2800 Data points
        </Chip> */}
        <div className="flex justify-between gap-3 w-full ">
          <p className="text-[#A0AEC0] text-[.9rem]">0%</p>
          <div className="">
          <p className="font-bold text-[1.5rem] text-center">95%</p>
          <p className="text-[#A0AEC0] text-[.9rem] text-center">Based on likes</p>

          </div>
          <p className="text-[#A0AEC0] text-[.9rem]">100%</p>

        </div>
      </CardFooter>
    </Card>
  );
}
