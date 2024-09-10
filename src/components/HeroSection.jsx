import React from 'react'
import header from '../assets/header.png';

const HeroSection = () => {
  return (
    <div className='flex flex-col-reverse  justify-center items-center md:flex md:flex-row md:justify-between md:items-center md:p-10 p-10 mb-[3rem] z-99'>
        <div className='flex p-3 text-center  flex-col md:flex md:flex-1 md:justify-center md:items-start md:text-left md:pr-20 md:pt-10'>
        <h1 className='font-manuale font-semibold text-lg text-color-dark md:text-xxl pb-3'>Empower Hope,
            Transform Lives</h1>
            <p className='text-md'>
            The essence of charity by conveying the idea of uplifting individuals and communities through the power of hope and positive change.
            </p>
        </div>
        <div className='flex-shrink-0 relative flex justify-center items-center mr-5'>
            <div className='absolute rounded-full w-20 h-20 bg-color-yellow top-[-40px] left-[-30px]'/>
            <div className='w-96 h-96'>
                 <img src={header} className='shrink-0 object-cover' alt="heropicture"/>
            </div>
           
            <div className='absolute rounded-2xl z-[-1] w-20 h-20 bg-color-green bottom-[40px] right-[-20px]'/>
          
            
        </div>
            
    </div>
  )
}

export default HeroSection