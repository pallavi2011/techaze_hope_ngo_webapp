import React from 'react'
import { causesCard } from '../data/webdata'
import CausesCard from './CausesCard'

const UrgentCauses = () => {
  return (
    <div className='p-10 text-center mb-[3rem]'> 
        <div className='flex flex-col gap-y-3 pb-8'>
                <span className='font-manuale text-lg lg:text-xl text-color-black text-nowrap font-semibold md:font-medium'>Urgent Causes</span>
                <span className='font-mont text-md text-color-black text-wrap font-medium'>Supporting urgent causes, changing lives.</span>

        </div>

        <div className='flex flex-col gap-y-4 md:flex-row gap-x-3 justify-center items-center md:gap-x-8'>
            {causesCard.map((card, index) => {
                return (
                    <CausesCard card={card} index={index}/>
                )
            })}
        </div>
    </div>
  )
}

export default UrgentCauses