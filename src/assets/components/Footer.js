import React from 'react'

const Footer = () => {
  const days = new Date();
  const years = days.getFullYear()

  return (
    <div className="bg-blue flex flex-row justify-between items-center h-14 p-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36">
      <div className="flex flex-row">
        <h1 className="text-white font-bold font-workSans text-xs">
          wknd@
        </h1>
        <span className="text-white font-medium font-workSans text-xs">
          {years}
        </span>
      </div>
      <div className="rounded-full border-white border py-1 px-2">
        <p className="font-light text-xs font-workSans text-white">
          alpha version 0.1
        </p>
      </div>
    </div>
  )
}

export default Footer
