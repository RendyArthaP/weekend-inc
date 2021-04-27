import React, { useEffect } from 'react';
import ListHelpTips from './ListHelpTips';
import LegoFooter from '../images/lego/lego-footer/group-3@3x.png';
import Ornament from '../images/background/ornaments/path-3@3x.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const HelpTips = ({tipsHelpData}) => {
  useEffect(() => {
    Aos.init({
      duration:500
    })
  }, [])

  return (
    <div className="px-5 pt-10">
      <h1 
        className="font-workSans pb-6 font-black text-3xl text-white text-left md:text-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Help & Tips
      </h1>
      <div className="w-full">
        <div className="hidden absolute -mt-16 xl:flex xl:right-16 2xl:right-4">
          <img 
            src={Ornament}
            alt="ornament"
            className="w-40 h-44"
          />
        </div>
        <div 
          className="flex flex-col items-center lg:flex-row md:justify-center"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {tipsHelpData.map((tipsHelp) => (
            <ListHelpTips 
              tipsHelp = {tipsHelp} 
              key={tipsHelp.id} 
            />
          ))}
        </div>
      </div>
      <div 
        className="flex flex-col md:text-center pt-10"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1 className="text-white font-black font-workSans text-3xl mb-6">
          You're all set.
        </h1>
        <p className="text-white font-normal text-base font-workSans md:w-10/12 md:max-w-lg md:mx-auto">
          The wise man therefore always holds in these matters to this principle of selection.
        </p>
      </div>
      <div 
        className="-ml-5 mt-20 lg:-mt-24"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <img 
          src={LegoFooter}
          alt="lego-footer"
          className="w-64 h-80 object-cover"
        />
      </div>
    </div>
  )
}

export default HelpTips
