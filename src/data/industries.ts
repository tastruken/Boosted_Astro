export interface Industry {
  id: string;
  name: string;
  href: string;
  tag: string;
  description: string;
  image: string;
  badgeNumber: string;
}

export const topIndustries: Industry[] = [
  {
    id: "construccion",
    name: "Construcción e Inmobiliaria",
    href: "/construccion",
    tag: "Captación & Calificación",
    description: "Calificación inmediata de compradores e inversores, sincronización con CRM y portales de proyectos.",
    image: "/mockup/industry_construccion_1786829732825.jpg",
    badgeNumber: "01"
  },
  {
    id: "belleza",
    name: "Belleza y Estética",
    href: "/belleza",
    tag: "Agendamiento & Fidelización",
    description: "Sistemas de reserva automatizados, recordatorios de citas con IA y estrategias de contenido visual.",
    image: "/mockup/industry_belleza_1786829688628.jpg",
    badgeNumber: "02"
  },
  {
    id: "hospitalidad",
    name: "Hospitalidad – HORECA",
    href: "/hospitalidad",
    tag: "Reservas & Experiencia",
    description: "Cartas digitales interactivas, integración de reservas 24/7 y posicionamiento de marca gastronómica.",
    image: "/mockup/industry_hospitalidad_1786829773598.jpg",
    badgeNumber: "03"
  }
];

export const bottomIndustries: Industry[] = [
  {
    id: "servicios-profesionales",
    name: "Servicios Profesionales",
    href: "/servicios-profesionales",
    tag: "Autoridad B2B & Leads",
    description: "Branding de autoridad, plataformas corporativas y captación de clientes de alto valor.",
    image: "/mockup/industry_servicios_1786829835822.jpg",
    badgeNumber: "04"
  },
  {
    id: "educacion",
    name: "Educación & E-Learning",
    href: "/educacion",
    tag: "Matrículas & Formación",
    description: "Plataformas de cursos online, gestión de admisiones automatizada y ecosistemas formativos.",
    image: "/mockup/industry_educacion_photo_1786832298593.jpg",
    badgeNumber: "05"
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    href: "/retail",
    tag: "Ventas & Conversión",
    description: "Tiendas de alto rendimiento, automatización de inventarios y flujos de recuperación de carritos con IA.",
    image: "/mockup/industry_retail_photo_1786832352096.jpg",
    badgeNumber: "06"
  }
];
