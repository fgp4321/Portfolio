import React from 'react'
import { hero, socialIcons } from '../data/index'

const Hero = ({ onNavigate }) => {
  return (
    <section id='home' className='w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8 md:pt-24 pt-28 pb-16'>
      <div className='max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-12 items-center'>

        <div className='lg:col-span-3'>
          <p className='md:text-base text-sm font-bold tracking-widest uppercase'>{hero.eyebrow}</p>
          <h1 className='mt-4 xl:text-7xl md:text-6xl text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-colors duration-500'>
            {hero.firstName}{' '}
            <span className='block text-red-500 dark:text-yellow-500 transition-colors duration-500'>{hero.lastName}</span>
          </h1>
          <p className='mt-6 md:text-2xl text-lg font-light tracking-wide text-gray-900 dark:text-gray-200 transition-colors duration-500'>{hero.lead}</p>
          {hero.about.map((paragraph, index) => (
            <p key={index} className='mt-4 md:text-lg text-base font-light text-gray-600 dark:text-gray-400 transition-colors duration-500'>{paragraph}</p>
          ))}

          <div className='mt-10 flex flex-wrap items-center gap-x-6 gap-y-4'>
            <a
              href='#projects'
              onClick={(e) => onNavigate(e, 'projects')}
              className='md:w-[260px] w-[220px] bg-gray-900 dark:bg-gray-200 py-2 px-4 md:text-xl text-base text-white dark:text-gray-900 tracking-widest rounded-r-4xl flex justify-between items-center hover:bg-red-500 dark:hover:bg-yellow-500 transition-colors duration-500'
            >
              Ver proyectos <i className='bx bx-right-arrow-alt text-2xl'></i>
            </a>
            <a
              href='/CV-Francisco-Gonzalez.pdf'
              download
              className='inline-flex items-center gap-2 py-2 px-4 md:text-xl text-base tracking-widest border border-red-500 dark:border-yellow-500 hover:bg-red-500 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-gray-900 transition-colors duration-500'
            >
              Descargar CV <i className='bx bx-download text-xl'></i>
            </a>
            <div className='flex gap-x-5'>
              {socialIcons.map((social) => (
                <a
                  href={social.url}
                  key={social.label}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='text-3xl text-red-500 dark:text-yellow-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-500'
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <aside className='lg:col-span-2 bg-gray-200 dark:bg-gray-800 rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 p-6 transition-colors duration-500'>
          <dl className='divide-y divide-gray-400/30'>
            {hero.facts.map((fact) => (
              <div key={fact.label} className='py-4 first:pt-0 last:pb-0'>
                <dt className='text-xs font-bold tracking-widest uppercase'>{fact.label}</dt>
                <dd className='mt-1 md:text-xl text-lg font-bold text-gray-900 dark:text-white transition-colors duration-500'>{fact.value}</dd>
                {fact.detail && (
                  <dd className='text-sm font-light text-gray-600 dark:text-gray-400 transition-colors duration-500'>{fact.detail}</dd>
                )}
              </div>
            ))}
          </dl>
        </aside>

      </div>
    </section>
  )
}

export default Hero
