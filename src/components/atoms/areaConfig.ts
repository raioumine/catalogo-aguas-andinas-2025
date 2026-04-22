import type { AreaTematica } from '../../types'

export interface AreaMeta {
  color: string
  bg: string
  lightBg: string
  emoji: string
  description: string
  short: string
}

export const AREA_META: Record<AreaTematica, AreaMeta> = {
  'Agua y Sustentabilidad': {
    color: '#00A0C6', bg: '#00A0C6', lightBg: '#E0F7FC',
    emoji: '💧', description: 'Gestión hídrica, eficiencia energética y economía circular', short: 'Agua',
  },
  'Compliance y Gobierno Corporativo': {
    color: '#5B21B6', bg: '#5B21B6', lightBg: '#EDE9FE',
    emoji: '⚖️', description: 'Antisoborno, ética corporativa y gobierno transparente', short: 'Compliance',
  },
  'Diversidad e Inclusión': {
    color: '#DB2777', bg: '#DB2777', lightBg: '#FCE7F3',
    emoji: '🤝', description: 'Equidad de género, ley Karin y bienestar integral', short: 'Diversidad',
  },
  'Experiencia de Clientes': {
    color: '#EA580C', bg: '#EA580C', lightBg: '#FFF7ED',
    emoji: '⭐', description: 'Calidad de servicio, marketing digital y experiencia memorable', short: 'Clientes',
  },
  'Herramientas Colaborativas': {
    color: '#0D9488', bg: '#0D9488', lightBg: '#F0FDFA',
    emoji: '🛠️', description: 'Power BI, SAP, IA, comunicación y gestión de proyectos', short: 'Herramientas',
  },
  'Liderazgo': {
    color: '#D97706', bg: '#D97706', lightBg: '#FEF3C7',
    emoji: '🎯', description: 'Liderazgo estratégico y desarrollo de equipos de alto desempeño', short: 'Liderazgo',
  },
  'Medio Ambiente y Biodiversidad': {
    color: '#16A34A', bg: '#16A34A', lightBg: '#F0FDF4',
    emoji: '🌿', description: 'Gestión ambiental, residuos peligrosos y sostenibilidad', short: 'Medio Ambiente',
  },
  'Programa Inducción': {
    color: '#2563EB', bg: '#2563EB', lightBg: '#EFF6FF',
    emoji: '🎓', description: 'Bienvenida corporativa para nuevas incorporaciones a Aguas Andinas', short: 'Inducción',
  },
  'Riesgo Tecnológico': {
    color: '#DC2626', bg: '#DC2626', lightBg: '#FEF2F2',
    emoji: '🔒', description: 'Ciberseguridad, phishing y protección de información digital', short: 'Ciberseguridad',
  },
  'Riesgos y Gestión Integrada': {
    color: '#B45309', bg: '#B45309', lightBg: '#FFFBEB',
    emoji: '🔄', description: 'Continuidad del negocio, gestión de emergencias y contratos', short: 'Riesgos',
  },
  'Seguridad y Salud Ocupacional': {
    color: '#E11D48', bg: '#E11D48', lightBg: '#FFF1F2',
    emoji: '🦺', description: 'Prevención de riesgos, EPP, trabajos especiales y salud laboral', short: 'Seguridad',
  },
}
