import { Box, Flex, Image, Text } from '@chakra-ui/react'
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
            <Image
              src="/logo-aguas-horizontal.png"
              alt="Aguas Andinas"
              h={{ base: '32px', md: '38px' }} w="auto"
              objectFit="contain" flexShrink={0}
            />
            <Box
              pl="3" borderLeft="1px solid rgba(0,76,148,0.15)"
              display={{ base: 'none', sm: 'block' }}
            >
              <Text fontSize="10px" fontWeight="700" color="#EFA220" letterSpacing="0.08em" lineHeight="1.2">
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
