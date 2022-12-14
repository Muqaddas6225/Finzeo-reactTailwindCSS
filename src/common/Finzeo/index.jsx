import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const Finzeo = (props) => {
  return (
    <div className='flex flex-col justify-center items-center text-justify 
    md:justify-start md:text-start md:items-start space-y-4 mt-11'>
        <div><img src={props.img} alt="finzeo"/></div>
        <h6 className='font-mont'>{props.title}</h6>
        <p className='font-mont'>{props.text}</p>
        <div className='p-auto'>
        <a href='/' className ='flex font-mont font-semibold text-md  text-[#01A0E4] gap-[10px] uppercase'>
            Learn More 
            <span className='w-[26px]'><ArrowLongRightIcon/></span>
        </a>
        </div>
       
    </div>
  )
}

export default Finzeo