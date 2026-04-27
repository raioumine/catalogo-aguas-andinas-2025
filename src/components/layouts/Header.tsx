import { Box, Flex, Text } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router'
import { BookOpen, Home } from 'lucide-react'

export function Header() {
  const { pathname } = useLocation()

  return (
    <Box
      as="header"
      position="sticky" top="0" zIndex={100}
      bg="rgba(255,255,255,0.92)"
      backdropFilter="blur(12px)"
      borderBottom="1px solid rgba(0,43,114,0.1)"
      boxShadow="0 1px 12px rgba(0,43,114,0.06)"
    >
      <Flex
        maxW="1280px" mx="auto" px={{ base: '4', md: '8' }} h="64px"
        align="center" justify="space-between"
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Flex align="center" gap="3">
            {/* Aguas Andinas logo mark */}
            <Box
              w="38px" h="38px" borderRadius="lg"
              bg="linear-gradient(135deg, #002B72 0%, #0055A0 60%, #00A0C6 100%)"
              display="flex" alignItems="center" justifyContent="center"
              boxShadow="0 2px 8px rgba(0,43,114,0.3)"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 4 9 4 14a8 8 0 0016 0C20 9 12 2 12 2z" fill="white" opacity="0.9"/>
                <path d="M12 8C12 8 8 12 8 15a4 4 0 008 0C16 12 12 8 12 8z" fill="rgba(0,160,198,0.8)"/>
              </svg>
            </Box>
            <Box>
              <Text fontFamily="heading" fontWeight="700" fontSize="15px" color="#002B72" lineHeight="1.2">
                AGUAS ANDINAS
              </Text>
              <Text fontSize="10px" fontWeight="500" color="#00A0C6" letterSpacing="0.05em" lineHeight="1">
                CATÁLOGO DE FORMACIÓN 2026
              </Text>
            </Box>
          </Flex>
        </Link>

        {/* Nav */}
        <Flex align="center" gap={{ base: '2', md: '1' }}>
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
        align="center" gap="1.5" px="3" py="2" borderRadius="lg"
        fontSize="14px" fontWeight={active ? '600' : '500'}
        color={active ? '#002B72' : '#5A6A85'}
        bg={active ? 'rgba(0,43,114,0.08)' : 'transparent'}
        transition="all 0.2s"
        _hover={{ bg: 'rgba(0,43,114,0.06)', color: '#002B72' }}
      >
        {icon}
        <Text display={{ base: 'none', md: 'block' }}>{label}</Text>
      </Flex>
    </Link>
  )
}
