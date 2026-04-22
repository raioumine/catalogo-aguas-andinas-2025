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
      border="1px solid rgba(0,43,114,0.09)"
      boxShadow="0 2px 12px rgba(0,43,114,0.05)"
      overflow="hidden"
    >
      {/* Header */}
      <Flex
        align="center" justify="space-between"
        px="4" py="4"
        borderBottom="1px solid rgba(0,43,114,0.07)"
        bg="rgba(0,43,114,0.02)"
      >
        <Flex align="center" gap="2">
          <SlidersHorizontal size={15} color="#002B72" />
          <Text fontWeight="700" fontSize="14px" color="#001747">Filtros</Text>
          {activeCount > 0 && (
            <Box px="2" py="0.5" borderRadius="full" bg="#002B72" color="white" fontSize="11px" fontWeight="700">
              {activeCount}
            </Box>
          )}
        </Flex>
        {activeCount > 0 && (
          <Text
            fontSize="12px" fontWeight="600" color="#00A0C6" cursor="pointer"
            onClick={() => onChange({ search: filters.search, areas: [], modalidades: [], audiencias: [], sistemas: [] })}
            _hover={{ color: '#0077A0' }}
          >
            Limpiar
          </Text>
        )}
      </Flex>

      {/* Result count */}
      <Box px="4" py="3" borderBottom="1px solid rgba(0,43,114,0.06)" bg="rgba(0,160,198,0.04)">
        <Text fontSize="13px" color="#5A6A85">
          <Text as="span" fontWeight="700" color="#002B72">{resultCount}</Text> formaciones encontradas
        </Text>
      </Box>

      {/* Active filter chips */}
      {activeCount > 0 && (
        <Box px="4" py="3" borderBottom="1px solid rgba(0,43,114,0.06)">
          <Flex gap="2" flexWrap="wrap">
            {[...filters.areas, ...filters.modalidades, ...filters.audiencias].map(chip => (
              <Flex key={chip} align="center" gap="1" px="2" py="1" borderRadius="full"
                bg="#EEF2FF" color="#002B72" fontSize="11px" fontWeight="600" cursor="pointer"
                onClick={() => {
                  if (filters.areas.includes(chip)) toggleFilter('areas', chip)
                  else if (filters.modalidades.includes(chip)) toggleFilter('modalidades', chip)
                  else toggleFilter('audiencias', chip)
                }}
                _hover={{ bg: '#E0E8FF' }}
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
    <Box borderBottom="1px solid rgba(0,43,114,0.06)">
      <Flex
        align="center" justify="space-between" px="4" py="3"
        cursor="pointer" onClick={onToggle}
        _hover={{ bg: 'rgba(0,43,114,0.02)' }}
      >
        <Text fontWeight="600" fontSize="13px" color="#001747">{label}</Text>
        {open ? <ChevronUp size={14} color="#9AACC0" /> : <ChevronDown size={14} color="#9AACC0" />}
      </Flex>
      {open && (
        <Box px="4" pb="3" display="flex" flexDirection="column" gap="1.5">
          {items.map(item => {
            const active = selected.includes(item)
            return (
              <Flex key={item} align="center" gap="2.5" cursor="pointer"
                onClick={() => onToggleItem(item)} py="1"
                _hover={{ '& .cb': { borderColor: '#00A0C6' } }}
              >
                {/* Custom checkbox */}
                <Box className="cb" w="16px" h="16px" borderRadius="4px" flexShrink={0}
                  border="1.5px solid" borderColor={active ? '#002B72' : '#C8D4E0'}
                  bg={active ? '#002B72' : 'white'}
                  display="flex" alignItems="center" justifyContent="center"
                  transition="all 0.15s"
                >
                  {active && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3L3.5 5.5L8 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Box>
                <Text fontSize="13px" color={active ? '#001747' : '#5A6A85'}
                  fontWeight={active ? '600' : '400'} flex="1">
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
