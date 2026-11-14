# Portfolio — Francisco González Poveda

Portfolio personal desplegado en [francisco-gonzalez.me](https://francisco-gonzalez.me) (Vercel).

## Tecnología

- React 19 + Vite 6
- Tailwind CSS 4 (plugin de Vite)
- EmailJS para el formulario de contacto
- Vercel Analytics

## Puesta en marcha

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
npm run lint
```

El formulario de contacto necesita estas variables de entorno (en `.env` en local y en el proyecto de Vercel):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Estructura

```
public/            CV en PDF y favicon
src/
  components/      Hero, Projects, Resume, Services, Contact, Navbar…
  context/         Tema claro/oscuro
  data/index.js    Todos los textos: inicio, proyectos, habilidades, experiencia
```

Para cambiar textos, proyectos o experiencia basta con editar `src/data/index.js`.
