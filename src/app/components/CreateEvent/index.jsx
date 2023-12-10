import React from 'react'
import MainInfo from './mainInfo';
import Details from './details';
import { useState } from 'react';

const CreateEvent = () => {
    const [data, setData] = useState({
        title: "",
        price: "",
        description: "",
        location: "",
        date: "",
        tickets: 0,
        genre: "",
        walletAddr: "",

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const [activeTab, setActiveTab] = useState(0)

    const formElements = [
        <MainInfo data={data} handleChange={handleChange} />,
        <Details data={data} handleChange={handleChange} />
    ]



    return (
        <div className="p-[20px] md:p-[40px] ">
            <div className="w-full border-[2px] border-[#0FC1D9] rounded-md md:rounded-[50px] flex flex-col justify-center items-center">   
                <div className="relative w-full sm:w-[400px] flex justify-center items-center gap-[8px] px-[10px] py-[10px] md:py-[20px]">
                    <div className="w-1/2">
                        <h3 className="text-[12px] text-[#0FC1D9] leading-[16px] font-semibold">
                            Main Info
                        </h3>
                        <div className={activeTab === 0 ? `h-[7px] w-full rounded-[4px] bg-[#0FC1D9] border-[2px] border-[#0FC1D9] ` : `h-[7px] w-full rounded-[4px] border-[2px] border-[#0FC1D9]`}>
                        
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-[12px] text-[#0FC1D9] leading-[16px] font-semibold">
                            Description
                        </h3>
                        <div className={activeTab === formElements.length - 1 ? `h-[7px] w-full rounded-[4px] bg-[#0FC1D9] border-[2px] border-[#0FC1D9] ` : `h-[7px] w-full rounded-[4px] border-[2px] border-[#0FC1D9]`}>

                        </div>
                    </div>
                </div>
                
                {
                    formElements[activeTab]
                }
                
                <div className="relative w-full sm:w-[400px] flex justify-end items-center gap-[8px] py-[10px]">
                    <div>
                        <button type="submit" onClick={() => setActiveTab(prev => prev - 1)} className={`bg-none outline-none w-[80px] px-[5px] border-[2px] border-[#0FC1D9] rounded-[8px] text-[16px] text-[#0FC1D9]  ${activeTab === 0 ? "hidden" : "block"}`}>Back</button>  
                    </div>
                    <div>
                        <button type="submit" onClick={() => setActiveTab(prev => prev + 1)} className={`bg-[#0FC1D9] outline-none w-[80px] px-[5px] border-[2px] border-[#0FC1D9] rounded-[8px] text-[16px] text-white  ${activeTab === formElements.length - 1 ? "hidden" : "block"} `}>Next</button>  
                    </div>
                    <div>
                    {
                    activeTab === formElements.length - 1 ? <button className='bg-[#0FC1D9] outline-none w-[80px] px-[5px] border-[2px] border-[#0FC1D9] rounded-[8px] text-[16px] text-white ' onClick={() => console.log(data)}>Confirm</button> : null
                    }
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CreateEvent