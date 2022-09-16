import React from 'react'

import Button from '../../../common/Button'
import Heading from '../../../common/Heading'
import { toolkit, toolkitFraud } from '../../../assets/images'

const Toolkit = () => {
  return (
    <div className='mt-[80px]'>
    <div className='max-w-[1150px] m-auto'>
        <div className=' grid m-auto lg:grid-cols-2 space-x-4'>
            <div className='flex flex-col'>
                <div className='flex flex-col space-y-3 justify-start '>
                    <Heading img={toolkit} title="All-In-One Business Building Tool Kit "
                     subtitle="FinZeo Technology makes it easy for Business and Consumers
                                to easily perform financial transactions"/>
                </div>
                <div className='flex flex-col text-justify space-y-5 mt-[2.25rem] md:text-start'>
                    <p className='font-mont'>
                        Every Developers Dream
                    </p>
                    <h5 className='font-mont'>Powerful and Easy-to-Use APIs</h5>
                    <p className='font-mont'>
                        We know for developers, one of the worse things to deal with is a bad undocumented
                         API. That’s why we are proud to say our API’s are built by Senior Developers for 
                         Developers because a good API makes it so much easier to complete your project; 
                         on budget, on time and with no headaches!
                    </p>
                </div>
                <div className=' flex flex-col md:space-x-5  md:flex-row mt-[2.25rem]'>
                    <div className='mb-5'><Button text="Our Features"/></div> 
                    <div><Button text="Our Services"/></div>
                </div>
            </div>
            <div className='flex items-end justify-center'>
                <div className='max-w-[510px] max-h-[574px] mt-10 flex justify-center'>
                    <img className='full-w my-5' src={toolkitFraud} alt="toolkit Fraud"/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Toolkit