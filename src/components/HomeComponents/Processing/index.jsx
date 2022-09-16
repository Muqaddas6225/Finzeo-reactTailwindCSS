import React from 'react'

import Heading from '../../../common/Heading'
import Button from '../../../common/Button'
import Finzeo from '../../../common/Finzeo'

import {Processing, finPay, finReport, finApi, finplateform} from '../../../assets/images/index'

const ProcessingPlateform = () => {
  return ( 
    <div className='mt-[100px]'>
        <div className='max-w-[1150px] m-auto'>
            <div className='flex flex-col space-y-5'>
                <div className='flex flex-col'>
                   <div className='flex flex-col space-y-3 justify-center items-center text-center'>
                        <Heading img={Processing} title="The Right Financial Partners" 
                          subtitle="Make All the Difference"/>
                    </div>
                    <div className='flex flex-col text-justify space-y-5 mt-[2.25rem] md:text-center'>
                        <p className='font-mont'>
                            FinZeo’s payment processing platform is a technology stack built for big 
                            and small businesses to scale without headache. No matter your business type
                            , online, storefront or both our payment platforms, website plugins, API’s, 
                            payment gateway’s, custom built processing solutions and everything in between 
                            is built to your success! You can start accepting payments or sending payouts
                            online or in person in 15 minutes.
                        </p>
                        <p className='font-mont'>
                            We can even help businesses send money in real-time using our Instant Funding 
                            Technology, issue virtual and physical debit cards, get business financing, send
                             invoices, help with digital marketing, via text, reward cards and more.
                        </p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 mt-11 gap-[50px] text-start'>
                  <Finzeo 
                    img={finplateform}
                    title= "FinZeo Platform"
                    text ="Use our standalone payment platform to handle all of your processing
                            needs for high-risk merchant accounts. Our streamlined merchant gateway makes
                            collecting payments faster and easier than ever when it comes 
                            to eCheck payment processing, ACH payment processing, cash processing,
                            and credit card payment processing."
                  />
                  <Finzeo 
                    img={finApi}
                    title= "FinZeo API"
                    text ="Not ready to implement an all-in-one merchant gateway solution or 
                            need to add payment processing features to support your high-risk business?
                            Our robust API allows your developers to integrate a specialized payments 
                            gateway into your existing platform that is catered to the specific needs of your business."
                  />

                  <Finzeo
                    img={finPay}
                    title= "FinPAY"
                    text ="Need a fast, easy-to-implement solution that allows your website to start taking online
                            payments today? Our revolutionary Tpay technology installs on your site in seven minutes or 
                            less to facilitate eCheck payment processing, ACH payment processing, debit card payment 
                            processing, and online credit card payment processing for your high-risk merchant account."
                  />
                  <Finzeo
                    img={finReport}
                    title="Fin Reports"
                    text="Every one of our payment processing solutions gives you access to real-time data
                     about your portfolio to track performance and cashflow. Our clear and transparent 
                     reporting allows you to monitor your transactions at every point in the payment process."
                  />

                </div>
                <div className=' flex flex-col justify-center items-center md:space-x-5 md:items-start  md:flex-row'>
                    <div className='mb-5'><Button text="Our Features"/></div> 
                    <div><Button text="Our Services"/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProcessingPlateform 