import React, { useEffect } from 'react'
import LegoSide from '../images/lego/lego-side/group-4@3x.png'
import Oval from '../images/background/ornaments/oval@3x.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Definition = () => {
  useEffect(() => {
    Aos.init({
      duration:500
    })
  }, [])

  return (
    <div className="bg-pink pt-4 pb-20">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="bg-cover flex flex-row-reverse">
          <img 
            src={LegoSide}
            alt="lego-side"
            className="w-40 h-40 object-cover"
          />
          <div></div>
        </div>
        <div className="text-right w-64 mx-auto mt-10 md:max-w-2xl md:w-1/2 pt-4">
          <span className="font-workSans text-black text-base font-medium leading-6 tracking-wide md:text-xl">
            <span className="font-workSans text-blue text-base font-bold mr-1 md:text-xl">
              Definition;
            </span> 
            a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
          </span>
          <p className="text-white font-workSans font-semibold italic mt-5">
            - weekend team
          </p>
        </div>
        <div className="mx-8">
          <img 
            src={Oval}
            alt="oval"
            className="w-20 h-20 object-cover"
          />
        </div>
        <h1 className="font-workSans mx-5 -mt-5 z-index-10 text-white font-black text-4xl tracking-wider md:text-center md:mx-0">
          Testimonial
        </h1>
      </div>
    </div>
  )
}

export default Definition
