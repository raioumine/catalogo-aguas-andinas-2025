import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useRef, useEffect, useState, useMemo } from 'react'
import { Search, ArrowRight, BookOpen, Layers, Monitor } from 'lucide-react'
import { COURSES, AREAS } from '../data/courses'
import { CategoryCard } from '../components/features/CategoryCard'
import { WaterBackground } from '../components/atoms/WaterBackground'

const MotionBox = motion(Box)

function useCountUp(target: number, active: boolean, duration = 900) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active || target === 0) return
    let rafId: number
    const start = performance.now()
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 4)
      setVal(Math.round(ease * target))
      if (progress < 1) { rafId = requestAnimationFrame(frame) }
      else setVal(target)
    }
    rafId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafId)
  }, [active, target, duration])
  return val
}

function StatCard({ value, label, icon }: { value: number; label: string; icon: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const display = useCountUp(value, inView)
  return (
    <Box ref={ref}
      bg="rgba(0,20,53,0.45)"
      borderRadius="16px"
      border="1px solid rgba(239,162,32,0.2)"
      backdropFilter="blur(16px)"
      p={{ base: '5', md: '6' }} textAlign="center"
      position="relative" overflow="hidden"
    >
      {/* Gold accent line */}
      <Box position="absolute" top="0" left="0" right="0" h="2px"
        bg="linear-gradient(90deg, transparent, #EFA220, transparent)" />
      <Box display="flex" justifyContent="center" mb="2" color="#EFA220">{icon}</Box>
      <Text fontFamily="heading" fontWeight="900" fontSize={{ base: '34px', md: '44px' }} color="white" lineHeight="1">
        {display}+
      </Text>
      <Text fontSize="12px" color="rgba(255,255,255,0.65)" mt="1.5" fontWeight="600" letterSpacing="0.04em" textTransform="uppercase">
        {label}
      </Text>
    </Box>
  )
}

export function LandingPage() {
  const navigate = useNavigate()
  const [searchVal, setSearchVal] = useState('')

  const countByArea = useMemo(() => {
    const map: Record<string, number> = {}
    COURSES.forEach(c => { map[c.area] = (map[c.area] ?? 0) + 1 })
    return map
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/catalogo?q=${encodeURIComponent(searchVal)}`)
  }

  return (
    <Box>
      {/* ── HERO ── */}
      <Box
        position="relative" overflow="hidden"
        bg="linear-gradient(145deg, #001435 0%, #003060 40%, #004C94 80%, #003880 100%)"
        minH={{ base: '540px', md: '600px' }}
        display="flex" alignItems="center"
      >
        <WaterBackground />

        <Box
          position="relative" zIndex="1"
          maxW="1100px" mx="auto" px={{ base: '5', md: '8' }}
          py={{ base: '16', md: '20' }} w="full"
        >
          {/* Pre-title pill */}
          <MotionBox
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            display="inline-flex" alignItems="center" gap="2"
            px="4" py="2" borderRadius="full"
            bg="rgba(239,162,32,0.15)"
            border="1px solid rgba(239,162,32,0.35)"
            mb="6"
          >
            <Box w="6px" h="6px" borderRadius="full" bg="#EFA220" style={{ animation: 'goldPulse 2s ease-in-out infinite' }} />
            <Text fontSize="11px" fontWeight="700" color="#EFA220" letterSpacing="0.1em" textTransform="uppercase">
              Catálogo Oficial de Formación 2026
            </Text>
          </MotionBox>

          {/* Main title */}
          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Text
              fontFamily="heading" fontWeight="800"
              fontSize={{ base: '36px', md: '54px', lg: '62px' }}
              color="white" lineHeight="1.05" mb="4" letterSpacing="-0.02em"
            >
              Desarrollamos el talento<br />
              <Text as="span"
                style={{
                  background: 'linear-gradient(90deg, #EFA220, #FFCF4A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                que cuida el agua
              </Text>
            </Text>
          </MotionBox>

          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}>
            <Text fontSize={{ base: '15px', md: '18px' }} color="rgba(255,255,255,0.70)" mb="8" maxW="540px" lineHeight="1.7" fontWeight="400">
              Explora las {COURSES.length} formaciones del Grupo Aguas Andinas. Filtra por área temática, modalidad y audiencia para encontrar tu próximo curso.
            </Text>
          </MotionBox>

          {/* Search bar */}
          <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
            <form onSubmit={handleSearch} style={{ maxWidth: '640px' }}>
              <div style={{
                display: 'flex', background: 'white', borderRadius: '14px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.3)', overflow: 'hidden', height: '56px',
                border: '1.5px solid rgba(239,162,32,0.3)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', flex: 1, gap: '12px' }}>
                  <Search size={17} color="#9AACC0" />
                  <input
                    value={searchVal}
                    onChange={e => setSearchVal(e.target.value)}
                    placeholder="Buscar por nombre de curso, objetivo o área…"
                    style={{
                      flex: 1, border: 'none', outline: 'none',
                      fontSize: '14px', color: '#001435', background: 'transparent',
                      fontFamily: 'Montserrat, sans-serif', fontWeight: 500,
                    }}
                  />
                </div>
                <button type="submit" style={{
                  padding: '0 24px',
                  background: 'linear-gradient(135deg, #004C94 0%, #003060 100%)',
                  color: 'white',
                  fontWeight: 700, fontSize: '13px', fontFamily: 'Montserrat, sans-serif',
                  border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                  letterSpacing: '0.03em', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #EFA220 0%, #D48A0A 100%)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #004C94 0%, #003060 100%)')}
                >
                  Buscar <ArrowRight size={15} />
                </button>
              </div>
            </form>
          </MotionBox>

          {/* Stats row */}
          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <SimpleGrid columns={3} gap="4" maxW="480px" mt="10">
              <StatCard value={COURSES.length} label="Formaciones" icon={<BookOpen size={20}/>} />
              <StatCard value={AREAS.length} label="Áreas" icon={<Layers size={20}/>} />
              <StatCard value={3} label="Modalidades" icon={<Monitor size={20}/>} />
            </SimpleGrid>
          </MotionBox>
        </Box>
      </Box>

      {/* ── CATEGORIES ── */}
      <Box maxW="1280px" mx="auto" px={{ base: '4', md: '8' }} py={{ base: '12', md: '16' }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          mb="10" textAlign="center"
        >
          <Text fontSize="11px" fontWeight="700" letterSpacing="0.12em" color="#EFA220" mb="3"
            textTransform="uppercase">
            Explorar por área temática
          </Text>
          <Text fontFamily="heading" fontWeight="800" fontSize={{ base: '26px', md: '36px' }} color="#001435"
            letterSpacing="-0.02em">
            {AREAS.length} áreas de formación
          </Text>
          <Text fontSize="15px" color="#6A7E98" mt="3" fontWeight="400" maxW="480px" mx="auto">
            Desde seguridad hasta liderazgo: todo el conocimiento que necesita tu equipo.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="4">
          {AREAS.map((area, i) => (
            <CategoryCard
              key={area} area={area} count={countByArea[area] ?? 0} index={i}
              onClick={() => navigate(`/catalogo?area=${encodeURIComponent(area)}`)}
            />
          ))}
        </SimpleGrid>

        {/* CTA button */}
        <Flex justify="center" mt="10">
          <Box
            as="button" onClick={() => navigate('/catalogo')}
            display="inline-flex" alignItems="center" gap="2.5"
            px="8" py="4" borderRadius="12px"
            bg="linear-gradient(135deg, #004C94 0%, #003060 100%)"
            color="white"
            fontFamily="heading" fontWeight="700" fontSize="14px"
            border="none" cursor="pointer"
            boxShadow="0 4px 24px rgba(0,76,148,0.35)"
            letterSpacing="0.02em"
            style={{ transition: 'all 0.25s' }}
            _hover={{
              bg: 'linear-gradient(135deg, #EFA220 0%, #D48A0A 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 32px rgba(239,162,32,0.4)',
            }}
          >
            Ver catálogo completo
            <ArrowRight size={16} />
          </Box>
        </Flex>
      </Box>

      {/* ── ISO BADGES SECTION ── */}
      <Box bg="#001435" py={{ base: '10', md: '14' }} position="relative" overflow="hidden">
        {/* Ola decorativa superior */}
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40px' }}>
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,25 1440,20 L1440,0 L0,0 Z"
            fill="#EEF3FB" />
        </svg>
        <svg viewBox="0 0 1440 30" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30px' }}>
          <path d="M0,15 C240,0 480,28 720,15 C960,2 1200,28 1440,15 L1440,30 L0,30 Z"
            fill="#EEF3FB" />
        </svg>

        <Box maxW="1100px" mx="auto" px={{ base: '4', md: '8' }} position="relative">
          <Text
            fontSize="11px" fontWeight="700" letterSpacing="0.12em" color="#EFA220"
            textAlign="center" mb="3" textTransform="uppercase"
          >
            Normas y certificaciones
          </Text>
          <Text
            fontFamily="heading" fontWeight="800" fontSize={{ base: '18px', md: '24px' }}
            color="white" textAlign="center" mb="8" letterSpacing="-0.01em"
          >
            Alineados a sistemas de gestión internacionales
          </Text>
          <Flex gap="3" flexWrap="wrap" justify="center">
            {[
              { label: 'ISO 45001', sub: 'Seguridad' },
              { label: 'ISO 14001', sub: 'Ambiental' },
              { label: 'ISO 27001', sub: 'TI' },
              { label: 'ISO 37001', sub: 'Antisoborno' },
              { label: 'ISO 9001', sub: 'Calidad' },
              { label: 'ISO 22301', sub: 'Continuidad' },
              { label: 'ISO 50001', sub: 'Energía' },
              { label: 'NCH 3262', sub: 'Género' },
            ].map(iso => (
              <Box key={iso.label}
                px="4" py="2.5" borderRadius="10px"
                bg="rgba(255,255,255,0.06)"
                border="1px solid rgba(239,162,32,0.2)"
                fontSize="13px" color="white"
                fontWeight="700"
                letterSpacing="-0.01em"
                style={{ transition: 'all 0.2s', cursor: 'default' }}
              >
                {iso.label} <Text as="span" color="#EFA220" fontWeight="600">· {iso.sub}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
