export interface FrameworkStep {
  number: string;
  title: string;
  description: string;
  points: string[];
}

export const frameworkSteps: FrameworkStep[] = [
  {
    number: "01",
    title: "DIAGNÓSTICO",
    description: "Evaluamos tu operación actual, identificamos cuellos de botella, sistemas desintegrados y oportunidades reales de automatización.",
    points: ["Auditoría de flujos actuales", "Detección de pérdidas de tiempo", "Estimación de impacto y ROI"]
  },
  {
    number: "02",
    title: "DISEÑO DEL ECOSISTEMA",
    description: "Rediseñamos flujos de trabajo, integramos tus sistemas existentes y planificamos la implementación paso a paso.",
    points: ["Arquitectura de integraciones", "Prototipado de flujos y agentes", "Plan de despliegue sin fricción"]
  },
  {
    number: "03",
    title: "IMPLEMENTACIÓN",
    description: "Implementamos la solución, capacitamos a tu equipo y acompañamos la adopción post-implementación con mejora continua.",
    points: ["Puesta en marcha en 2-4 semanas", "Capacitación ejecutiva y de equipo", "Acompañamiento y optimización continua"]
  }
];
