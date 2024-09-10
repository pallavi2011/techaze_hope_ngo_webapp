import React from 'react'

const CausesCard = ({card:{img, title, content, donation}, index}) => {
    let progressbarStyle = "flex justify-center items-center h-full"
    if(donation <= 5000){
        progressbarStyle += "bg-color-[#FF1414] w-[40%]"
    }
    else if (donation > 5000 && donation <= 10000){
        progressbarStyle += "bg-color-[#FB983D] w-[60%]"
    }
    else{
        progressbarStyle += "bg-color-[#0E9602] w-[95%]"
    }
  return (
    <div class="w-80 pb-5 bg-white rounded-xl transform transition-all duration-300 text-left shadow " key={index}>
  
    <img class="h-50 w-full object-cover" src={img}/>
    <div class="p-2 text-left">
    
        <h2 class="font-manuale font-semibold md:text-base mb-2 text-black">{title}</h2>
    
        <p class="font-mont text-sm font-normal text-gray">{content}...</p>
    </div>
    
    <span className='font-manuale font-bold text-black pl-3 pr-3'>$ {donation} <sub className='font-mont font-normal text-xs text-grey'> Donated till now</sub></span>
    <div className='bg-color-lightgrey h-4 rounded-full overflow-hidden ml-3 mr-3'>
            <div className={progressbarStyle}></div>
        </div>
  </div>
  )
}

export default CausesCard