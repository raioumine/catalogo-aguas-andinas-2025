import { Box, Flex, Text } from '@chakra-ui/react'
import { X, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react'
import { useState, useMemo } from 'react'
import { COURSES, AREAS, MODALIDADES, AUDIENCIAS } from '../../data/courses'
import type { FilterState } from '../../types'

interface Props {
  filters: FilterState
  onChange: (f: FilterState) => void
  resultCount: number
}

export function FilterPanel({ filters, onChange, resultCount }: Props) {
  const [openSections, setOpenSections] = useState({ areas: true, modalidades: true, audiencias: false })

  const toggle = (k: keyof typeof openSections) =>
    setOpenSections(p => ({ ...p, [k]: !p[k] }))

  const toggleFilter = (key: 'areas' | 'modalidades' | 'audiencias', val: string) => {
    const cur = filters[key] as string[]
    onChange({ ...filters, [key]: cur.includes(val) ? cur.filter(x => x !== val) : [...cur, val] })
  }

  const activeCount = filters.areas.length + filters.modalidades.length + filters.audiencias.length

  const countByArea = useMemo(() => {
    const map: Record<string, number> = {}
    COURSES.forEach(c => { map[c.area] = (map[c.area] ?? 0) + 1 })
    return map
  }, [])

  const countByModalidad = useMemo(() => {
    const map: Record<string, number> = {}
    COURSES.forEach(c => { map[c.modalidad] = (map[c.modalidad] ?? 0) + 1 })
    return map
  }, [])

  return (
    <Box
      bg="white" borderRadius="16px"
      border="1px solid rgba(0,76,148,0.08)"
      boxShadow="0 2px 16px rgba(0,20,53,0.06)"
      overflow="hidden"
    >
      {/* Gold top accent */}
      <Box h="3px" bg="linear-gradient(90deg, #004C94, #EFA220, #398245)" />

      {/* Header */}
      <Flex
        align="center" justify="space-between"
        px="4" py="3.5"
        borderBottom="1px solid rgba(0,76,148,0.06)"
        bg="rgba(0,76,148,0.02)"
      >
        <Flex align="center" gap="2">
          <SlidersHorizontal size={14} color="#004C94" />
          <Text fontWeight="700" fontSize="13px" color="#001435" letterSpacing="0.01em">Filtros</Text>
          {activeCount > 0 && (
            <Box px="2" py="0.5" borderRadius="full"
              bg="#EFA220" color="white"
              fontSize="11px" fontWeight="700">
              {activeCount}
            </Box>
          )}
        </Flex>
        {activeCount > 0 && (
          <Text
            fontSize="12px" fontWeight="700" color="#004C94" cursor="pointer"
            letterSpacing="0.02em"
            onClick={() => onChange({ search: filters.search, areas: [], modalidades: [], audiencias: [], sistemas: [] })}
            _hover={{ color: '#EFA220' }}
            transition="color 0.15s"
          >
            Limpiar
          </Text>
        )}
      </Flex>

      {/* Result count */}
      <Box px="4" py="3" borderBottom="1px solid rgba(0,76,148,0.05)" bg="rgba(0,76,148,0.02)">
        <Text fontSize="13px" color="#4A5E7A" fontWeight="400">
          <Text as="span" fontWeight="800" color="#004C94">{resultCount}</Text> formaciones encontradas
        </Text>
      </Box>

      {/* Active filter chips */}
      {activeCount > 0 && (
        <Box px="4" py="3" borderBottom="1px solid rgba(0,76,148,0.05)">
          <Flex gap="2" flexWrap="wrap">
            {[...filters.areas, ...filters.modalidades, ...filters.audiencias].map(chip => (
              <Flex key={chip} align="center" gap="1" px="2.5" py="1" borderRadius="full"
                bg="rgba(0,76,148,0.08)" color="#004C94"
                fontSize="11px" fontWeight="700" cursor="pointer"
                border="1px solid rgba(0,76,148,0.15)"
                onClick={() => {
                  if (filters.areas.includes(chip)) toggleFilter('areas', chip)
                  else if (filters.modalidades.includes(chip)) toggleFilter('modalidades', chip)
                  else toggleFilter('audiencias', chip)
                }}
                _hover={{ bg: 'rgba(239,162,32,0.12)', color: '#D48A0A', borderColor: 'rgba(239,162,32,0.3)' }}
                transition="all 0.15s"
              >
                {chip.length > 18 ? chip.substring(0, 18) + '…' : chip}
                <X size={10} />
              </Flex>
            ))}
          </Flex>
        </Box>
      )}

      {/* Área Temática */}
      <FilterSection
        label="Área Temática" open={openSections.areas} onToggle={() => toggle('areas')}
        items={AREAS} selected={filters.areas} counts={countByArea}
        onToggleItem={v => toggleFilter('areas', v)}
      />

      {/* Modalidad */}
      <FilterSection
        label="Modalidad" open={openSections.modalidades} onToggle={() => toggle('modalidades')}
        items={MODALIDADES} selected={filters.modalidades} counts={countByModalidad}
        onToggleItem={v => toggleFilter('modalidades', v)}
      />

      {/* Audiencia */}
      <FilterSection
        label="Audiencia" open={openSections.audiencias} onToggle={() => toggle('audiencias')}
        items={AUDIENCIAS} selected={filters.audiencias} counts={{}}
        onToggleItem={v => toggleFilter('audiencias', v)}
      />
    </Box>
  )
}

function FilterSection({
  label, open, onToggle, items, selected, counts, onToggleItem
}: {
  label: string; open: boolean; onToggle: () => void
  items: readonly string[]; selected: string[]; counts: Record<string, number>
  onToggleItem: (v: string) => void
}) {
  return (
    <Box borderBottom="1px solid rgba(0,76,148,0.05)">
      <Flex
        align="center" justify="space-between" px="4" py="3"
        cursor="pointer" onClick={onToggle}
        _hover={{ bg: 'rgba(0,76,148,0.02)' }}
        transition="bg 0.15s"
      >
        <Text fontWeight="700" fontSize="12px" color="#001435" letterSpacing="0.03em" textTransform="uppercase">
          {label}
        </Text>
        {open ? <ChevronUp size={13} color="#9AACC0" /> : <ChevronDown size={13} color="#9AACC0" />}
      </Flex>
      {open && (
        <Box px="4" pb="3" display="flex" flexDirection="column" gap="1">
          {items.map(item => {
            const active = selected.includes(item)
            return (
              <Flex key={item} align="center" gap="2.5" cursor="pointer"
                onClick={() => onToggleItem(item)} py="1.5"
              >
                {/* Custom checkbox */}
                <Box className="cb" w="16px" h="16px" borderRadius="4px" flexShrink={0}
                  border="1.5px solid" borderColor={active ? '#004C94' : '#C8D4E0'}
                  bg={active ? '#004C94' : 'white'}
                  display="flex" alignItems="center" justifyContent="center"
                  transition="all 0.15s"
                >
                  {active && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3L3.5 5.5L8 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Box>
                <Text fontSize="13px" color={active ? '#001435' : '#4A5E7A'}
                  fontWeight={active ? '700' : '400'} flex="1">
                  {item}
                </Text>
                {counts[item] !== undefined && (
                  <Text fontSize="11px" color="#B0BEC9">{counts[item]}</Text>
                )}
              </Flex>
            )
          })}
        </Box>
      )}
    </Box>
  )
}
