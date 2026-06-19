import type { AreaTematica } from '../../types'

export interface AreaMeta {
  color: string
  bg: string
  lightBg: string
  emoji: string
  description: string
  short: string
}

// Colores mapeados a la paleta oficial del Manual de Marca Aguas Andinas
export const AREA_META: Record<AreaTematica, AreaMeta> = {
  'Agua y Sustentabilidad': {
    color: '#00A9E0', bg: '#00A9E0', lightBg: '#D0F0FB', // Pantone 2995c — cyan
    emoji: '💧', description: 'Gestión hídrica, eficiencia energética y economía circular', short: 'Agua',
  },
  'Compliance y Gobierno Corporativo': {
    color: '#1D3C8F', bg: '#1D3C8F', lightBg: '#E0E6F5', // Pantone 293c — azul profundo
    emoji: '⚖️', description: 'Antisoborno, ética corporativa y gobierno transparente', short: 'Compliance',
  },
  'Diversidad e Inclusión': {
    color: '#009B96', bg: '#009B96', lightBg: '#D0EFEE', // Pantone 7467c — teal
    emoji: '🤝', description: 'Equidad de género, ley Karin y bienestar integral', short: 'Diversidad',
  },
  'Experiencia de Clientes': {
    color: '#EFA220', bg: '#EFA220', lightBg: '#FFF4D6', // Pantone 137c — dorado oficial
    emoji: '⭐', description: 'Calidad de servicio, marketing digital y experiencia memorable', short: 'Clientes',
  },
  'Herramientas Colaborativas': {
    color: '#0041A8', bg: '#0041A8', lightBg: '#D0DEFF', // Pantone 2935c — azul medio
    emoji: '🛠️', description: 'Power BI, SAP, IA, comunicación y gestión de proyectos', short: 'Herramientas',
  },
  'Liderazgo': {
    color: '#D48A0A', bg: '#D48A0A', lightBg: '#FFF4D6', // Ámbar — variante 137c
    emoji: '🎯', description: 'Liderazgo estratégico y desarrollo de equipos de alto desempeño', short: 'Liderazgo',
  },
  'Medio Ambiente y Biodiversidad': {
    color: '#72BF44', bg: '#72BF44', lightBg: '#E6F6D8', // Pantone 376c — verde lima
    emoji: '🌿', description: 'Gestión ambiental, residuos peligrosos y sostenibilidad', short: 'Medio Ambiente',
  },
  'Programa Inducción': {
    color: '#004C94', bg: '#004C94', lightBg: '#E6EEF7', // Pantone 2945c — azul primario
    emoji: '🎓', description: 'Bienvenida corporativa para nuevas incorporaciones a Aguas Andinas', short: 'Inducción',
  },
  'Riesgo Tecnológico': {
    color: '#6AB4E8', bg: '#6AB4E8', lightBg: '#E0F1FC', // Pantone 2915c — azul cielo
    emoji: '🔒', description: 'Ciberseguridad, phishing y protección de información digital', short: 'Ciberseguridad',
  },
  'Riesgos y Gestión Integrada': {
    color: '#1D3C8F', bg: '#1D3C8F', lightBg: '#E0E6F5', // Pantone 293c — azul oscuro
    emoji: '🔄', description: 'Continuidad del negocio, gestión de emergencias y contratos', short: 'Riesgos',
  },
  'Seguridad y Salud Ocupacional': {
    color: '#398245', bg: '#398245', lightBg: '#DFF0E4', // Pantone 348c — verde oficial
    emoji: '🦺', description: 'Prevención de riesgos, EPP, trabajos especiales y salud laboral', short: 'Seguridad',
  },
}
