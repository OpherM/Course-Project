import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'


const CategoryCard = ({ icons, title }) => {
  return (
    <div className='bg-white shadow-lg rounded-md p-2 flex justify-between items-center border border-tranparent hover:border-[#20B486] cursor-pointer category-container group/edit'>
      <div className='flex gap-4 px-2'>
        {icons}
        <p className='md:text-2xl text-md font-semibold'>{title}</p>
      </div>
      <div className='group-hover/edit:bg-[#20B486] rounded-lg p-3'>
        <BsArrowUpRight
          size={30}
          style={{ color: '#20B486' }}
          className='arrow-up'
        />
      </div>
    </div>
  )
}

export default CategoryCard