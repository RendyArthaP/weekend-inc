import React, { useEffect } from 'react';
import LogoLG from '../images/lego/lego-navbar/logo-lego-lg.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    Aos.init({
      duration:500
    })
  }, [])
  
  return (
    <div 
      className="h-16 z-30 p-4 sticky top-0 bg-white md:px-12 lg:px-20 xl:px-28 2xl:px-36"
      data-aos="fade-down"  
    >
      <div className="flex flex-row">
        <div className="w-8 h-8">
          <img 
            src={LogoLG} 
            alt="logo-navbar"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col mx-3 -mt-0.5">
          <span className="font-workSans text-xs font-normal">Good Morning</span>
          <span className="font-workSans text-base font-bold">Fellas</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
