import React, { useState, useEffect } from 'react';
import ListTestimonial from '../ListTestimonial';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css';
import HelpTips from '../HelpTips';
import Footer from '../Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimonial = ({testimoniData, tipsHelpData}) => {
  useEffect(() => {
    Aos.init({
      duration:500
    })
  }, [])

  const [povData] = useState({
    title: "POV",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  })

  const [resourceData] = useState({
    title: "Resource",
    description: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"
  })

  var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2.5,
      slidesToScroll: 2.5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
            initialSlide: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.06,
            slidesToScroll: 2.05,
            initialSlide: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
          }
        }
      ]
    };

  return (
    <div className="bg-black">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Slider 
          {...settings} 
          className="-mt-16 pl-1.5 mb-10 h-auto overflow-hidden w-full md:max-w-3xl md:px-14 md:mx-auto lg:max-w-4xl lg:px-20"
        >
          {testimoniData.map((testimonial) => (
            <ListTestimonial 
              testimonial = {testimonial} 
              key={testimonial.id}
            />
          ))}
        </Slider>
      </div>
      <div 
        className="px-5 p-8 text-left md:text-center" 
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1 className="font-workSans font-black text-3xl text-white mb-6">
          {povData.title}
        </h1>
        <p className="font-workSans font-normal text-base text-white md:w-9/12 md:max-w-lg md:mx-auto">
          {povData.description}
        </p>
      </div>
      <div 
        className="px-5 py-8 text-left md:text-center"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h1 className="font-workSans font-black text-3xl text-white mb-6">
          {resourceData.title}
        </h1>
        <p className="font-workSans font-normal text-base text-white md:w-9/12 md:max-w-lg md:mx-auto">
          {resourceData.description}
        </p>
      </div>
      <div>
        <HelpTips tipsHelpData = {tipsHelpData}/>
      </div>
      <Footer />
    </div>
  )
}

export default Testimonial
