import React from 'react'

import Heading from '../../../common/Heading'
import Button from '../../../common/Button'
import { handshake , partnerCircle} from '../../../assets/images'


const Partners = () => {
  return (
    <div className='mt-[80px]'>
        <div className='max-w-[1150px] m-auto'>
            <div className=' grid m-auto lg:grid-cols-2 space-x-4'>
                <div className='flex flex-col'>
                    <div className='flex flex-col space-y-3 justify-start '>
                        <Heading img={handshake} title="The Right Financial Partners" subtitle="Make All the Difference"/>
                    </div>
                    <div className='flex flex-col text-justify space-y-5 mt-[2.25rem] md:text-start'>
                        <p className='font-mont'>
                            At FinZeo, we understand that having access to the right banks and financial institutions
                            can transform your business and increase profitability dramatically. That's why we've worked
                            hard to create an "insiders only" banking network that connects our customers with the right
                            banks to help us meet their needs.
                        </p>
                        <p className='font-mont'>
                            Thanks to those relationships, we're able to offer flexible payment processing services
                             with no reserve requirements, no escrow requirements, and low transaction fees, even for
                             high-risk merchant accounts. Let us handle the behind the scenes work to connect you to
                             the right banks so you can keep your attention on growing your business.

                        </p>
                    </div>
                    <div className=' flex flex-col md:space-x-5  md:flex-row mt-[2.25rem]'>
                        <div className='mb-5'><Button text="Our Features"/></div> 
                        <div><Button text="Our Services"/></div>
                    </div>
                </div>
                <div>
                    <div className='max-w-[744px] max-h-[771px] my-auto flex justify-end'>
                        <img className='full-w my-5' src={partnerCircle} alt="partnerCircle"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners