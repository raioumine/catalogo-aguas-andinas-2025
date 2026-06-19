import { Box, Flex, Text } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router'
import { BookOpen, Home } from 'lucide-react'

export function Header() {
  const { pathname } = useLocation()

  return (
    <Box
      as="header"
      position="sticky" top="0" zIndex={100}
      bg="rgba(255,255,255,0.95)"
      backdropFilter="blur(16px)"
      borderBottom="1px solid rgba(0,76,148,0.08)"
      boxShadow="0 1px 0 rgba(0,76,148,0.08), 0 4px 20px rgba(0,20,53,0.06)"
    >
      {/* Gold accent line top */}
      <Box h="3px" bg="linear-gradient(90deg, #004C94 0%, #EFA220 50%, #398245 100%)" />

      <Flex
        maxW="1280px" mx="auto" px={{ base: '4', md: '8' }} h="60px"
        align="center" justify="space-between"
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Flex align="center" gap="3">
            <Box
              w="38px" h="38px" borderRadius="10px" flexShrink={0}
              bg="linear-gradient(145deg, #004C94 0%, #003060 100%)"
              display="flex" alignItems="center" justifyContent="center"
              boxShadow="0 3px 10px rgba(0,76,148,0.35)"
              position="relative" overflow="hidden"
            >
              {/* Ola decorativa dentro del ícono */}
              <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} viewBox="0 0 38 12" fill="none">
                <path d="M0,6 C9,10 19,2 28,6 C33,8 36,7 38,6 L38,12 L0,12 Z" fill="rgba(239,162,32,0.35)" />
              </svg>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                <path d="M12 2C12 2 4 9 4 14a8 8 0 0016 0C20 9 12 2 12 2z" fill="white" opacity="0.95"/>
                <path d="M12 8C12 8 8 12 8 15a4 4 0 008 0C16 12 12 8 12 8z" fill="rgba(239,162,32,0.7)"/>
              </svg>
            </Box>
            <Box>
              <Text
                fontFamily="heading" fontWeight="800" fontSize="14px"
                color="#004C94" lineHeight="1.2" letterSpacing="-0.01em"
              >
                AGUAS ANDINAS
              </Text>
              <Text fontSize="9.5px" fontWeight="600" color="#EFA220" letterSpacing="0.08em" lineHeight="1">
                CATÁLOGO DE FORMACIÓN 2026
              </Text>
            </Box>
          </Flex>
        </Link>

        {/* Nav */}
        <Flex align="center" gap={{ base: '1', md: '1' }}>
          <NavLink to="/" label="Inicio" icon={<Home size={15}/>} active={pathname === '/'} />
          <NavLink to="/catalogo" label="Catálogo" icon={<BookOpen size={15}/>} active={pathname.startsWith('/catalogo')} />
        </Flex>
      </Flex>
    </Box>
  )
}

function NavLink({ to, label, icon, active }: { to: string; label: string; icon: React.ReactNode; active: boolean }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Flex
        align="center" gap="1.5" px="3" py="2" borderRadius="8px"
        fontSize="13px" fontWeight={active ? '700' : '500'}
        color={active ? '#004C94' : '#4A5E7A'}
        bg={active ? 'rgba(0,76,148,0.07)' : 'transparent'}
        position="relative"
        transition="all 0.2s"
        _hover={{ bg: 'rgba(0,76,148,0.05)', color: '#004C94' }}
      >
        {icon}
        <Text display={{ base: 'none', md: 'block' }}>{label}</Text>
        {active && (
          <Box
            position="absolute" bottom="-1px" left="3" right="3" h="2px"
            bg="#EFA220" borderRadius="full"
          />
        )}
      </Flex>
    </Link>
  )
}
