import React from 'react'

import Hero from '../../components/HomeComponents/Hero'
import Partners from '../../components/HomeComponents/Partners'
import ProcessingPlateform from '../../components/HomeComponents/Processing'
import Transaction from '../../components/HomeComponents/Transaction'
import Toolkit from '../../components/HomeComponents/Toolkit'

const Home = () => {
  return (
     <>
      <Hero/>
      <Partners/>
      <ProcessingPlateform/>
      <Transaction/>
      <Toolkit/>
     </>
        
   
  )
}

export default Home