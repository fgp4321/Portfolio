import React from 'react'
import Navbar from './Navbar'
import NavigationCircles from './NavigationCircles'
import { resumeData } from '../data/index'

// Helper para asignar iconos al contacto
const getIconForLabel = (label) => {
  switch (label.toLowerCase()) {
    case 'email':
      return 'bx bx-envelope'
    case 'teléfono':
      return 'bx bx-phone'
    case 'ubicación':
      return 'bx bx-map-alt'
    case 'github':
      return 'bx bxl-github'
    case 'linkedin':
      return 'bx bxl-linkedin-square'
    default:
      return 'bx bx-info-circle'
  }
}

const Resume = () => {
  return (
    // CAMBIO: Añadida transición de color al contenedor principal
    <div id='resume' className='w-full min-h-screen flex flex-col items-center isolate relative z-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500'>
      <Navbar />

      <main className='max-w-6xl w-full mx-auto space-y-16'>
        {/* --- Cabecera y Perfil --- */}
        <header className='text-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight transition-colors duration-500'>
            Mi <span className='text-red-500 dark:text-yellow-500 transition-colors duration-500'>Trayectoria</span> Profesional
          </h1>
          <p className='mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 transition-colors duration-500'>
            {resumeData.profile}
          </p>
        </header>

        {/* --- Contenido Principal (Layout de 2 columnas) --- */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10'>
          
          {/* --- Columna Izquierda: Experiencia y Formación --- */}
          <div className='lg:col-span-2 space-y-12'>
            
            {/* Sección de Experiencia */}
            <section>
              <h2 className='text-3xl font-bold mb-8 border-l-4 border-red-500 dark:border-yellow-500 pl-4 transition-colors duration-500'>Experiencia</h2>
              <div className='relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 transition-colors duration-500'>
                {resumeData.experience.map((job, index) => (
                  <div key={index} className='mb-10 ml-8'>
                    <span className='absolute flex items-center justify-center w-6 h-6 bg-red-500 rounded-full -left-3 ring-8 ring-white dark:ring-gray-800 dark:bg-yellow-500 transition-colors duration-500'>
                      <i className='bx bx-briefcase-alt-2 text-white dark:text-gray-900 transition-colors duration-500'></i>
                    </span>
                    <h3 className='flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-500'>
                      {job.role}
                      <span className='text-red-500 dark:text-yellow-500 text-sm font-medium ml-3 px-2.5 py-0.5 rounded-full border border-red-500 dark:border-yellow-500 transition-colors duration-500'>{job.period}</span>
                    </h3>
                    <p className='block mb-2 text-base font-normal italic text-gray-500 dark:text-gray-400 transition-colors duration-500'>{job.company}</p>
                    <p className='text-base font-normal text-gray-600 dark:text-gray-300 transition-colors duration-500'>{job.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sección de Formación */}
            <section>
              <h2 className='text-3xl font-bold mb-8 border-l-4 border-red-500 dark:border-yellow-500 pl-4 transition-colors duration-500'>Formación Académica</h2>
              <ul className='space-y-4'>
                {resumeData.education.map((edu, index) => (
                   <li key={index} className='flex items-start'>
                    <span className='text-red-500 dark:text-yellow-500 mr-3 mt-1 transition-colors duration-500'><i className='bx bxs-graduation'></i></span>
                    <span className='text-gray-700 dark:text-gray-300 transition-colors duration-500'>{edu}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* --- Columna Derecha: Contacto y Certificaciones --- */}
          <aside className='space-y-12'>
            
            {/* Sección de Contacto */}
            <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-500'>
              <h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-500'>Contacto</h2>
              <ul className='space-y-4'>
                {resumeData.contact.map((item, index) => (
                  <li key={index} className='flex items-center'>
                    <i className={`${getIconForLabel(item.label)} text-2xl text-red-500 dark:text-yellow-500 mr-4 transition-colors duration-500`}></i>
                    <div>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className='text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-yellow-500 transition-colors duration-300'>{item.value}</a>
                      ) : (
                        <span className='text-gray-700 dark:text-gray-300 transition-colors duration-500'>{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Sección de Certificaciones */}
            <section>
              <h2 className='text-2xl font-bold mb-6 border-l-4 border-red-500 dark:border-yellow-500 pl-4 transition-colors duration-500'>Certificaciones</h2>
               <ul className='space-y-3'>
                {resumeData.certifications.map((cert, index) => (
                   <li key={index} className='flex items-start'>
                    <span className='text-red-500 dark:text-yellow-500 mr-3 mt-1 transition-colors duration-500'><i className='bx bx-check-shield'></i></span>
                    <span className='text-gray-700 dark:text-gray-300 transition-colors duration-500'>{cert}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
        
        {/* --- NUEVO: Botón de Descarga --- */}
        <div className='flex justify-center mt-12'>
          <a 
            href="/CV-Francisco-Gonzalez.pdf" 
            download 
            className="group inline-flex items-center gap-2 lg:text-lg md:text-base text-sm font-semibold text-white dark:text-gray-900 bg-red-500 dark:bg-yellow-500 px-6 py-3 rounded-xl shadow-lg hover:brightness-110 transition-all duration-300 tracking-wide transform hover:scale-105"
          >
            Descargar CV Completo
            <i className="bx bx-download text-xl"></i>
          </a>
        </div>
      </main>

      <NavigationCircles section="resume" />
    </div>
  )
}

export default Resume