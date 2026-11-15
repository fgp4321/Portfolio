export const sections = [
  { id: 'home', label: 'Inicio' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'resume', label: 'Currículum' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contacto' },
]

export const socialIcons = [
  { icon: 'bx bxl-linkedin-square', label: 'LinkedIn', url: 'https://www.linkedin.com/in/francisco-gonz%C3%A1lez-poveda-502692279/' },
  { icon: 'bx bxl-github', label: 'GitHub', url: 'https://github.com/fgp4321' },
]

export const hero = {
  eyebrow: 'Desarrollador web full stack',
  firstName: 'Francisco',
  lastName: 'González Poveda',
  lead: 'Desarrollo aplicaciones web de principio a fin, de la interfaz a la base de datos. Ahora mismo lo hago en la Diputación Provincial de Alicante.',
  about: [
    'Empecé en sistemas y redes y de ahí pasé al desarrollo web, así que me muevo con soltura tanto en el código como en la infraestructura que lo sostiene. He trabajado con React y Angular en el frontend, con Node.js y .NET en el backend y con Docker y Kubernetes para desplegarlo.',
    'En los últimos años he trabajado sobre todo para la administración pública: primero en el Ayuntamiento de Sax y ahora en la Diputación de Alicante.',
  ],
  facts: [
    { label: 'Ahora', value: 'Técnico Superior de Desarrollo', detail: 'Diputación Provincial de Alicante · desde dic. 2025' },
    { label: 'Trabajo con', value: 'React, Node.js, .NET y SQL', detail: 'Además de Astro, Angular, WordPress y Docker' },
    { label: 'Formación', value: 'Desarrollo de Aplicaciones Web', detail: 'Técnico Superior · I.E.S. Hermanos Amorós' },
    { label: 'Ubicación', value: 'Villena (Alicante)' },
  ],
}

export const projects = [
  {
    title: 'NIGHT//SHIFT',
    year: '2026',
    kind: 'Experiencia interactiva',
    featured: true,
    description:
      'Experiencia web inmersiva de ambientación cyberpunk, con marca, textos e interfaces originales. Es una única película en cinco actos guiada por el scroll que recorre tres mundos: una ciudad nocturna en 3D, su sistema operativo y el submundo que hay debajo.',
    highlights: [
      'Ciudad 3D procedural pintada con shaders GLSL propios, sin modelos ni texturas',
      'NIGHT//OS: escritorio con gestor de ventanas y cuatro aplicaciones (terminal, base de datos, mapa y radio)',
      'Sonido sintetizado con Web Audio, sin archivos de audio',
      'Tres niveles de calidad según el dispositivo, alternativa sin WebGL y modo de movimiento reducido',
    ],
    tags: ['Next.js', 'TypeScript', 'Three.js', 'React Three Fiber', 'GSAP', 'Lenis', 'Tailwind CSS'],
    links: [
      { label: 'Ver web', icon: 'bx bx-link-external', url: 'https://nightshift-five.vercel.app/' },
      { label: 'Código', icon: 'bx bxl-github', url: 'https://github.com/fgp4321/nightshift' },
    ],
  },
  {
    title: 'Podología Mar Navarro',
    year: '2026',
    kind: 'Web corporativa',
    description:
      'Sitio web de una clínica de podología de Villena. Es un sitio estático hecho con Astro, sin backend, sin cookies y sin herramientas de seguimiento, pensado para que cargue rápido y sea fácil de mantener.',
    highlights: [
      'HTML estático: el único JavaScript es el del menú móvil',
      'Tipografías e iconos alojados en el propio sitio, sin llamadas a terceros',
      'SEO técnico: datos estructurados, sitemap, Open Graph y páginas legales',
      'Textos y datos del negocio centralizados y preparados para un segundo idioma',
    ],
    tags: ['Astro', 'TypeScript', 'CSS', 'Vercel'],
    links: [{ label: 'Código', icon: 'bx bxl-github', url: 'https://github.com/fgp4321/podologia-mar-navarro' }],
  },
  {
    title: 'Sax APP',
    year: '2025',
    kind: 'Aplicación ciudadana',
    description:
      'Aplicación para el Ayuntamiento de Sax y sus vecinos: registro e inicio de sesión (también con Google), reserva de visitas guiadas al castillo, incidencias y sugerencias mediante tickets, mapa de desfibriladores del municipio y panel de administración.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Leaflet'],
    links: [{ label: 'Código', icon: 'bx bxl-github', url: 'https://github.com/fgp4321/Sax-APP' }],
  },
  {
    title: 'Ineffabile Pizza',
    year: '2024',
    kind: 'Fin de grado',
    description:
      'Web de pedidos online para una pizzería ficticia. Frontend en HTML, CSS y JavaScript, back office en Angular y backend en Node.js, con un buscador avanzado sobre Elasticsearch virtualizado con Docker.',
    tags: ['JavaScript', 'Angular', 'Node.js', 'Elasticsearch', 'Docker'],
    links: [
      { label: 'Ver web', icon: 'bx bx-link-external', url: 'https://ineffabile-pizza.vercel.app/' },
      { label: 'Código', icon: 'bx bxl-github', url: 'https://github.com/fgp4321/Ineffabile-Pizza' },
    ],
  },
]

export const skillGroups = [
  {
    icon: 'bx bx-code-alt',
    title: 'Front-end',
    summary: 'Interfaces responsivas y accesibles, con atención al rendimiento.',
    items: ['React', 'Next.js', 'Angular', 'Astro', 'Three.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML y CSS'],
  },
  {
    icon: 'bx bx-server',
    title: 'Back-end',
    summary: 'APIs REST, autenticación y lógica de negocio.',
    items: ['Node.js', 'Express', '.NET', 'Visual Basic', 'PHP', 'Java'],
  },
  {
    icon: 'bx bx-data',
    title: 'Bases de datos',
    summary: 'Diseño de esquemas, consultas y búsqueda.',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Elasticsearch'],
  },
  {
    icon: 'bx bxl-docker',
    title: 'Contenedores y despliegue',
    summary: 'Entornos reproducibles de desarrollo a producción.',
    items: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Vercel'],
  },
  {
    icon: 'bx bx-world',
    title: 'CMS y comercio online',
    summary: 'Gestión de contenidos, plugins y mantenimiento de tiendas online.',
    items: ['WordPress', 'PrestaShop'],
  },
  {
    icon: 'bx bxl-microsoft',
    title: 'Ecosistema Microsoft',
    summary: 'Administración y automatización en entornos corporativos.',
    items: ['Microsoft 365', 'Entra ID', 'Power Automate', 'SharePoint', 'Azure', 'Windows Server', 'Active Directory'],
  },
]

export const resumeData = {
  profile: `Desarrollador web full stack con base en administración de sistemas. Trabajo en el
    desarrollo y mantenimiento de aplicaciones para la administración pública y me interesan
    también la infraestructura y la ciberseguridad.`,

  contact: [
    { label: 'Email', value: 'fgp4321@gmail.com', link: 'mailto:fgp4321@gmail.com' },
    { label: 'Teléfono', value: '+34 644 98 01 05', link: 'tel:+34644980105' },
    { label: 'Ubicación', value: 'Villena (Alicante)' },
    { label: 'GitHub', value: 'github.com/fgp4321', link: 'https://github.com/fgp4321' },
    { label: 'LinkedIn', value: 'LinkedIn', link: 'https://www.linkedin.com/in/francisco-gonz%C3%A1lez-poveda-502692279/' },
  ],

  experience: [
    {
      company: 'Diputación Provincial de Alicante',
      period: 'Dic 2025 - Actualidad',
      role: 'Técnico Superior de Desarrollo',
      description: 'Desarrollo de aplicaciones con Visual Basic y .NET, bases de datos SQL Server, WordPress y PHP, gestión de incidencias con GLPI y documentación de proyectos.'
    },
    {
      company: 'Ayuntamiento de Sax',
      period: 'Dic 2024 - Dic 2025',
      role: 'Técnico Informático',
      description: 'Microsoft 365 y Entra ID, WordPress y React, automatización de procesos con Power Automate, administración de sistemas y redes.'
    },
    {
      company: 'Delfín Servicio Integral, S.L.U',
      period: 'Oct 2023 - Jun 2024',
      role: 'Desarrollador Web',
      description: 'Virtualización y contenedores, microservicios con Docker y Kubernetes, Elastic Stack, Node.js, Angular, React, Jenkins, AWS y documentación de API.'
    },
    {
      company: 'Vysan Componentes Electrónicos S.L.',
      period: 'Mar 2022 - Jun 2022',
      role: 'Técnico Informático',
      description: 'Mantenimiento de la tienda online en PrestaShop (vysan.es), soporte técnico, gestión de almacén y automatización de procesos.'
    }
  ],

  education: [
    'Técnico Superior en Desarrollo de Aplicaciones Web — I.E.S. Hermanos Amorós (Curso 2022-2024)',
    'Técnico en Sistemas Microinformáticos y Redes — I.E.S. Hermanos Amorós (Curso 2020-2022)',
  ],

  certifications: [
    'Introducción a la Ciberseguridad — Cisco Networking Academy',
    'AZ-900: Microsoft Azure Fundamentals',
    'Hacking ético',
  ],

  languages: [
    'Español — nativo',
    'Valenciano — nivel intermedio',
    'Inglés — nivel intermedio',
  ],

  misc: [
    'Permiso B y A2',
  ]
}
