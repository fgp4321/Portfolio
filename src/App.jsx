import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NavigationCircles from "./components/NavigationCircles";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "./context/ThemeContext";
import { sections } from "./data/index";

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      // La sección activa es la que cruza una línea situada a un tercio de la ventana
      const line = window.innerHeight / 3
      let current = sections[0].id
      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= line) current = id
      })
      // Al llegar al final de la página, la última sección queda activa aunque sea corta
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1].id
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const goToSection = (e, sectionId) => {
    e.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-red-500 dark:text-yellow-500 transition-colors duration-500">
        <Navbar activeSection={activeSection} onNavigate={goToSection} />
        <NavigationCircles activeSection={activeSection} onNavigate={goToSection} />
        <main>
          <Hero onNavigate={goToSection} />
          <Projects />
          <Resume />
          <Services />
          <Contact />
        </main>
        <Analytics />
      </div>
    </ThemeProvider>
  )
}

export default App;
