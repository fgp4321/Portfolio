import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { sections } from '../data/index'

const Navbar = ({ activeSection, onNavigate }) => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <header className='w-full md:h-12 h-20 flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-2 xl:px-36 lg:px-12 md:px-6 px-3 fixed top-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-500'>
      <div className='flex items-center sm:gap-x-4 gap-x-2'>
        <a href="#home" className='lg:text-2xl sm:text-xl text-lg' onClick={(e) => onNavigate(e, 'home')}>Francisco González Poveda</a>
        <button
          type='button'
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          className='sm:ml-4 ml-2 cursor-pointer grid place-items-center'
        >
          <i className={`${darkMode ? 'bx bx-sun' : 'bx bx-moon'} md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200`}></i>
        </button>
      </div>
      <nav aria-label='Secciones' className='flex lg:gap-x-10 md:gap-x-6 sm:gap-x-6 gap-x-3'>
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? 'true' : undefined}
              onClick={(e) => onNavigate(e, id)}
              className={`group lg:text-lg sm:text-base text-xs font-light tracking-wide relative ${isActive ? 'text-red-500 dark:text-yellow-500' : 'text-gray-600 dark:text-white'}`}
            >
              {label}
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] transform group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 ${isActive ? 'bg-red-500 dark:bg-yellow-500 scale-x-100' : 'bg-gray-600 dark:bg-white scale-x-0'}`}></span>
            </a>
          )
        })}
      </nav>
    </header>
  )
}

export default Navbar
