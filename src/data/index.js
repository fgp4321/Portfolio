export const letters = [
  { char: 'H', img: 'images/person-img-1.jpg', rotate: '-rotate-15' },
  { char: 'e', img: 'images/person-img-2.jpg', rotate: 'rotate-15' },
  { char: 'l', img: 'images/person-img-3.jpg', rotate: '-rotate-15' },
  { char: 'l', img: 'images/person-img-4.jpg', rotate: 'rotate-15' },
  { char: 'o', img: 'images/person-img-5.jpg', rotate: '-rotate-15' },
]

export const professionTexts = ['Front End', 'Back End', 'Full Stack']

export const socialIcons = [
  { icon: 'bx bxl-linkedin-square', url: 'https://www.linkedin.com/in/francisco-gonz%C3%A1lez-poveda-502692279/' },
  { icon: 'bx bxl-github', url: 'https://github.com/fgp4321' },
]

export const aboutText = `Francisco González, desarrollador web full stack, apasionado por construir soluciones útiles y eficientes desde la interfaz hasta el servidor. A lo largo de mi trayectoria profesional he trabajado con frameworks frontend como Angular y React, creando interfaces modernas, dinámicas y pensadas para el usuario final.

En el backend, domino Node.js y Java, con una mentalidad enfocada en arquitecturas limpias, escalabilidad y buenas prácticas. Desarrollo APIs RESTful, estructuro la lógica de negocio y diseño sistemas pensando tanto en el presente como en su evolución a futuro.

Trabajo con bases de datos relacionales (MySQL) y NoSQL (MongoDB), optimizando consultas, diseñando estructuras sólidas y asegurando la integridad de los datos. También tengo experiencia con Elasticsearch, lo que me permite implementar búsquedas avanzadas, indexación eficiente y experiencias de navegación más inteligentes.

Además, manejo Docker para virtualización de entornos y despliegue, permitiendo flujos de trabajo consistentes entre desarrollo y producción. Me gusta cuidar cada etapa del desarrollo: del código a la infraestructura.

Pero más allá de las tecnologías, lo que me define es la curiosidad constante, el deseo de entender cómo funcionan las cosas y la búsqueda de soluciones limpias, sostenibles y útiles. Me involucro de lleno en cada proyecto, con el foco puesto en la calidad y la colaboración.`

