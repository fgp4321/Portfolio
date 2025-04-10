import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <Navbar />
      <div className='flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0'>
        <h1 className='flex flex-col xl:space-y-8 md:space-y-4'></h1>
      </div>
    </div>
  )
}

export default Hero
