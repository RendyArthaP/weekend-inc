import React from 'react'
import RightArrow from '../images/arrow/RightArrow.png'

const ListHelpTips = ({tipsHelp}) => {
  return (
    <div className="pb-6 md:px-2 z-20 cursor-pointer transform hover:-translate-y-6 transition duration-100">
      <div className="flex flex-col">
        <img 
          src={tipsHelp.image}
          alt="help-tips"
          className="w-80 h-44 object-cover"
        />
      </div>
      <div className="bg-black opacity-50 -mt-16">
        <div className="flex flex-row justify-between items-center py-2 px-4">
          <h1 
            className="text-white w-56 tracking-tight font-bold text-base font-workSans"
          >
            {tipsHelp.title}
          </h1>
          <img 
            src={RightArrow}
            alt="arrow"
            className="w-8 h-8 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default ListHelpTips
