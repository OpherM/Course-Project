import { avatar } from '../assets'
import { quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='shadow-xl md:p-8 p-5 rounded-3xl my-8 mx-3'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <img src={avatar} alt="" />
          <div>
            <h1>Jenny Wilson</h1>
            <p>UI-UX Designer</p>
          </div>
        </div>
        <div>
          <img className='md:h-8 w-6' src={quotationMark} alt="" />
        </div>
      </div>
      <div className='py-8'>
        <h1 className='lg:text-lg sm:text-md text-sm'>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
        </h1>
      </div>
    </div>
  )
}

export default FeedbackCard