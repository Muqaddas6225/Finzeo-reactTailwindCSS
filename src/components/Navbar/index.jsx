import React , {useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import Logo from '../../assets/images/Logo.svg'

const Navbar = () => {

  const [nav , setNav] = useState(false)

  const handleClick = ()=> setNav(!nav)
  const handleClose = ()=> setNav(!nav)
 
  return (
    <div className=''>
      <div className='max-w-[1150px] flex justify-between items-center m-auto  pt-10 ' >
        <div className='md:w-[133px] md:h-[93px] w-[100px] h-[80px]'> 
          <img src={Logo} alt="logo"/>
        </div>
        <div>
          <ul className='hidden lg:flex space-x-6'>
            <li className='font-mono  text-[#3C3C3C] font-medium text-sm'>Products</li>
            <li className='font-mono  text-[#3C3C3C] font-medium text-sm'>Business Types</li>
            <li className='font-mono  text-[#3C3C3C] font-medium text-sm'>Developers</li>
            <li className='font-mono  text-[#3C3C3C] font-medium text-sm'>ISO Partnership</li>
            <li className='font-mono  text-[#3C3C3C] font-medium text-sm'>Blog</li>
            <li className='font-mono  text-[#3C3C3C] font-medium text-sm'>About Us</li>
            <li className='font-mono  text-[#3C3C3C] font-medium text-sm'>Contact Us</li>
          </ul>
        </div>
        <div className='hidden lg:flex'>
          <button className= "border-2 border-[#E4A518] rounded-[36px] text-[#E4A518] w-[200px] h-[55px]  hover:bg-[#E4A518] hover:border-none hover:text-white ">Get a Quote</button>
        </div>
        <div className='lg:hidden' onClick={handleClick}>
        {!nav? <Bars3Icon className='w-9 h-9'/>: <XMarkIcon className='w-9 h-9'/>}
            
           
        </div>   
      </div>
      <div className={!nav? 'hidden':'flex flex-col space-y-6 justify-between items-center m-auto  pt-10' }>
          <ul className='flex flex-col justify-center  space-y-6 w-full lg:hidden'>
            <li onClick={handleClose} className='font-mono  text-[#3C3C3C] font-medium text-sm text-center shadow-md p-1 pl-5 '>Products</li>
            <li onClick={handleClose} className='font-mono  text-[#3C3C3C] font-medium text-sm text-center shadow-md p-1  pl-5 '>Business Types</li>
            <li onClick={handleClose} className='font-mono  text-[#3C3C3C] font-medium text-sm text-center shadow-md p-1 pl-5  '>Developers</li>
            <li onClick={handleClose} className='font-mono  text-[#3C3C3C] font-medium text-sm text-center shadow-md p-1  pl-5 '>ISO Partnership</li>
            <li onClick={handleClose}className='font-mono  text-[#3C3C3C] font-medium text-sm text-center shadow-md p-1  pl-5 '>Blog</li>
            <li onClick={handleClose} className='font-mono  text-[#3C3C3C] font-medium text-sm text-center shadow-md p-1  pl-5 '>About Us</li>
            <li onClick={handleClose} className='font-mono  text-[#3C3C3C] font-medium text-sm text-center shadow-md p-1  pl-5 '>Contact Us</li>
          </ul>
          <div className='flex justify-center items-center lg:hidden'>
          <button  onClick={handleClose} className= "border-2 border-[#E4A518] rounded-[36px] bg-transparent text-[#E4A518] w-[200px] h-[60px]  hover:bg-[#E4A518] hover:border-none hover:text-white ">Get a Quote</button>
         
        </div>
      
      </div>
    </div>
  )
}

export default Navbar