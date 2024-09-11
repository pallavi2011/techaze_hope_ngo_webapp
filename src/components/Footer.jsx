import React from 'react'
import { footer } from '../data/webdata';
import logo from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
   
        <div className='relative bg-color-beige'>
            <div className='bg-color-green rounded-3xl flex-col py-10 px-10 md:flex md:flex-col md:gap-x-10 absolute top-[-80px] left-[50px] right-[50px] mb-40'>
                <div className='w-full flex flex-wrap sm:flex-wrap  gap-x-20 gap-y-5 mb-6'>
                    <img src={logo} className='w-20 h-20' alt="logo" />

                    {footer.map((dt, index) => {
                        let {title, subtitles} = dt;
                        return (
                                <div className='flex-col' key={index}>
                                <h5 className='font-manuale font-bold text-smm text-color-white'>{title}</h5>

                                <ul className='list-none space-y-1'>
                                    {subtitles.map((st, index) => {
                                        return (
                                            <li key={index}>
                                            <a href="#" className='font-mont font-normal text-xs text-color-white'>{st}</a>
                                        </li>
                                        )
                                    }) }
                                
                                </ul>
                            </div>
                        )
                    })}
                    
                    <div className='flex lg:flex-col lg:gap-y-3 flex-row mb-5 lg:grow  gap-x-5 px-10'>
                    <div className='flex gap-x-3'> 
                        
                        <div className='w-10 h-10 rounded-full bg-color-white m-0  cursor-pointer'>
                                <FaFacebookF className='m-3 cursor-pointer'/>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-color-white'>
                                <FaTwitter className='m-3'/>
                        </div>
                    </div>
                    <div className='flex gap-x-3'>
                        <div className='w-10 h-10 rounded-full bg-color-white'>
                                <AiFillInstagram className='m-3'/>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-color-white'>
                                <FaYoutube className='m-3'/>
                        </div>
                    
                    </div>
                    
                    </div>
                </div>
            <div className='text-center flex flex-col gap-y-4'>
                <div className='border-2 bg-color-white '/>
                <span className='font-poppins font-normal text-sm text-color-white'>© Copyright 2023-24, All Rights Reserved by Charity</span>
            </div>
        
                    
        </div>
        
       
        </div>
  )
}

export default Footer