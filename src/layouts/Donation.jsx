import React from 'react'
import { donationCard } from '../data/webdata'
import DonationCard from '../components/DonationCard'

const Donation = () => {
  return (
    <donation className='bg-color-white w-full p-10 flex flex-col pb-[10rem]'>
        <span className='font-manuale text-lg md:text-xl font-semibold text-color-dark text-center pb-6'>Making a diffrence for those who face a hardship</span>
        <div className='flex flex-col md:flex md:flex-row gap-y-3 md:gap-x-5'>
                {donationCard.map((card, index) =>{
                    return (
                        <DonationCard card={card} index={index}/>
                    )
                })}
        </div>
    </donation>
  )
}

export default Donation