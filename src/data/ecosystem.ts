export interface EcosystemService {
  id: string;
  number: string;
  title: string;
  highlight: string;
  description: string;
  href: string;
  tag: string;
  roiBadge?: string;
  features: string[];
}

export const ecosystemServices: EcosystemService[] = [
  {
    id: "ia-charlie",
    number: "01",
    title: "IA: Charlie, tu Agente IA 24/7",
    highlight: "El único colaborador que trabaja 24/7",
    description: "Conecta marketing, ventas y operación en un solo flujo inteligente que nunca duerme ni olvida. Clasifica intención de compra y alimenta tu CRM en tiempo real.",
    href: "https://boosted.cl/charlie.html",
    tag: "Powered by AI",
    roiBadge: "Operación 24/7",
    features: ["Clasificación de intención de compra", "Respuestas en segundos por WhatsApp", "Alimentación de CRM sin retrasos"]
  },
  {
    id: "automatizacion",
    number: "02",
    title: "Automatización de Procesos",
    highlight: "Flujos inteligentes que eliminan tareas repetitivas",
    description: "Diseñamos sistemas automatizados que reducen el error humano y aceleran los ciclos operativos. ROI medible en 60 días, con setup completo en 2 a 4 semanas.",
    href: "/servicios-automatizacion",
    tag: "Eficiencia Operativa",
    roiBadge: "ROI en 60 días",
    features: ["Setup rápido en 2-4 semanas", "Eliminación de tareas manuales", "Conexión directa entre plataformas"]
  },
  {
    id: "desarrollo-medida",
    number: "03",
    title: "Desarrollo a Medida",
    highlight: "Herramientas y sistemas 100% personalizados",
    description: "Software, paneles internos y plataformas a la medida exacta de tu negocio que se adaptan a tu operación actual y escalan contigo hacia el futuro.",
    href: "/servicios-desarrollo-a-medida",
    tag: "Ingeniería de Software",
    roiBadge: "100% Custom",
    features: ["Arquitectura moderna y escalable", "Integración con bases de datos internas", "Propiedad total del código"]
  },
  {
    id: "sitios-web-ux",
    number: "04",
    title: "Sitios Web y UX Digital",
    highlight: "Plataformas estratégicas integradas a tu CRM",
    description: "Experiencias web de ultra rendimiento que combinan diseño de vanguardia, máxima velocidad y conversión optimizada desde el primer clic.",
    href: "/servicios-sitios-web",
    tag: "High Conversion",
    roiBadge: "Lighthouse 99+",
    features: ["Integración nativa con CRM", "Carga ultra rápida (< 1s)", "Diseño responsive de alto impacto"]
  },
  {
    id: "branding-redes",
    number: "05",
    title: "Branding y Redes Sociales",
    highlight: "Identidades visuales potentes y contenido estratégico",
    description: "Construimos marcas memorables y administramos contenidos estratégicos en redes que atraen, educan y convierten audiencias en clientes leales.",
    href: "https://boosted.cl/branding-y-contenido.html",
    tag: "Brand Identity",
    roiBadge: "Autoridad B2B / B2C",
    features: ["Manual de marca y sistemas visuales", "Estrategia y Community Management", "Producción de contenido que vende"]
  },
  {
    id: "transformacion-digital",
    number: "06",
    title: "Transformación Digital",
    highlight: "Rediseñamos tu operación desde adentro",
    description: "Acompañamos a tu organización en la modernización de procesos, modernización de sistemas, adopción tecnológica y evolución de la cultura digital.",
    href: "/servicios-transformacion-digital",
    tag: "Consultoría Integral",
    roiBadge: "Escalamiento 360°",
    features: ["Auditoría de cuellos de botella", "Capacitación continua de equipos", "Plan de modernización paso a paso"]
  }
];
