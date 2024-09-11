import { useState } from 'react'
import Navbar from './layouts/Navbar';
import HeroSection from './layouts/HeroSection';
import Subheader from './layouts/Subheader';
import UrgentCauses from './layouts/UrgentCauses';
import Donation from './layouts/Donation';
import Footer from './layouts/Footer';

function App() {
  

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Subheader/>
      <UrgentCauses/>
      <Donation/>
      <Footer/>
    </>
  )
}

export default App
