import Image from "next/image";
import React from "react";

const Works = () => {
  return (
    <div className="bg-[#17191A] py-16">
      <div className="w-[95%] mx-auto max-w-[1200px]">

        <p className="text-center font-bold text-xl my-12">HOW IT WORKS?</p>
        <div className="hidden sm:grid grid-cols-3 mx-auto w-[97%] max-w-[500px]">
          <div></div>
          <div className="relative w-fit ">
            <Image
              src="images/one.svg"
              // className="w-[90px]"
              alt="cylinder"
              width={150}
              height={150}
            />
            <p className="absolute top-[3.3rem] left-[3.8rem] text-2xl">1</p>
            <div className="absolute top-[5.8rem] left-[4rem] h-[100px] w-[5px] bg-[#1D95F6]" />
          </div>
          <div className="text-[#C365E9] flex items-center -ml-14 h-fit my-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="border-b-2 border-[#C365E9] w-[70px] sm:w-[90px] h-0 border-dashed mt-7 "/>
              <p className="font-semibold text-sm sm:text-[1rem] mt-4 w-[100px] sm:w-[190px]">
                Connect Your Crypto wallet. eg Metamask, trust wallet etc.
              </p>
            </div>
          </div>
          <div className="text-[#98E5C8] flex items-end pt-5 h-fit my-auto">
            <div className="flex flex-col-reverse sm:flex-row gap-3 relative -left-12">
              <p className="font-semibold mt-4">
              Explore Events or Create your event.
              </p>
              <div className="border-b-2 border-[#98E5C8] w-[120px] md:w-[170px] h-0 border-dashed mt-7 "/>
            </div>
          </div>

          <div className="relative w-fit ">
            <Image
              src="images/two.svg"
              className="-mr-2 -mt-"
              alt="cylinder"
              width={135}
              height={135}
            />
            <p className="absolute top-[3.3rem] left-[3.8rem] text-2xl">2</p>
            <div className="absolute top-[5.8rem] left-[4rem] h-[100px] w-[5px] bg-[#1D95F6]" />
          </div>

          <div></div>
          <div></div>

          <div className="relative w-fit ">
            <Image
              src="images/three.svg"
              // className="w-[90px]"
              alt="cylinder"
              width={150}
              height={150}
            />
            <p className="absolute top-[3.3rem] left-[3.8rem] text-2xl">3</p>
            <div className="absolute top-[5.8rem] left-[4rem] h-[100px] w-[5px] bg-[#1D95F6]" />
          </div>
          
          <div className="text-[#9FD664] flex items-center  -ml-14 h-fit my-auto">
            <div className="flex gap-3 mt-3">
              <div className="border-b-2 border-[#9FD664] w-[120px] md:w-[170px] h-0 border-dashed mt-7 "/>
              <p className="font-semibold mt-4">
              Set up your preferences for the events you chose to create.
              </p>
            </div>
          </div>
          <div className="text-[#9696FA] flex items-end  h-fit my-auto">
            <div className="flex gap-3 relative -left-14 mt-9">
              <p className="font-semibold mt-4">
              Tickets bought can be refunded 48hrs before the proposed starting time of the event.
              </p>
              <div className="border-b-2 border-[#9696FA] w-[120px] md:w-[170px] h-0 border-dashed mt-7 "/>
            </div>
          </div>

          <div className="relative w-fit ">
            <Image
              src="images/four.svg"
              // className="w-[90px]"
              alt="cylinder"
              width={150}
              height={150}
            />
            <p className="absolute top-[3.3rem] left-[3.8rem] text-2xl">4</p>
            <div className="absolute top-[5.8rem] left-[4rem] h-[100px] w-[5px] bg-[#1D95F6]" />
          </div>

          <div></div>

          <div></div>

          <div className="relative w-fit ">
            <Image
              src="images/five.svg"
              // className="w-[90px]"
              alt="cylinder"
              width={125}
              height={125}
            />
            <p className="absolute top-[3.3rem] left-[3.8rem] text-2xl">5</p>
          </div>
          
          <div className="text-[#75ABDA] flex items-center  -ml-14 h-fit my-auto">
            <div className="flex gap-3 mt-9">
              <div className="border-b-2 border-[#75ABDA] w-[120px] md:w-[170px] h-0 border-dashed mt-7 "/>
              <p className="font-semibold mt-4">
              Check your user dashboard or organization dashboard to see details of events.
              </p>
            </div>
          </div>

        </div>

        <div className="sm:hidden  flex flex-row  mx-auto w-[97%] max-w-[500px]">
          <div className="basis-2/5 "></div>
          <div className="relative w-fit flex flex-col items-start basis-1/5">
            <Image
              src="/images/one1.png"
              className="drop-shadow-lg"
              alt="cylinder"
              width={150}
              height={150}
            />
            <div className=" h-full mx-auto w-[5px] bg-[#1D95F6]" />
          </div>
          <div className="basis-2/5 text-[#C365E9] flex items-center h-fit my-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="border-b-2 border-[#C365E9] w-[70px] sm:w-[90px] h-0 border-dashed mt-4 "/>
              <p className="font-semibold text-sm sm:text-[1rem] w-fit sm:w-[190px]">
                Connect Your Crypto wallet. eg Metamask, trust wallet etc.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:hidden  flex flex-row-reverse  mx-auto w-[97%] max-w-[500px]">
          <div className="basis-2/5 "></div>
          <div className="relative w-fit flex flex-col items-start basis-1/5">
            <Image
              src="/images/two2.png"
              className="drop-shadow-lg"
              alt="cylinder"
              width={150}
              height={150}
            />
            <div className=" h-full mx-auto w-[5px] bg-[#1D95F6]" />
          </div>
          <div className="basis-2/5 text-[#98E5C8] flex items-center h-fit my-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="border-b-2 border-[#CED1A4] w-[70px] sm:w-[90px] h-0 border-dashed mt-4 "/>
              <p className="font-semibold pb-6 text-sm sm:text-[1rem] w-fit sm:w-[190px]">
              Explore Events or Create your event.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:hidden  flex flex-row  mx-auto w-[97%] max-w-[500px]">
          <div className="basis-2/5 "></div>
          <div className="relative w-fit flex flex-col items-start basis-1/5">
            <Image
              src="/images/three2.png"
              className="drop-shadow-lg"
              alt="cylinder"
              width={150}
              height={150}
            />
            <div className=" h-full mx-auto w-[5px] bg-[#1D95F6]" />
          </div>
          <div className="basis-2/5 text-[#9FD664] flex items-center h-fit my-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="border-b-2 border-[#5DD183] w-[70px] sm:w-[90px] h-0 border-dashed mt-4 "/>
              <p className="font-semibold text-sm sm:text-[1rem] w-fit sm:w-[190px]">
              Set up your preferences for the events you chose to create.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:hidden  flex flex-row-reverse  mx-auto w-[97%] max-w-[500px]">
          <div className="basis-2/5 "></div>
          <div className="relative w-fit flex flex-col items-start basis-1/5">
            <Image
              src="/images/four2.png"
              className="drop-shadow-lg"
              alt="cylinder"
              width={150}
              height={150}
            />
            <div className=" h-full mx-auto w-[5px] bg-[#1D95F6]" />
          </div>
          <div className="basis-2/5 text-[#9696FA] flex items-center h-fit my-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="border-b-2 border-[#98E5C8] w-[70px] sm:w-[90px] h-0 border-dashed mt-4 "/>
              <p className="font-semibold pb-6 text-sm sm:text-[1rem] w-fit sm:w-[190px]">
              Tickets bought can be refunded 48hrs before the proposed starting time of the event.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:hidden  flex flex-row  mx-auto w-[97%] max-w-[500px]">
          <div className="basis-2/5 "></div>
          <div className="relative w-fit flex flex-col items-start basis-1/5">
            <Image
              src="/images/five2.png"
              className="drop-shadow-lg"
              alt="cylinder"
              width={150}
              height={150}
            />
          </div>
          <div className="basis-2/5 text-[#5E93C5] flex items-center h-fit my-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="border-b-2 border-[#75ABDA] w-[70px] sm:w-[90px] h-0 border-dashed mt-4 "/>
              <p className="font-semibold text-sm sm:text-[1rem] w-fit sm:w-[190px]">
              Check your user dashboard or organization dashboard to see details of events.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}


export default Works;