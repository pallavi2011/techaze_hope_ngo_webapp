import React from 'react';
import { useState } from 'react'
import logo from '../assets/logo.png';
import Vector from '../assets/Vector.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

        const isNavOpen = () => {
            setNav(!nav);
        };
  return (
    <header className='w-full top-0 left-0 right-0 relative z-[88]'>
        <nav className='py-4 lg:px-14 px-4 '>
            <div className='flex items-center justify-between gap-8'>
                <img src={logo} className='w-10 h-10 cursor-pointer' alt="logo" />

                {/* menu for large and medium devices */}
                <ul className='hidden sm:flex'>
                <a className='no-underline' href="#home">
                    <li className='px-3 text-base text-dark font-mont'>Home</li>
                </a>
                <a className='no-underline' href="#about-us">
                <li className='px-3 text-base text-dark font-mont'>About Us</li>
                </a>
                <a className='no-underline' href="#contact-us">
                <li className='px-3 text-base text-dark font-mont'>Contact Us</li>
                </a>
                <a className='no-underline' href="#blogs">
                <li className='px-3 text-base text-dark font-mont'>Blogs</li>
                </a>
                
                </ul>
                {/* btn for large devices */}
                <div className='hidden sm:flex items-center'>
                        <button className='bg-color-green text-color-white text-sm font-mont font-medium rounded-2xl py-2.5 px-5'>Donate</button>
                </div>

                {/* {menu btn for only mobile devices} */}
                <div className='sm:hidden'>
                <button className='focus:outline-none' onClick={isNavOpen}>
                    {nav ? (<img src={Vector} className='w-[31px] h-[31px]' alt="menu"/>):(<img src={Vector} className='w-[31px] h-[31px]' alt="menu"/>)}
                </button>
            </div>
            </div>

            {/* nav items for mobile devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-color-green ${nav ? "block fixed top-0 right-0 left-0 text-center": "hidden"} sm:hidden`}>
                <ul>
                <a className='no-underline' href="#home">
                    <li className='px-3 text-md font-mont md:text-lg'>Home</li>
                </a>
                <a className='no-underline' href="#about-us">
                <li className='px-3 text-md font-mont md:text-lg'>About Us</li>
                </a>
                <a className='no-underline' href="#contact-us">
                <li className='px-3 text-md font-mont md:text-lg'>Contact Us</li>
                </a>
                <a className='no-underline' href="#blogs">
                <li className='px-3 text-md font-mont md:text-lg'>Blogs</li>
                </a>
                
                </ul>
            </div>
            
        </nav>
           
            

        
           
          
        <div>
            
        </div>

    </header>
  )
}

export default Navbar