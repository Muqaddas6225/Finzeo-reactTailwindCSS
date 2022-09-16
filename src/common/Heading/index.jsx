import React from 'react'

const Heading = (props) => {
  return (
    <>
        <div className='max-w-[77px] min-h-[77px]'><img className='full-w ' src={props.img} alt="handshake"/></div>
        <h3 className='font-mont'>{props.title}</h3>
        <h5 className='font-mont'>{props.subtitle}</h5>
        <div className='w-[100px] border-2 border-[#E4A518] rounded-lg'></div>
    </>
  )
}

export default Heading