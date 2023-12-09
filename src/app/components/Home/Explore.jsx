import React from 'react'

const Explore = () => {
  return (
    <div className='py-16'>
      <div className='w-[95%] text-center mx-auto max-w-[600px]'>
        <p className='text-[#10BFDB] text-3xl font-semibold'>EXPLORE EVENTS OR CREATE YOURS</p>
        <p className='my-5 text-lg'>Sign up for our decentralized events ticketing system today and experience the future of event ticketing!</p>
        <div className='flex mx-auto mt-6  sm:w-fit gap-3 flex-col sm:flex-row flex-wrap'>
          <button className='mx-auto w-full text-black py-3 px-4 font-semibold rounded-xl bg-white'>Explore Event</button>
          <button className='mx-auto w-full text-white py-3 px-4 font-semibold rounded-xl bg-[#10BFDB]'>Create Event</button>
        </div>
      </div>
    </div>
  )
}


export default Explore;