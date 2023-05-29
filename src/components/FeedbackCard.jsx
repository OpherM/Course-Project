import React from 'react'
import { avatar } from '../assets'
import { quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='shadow-xl p-8 rounded-3xl my-8 mx-2'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <img src={avatar} alt="" />
          <div>
            <h1>Jenny Wilson</h1>
            <p>UI-UX Designer</p>
          </div>
        </div>
        <div>
          <img className='h-8' src={quotationMark} alt="" />
        </div>
      </div>
      <div className='py-8'>
        <h1 className='text-lg'>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
        </h1>
      </div>
    </div>
  )
}

export default FeedbackCard