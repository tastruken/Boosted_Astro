export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  readTime: string;
  featured?: boolean;
  image: string;
}

export const featuredPost: BlogPost = {
  id: "diseno-web-estrategico",
  category: "Diseño Web Estratégico",
  date: "Dic 2025",
  title: "Diseño Web Estratégico: ¿Tu sitio web vende o solo informa?",
  excerpt: "¿Tu página web es solo un gasto estético o realmente genera ventas? Descubre por qué una web bonita no es suficiente y cómo el diseño web estratégico puede transformar tus visitas en clientes reales. Un análisis profundo sobre la conversión y el ROI digital.",
  href: "https://boosted.cl/blog-diseno-web-estrategico.html",
  readTime: "8 min lectura",
  featured: true,
  image: "/mockup/digital_ecosystem_mockup.jpg"
};

export const blogPosts: BlogPost[] = [
  {
    id: "automatizacion-procesos-fuga-capital",
    category: "Automatización",
    date: "26 Dic 2025",
    title: "Automatización de Procesos: ¿Cuánto dinero pierdes por no automatizar?",
    excerpt: "Las tareas manuales son una fuga de capital silenciosa. Descubre por qué la automatización ha dejado de ser un lujo para ser una higiene financiera.",
    href: "https://boosted.cl/blog-automatizacion-procesos.html",
    readTime: "6 min",
    image: "/mockup/automation_pipeline_mockup.jpg"
  },
  {
    id: "beneficios-automatizacion-pymes-chile",
    category: "Estrategia",
    date: "20 Dic 2025",
    title: "Beneficios de la Automatización para Pymes y Empresas en Chile",
    excerpt: "La automatización digital es el nuevo estándar para operar con orden y resultados. Descubre cómo avanzar en piloto automático.",
    href: "https://boosted.cl/blog-beneficios-automatizacion-pymes.html",
    readTime: "7 min",
    image: "/mockup/growth_analytics_dark.jpg"
  },
  {
    id: "ecosistema-digital-inteligente-7-pasos",
    category: "Estrategia",
    date: "20 Dic 2025",
    title: "Ecosistema Digital Inteligente: 7 pasos para diseñarlo",
    excerpt: "Conecta todo tu entorno digital para que las cosas importantes pasen solas. Aprende a diseñar un sistema que sostenga tu crecimiento.",
    href: "https://boosted.cl/blog.html#ecosistema",
    readTime: "8 min",
    image: "/mockup/concept_tech_lab_1786827317224.jpg"
  },
  {
    id: "tu-logo-no-es-tu-marca",
    category: "Branding",
    date: "20 Dic 2025",
    title: "Tu logo no es tu marca: Branding y Valor",
    excerpt: "Descubre cómo el branding estratégico te permite dejar de competir por precio y empezar a cobrar lo que realmente vales.",
    href: "https://boosted.cl/blog.html#branding",
    readTime: "6 min",
    image: "/mockup/hero_studio_visual_1786834965899.jpg"
  },
  {
    id: "email-marketing-vs-redes-sociales",
    category: "Marketing Digital",
    date: "27 Dic 2025",
    title: "Email Marketing vs Redes Sociales: ¿Dónde está el dinero?",
    excerpt: "Descubre por qué el correo electrónico sigue siendo el canal más rentable y cómo construir tu propia base de datos para no depender de algoritmos.",
    href: "https://boosted.cl/blog.html#email-marketing",
    readTime: "7 min",
    image: "/mockup/light_contrast_studio_1786827514288.jpg"
  }
];
