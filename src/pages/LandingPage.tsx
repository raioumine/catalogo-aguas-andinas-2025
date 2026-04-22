import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useRef, useEffect, useState, useMemo } from 'react'
import { Search, ArrowRight, BookOpen, Layers, Monitor } from 'lucide-react'
import { COURSES, AREAS } from '../data/courses'
import { CategoryCard } from '../components/features/CategoryCard'
import { WaterBackground } from '../components/atoms/WaterBackground'

const MotionBox = motion(Box)

function useCountUp(target: number, duration = 1500) {
  const [val, setVal] = useState(0)
  const ref = useRef(false)
  useEffect(() => {
    if (ref.current) return
    ref.current = true
    const start = performance.now()
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(frame)
      else setVal(target)
    }
    setTimeout(() => requestAnimationFrame(frame), 400)
  }, [target, duration])
  return val
}

function StatCard({ value, label, icon }: { value: number; label: string; icon: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const count = inView ? value : 0
  const display = useCountUp(count)
  return (
    <Box ref={ref}
      bg="rgba(255,255,255,0.12)" borderRadius="16px"
      border="1px solid rgba(255,255,255,0.2)"
      backdropFilter="blur(12px)"
      p={{ base: '5', md: '6' }} textAlign="center"
    >
      <Box display="flex" justifyContent="center" mb="2" color="rgba(0,160,198,0.9)">{icon}</Box>
      <Text fontFamily="heading" fontWeight="800" fontSize={{ base: '32px', md: '42px' }} color="white" lineHeight="1">
        {display}+
      </Text>
      <Text fontSize="13px" color="rgba(255,255,255,0.75)" mt="1" fontWeight="500">{label}</Text>
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
        bg="linear-gradient(135deg, #001747 0%, #002B72 45%, #003F9E 80%, #00558C 100%)"
        minH={{ base: '520px', md: '580px' }}
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
            bg="rgba(0,160,198,0.18)" border="1px solid rgba(0,160,198,0.35)"
            mb="5"
          >
            <Box w="6px" h="6px" borderRadius="full" bg="#00A0C6" />
            <Text fontSize="12px" fontWeight="600" color="rgba(0,200,240,0.95)" letterSpacing="0.08em">
              CATÁLOGO OFICIAL DE FORMACIÓN 2025
            </Text>
          </MotionBox>

          {/* Main title */}
          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Text
              fontFamily="heading" fontWeight="800"
              fontSize={{ base: '36px', md: '52px', lg: '60px' }}
              color="white" lineHeight="1.1" mb="4"
            >
              Desarrollamos el talento<br />
              <Text as="span" color="#00A0C6">que cuida el agua</Text>
            </Text>
          </MotionBox>

          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}>
            <Text fontSize={{ base: '16px', md: '19px' }} color="rgba(255,255,255,0.75)" mb="8" maxW="560px">
              Explora las {COURSES.length} formaciones del Grupo Aguas Andinas. Filtra por área temática, modalidad y audiencia para encontrar tu próximo curso.
            </Text>
          </MotionBox>

          {/* Search bar */}
          <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
            <form onSubmit={handleSearch} style={{ maxWidth: '640px' }}>
              <div style={{
                display: 'flex', background: 'white', borderRadius: '14px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.25)', overflow: 'hidden', height: '56px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', flex: 1, gap: '12px' }}>
                  <Search size={18} color="#9AACC0" />
                  <input
                    value={searchVal}
                    onChange={e => setSearchVal(e.target.value)}
                    placeholder="Buscar por nombre de curso, objetivo o área…"
                    style={{
                      flex: 1, border: 'none', outline: 'none',
                      fontSize: '15px', color: '#001747', background: 'transparent',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </div>
                <button type="submit" style={{
                  padding: '0 24px', background: '#002B72', color: 'white',
                  fontWeight: 700, fontSize: '14px', fontFamily: 'Outfit, sans-serif',
                  border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#0055A0')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#002B72')}
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
          mb="8" textAlign="center"
        >
          <Text fontSize="12px" fontWeight="700" letterSpacing="0.1em" color="#00A0C6" mb="2" textTransform="uppercase">
            Explorar por área temática
          </Text>
          <Text fontFamily="heading" fontWeight="800" fontSize={{ base: '26px', md: '34px' }} color="#001747">
            {AREAS.length} áreas de formación
          </Text>
          <Text fontSize="15px" color="#7A90A8" mt="2">
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
            display="inline-flex" alignItems="center" gap="2"
            px="8" py="4" borderRadius="12px"
            bg="#002B72" color="white"
            fontFamily="heading" fontWeight="700" fontSize="15px"
            border="none" cursor="pointer"
            boxShadow="0 4px 20px rgba(0,43,114,0.3)"
            style={{ transition: 'all 0.2s' }}
            _hover={{ bg: '#0055A0', transform: 'translateY(-2px)' }}
          >
            Ver catálogo completo
            <ArrowRight size={16} />
          </Box>
        </Flex>
      </Box>

      {/* ── ISO BADGES SECTION ── */}
      <Box bg="#F0F5FA" py={{ base: '10', md: '14' }}>
        <Box maxW="1100px" mx="auto" px={{ base: '4', md: '8' }}>
          <Text
            fontFamily="heading" fontWeight="700" fontSize={{ base: '18px', md: '22px' }}
            color="#001747" textAlign="center" mb="6"
          >
            Alineados a los sistemas de gestión internacionales
          </Text>
          <Flex gap="3" flexWrap="wrap" justify="center">
            {[
              'ISO 45001 · Seguridad',
              'ISO 14001 · Ambiental',
              'ISO 27001 · TI',
              'ISO 37001 · Antisoborno',
              'ISO 9001 · Calidad',
              'ISO 22301 · Continuidad',
              'ISO 50001 · Energía',
              'NCH 3262 · Género',
            ].map(iso => (
              <Box key={iso}
                px="4" py="2" borderRadius="10px"
                bg="white" border="1px solid rgba(0,43,114,0.12)"
                fontSize="13px" fontWeight="600" color="#002B72"
                boxShadow="0 1px 4px rgba(0,43,114,0.06)"
              >
                {iso}
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
