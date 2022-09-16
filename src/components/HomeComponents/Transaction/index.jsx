import React from 'react'
import { transactionIcon } from '../../../assets/images'

import Heading from '../../../common/Heading'
import Button from '../../../common/Button'
import Tabs from '../../../common/Tabs'

const Transaction = () => {
  return (
    <div className='mt-[80px]'>
        <div className='max-w-[1150px] m-auto'>
            <div className='flex flex-col'>
                <div className='flex flex-col space-y-3 justify-start '>
                    <Heading img={transactionIcon} title="The Right Financial Partners" subtitle="Make All the Difference"/>
                </div>
                <div>
                    <Tabs/>
                </div>
                <div className=' flex flex-col justify-center items-center md:space-x-5 md:items-start  md:flex-row'>
                    <div className='mb-5'><Button text="Our Guide"/></div> 
                    <div><Button text="Get Started"/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Transaction