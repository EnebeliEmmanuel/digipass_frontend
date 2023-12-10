import React from 'react'

const Details = (props) => {

    const { data, handleChange } = props;

    return (
        <div className="relative mx-auto py-[20px]">
                    <h3 className="text-[#0FC1D9] text-[18px] my-[20px]">Customize Event</h3>
                    <form className="w-full sm:w-[400px] relative flex flex-col justify-start items-start">
                        <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                            <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="location">Location</label>
                            <input className="bg-[#171919] outline-none text-white rounded-md w-full" onChange={handleChange} type="text" name="location" /> 
                            <p className="text-[12px] text-[#8F8F8FCC]">Min 3, max 50 symbols</p>
                        </div> 
                        <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                            <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="date">Date</label>
                            <input className="bg-[#171919] outline-none text-white rounded-md w-full" onChange={handleChange} type="text" name="date" /> 
                            <p className="text-[12px] text-[#8F8F8FCC]">Min 3, max 50 symbols</p>
                        </div> 
                        <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                            <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="tickets">Number of Tickets</label>
                            <input className="bg-[#171919] outline-none text-white rounded-md w-full" onChange={handleChange} type="text" name="tickets" /> 
                            <p className="text-[12px] text-[#8F8F8FCC]">Max 200 symbols</p>
                        </div>
                        <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                            <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="genre">Genre</label>
                            <input className="bg-[#171919] outline-none text-white rounded-md w-full" onChange={handleChange} type="text" name="genre" /> 
                            <p className="text-[12px] text-[#8F8F8FCC]">Max 200 symbols</p>
                        </div>
                        <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                            <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="walletAddr">Wallet Address to Recieve Payment</label>
                            <input className="bg-[#171919] outline-none text-white rounded-md w-full" onChange={handleChange} name="walletAddr" type="text" /> 
                        </div>
                    </form> 
                </div>
    )
}

export default Details