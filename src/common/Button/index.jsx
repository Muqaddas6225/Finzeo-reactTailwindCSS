import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className=' hover:border-2 hover:border-[#E4A518] hover:bg-transparent hover:text-[#E4A518]
         rounded-[36px]  w-[200px] h-[55px] 
        bg-[#E4A518] text-white '>{props.text}</button>
    </>
  )
}

export default Button