import React from 'react'

const DonationCard = ({card:{img, title, content}, index}) => {
  return (
    <div className='flex flex-col gap-y-2 p-3 w-50 justify-center items-center border-color-light hover:border-color-green border-4 rounded-2xl'>
        <img src={img} className='w-20 h-20'/>
        <span className='font-manuale font-semibold text-color-black text-base'>{title}</span>
        <p className='font-mont font-normal text-sm text-color-grey text-center'>{content}</p>
        <button className='rounded-xl bg-color-light py-5 px-7 font-mont text-sm text-color-dark font-medium hover:bg-color-yellow'>Donate Now</button>

    </div>
  )
}

export default DonationCard