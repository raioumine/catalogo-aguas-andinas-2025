import type { AreaTematica } from '../../types'

export interface AreaMeta {
  color: string
  bg: string
  lightBg: string
  emoji: string
  description: string
  short: string
}

// Colores exactos del Manual de Marca Aguas Andinas (valores Pantone oficiales)
export const AREA_META: Record<AreaTematica, AreaMeta> = {
  'Agua y Sustentabilidad': {
    color: '#00B2E3', bg: '#00B2E3', lightBg: '#CCF0FB', // Pantone 2995c — cyan proceso
    emoji: '💧', description: 'Gestión hídrica, eficiencia energética y economía circular', short: 'Agua',
  },
  'Compliance y Gobierno Corporativo': {
    color: '#003DA5', bg: '#003DA5', lightBg: '#D6E3F7', // Pantone 293c — azul navy
    emoji: '⚖️', description: 'Antisoborno, ética corporativa y gobierno transparente', short: 'Compliance',
  },
  'Diversidad e Inclusión': {
    color: '#009A8D', bg: '#009A8D', lightBg: '#CCEEEB', // Pantone 7467c — teal
    emoji: '🤝', description: 'Equidad de género, ley Karin y bienestar integral', short: 'Diversidad',
  },
  'Experiencia de Clientes': {
    color: '#EFA220', bg: '#EFA220', lightBg: '#FFF4D6', // Pantone 137c — dorado oficial
    emoji: '⭐', description: 'Calidad de servicio, marketing digital y experiencia memorable', short: 'Clientes',
  },
  'Herramientas Colaborativas': {
    color: '#0047BB', bg: '#0047BB', lightBg: '#D6E5FF', // Pantone 2935c — azul medio
    emoji: '🛠️', description: 'Power BI, SAP, IA, comunicación y gestión de proyectos', short: 'Herramientas',
  },
  'Liderazgo': {
    color: '#D48A0A', bg: '#D48A0A', lightBg: '#FFF0CC', // variante 137c — ámbar
    emoji: '🎯', description: 'Liderazgo estratégico y desarrollo de equipos de alto desempeño', short: 'Liderazgo',
  },
  'Medio Ambiente y Biodiversidad': {
    color: '#78BE20', bg: '#78BE20', lightBg: '#E8F7CC', // Pantone 376c — verde lima
    emoji: '🌿', description: 'Gestión ambiental, residuos peligrosos y sostenibilidad', short: 'Medio Ambiente',
  },
  'Programa Inducción': {
    color: '#004C94', bg: '#004C94', lightBg: '#D6E6F5', // Pantone 2945c — azul primario
    emoji: '🎓', description: 'Bienvenida corporativa para nuevas incorporaciones a Aguas Andinas', short: 'Inducción',
  },
  'Riesgo Tecnológico': {
    color: '#6CACE4', bg: '#6CACE4', lightBg: '#E0EFF9', // Pantone 2915c — azul cielo
    emoji: '🔒', description: 'Ciberseguridad, phishing y protección de información digital', short: 'Ciberseguridad',
  },
  'Riesgos y Gestión Integrada': {
    color: '#003DA5', bg: '#003DA5', lightBg: '#D6E3F7', // Pantone 293c — azul navy
    emoji: '🔄', description: 'Continuidad del negocio, gestión de emergencias y contratos', short: 'Riesgos',
  },
  'Seguridad y Salud Ocupacional': {
    color: '#398245', bg: '#398245', lightBg: '#D9EDE0', // Pantone 348c — verde oficial
    emoji: '🦺', description: 'Prevención de riesgos, EPP, trabajos especiales y salud laboral', short: 'Seguridad',
  },
}
