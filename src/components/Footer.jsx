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
                <div className='border'>
                    <h2 className='text-xl font-semibold'>Explore</h2>
                    <div className='py-7'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Course</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='border'>
                    <h2 className='text-xl font-semibold'>Explore</h2>
                    <div className='py-7'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Course</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='border'>
                    <h1 className='md:leading-[72px] md:text-3xl text-3xl font-semibold text-[#20B486]'>Practice</h1>
                    <h2>Contact Us</h2>
                    <p>Call : +123 400 123</p>
                    <p>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
                    <p>Email: example@mail.com</p>
                    <div className='flex gap-2 border'>
                        <div><TiSocialFacebook /></div>
                        <div><BsDribbble /></div>
                        <div><TfiLinkedin /></div>
                        <div><BsInstagram /></div>
                        <div><BsBehance /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer