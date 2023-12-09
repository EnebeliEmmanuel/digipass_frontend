import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-[#112634] py-16'>
        <div className='w-[95%] mx-auto max-w-[1200px]'>
            <p className='font-bold text-xl'>ETHERCKET </p>
            <div className='flex gap-3 my-7 text-[#2091F9]'>
            <FaTwitter size={30}/>
            <FaFacebookSquare size={30}/>
            <FaLinkedin size={30}/>
            </div>
            <p className='w-[150px] sm:w-fit mt-2 sm:mt-24 text-[#10BFDB] text-lg font-semibold'>Chainlink Hackacthon : Constellation 2023</p>
        </div>
    </div>
  )
}
