import React from 'react'
import heart from '../assets/heart.png';
import donate from '../assets/donate.png';
import ngo from '../assets/ngo.png';
import welfare from '../assets/welfare.png';

const Subheader = () => {
    const data = [
        {
            icon: ngo,
            number: 563,
            text: "Project Completed"
        },
        {
            icon: heart,
            number: 425,
            text: "Trusted Partner"
        },
        {
            icon: donate,
            number: 978,
            text: "Money Donated"
        },
        {
            icon: welfare,
            number: 32,
            text: "Active Volunteer"
        }
    ]
  return (
    <div className='bg-color-beige relative w-full pt-[26rem] sm:p-[0rem] lg:pt-[9rem]'>
         <div className=' bg-color-white w-full h-[14rem] sm:h-[8rem] z-[-1] shrink-0'/>
        <div className='bg-color-green rounded-3xl flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center p-10 sm:p-10 gap-y-5 absolute z-90 sm:left-[50px] sm:p-5 sm:right-[50px] sm:bottom-[20px] sm:shrink-0 bottom-[20px] left-[50px] right-[50px]'>
            {data.map((dt, index)=>{
                return(
                    <div key={index} className='flex flex-col gap-x-4 items-center sm:text-nowrap'>
                        <img src={dt.icon} className='sm:w-[2.5rem] sm:h-[2.5rem] w-[4.5rem] h-[4.5rem] lg:w-[4.5rem] lg:h-[4.5rem]'/>
                        <span className='font-manuale text-color-yellow text-lg sm:text-md md:text-lg lg:text-xxl'>{dt.number}</span>
                        <span className='font-mont text-white text-sm sm:text-sm lg:text-md'>{dt.text}</span>
                    </div>
                )
            })}
        </div>
   
   
    </div>
    
  )
}

export default Subheader