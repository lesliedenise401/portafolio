// Archivo central de datos del portafolio.
// Edita aquí textos, enlaces, datos personales, habilidades y proyectos.

export const datosPortafolio = {
  nombre: "Leslie Denise Mata Luevano",
  iniciales: "LM",
  saludo: "¡Hola! Soy",
  subtitulo: "DESARROLLADORA DE SOFTWARE",
  parrafoPerfil:
    "Soy apasionada por crear experiencias digitales, funcionales y centradas en el usuario. Me especializo en construir aplicaciones web y móviles modernas, con enfoque en código limpio, trabajo en equipo y entrega de valor.",
  perfilExtendido: [
    "Soy ingeniera en desarrollo y gestión de software con experiencia en la creación de aplicaciones web y móviles. Disfruto transformar ideas en productos digitales útiles, combinando diseño cuidado con código robusto.",
    "Creo firmemente en el trabajo en equipo, la comunicación clara y el aprendizaje continuo. Cada proyecto es una oportunidad para mejorar procesos, optimizar soluciones y entregar software de calidad que realmente resuelva problemas reales.",
  ],
  nombreAcento: "Leslie Denise Mata Luevano",

  redesSociales: [
    { nombre: "LinkedIn", url: "#", icono: "Users" },
    { nombre: "GitHub", url: "#", icono: "Code" },
    { nombre: "Correo", url: "#", icono: "Mail" },
  ],

  contacto: {
    correo: "mataleslie62@gmail.com",
    ubicacion: "Ciudad de Mexico, Mexico",
    telefono: "+00 000 000 0000",
  },

  habilidades: [
    { nombre: "React", icono: "Code" },
    { nombre: "Next.js", icono: "Triangle" },
    { nombre: "React Native", icono: "Smartphone" },
    { nombre: "Flutter", icono: "Layers" },
    { nombre: "Dart", icono: "Feather" },
    { nombre: "JavaScript", icono: "FileCode" },
    { nombre: "TypeScript", icono: "FileCode" },
    { nombre: "Tailwind CSS", icono: "Palette" },
    { nombre: "MongoDB", icono: "Database" },
    { nombre: "PostgreSQL", icono: "Database" },
    { nombre: "Strapi", icono: "Server" },
    { nombre: "SQLite", icono: "HardDrive" },
    { nombre: "Git", icono: "GitBranch" },
    { nombre: "GitHub", icono: "Code" },
  ],

  formacion: [
    {
      carrera: "Ingeniería en Desarrollo y Gestión de Software",
      institucion: "Universidad Tecnológica Fidel Velázquez",
      periodo: "Egresado",
      logo: null,
    },
  ],

  proyectos: [
    {
      titulo: "BarberWeb — Gestión de Citas para Barberías",
      descripcion:
        "Plataforma web multi-tenant para barberías con catálogo, agenda de citas en 3 pasos, portal del cliente y paneles de administración con React, Tailwind CSS y Supabase.",
      imagen: "src/assets/barberweb.png",
      demo: "https://kromatik.gools.com.mx/",
      repositorio: "https://github.com/CristianOG1/reservas-barberia",
      tecnologias: ["React", "Tailwind CSS", "Supabase"],
    },
    {
      titulo: "Mi Bolsillo — App de Gestión de Gastos (PWA)",
      descripcion:
        "Aplicación web progresiva hecha con React Native para el control de finanzas personales y registro de gastos.",
      imagen: "src/assets/mi-bolsillo.png",
      demo: "https://mi-bolsillo-brown.vercel.app/",
      repositorio: "https://github.com/lesliedenise401/app-gastos.git",
      tecnologias: ["React Native", "PWA"],
    },
    {
      titulo: "Delivery App — Aplicación Móvil (APK)",
      descripcion:
        "Aplicación móvil desarrollada en Flutter y Dart enfocada en la gestión y seguimiento de entregas a domicilio.",
      imagen: "src/assets/delivery.png",
      demo: "#",
      repositorio: "https://github.com/CristianOG1/delivery-app",
      tecnologias: ["Flutter", "Dart"],
    },
    {
      titulo: "Tienda Web — E-Commerce",
      descripcion:
        "Tienda en línea full-stack con panel de administración para gestión de productos y categorías, desarrollada con Next.js, React, TypeScript, Strapi v5 y SQLite.",
      imagen: "src/assets/tienda.png",
      demo: "https://gestion-proyecto-tienda.vercel.app/",
      repositorio: "https://github.com/CristianOG1/gestion-proyecto-tienda",
      tecnologias: ["Next.js", "React", "TypeScript", "Strapi v5", "SQLite"],
    },
  ],

  enlacesNavegacion: [
    { etiqueta: "Inicio", id: "inicio" },
    { etiqueta: "Sobre mí", id: "sobre-mi" },
    { etiqueta: "Habilidades", id: "habilidades" },
    { etiqueta: "Formación", id: "formacion" },
    { etiqueta: "Proyectos", id: "proyectos" },
    { etiqueta: "Contacto", id: "contacto" },
  ],
};

export default datosPortafolio;