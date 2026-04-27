import { Box, Flex, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box as="footer" bg="#001747" color="white" py="10" mt="16">
      <Flex
        maxW="1280px" mx="auto" px={{ base: '4', md: '8' }}
        direction={{ base: 'column', md: 'row' }}
        gap="8" align={{ base: 'center', md: 'flex-start' }} justify="space-between"
      >
        {/* Brand */}
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Flex align="center" gap="3" justify={{ base: 'center', md: 'flex-start' }} mb="3">
            <Box
              w="36px" h="36px" borderRadius="lg"
              bg="linear-gradient(135deg, #0055A0 0%, #00A0C6 100%)"
              display="flex" alignItems="center" justifyContent="center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 4 9 4 14a8 8 0 0016 0C20 9 12 2 12 2z" fill="white" opacity="0.9"/>
                <path d="M12 8C12 8 8 12 8 15a4 4 0 008 0C16 12 12 8 12 8z" fill="rgba(0,200,240,0.7)"/>
              </svg>
            </Box>
            <Box>
              <Text fontFamily="heading" fontWeight="700" fontSize="14px" color="white">AGUAS ANDINAS</Text>
              <Text fontSize="10px" color="rgba(0,160,198,0.9)" letterSpacing="0.05em">Grupo Aguas</Text>
            </Box>
          </Flex>
          <Text fontSize="13px" color="rgba(255,255,255,0.6)" maxW="260px">
            Catálogo de Formación 2026 — Desarrollando el talento de quienes cuidan el agua de Chile.
          </Text>
        </Box>

        {/* Links */}
        <Flex gap="12" direction={{ base: 'column', sm: 'row' }} textAlign={{ base: 'center', md: 'left' }}>
          <Box>
            <Text fontWeight="600" fontSize="13px" mb="3" color="rgba(255,255,255,0.9)">Formación</Text>
            <Flex direction="column" gap="2">
              {['Catálogo completo', 'Áreas temáticas', 'Modalidades'].map(l => (
                <Text key={l} fontSize="13px" color="rgba(255,255,255,0.55)" cursor="pointer"
                  _hover={{ color: '#00A0C6' }} transition="color 0.2s">{l}</Text>
              ))}
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="600" fontSize="13px" mb="3" color="rgba(255,255,255,0.9)">Sistemas de Gestión</Text>
            <Flex direction="column" gap="2">
              {['ISO 45001 SSO', 'ISO 14001 Ambiental', 'ISO 27001 TI', 'ISO 37001 Compliance'].map(l => (
                <Text key={l} fontSize="13px" color="rgba(255,255,255,0.55)">{l}</Text>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Flex>

      <Box maxW="1280px" mx="auto" px={{ base: '4', md: '8' }} mt="8" pt="6"
        borderTop="1px solid rgba(255,255,255,0.1)">
        <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }} gap="2">
          <Text fontSize="12px" color="rgba(255,255,255,0.4)">
            © 2026 Aguas Andinas S.A. Todos los derechos reservados.
          </Text>
          <Text fontSize="12px" color="rgba(255,255,255,0.3)">
            Desarrollado por Umine · Catálogo Interno de Formación
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}
