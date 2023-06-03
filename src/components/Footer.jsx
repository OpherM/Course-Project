import React from 'react'
import { TiSocialFacebook } from 'react-icons/ti'
import { BsBehance, BsDribbble, BsInstagram } from 'react-icons/bs'
import { TfiLinkedin } from 'react-icons/tfi'


const Footer = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1390px] max-w-[600px] m-auto grid md:grid-cols-4 gap-10'>
                <div className=''>
                    <h1 className='md:text-4xl text-4xl font-semibold text-[#20B486]'>Practice</h1>
                    <h2 className='text-2xl font-semibold pt-6'>Contact Us</h2>
                    <p className='text-[#6D737A] py-3'>Call : +123 400 123</p>
                    <p className='text-[#6D737A] py-3'>Praesent nulla massa, hendrerit <br /> vestibulum gravida in, feugiat auctor felis.</p>
                    <p>Email: example@mail.com</p>
                    <div className='flex gap-3 py-6'>
                        <div className='bg-[#E9F8F3] p-3 rounded-xl cursor-pointer'>
                            <TiSocialFacebook
                                style={{ color: '#4DC39E' }}
                                size={25}
                            />
                        </div>
                        <div className='bg-[#E9F8F3] p-3 rounded-xl cursor-pointer'>
                            <BsDribbble
                                style={{ color: '#4DC39E' }}
                                size={25}
                            />
                        </div>
                        <div className='p-3 rounded-xl bg-[#E9F8F3] cursor-pointer'>
                            <TfiLinkedin
                                style={{ color: '#4DC39E' }}
                                size={25}
                            />
                        </div>
                        <div className='bg-[#E9F8F3] p-3 rounded-xl cursor-pointer'>
                            <BsInstagram
                                style={{ color: '#4DC39E' }}
                                size={25}
                            />
                        </div>
                        <div className='bg-[#E9F8F3] p-3 rounded-xl cursor-pointer'>
                            <BsBehance
                                style={{ color: '#4DC39E' }}
                                size={25}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:mx-auto'>
                    <h2 className='text-2xl font-semibold'>Explore</h2>
                    <div className='py-6 flex flex-col gap-5'>
                        <p className='text-[#6D737A]'>Home</p>
                        <p className='text-[#6D737A]'>About</p>
                        <p className='text-[#6D737A]'>Course</p>
                        <p className='text-[#6D737A]'>Blog</p>
                        <p className='text-[#6D737A]'>Contact</p>
                    </div>
                </div>
                <div className='flex flex-col md:m-auto'>
                    <h2 className='text-2xl font-semibold'>Category</h2>
                    <div className='py-6 flex flex-col gap-5'>
                        <p className='text-[#6D737A]'>Design</p>
                        <p className='text-[#6D737A]'>Development</p>
                        <p className='text-[#6D737A]'>Marketing</p>
                        <p className='text-[#6D737A]'>Business</p>
                        <p className='text-[#6D737A]'>Lifestyle</p>
                        <p className='text-[#6D737A]'>Photography</p>
                        <p className='text-[#6D737A]'>Music</p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-2xl font-semibold'>Subscribe</h2>
                    <div className='py-6 flex flex-col gap-5'>
                        <p className='text-[#6D737A]'>Lorem Ipsum has been them an industry printer took a galley make book.</p>
                    </div>
                    <input
                        type="email"
                        placeholder='Email here'
                        style={{ backgroundColor: '#F2F3F4' }}
                        className='p-3 rounded-md w-full focus:outline-none'
                    />
                    <button className='bg-[#20B486] mt-5 px-8 py-3.5 rounded-md text-white font-bold'>Subscribe Now</button>
                </div>
            </div>
        </div>
    )
}

export default Footer