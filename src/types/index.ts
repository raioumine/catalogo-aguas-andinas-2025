export type Modalidad = 'Online' | 'Presencial' | 'Presencial/Online' | 'Blended'

export type AreaTematica =
  | 'Agua y Sustentabilidad'
  | 'Compliance y Gobierno Corporativo'
  | 'Diversidad e Inclusión'
  | 'Experiencia de Clientes'
  | 'Herramientas Colaborativas'
  | 'Liderazgo'
  | 'Medio Ambiente y Biodiversidad'
  | 'Programa Inducción'
  | 'Riesgo Tecnológico'
  | 'Riesgos y Gestión Integrada'
  | 'Seguridad y Salud Ocupacional'

export interface Course {
  id: string
  orden: number
  area: AreaTematica
  sistemaGestion: string
  nombre: string
  objetivo: string
  dirigido: string
  audienciaTag: string
  modalidad: Modalidad
}

export interface FilterState {
  search: string
  areas: string[]
  modalidades: string[]
  audiencias: string[]
  sistemas: string[]
}

export interface AreaConfig {
  label: AreaTematica
  color: string
  bg: string
  icon: string
  description: string
}
