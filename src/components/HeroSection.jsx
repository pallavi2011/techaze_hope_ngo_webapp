import React from 'react'
import header from '../assets/header.png';

const HeroSection = () => {
  return (
    <div className='sm:flex-wrap flex justify-between items-center pt-20 pl-10 pr-10'>
        <div className='flex-1 flex-col w-full justify-center items-start'>
        <h1 className='font-manuale font-semibold text-7xl text-color-3'>Empower Hope,
            Transform Lives</h1>
            <p className='pr-20'>
            The essence of charity by conveying the idea of uplifting individuals and communities through the power of hope and positive change.
            </p>
        </div>
        <div className='relative flex justify-center items-center ml-[2rem] pr-24'>
            <div className='absolute rounded-full w-20 h-20 bg-color-4 top-[-40px] left-[-30px]'/>
            
            <img src={header} width={390} height={390} alt="heropicture"/>
            <div className='absolute rounded-2xl z-[-1] w-20 h-20 bg-color-2 bottom-[-20px] right-[70px]'/>
          
            
        </div>
            
    </div>
  )
}

export default HeroSection