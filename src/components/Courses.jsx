import React from 'react';
import Card from './Card';
import Slider from "react-slick";
import { courses } from '../data/Courses';

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  return (
    <div className='w-full bg-[#E9F8F3B2] py-28'>
      <div className='md:max-w-[1390px] max-w-[490px] m-auto'>
        <h1 className='text-3xl py-3 font-bold'>Most popular <span className='text-[#20B486]'>Courses</span></h1>
        <p className='py-2 text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
        <Slider {...settings}>
          {courses.map((course, i) =>
            <div key={i}>
              <Card course={course} />
            </div>)}

        </Slider>
      </div>
    </div>
  )
}

export default Courses