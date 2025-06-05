import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import NavigationCircles from './NavigationCircles'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Mensaje enviado correctamente')
      form.current.reset()
    })
    .catch((error) => {
      console.error('Error al enviar el mensaje:', error)
      alert('Hubo un error al enviar el mensaje')
    })
  }

  return (
    <div id="contact" className='h-screen flex flex-col justify-center items-center'>
      <h2 className='text-4xl font-light md:mb-32 mb-24'>Contacta conmigo</h2>
      
      <form ref={form} onSubmit={sendEmail} className='flex flex-col lg:space-y-12 space-y-8'>
        <input
          type="email"
          name="user_email"
          placeholder='Email'
          required
          className='md:w-[500px] w-[300px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500'
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          className='md:w-[500px] w-[300px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 min-h-[100px] max-h-[200px] resize-y p-3 transition-colors duration-500'
        ></textarea>
        <input
          type="submit"
          value='Enviar'
          className='md:w-[500px] w-[300px] h-13 pl-3 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500'
        />
      </form>

      <NavigationCircles section="contact"/>
    </div>
  )
}

export default Contact
