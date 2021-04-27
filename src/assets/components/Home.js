import React, { useEffect } from 'react'
import BackgroundLG from '../images/background/bg-lg.png'
import Lego from '../images/lego/lego-lg.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration:500
    })
  }, [])

  return (
    <div className="flex justify-center bg-pink ">
      <div className="bg-cover h-screen relative">
        <img 
          src={BackgroundLG} 
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center absolute top-32 flex flex-col">
        <h1 
          className="font-workSans font-black text-white text-5xl lg:text-7xl"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          WEEKEND FROM HOME
        </h1>
        <span 
          className="font-workSans pt-5 font-semibold text-white italic text-base lg:text-2xl"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          Stay active with a little workout.
        </span>
      </div>
      <div 
        className="absolute mx-auto top-80 pt-5 flex flex-col items-center"
        data-aos="fade-down"
        data-aos-delay="900"
      >
        <div>
          <img 
            src={Lego}
            alt="lego"
            className="w-48 h-80"
          />
        </div>
        <div className="bg-white rounded-full cursor-pointer text-center py-3 -mt-28 w-full px-24 shadow-pinky transform hover:scale-125 hover:bg-pink hover:text-white transition duration-100">
          <span className="text-center font-workSans font-normal text-base">
            Let's go
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
