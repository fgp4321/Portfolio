import React from 'react'
import { skillGroups } from '../data/index'

const Services = () => {
  return (
    <section id='skills' className='w-full scroll-mt-12 bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl w-full mx-auto'>
        <header className='text-center'>
          <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 transition-colors duration-500'>
            Habilidades y <span className='text-red-500 dark:text-yellow-500 transition-colors duration-500'>Competencias</span>
          </h2>
        </header>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillGroups.map((group) => (
            <div key={group.title} className='p-6 bg-gray-200 dark:bg-gray-800 rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 transition-colors duration-500'>
              <i className={`${group.icon} text-4xl text-gray-900 dark:text-white transition-colors duration-500`}></i>
              <h3 className='text-2xl font-bold mt-3 text-red-500 dark:text-yellow-500 transition-colors duration-500'>{group.title}</h3>
              <p className='mt-2 text-base font-light text-gray-700 dark:text-gray-300 transition-colors duration-500'>{group.summary}</p>
              <ul className='mt-5 flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <li key={item} className='px-2.5 py-0.5 text-sm font-medium rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 ring-1 ring-gray-400/30 transition-colors duration-500'>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
