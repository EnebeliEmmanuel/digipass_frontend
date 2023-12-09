import React from 'react'

const CreateEvent = () => {
  return (
    <div className="w-screen py-[20px] ">
        <div className="w-fit-content px-[30px] border-[2px] border-[#0FC1D9] rounded-[50px] flex justify-center items-center">   
            <div className="relative mx-auto py-[20px]">
                <h3 className="text-[#0FC1D9] text-[18px] my-[20px]">Customize Event</h3>
                <form className="w-[400px] relative flex flex-col justify-start items-start">
                    <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                        <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="title">Event title</label>
                        <input className="bg-[#171919] outline-none text-white rounded-md w-full" type="text" name="title" /> 
                        <p className="text-[12px] text-[#8F8F8FCC]">Min 3, max 50 symbols</p>
                    </div> 
                    <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                        <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="price">Price</label>
                        <input className="bg-[#171919] outline-none text-white rounded-md w-full" type="text" name="price" /> 
                        <p className="text-[12px] text-[#8F8F8FCC]">Min 3, max 50 symbols</p>
                    </div> 
                    <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                        <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="description">Short Description</label>
                        <input className="bg-[#171919] outline-none text-white rounded-md w-full" type="text" name="description" /> 
                        <p className="text-[12px] text-[#8F8F8FCC]">Max 200 symbols</p>
                    </div>
                    <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                        <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="description">Attach Event Cover</label>
                        <input className="bg-[#171919] outline-none text-white rounded-md w-full" name="description" type="" /> 
                    </div>
                    <div className="relative w-full flex justify-end items-end gap-[8px] p-[10px]">
                        <div>
                            <button type="submit" className="bg-none outline-none w-[80px] px-[5px] border-[2px] border-[#0FC1D9] rounded-[8px] text-[16px] text-[#0FC1D9] ">Back</button>  
                        </div>
                        <div>
                            <button type="submit" className="bg-[#0FC1D9] outline-none w-[80px] px-[5px] border-[2px] border-[#0FC1D9] rounded-[8px] text-[16px] text-white ">Back</button>  
                        </div>
                    </div>
                </form> 
            </div>        
        </div>    
    </div>
  )
}

export default CreateEvent