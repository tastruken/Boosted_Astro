export interface PortfolioCase {
  id: string;
  isFeatured?: boolean;
  category: string;
  title: string;
  client: string;
  description: string;
  href: string;
  tags: string[];
  image: string;
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: "ulloa",
    isFeatured: true,
    category: "Branding · Estrategia Digital · Contabilidad",
    title: "Ulloa y Cía: Rebranding y Estrategia Digital Integral",
    client: "Ulloa y Cía",
    description: "Modernizamos la imagen de una firma de auditoría líder, proyectando solidez contemporánea sin perder la solemnidad. Un ecosistema digital diseñado para la confianza y la autoridad.",
    href: "https://boosted.cl/portfolio-ulloa.html",
    tags: ["Rebranding Corporativo", "Estrategia B2B", "Sitio Web Institucional", "Confianza & Autoridad"],
    image: "/mockup/hero_studio_visual_1786834965899.jpg"
  },
  {
    id: "eld",
    isFeatured: false,
    category: "Branding · Ingeniería",
    title: "ELD: Ingeniería de Autoridad Branding B2B",
    client: "ELD Lighting Design",
    description: "Estrategia de marca y posicionamiento digital para consultora de iluminación técnica B2B.",
    href: "https://boosted.cl/portfolio-eld.html",
    tags: ["Branding B2B", "Posicionamiento", "Web & Gestión"],
    image: "/mockup/light_minimalist_boutique_1786827479127.jpg"
  },
  {
    id: "auditor-condominio",
    isFeatured: false,
    category: "Branding · Lanzamiento",
    title: "Auditor Condominio: Lanzamiento Full-Service de Marca",
    client: "Auditor Condominio SaaS",
    description: "Lanzamiento integral de marca, diseño de plataforma y contenidos para software SaaS.",
    href: "https://boosted.cl/portfolio-auditor-branding.html",
    tags: ["SaaS Branding", "Diseño de Plataforma", "Contenidos Estratégicos"],
    image: "/mockup/concept_haute_editorial_1786827284300.jpg"
  }
];
