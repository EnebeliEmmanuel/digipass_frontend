import React from 'react'

const MainInfo = (props) => {
    const { data, handleChange } = props;
  return (
    <div className="relative mx-auto py-[20px]">
        <h3 className="text-[#0FC1D9] text-[18px] my-[20px]">Customize Event</h3>
        <form className="w-full sm:w-[400px] relative flex flex-col justify-start items-start">
            <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="title">Event title</label>
                <input className="bg-[#171919] outline-none text-white rounded-md w-full" onChange={handleChange} value={data.title} type="text" name="title" /> 
                <p className="text-[12px] text-[#8F8F8FCC]">Min 3, max 50 symbols</p>
            </div> 
            <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                <label className="text-[14px] text-[#0FC1D9] leading-[16px] " for="price">Price</label>
                <input className="bg-[#171919] outline-none text-white rounded-md w-full" onChange={handleChange} value={data.price} type="text" name="price" /> 
                <p className="text-[12px] text-[#8F8F8FCC]">Min 3, max 50 symbols</p>
            </div> 
            <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                <label className="text-[14px] text-[#0FC1D9] leading-[16px] "for="description">Short Description</label>
                <input className="bg-[#171919] outline-none text-white rounded-md w-full" onChange={handleChange}  value={data.description}  type="text" name="description" /> 
                <p className="text-[12px] text-[#8F8F8FCC]">Max 200 symbols</p>
            </div>
            <div className="w-full my-[10px] flex flex-col justify-start items-start gap-[5px] ">
                <label className="text-[14px] text-[#0FC1D9] leading-[16px] "  for="file_image" accept="image/png, image/gif, image/webp, image/jpeg, image/jpg">Attach Event Cover</label>
                <input className="bg-[#171919] outline-none text-white rounded-md w-full" name="file_image" type="file" /> 
            </div>
        </form> 
    </div>
  )
}

export default MainInfo