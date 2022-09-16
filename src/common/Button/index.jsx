import React from 'react'

const Button = (props) => {
  const styleBtn = {
    background: 'linear-gradient(180deg, #FFF100 -9.65%, #FFF100 -9.64%, #E4A518 52.6%)'
}
  return (
    // 
    <>
        <button className=' hover:border-2 hover:border-[#E4A518]  hover:text-white hover:bg-transparent
         rounded-[36px] font-mont font-medium text-xs md:text-base md:w-56 md:h-14 lg:font-bold`
         text-white ' style={styleBtn}
         >{props.text}</button>
    </>
  )
}

export default Button