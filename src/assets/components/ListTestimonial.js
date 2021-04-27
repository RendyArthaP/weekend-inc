import React from 'react'

const ListTestimonial = ({testimonial}) => {
  return (
    <div className="mx-4 py-4">
      <div className="bg-white w-64 h-36 p-4 transform hover:-translate-y-6 transition duration-100 cursor-pointer">
        <h1 className="font-workSans font-black text-3xl text-black">
          {testimonial.by}
        </h1>
        <span className="font-workSans font-normal text-xs text-black">
          {testimonial.testimony}
        </span>
      </div>
    </div>
  )
}

export default ListTestimonial
