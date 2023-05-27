import React from 'react';
import { StarRating } from './StarRating';
import { blogImg1 } from '../assets';

const Card = ({course}) => {
  return (
    <div className='bg-white drop-shadow-md rounded-2xl overflow-hidden mr-2 my-4 ml-1'>
        <img src={course.linkImg} 
            className='h-40 w-full object-cover'
        />
        <div className='p-5 border border-b'>
            <h1 className='py-2 truncate'>{course.title}</h1>
            <StarRating rating={course.rating}/>
        </div>
        <h3 className='p-5 text-xl'>{course.price}</h3>

        <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            HTML
        </div>
    </div>
  )
}

export default Card