import { useState } from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Subheader from './components/Subheader';
import UrgentCauses from './components/UrgentCauses';
import Donation from './components/Donation';
import Footer from './components/Footer';

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
