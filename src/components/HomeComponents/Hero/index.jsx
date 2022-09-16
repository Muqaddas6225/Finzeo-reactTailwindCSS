import Button from '../../../common/Button'
import {Computer_Dashboard} from '../../../assets/images/index'
import React from 'react'

const Hero = () => {
  return (
    <div className='mt-[80px]'>
        <div  className='max-w-[1150px]  mx-auto  pt-10 '>
            <div className='flex flex-col space-y-5 items-center justify-center lg:max-w-[850px] m-auto'>
                <h2 className='font-mont'>
                    Digital Payment Technology
                    For The Modern Business
                </h2>
                <p className='font-mont'>
                    We make it easy for Businesses of all sizes to
                    process financial transactions in office, store oronline
                    using our website plugins, API’s or software. Processing payments 
                    has never been easier! In fact, over 97% of Businesses save on processing fees when they get FinZeo
                </p>
                <div className=' flex flex-col md:space-x-5  md:flex-row'>
                   <div className='mb-5'><Button text="Get Started"/></div> 
                    <div><Button text="Request Free Fee Audit"/></div>
                </div>
            </div>
            <div>
                <div className='max-w-[900px] min-h-[526px] flex justify-center items-center mx-auto' >
                    <img className='w-full' src={Computer_Dashboard}  alt="dashboard"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero