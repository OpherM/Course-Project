import React from 'react'
import FeedbackCard from './FeedbackCard';
import Slider from 'react-slick';


const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
          slidesToShow: 1,
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
    <div className='w-full bg-white py-24'>
      <div className='md:max-w-[1390px] max-w-[510px] m-auto'>
        <div className='flex flex-col justify-center'>
          <h1 className='md:leading-[72px] md:text-3xl text-3xl font-semibold'>Students <span className='text-[#20B486]'>Feedback</span></h1>
          <p className='text-lg text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>

          <div className=''>
            <Slider {...settings}>
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback