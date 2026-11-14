import React from 'react'
import { sections } from '../data/index'

const NavigationCircles = ({ activeSection, onNavigate }) => {
  return (
    <nav aria-label='Navegación rápida' className='h-[300px] w-[1px] bg-red-500 dark:bg-yellow-500 fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col justify-between items-center transition-colors duration-500'>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          title={label}
          aria-label={label}
          onClick={(e) => onNavigate(e, id)}
          className={`w-5 aspect-square border border-red-500 dark:border-yellow-500 rounded-full transition-colors duration-500 ${activeSection === id ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-300 hover:bg-red-300 dark:hover:bg-yellow-200'}`}
        ></a>
      ))}
    </nav>
  )
}

export default NavigationCircles
