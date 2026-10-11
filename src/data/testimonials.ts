export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  highlight?: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "beltran",
    quote: "De un simple buzón de voz a un Agente Inteligente 24/7. La IA clasifica la intención de compra y nos garantiza leads calificados con el contexto completo de nuestra Base de Datos.",
    name: "Juan Eduardo Beltrán",
    role: "Director",
    company: "Beltrán y Guzman Cia Ltda",
    highlight: "Agente IA 24/7",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "broccato",
    quote: "Trabajé con el equipo de Boosted desde 2015 hasta 2023, y fueron fundamentales en la construcción de la identidad de mi negocio. Desarrollaron mi imagen corporativa desde cero, diseñaron una web funcional y atractiva, y gestionaron la creación y estrategia de mis redes sociales.",
    name: "María Florencia Pardo",
    role: "Gerente",
    company: "Broccato Ltda.",
    highlight: "Identidad & Web Integral",
    rating: 5,
    avatar: "https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "deck-kingdom",
    quote: "Tuve el placer de trabajar con Paula en la creación y desarrollo de mi sitio web (Deck Kingdom), y no puedo estar más satisfecho con los resultados. Demostró un nivel de profesionalismo y dedicación que hizo que todo el proceso fuera fluido y agradable.",
    name: "Camilo Monsalve A.",
    role: "CEO",
    company: "Deck Kingdom",
    highlight: "Desarrollo Web & Dedicación",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "eld",
    quote: "Desde 2019, trabajo con el equipo de Boosted en la gestión de mi web y diseñaron la web de un proyecto personal, cumpliendo plazos sin complicaciones. Profesionales y económicamente convenientes.",
    name: "Raúl Cuevas L.",
    role: "CEO",
    company: "ELD Lighting Design",
    highlight: "Alianza desde 2019",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "baul-camila",
    quote: "Con mucho gusto puedo recomendar a Camilo para encargarse del marketing digital de tu empresa. El trabajo en la campaña de Halloween aumentó las ventas y visibilizó la tienda en forma remota con éxito.",
    name: "Soledad Moraga F.",
    role: "Dueña",
    company: "Baúl de Camila",
    highlight: "Marketing & Ventas Remotas",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "rrhh",
    quote: "Trabajar con Paula y su personal fue una excelente experiencia, con reuniones de coordinación muy profesionales y un servicio óptimo. El curso de e-learning fue muy exitoso y rompió los esquemas de los funcionarios.",
    name: "Javier Antonio Salazar Cañas",
    role: "Psicólogo",
    company: "Recursos Humanos",
    highlight: "E-Learning & Capacitación",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "rocco",
    quote: "He trabajado con Boosted en varias oportunidades y siempre han respondido de forma profesional y con un trabajo de calidad, en los tiempos dispuestos. 100% recomendados.",
    name: "Eduardo Rocco S.",
    role: "Profesional",
    company: "Marketing y Publicidad",
    highlight: "Calidad y Plazos 100%",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80"
  }
];
