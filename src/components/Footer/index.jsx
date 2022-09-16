import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

import { logo, fb, linkedin } from '../../assets/images'

const Footer = () => {
  return (
    <>
        <div className='bg-gradient-to-b from-slate-200  min-[576px] mt-24 pt-32 pb-8 '>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 space-x-8 space-y-5 px-14'>
                <div className='space-y-6 footerLogo' >
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <label class="relative block">
                            <span class="sr-only">Email</span>
                            <input class=" placeholder:text-[#3C3C3C] block bg-[#EBEBEB] w-full  rounded-md py-2 pl-3 pr-3 shadow-sm
                            focus:outline-none focus:ring-[#3C3C3C] focus:ring-1 sm:text-sm" placeholder="Email" type="email" name="email"/>
                            <span class="absolute inset-y-1 right-1 flex items-center pr-3">
                                <ArrowLongRightIcon className="h-5 w-8 fill-[#3C3C3C]" viewBox="0 0 20 20"/>
                            </span>
                    </label>
                </div>
                <div className='footerCompany space-y-6'>
                    <h1 className='font-mono text-2xl font-semibold uppercase text-[#E4A518] '>Company</h1>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>
                <div className='Resources space-y-6'>
                    <h1 className='font-mono text-2xl font-semibold uppercase text-[#E4A518] '>Resources</h1>
                    <p>Customer Login</p>
                    <p>Blog</p>
                    <p>FAQ's</p>
                </div>
                <div className='OurPlateform space-y-6'>
                    <h1 className='font-mono text-2xl font-semibold uppercase text-[#E4A518] '>Our Plateform</h1>
                    <p>Finzeo Plateform</p>
                    <p>Finzeo API</p>
                    <p>Finzeo Pay</p>
                    <p>Finzeo Reports</p>
                    
                </div>
                <div>
                <div className='flex flex-col space-y-2 '>
                    <h6>Follow Us</h6>
                    <div className='flex space-x-3'>
                        <img src={fb} alt="fb"/>
                        <img src={linkedin} alt="linkedin"/>    
                    </div>
                </div>
            </div>
            </div>
            <div className='rounded-md border-2 border-[#3C3C3C] w-full my-5'></div>
            <div className='px-14'>
                 <p className='uppercase'>All Rights Reserved</p>
            </div>  
        </div>
        
    </>
    
    
  )
}

export default Footer