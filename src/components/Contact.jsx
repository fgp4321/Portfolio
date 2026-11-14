import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const statusMessages = {
  sending: 'Enviando…',
  ok: 'Mensaje enviado correctamente. Te responderé lo antes posible.',
  error: 'No se ha podido enviar el mensaje. Puedes escribirme a fgp4321@gmail.com.',
}

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('idle')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('ok')
      form.current.reset()
    })
    .catch((error) => {
      console.error('Error al enviar el mensaje:', error)
      setStatus('error')
    })
  }

  return (
    <section id="contact" className='w-full scroll-mt-12 min-h-screen flex flex-col justify-center items-center py-24 px-4 transition-colors duration-500'>
      <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight text-center text-gray-800 dark:text-gray-200 mb-16 transition-colors duration-500'>
        Contacta <span className='text-red-500 dark:text-yellow-500 transition-colors duration-500'>Conmigo</span>
      </h2>

      <form ref={form} onSubmit={sendEmail} className='w-full max-w-[500px] flex flex-col lg:space-y-10 space-y-8'>
        <label className='sr-only' htmlFor='user_email'>Email</label>
        <input
          id='user_email'
          type="email"
          name="user_email"
          placeholder='Email'
          autoComplete='email'
          required
          className='w-full h-13 pl-3 text-lg text-gray-900 dark:text-white bg-transparent border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:focus:outline-yellow-500 transition-colors duration-500'
        />
        <label className='sr-only' htmlFor='message'>Mensaje</label>
        <textarea
          id='message'
          name="message"
          placeholder="Mensaje"
          required
          className='w-full text-lg text-gray-900 dark:text-white bg-transparent border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 min-h-[140px] max-h-[300px] resize-y p-3 focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:focus:outline-yellow-500 transition-colors duration-500'
        ></textarea>
        <input
          type="submit"
          value='Enviar'
          disabled={status === 'sending'}
          className='w-full h-13 text-lg bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 hover:brightness-110 disabled:opacity-60 disabled:cursor-wait transition duration-500'
        />
        <p role='status' className={`min-h-6 text-center text-base ${status === 'error' ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'}`}>
          {statusMessages[status] ?? ''}
        </p>
      </form>
    </section>
  )
}

export default Contact
