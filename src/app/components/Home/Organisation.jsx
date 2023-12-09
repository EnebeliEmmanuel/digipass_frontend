import Image from 'next/image'
// import React from 'react'

const Organisation = () => {
  return (
    <div className='bg-[#17191A] py-16'>
        <div className='w-[95%] mx-auto max-w-[1200px]'>
            <p className='text-center text-[#BCB7B7] font-semibold text-[18px]'>Utilizing technologies from top web 3 organizations </p>
            <div className='flex gap-5 flex-wrap items-center justify-center w-fit mx-auto my-7'>
            <Image
            src='images/chainlink.svg'
            // className="absolute top-6"
            alt='cylinder'
            width={200}
            height={200}
        />
         <Image
            src='images/polygon.svg'
            // className="absolute bottom-10 left-24"
            alt='cylinder'
            width={200}
            height={200}
        />
            </div>
        </div>
    </div>
  )
}

export default Organisation;