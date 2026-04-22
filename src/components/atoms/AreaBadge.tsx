import { Box } from '@chakra-ui/react'
import type { AreaTematica } from '../../types'
import { AREA_META } from './areaConfig'

interface Props { area: AreaTematica; size?: 'sm' | 'md' }

export function AreaBadge({ area, size = 'sm' }: Props) {
  const meta = AREA_META[area]
  const pad = size === 'sm' ? '2px 8px' : '4px 12px'
  const fs  = size === 'sm' ? '11px' : '12px'
  return (
    <Box
      as="span"
      display="inline-flex" alignItems="center" gap="4px"
      px={size === 'sm' ? '2' : '3'} py="0.5"
      borderRadius="full"
      fontSize={fs} fontWeight="600" lineHeight="1.4"
      bg={meta.lightBg} color={meta.color}
      border="1px solid" borderColor={meta.color + '33'}
      style={{ padding: pad, fontSize: fs }}
    >
      <span style={{ fontSize: size === 'sm' ? '10px' : '12px' }}>{meta.emoji}</span>
      {meta.short}
    </Box>
  )
}
