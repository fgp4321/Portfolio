import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-gray-900'>
      <div className='flex items-center sm:gap-x-4 gap-x-2'>
        <a href="#" className='md:text-2xl sm:text-xl text-lg text-yellow-500'>Francisco González</a>
      </div>
    </div>
  )
}

export default Navbar
