"use client"

import Link from 'next/link'
import React, {useState} from 'react'

import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import {ConnectBtn} from "./ConnectButton"
import Image from 'next/image';

export const Nav = () => {
    const [toggle, setToggle ] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className='nav-bg'>
            <div className='w-[95%] px-[10px] mx-auto max-w-[1200px] z-10 flex justify-between items-center py-3'>
                <Link href="/">    
                    <div>
                        <Image src="images/logo.svg" width={51} height={37} alt="DigiPass Logo"/>
                    </div>
                </Link>
                <div className='hidden md:gap-6 md:flex'>
                    <Link href='/events' className='py-2 px-3'>Events</Link>
                    <Link href='/dashboard' className='py-2 px-3'>Dashboard</Link>
                    <Link href='/create-event' className='py-2 px-3'>Create</Link>
                </div>
                <div className=' '>
                    <div className='text-[#11BCDD] block sm:hidden'>
                        {
                            toggle ? <MdClose onClick={handleToggle} size={30} /> 
                                : <HiMenuAlt3 onClick={handleToggle} size={30} />
                        }
                    </div>
                    <div className="hidden md:flex md:justify-center md:items-center ">
                        <ConnectBtn />
                    </div>
                </div>
            </div>
            <div className={toggle ? `absolute w-screen h-screen z-10 bg-black flex flex-col justify-center items-center gap-[10px]` : `hidden scale-0`}>
                <Link onClick={handleToggle} href='/events' className='py-3 px-3'>Events</Link>
                <Link onClick={handleToggle} href='/dashboard' className='py-3 px-3'>Dashboard</Link>
                <Link onClick={handleToggle} href='/create-event' className='py-3 px-3'>Create</Link>
                <div className="">
                    <ConnectBtn />
                </div>
            </div>
        </div>
    )
}