export const skillCards = [
  {
  icon: 'bx bx-code-alt',
  title: 'Front-End Dev',
  description: `Tengo experiencia sólida en desarrollo front-end utilizando HTML, CSS y JavaScript. Además, he trabajado con frameworks modernos como Angular y React para construir interfaces dinámicas, responsivas y orientadas a la experiencia del usuario. Me enfoco en rendimiento, accesibilidad y buenas prácticas de desarrollo.

1. Ineffabile Pizza: Proyecto de fin de grado (TFG) en el que se desarrolló una web de pedidos online para una pizzería ficticia. Utilizamos HTML, CSS y JavaScript para el frontend, Angular para el back office y Node.js como backend principal. Además, se empleó Docker para virtualizar Elasticsearch y crear un sistema de búsqueda avanzado dentro de la web.

2. GTA VI Characters: Aplicación realizada con Next.js como parte de una exploración técnica personal. El objetivo era experimentar con scroll suave utilizando Lenis y animaciones fluidas con Framer Motion, basándome en la temática de personajes del videojuego.

3. Sax APP: Aplicación en desarrollo destinada al Ayuntamiento de Sax y sus ciudadanos. Su objetivo es centralizar información municipal, eventos y servicios. Se ha desarrollado con React y Vite para el frontend, empleando Tailwind CSS para el diseño. El backend está construido con Node.js, incluyendo múltiples APIs para gestionar la comunicación con la base de datos.`,
  projectCount: 3,
  projectLinks: [
      'https://ineffabile-pizza.vercel.app/',
      'https://gtavi-characters-fan-page.vercel.app/',
      'https://github.com/fgp4321/Sax-APP',
    ],
  hoverPosition: {
    large: 'bottom',
    small: 'bottom',
  },
},
{
  icon: 'bx bx-server',
  title: 'Back-End Dev',
  description:
    `Como desarrollador back-end, tengo amplios conocimientos en Node.js y JavaScript. He trabajado en la creación de APIs, gestión de autenticaciones, procesos asincrónicos y lógica de negocio para aplicaciones escalables y seguras. Me preocupo por la eficiencia del código y la integración fluida con el front-end.
    
    1. Ineffabile Pizza: Proyecto de fin de grado (TFG) en el que se desarrolló una web de pedidos online para una pizzería ficticia. Utilizamos HTML, CSS y JavaScript para el frontend, Angular para el back office y Node.js como backend principal. Además, se empleó Docker para virtualizar Elasticsearch y crear un sistema de búsqueda avanzado dentro de la web.
    
    2. Sax APP: Aplicación en desarrollo destinada al Ayuntamiento de Sax y sus ciudadanos. Su objetivo es centralizar información municipal, eventos y servicios. Se ha desarrollado con React y Vite para el frontend, empleando Tailwind CSS para el diseño. El backend está construido con Node.js, incluyendo múltiples APIs para gestionar la comunicación con la base de datos.`,
  projectCount: 2,
  projectLinks: [
      'https://ineffabile-pizza.vercel.app/',
      'https://github.com/fgp4321/Sax-APP',
    ],
  hoverPosition: {
    large: 'bottom',
    small: 'bottom',
  },
},
{
  icon: 'bx bx-data',
  title: 'Bases de Datos',
  description:
    `Domino tanto bases de datos relacionales (MySQL, PostgreSQL) como no relacionales (MongoDB). Tengo experiencia en diseño de esquemas eficientes, optimización de consultas y gestión de grandes volúmenes de datos, asegurando integridad y rendimiento en las aplicaciones que desarrollo.
    
    1. Ineffabile Pizza: Proyecto de fin de grado (TFG) en el que se desarrolló una web de pedidos online para una pizzería ficticia. Utilizamos HTML, CSS y JavaScript para el frontend, Angular para el back office y Node.js como backend principal. Además, se empleó Docker para virtualizar Elasticsearch y crear un sistema de búsqueda avanzado dentro de la web.
    
    2. Sax APP: Aplicación en desarrollo destinada al Ayuntamiento de Sax y sus ciudadanos. Su objetivo es centralizar información municipal, eventos y servicios. Se ha desarrollado con React y Vite para el frontend, empleando Tailwind CSS para el diseño. El backend está construido con Node.js, incluyendo múltiples APIs para gestionar la comunicación con la base de datos.`,
  projectCount: 2,
  projectLinks: [
    'https://ineffabile-pizza.vercel.app/',
    'https://github.com/fgp4321/Sax-APP',
  ],
  hoverPosition: {
    large: 'bottom',
    small: 'bottom',
  },
},
{
  icon: 'bx bxl-microsoft',
  title: 'Ecosistema Microsoft',
  description:
    'He trabajado extensamente con herramientas del ecosistema Microsoft, incluyendo Excel, Outlook, SharePoint y Teams. Conozco bien su integración en entornos corporativos y cómo aprovechar sus funcionalidades para mejorar la productividad, automatizar procesos y colaborar en equipos. Además, tengo experiencia en administración de sistemas con Windows Server y un conocimiento profundo de Active Directory y Azure, lo que me permite gestionar eficientemente infraestructuras híbridas y entornos empresariales.',
  projectCount: 0,
  hoverPosition: {
    large: 'top',
    small: 'bottom',
  },
},
{
  icon: 'bx bx-world',
  title: 'CMS & WordPress',
  description:
    `Tengo amplia experiencia con CMS, especialmente WordPress. He desarrollado sitios a medida, personalizado temas y plugins, y gestionado contenido optimizado para SEO. Esto me permite crear soluciones flexibles, eficientes y fáciles de mantener para diferentes tipos de clientes y proyectos.
    
    1. Sax.es: Colaboración con la Diputación de Alicante dentro del Plan Moderniza para la migración completa del sitio web del municipio de Sax. Se trabajó con WordPress, optimizando y configurando numerosos plugins. El proyecto me permitió adquirir gran experiencia en gestión de CMS y en la adaptación de contenido institucional a un entorno digital moderno.
    
    2. Vysan.es: Sitio web de comercio de componentes electrónicos desarrollado en PrestaShop. Me encargué del mantenimiento general, actualización de versiones y módulos, subida de nuevos productos y modificación de precios. Este proyecto me dio experiencia práctica en la gestión de tiendas online y la operativa diaria de un e-commerce.`,
  projectCount: 2,
  projectLinks: [
    'https://www.sax.es/',
    'https://vysan.es/es/',
  ],
  hoverPosition: {
    large: 'top',
    small: 'bottom',
  },
},
{
  icon: 'bx bxl-docker',
  title: 'Contenedores & Virtualización',
  description:
    `Conozco el uso de contenedores con Docker para crear entornos de desarrollo reproducibles y eficientes. Además, tengo experiencia en la orquestación con Kubernetes para desplegar aplicaciones escalables. Esta habilidad me permite optimizar flujos DevOps y garantizar estabilidad en producción.
    
    1. Ineffabile Pizza: Proyecto de fin de grado (TFG) en el que se desarrolló una web de pedidos online para una pizzería ficticia. Utilizamos HTML, CSS y JavaScript para el frontend, Angular para el back office y Node.js como backend principal. Además, se empleó Docker para virtualizar Elasticsearch y crear un sistema de búsqueda avanzado dentro de la web.`,
  projectCount: 1,
  projectLinks: [
    'https://ineffabile-pizza.vercel.app/',
  ],
  hoverPosition: {
    large: 'top',
    small: 'bottom',
  },
},
]

