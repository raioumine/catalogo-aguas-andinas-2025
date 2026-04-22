import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router'
import { Search, X, SlidersHorizontal, LayoutGrid, List } from 'lucide-react'
import { COURSES } from '../data/courses'
import type { Course, FilterState } from '../types'
import { CourseCard } from '../components/features/CourseCard'
import { FilterPanel } from '../components/features/FilterPanel'
import { CourseModal } from '../components/features/CourseModal'

export function CatalogPage() {
  const [params] = useSearchParams()
  const [filters, setFilters] = useState<FilterState>({
    search: params.get('q') ?? '',
    areas: params.get('area') ? [decodeURIComponent(params.get('area')!)] : [],
    modalidades: [],
    audiencias: [],
    sistemas: [],
  })
  const [selected, setSelected] = useState<Course | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const q = params.get('q')
    const area = params.get('area')
    if (q) setFilters(f => ({ ...f, search: q }))
    if (area) setFilters(f => ({ ...f, areas: [decodeURIComponent(area)] }))
  }, [params])

  const filtered = useMemo(() => {
    const q = filters.search.toLowerCase().trim()
    return COURSES.filter(c => {
      const matchSearch = !q ||
        c.nombre.toLowerCase().includes(q) ||
        c.objetivo.toLowerCase().includes(q) ||
        c.area.toLowerCase().includes(q) ||
        c.sistemaGestion.toLowerCase().includes(q) ||
        c.dirigido.toLowerCase().includes(q) ||
        c.audienciaTag.toLowerCase().includes(q)
      const matchArea = !filters.areas.length || filters.areas.includes(c.area)
      const matchMod  = !filters.modalidades.length || filters.modalidades.includes(c.modalidad)
      const matchAud  = !filters.audiencias.length || filters.audiencias.includes(c.audienciaTag)
      return matchSearch && matchArea && matchMod && matchAud
    })
  }, [filters])

  const activeFiltersCount = filters.areas.length + filters.modalidades.length + filters.audiencias.length

  return (
    <Box maxW="1280px" mx="auto" px={{ base: '4', md: '6', lg: '8' }} py={{ base: '6', md: '8' }}>
      {/* Page title */}
      <Box mb="6">
        <Text fontFamily="heading" fontWeight="800" fontSize={{ base: '24px', md: '32px' }} color="#001747">
          Catálogo de Formación 2025
        </Text>
        <Text fontSize="15px" color="#7A90A8" mt="1">
          {COURSES.length} formaciones · {filters.areas.length > 0 ? filters.areas.join(', ') : 'Todas las áreas'}
        </Text>
      </Box>

      {/* Search + controls bar */}
      <Flex
        gap="3" mb="6" align="center"
        bg="white" borderRadius="14px" p="3"
        boxShadow="0 2px 10px rgba(0,43,114,0.07)"
        border="1px solid rgba(0,43,114,0.08)"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
      >
        {/* Search input */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '200px',
          background: '#F5F8FF', borderRadius: '10px', padding: '0 12px', height: '42px',
        }}>
          <Search size={16} color="#9AACC0" />
          <input
            ref={inputRef}
            value={filters.search}
            onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
            placeholder="Buscar formación, objetivo, área…"
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontSize: '14px', color: '#001747', fontFamily: 'Inter, sans-serif',
            }}
          />
          {filters.search && (
            <div style={{ cursor: 'pointer' }} onClick={() => setFilters(f => ({ ...f, search: '' }))}>
              <X size={14} color="#9AACC0" />
            </div>
          )}
        </div>

        {/* Filter toggle (mobile) */}
        <Flex
          align="center" gap="2" px="4" h="42px" borderRadius="10px" cursor="pointer"
          bg={showFilters ? '#002B72' : '#F5F8FF'} color={showFilters ? 'white' : '#002B72'}
          fontWeight="600" fontSize="13px"
          onClick={() => setShowFilters(v => !v)}
          display={{ base: 'flex', lg: 'none' }}
          position="relative"
        >
          <SlidersHorizontal size={15} />
          Filtros
          {activeFiltersCount > 0 && (
            <Box position="absolute" top="-4px" right="-4px"
              w="18px" h="18px" borderRadius="full" bg="#00A0C6"
              display="flex" alignItems="center" justifyContent="center"
              fontSize="10px" fontWeight="700" color="white">
              {activeFiltersCount}
            </Box>
          )}
        </Flex>

        {/* View toggle */}
        <Flex bg="#F5F8FF" borderRadius="10px" overflow="hidden" h="42px" flexShrink={0}>
          {(['grid', 'list'] as const).map(v => (
            <Flex key={v} w="42px" align="center" justify="center" cursor="pointer"
              bg={view === v ? '#002B72' : 'transparent'} color={view === v ? 'white' : '#9AACC0'}
              onClick={() => setView(v)} transition="all 0.2s">
              {v === 'grid' ? <LayoutGrid size={15}/> : <List size={15}/>}
            </Flex>
          ))}
        </Flex>

        {/* Result count */}
        <Text fontSize="13px" color="#7A90A8" fontWeight="500" flexShrink={0} display={{ base: 'none', md: 'block' }}>
          <Text as="span" fontWeight="700" color="#002B72">{filtered.length}</Text> resultados
        </Text>
      </Flex>

      {/* Main layout: sidebar + grid */}
      <Flex gap="6" align="flex-start">
        {/* Sidebar — desktop always visible, mobile conditionally */}
        <Box
          w="280px" flexShrink={0}
          display={{ base: showFilters ? 'block' : 'none', lg: 'block' }}
          position={{ base: 'fixed', lg: 'sticky' }}
          top={{ base: 'auto', lg: '80px' }}
          bottom={{ base: '0', lg: 'auto' }}
          left={{ base: '0', lg: 'auto' }}
          right={{ base: '0', lg: 'auto' }}
          zIndex={{ base: '150', lg: 'auto' }}
          bg={{ base: 'white', lg: 'transparent' }}
          maxH={{ base: '75vh', lg: 'calc(100vh - 96px)' }}
          overflowY="auto"
          borderTopRadius={{ base: '20px', lg: '0' }}
          boxShadow={{ base: '0 -4px 40px rgba(0,43,114,0.15)', lg: 'none' }}
          p={{ base: '4', lg: '0' }}
        >
          {/* Mobile drag handle */}
          <Box display={{ base: 'flex', lg: 'none' }} justifyContent="center" mb="3">
            <Box w="40px" h="4px" borderRadius="full" bg="#E0E8F0" />
          </Box>

          <FilterPanel filters={filters} onChange={setFilters} resultCount={filtered.length} />
        </Box>

        {/* Mobile filter backdrop */}
        {showFilters && (
          <Box
            display={{ base: 'block', lg: 'none' }}
            position="fixed" inset="0" zIndex="149"
            bg="rgba(0,23,71,0.4)" backdropFilter="blur(2px)"
            onClick={() => setShowFilters(false)}
          />
        )}

        {/* Course grid */}
        <Box flex="1" minW="0">
          {filtered.length === 0 ? (
            <EmptyState onClear={() => setFilters({ search: '', areas: [], modalidades: [], audiencias: [], sistemas: [] })} />
          ) : (
            <SimpleGrid
              columns={view === 'grid'
                ? { base: 1, sm: 2, xl: 3 }
                : { base: 1 }}
              gap={view === 'grid' ? '4' : '3'}
            >
              {filtered.map(c => (
                <CourseCard key={c.id} course={c} onClick={setSelected} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Flex>

      {/* Course detail modal */}
      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </Box>
  )
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <Box
      textAlign="center" py="16" px="8"
      bg="white" borderRadius="16px"
      border="1px dashed rgba(0,43,114,0.15)"
    >
      <Text fontSize="40px" mb="3">🔍</Text>
      <Text fontFamily="heading" fontWeight="700" fontSize="20px" color="#001747" mb="2">
        No encontramos formaciones
      </Text>
      <Text fontSize="14px" color="#7A90A8" mb="5">
        Intenta con otros términos o elimina algunos filtros.
      </Text>
      <Box
        as="button" onClick={onClear}
        px="6" py="3" borderRadius="10px"
        bg="#002B72" color="white" fontWeight="600" fontSize="14px"
        border="none" cursor="pointer"
        style={{ transition: 'all 0.2s' }}
      >
        Limpiar filtros
      </Box>
    </Box>
  )
}
