import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4 } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white m-auto pb-24'>
      <div className='md:max-w-[1390px] leading-[50px] flex flex-col max-w-[490px] m-auto justify-content-center items-center'>
        <h1 className='text-[#536E96] font-bold md:text-[24px] text-[20px]'>Trusted by over 25,000 teams around the world.</h1>
        <p className='text-[#536E96] md:text-[20px] text-[15px] text-center'>Leading companies use the same courses to help employees keep their skills fresh.</p>
        <div className='flex gap-[20px] py-[12px]'>
          <img className='max-w-[140px] h-[26px]' src={companyLogo1} alt="" />
          <img className='max-w-[140px] h-[26px]' src={companyLogo2} alt="" />
          <img className='max-w-[140px] h-[26px]' src={companyLogo3} alt="" />
          <img className='max-w-[140px] h-[26px]' src={companyLogo4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Companies