export const resumeData = {
  profile: `Entusiasta de la administración de sistemas, la ciberseguridad y el desarrollo de software.
    Experiencia en mantenimiento y optimización de servidores, análisis técnico y mejora continua
    de infraestructuras IT. Motivado por aprender nuevas tecnologías y aplicarlas en soluciones
    eficientes y seguras.`,

  contact: [
    { label: 'Email', value: 'fgp4321@gmail.com', link: 'mailto:fgp4321@gmail.com' },
    { label: 'Teléfono', value: '+34 644 98 01 05', link: 'tel:+34644980105' },
    { label: 'Ubicación', value: 'Villena (Alicante)' },
    { label: 'GitHub', value: 'github.com/fgp4321', link: 'https://github.com/fgp4321' },
    { label: 'LinkedIn', value: 'LinkedIn', link: 'https://www.linkedin.com/in/francisco-gonz%C3%A1lez-poveda-502692279/' },
  ],

  experience: [
    {
      company: 'Ayuntamiento de Sax',
      period: 'Dic 2024 - Dic 2025',
      role: 'Técnico informático',
      description: 'Microsoft 365, React, automatización con Power Automate, administración de sistemas y redes.'
    },
    {
      company: 'Delfín Servicio Integral, S.L.U',
      period: 'Oct 2023 - Jun 2024',
      role: 'Desarrollador web',
      description: 'Virtualización, microservicios, Docker, Kubernetes, NodeJS, React, AWS, documentación API.'
    },
    {
      company: 'Vysan Componentes Electrónicos S.L.',
      period: 'Mar 2022 - Jun 2022',
      role: 'Técnico informático',
      description: 'Mantenimiento web, soporte técnico, gestión de almacén, automatización de procesos.'
    }
  ],

  education: [
    'Curso de Especialización en Ciberseguridad (Curso 2025-2026)',
    'Técnico Superior en Desarrollo de Aplicaciones Web — I.E.S. Hermanos Amorós (Curso 2022-2024)',
    'Técnico en Sistemas Microinformáticos y Redes — I.E.S. Hermanos Amorós (Curso 2020-2022)',
  ],

  certifications: [
    'Introducción a la Ciberseguridad — Cisco Networking Academy',
    'AZ-900: Microsoft Azure Fundamentals',
    'Hacking ético',
  ]
}