import React from 'react'
import { projects } from '../data/index'

const ProjectLinks = ({ links }) => (
  <div className='flex flex-wrap gap-3'>
    {links.map((link) => (
      <a
        key={link.label}
        href={link.url}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold tracking-wide border border-red-500 dark:border-yellow-500 text-red-500 dark:text-yellow-500 hover:bg-red-500 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-gray-900 transition-colors duration-300'
      >
        <i className={`${link.icon} text-lg`}></i>
        {link.label}
      </a>
    ))}
  </div>
)

const Tags = ({ tags }) => (
  <ul className='flex flex-wrap gap-2'>
    {tags.map((tag) => (
      <li key={tag} className='px-2.5 py-0.5 text-xs font-medium tracking-wide rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 ring-1 ring-gray-400/30 transition-colors duration-500'>{tag}</li>
    ))}
  </ul>
)

const Projects = () => {
  return (
    <section id='projects' className='w-full scroll-mt-12 bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500'>
      <div className='max-w-6xl w-full mx-auto'>
        <header className='text-center'>
          <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 transition-colors duration-500'>
            Mis <span className='text-red-500 dark:text-yellow-500 transition-colors duration-500'>Proyectos</span>
          </h2>
          <p className='mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 transition-colors duration-500'>
            Una selección de lo que he construido en los últimos años.
          </p>
        </header>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`flex flex-col gap-y-5 p-6 bg-gray-200 dark:bg-gray-800 rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 transition-colors duration-500 ${project.featured ? 'md:col-span-2 md:p-8' : ''}`}
            >
              <div className='flex items-baseline justify-between gap-x-4'>
                <span className='text-sm font-bold tracking-widest uppercase'>
                  {String(index + 1).padStart(2, '0')} · {project.kind}
                </span>
                <span className='text-sm font-medium px-2.5 py-0.5 rounded-full border border-red-500 dark:border-yellow-500 transition-colors duration-500'>{project.year}</span>
              </div>

              <div className={project.featured ? 'grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5' : 'contents'}>
                <div className='flex flex-col gap-y-4'>
                  <h3 className={`font-bold text-gray-900 dark:text-white transition-colors duration-500 ${project.featured ? 'md:text-4xl text-3xl' : 'text-2xl'}`}>{project.title}</h3>
                  <p className='text-base font-light text-gray-700 dark:text-gray-300 transition-colors duration-500'>{project.description}</p>
                </div>
                {project.highlights && (
                  <ul className='space-y-2 self-center'>
                    {project.highlights.map((item) => (
                      <li key={item} className='flex items-start text-base font-light text-gray-700 dark:text-gray-300 transition-colors duration-500'>
                        <i className='bx bx-check text-xl text-red-500 dark:text-yellow-500 mr-2 transition-colors duration-500'></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className='mt-auto flex flex-col gap-y-5'>
                <Tags tags={project.tags} />
                <ProjectLinks links={project.links} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
