import { Box } from '@chakra-ui/react'
import type { Modalidad } from '../../types'

const CONFIG: Record<Modalidad, { label: string; color: string; bg: string; icon: string }> = {
  Online:              { label: 'Online',     color: '#004C94', bg: '#E6EEF7', icon: '💻' },
  Presencial:          { label: 'Presencial', color: '#398245', bg: '#DFF0E4', icon: '🏫' },
  'Presencial/Online': { label: 'Híbrido',   color: '#D48A0A', bg: '#FFF4D6', icon: '🔄' },
  Blended:             { label: 'Blended',   color: '#7C3AED', bg: '#F5F3FF', icon: '🎓' },
}

interface Props { modalidad: Modalidad; size?: 'sm' | 'md' }

export function ModalidadBadge({ modalidad, size = 'sm' }: Props) {
  const cfg = CONFIG[modalidad] ?? CONFIG['Online']
  const pad = size === 'sm' ? '2px 8px' : '4px 12px'
  const fs  = size === 'sm' ? '11px' : '12px'
  return (
    <Box as="span" display="inline-flex" alignItems="center" gap="4px"
      borderRadius="full" fontWeight="700"
      bg={cfg.bg} color={cfg.color}
      border="1px solid" borderColor={cfg.color + '35'}
      style={{ padding: pad, fontSize: fs }}
    >
      <span style={{ fontSize: size === 'sm' ? '10px' : '12px' }}>{cfg.icon}</span>
      {cfg.label}
    </Box>
  )
}
