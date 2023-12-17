import React from "react";
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";
import Image from "next/image";

export default function Progress() {
  return (
    <Card className="w-[180px] h-[180px] border-none ">
      <CardBody className=" justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-24 h-24 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-xl font-semibold text-white",
          }}
          value={68}
          strokeWidth={4}
          showValueLabel={true}
      />
   
      </CardBody>
      <CardFooter className=" items-center py-3">
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
         <div className="mx-auto">
          <p className=" text-[#A0AEC0] text-center">680/1000</p>
          <p className="text-[#A0AEC0] text-[.9rem] text-center">Tickets sold proportion</p>
         </div>

        </div>
      </CardFooter>
    </Card>
  );
}
