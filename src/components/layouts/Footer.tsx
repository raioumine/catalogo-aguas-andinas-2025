import { Box, Flex, Image, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box as="footer" mt="16" position="relative">
      {/* Olas corporativas — transición hacia el footer oscuro */}
      <Box position="relative" h="80px" overflow="hidden" bg="#EEF3FB">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '80px' }}>
          <path d="M0,30 C240,70 480,0 720,30 C960,65 1200,10 1440,30 L1440,80 L0,80 Z"
            fill="#001435" opacity="0.6"/>
          <path d="M0,50 C360,20 720,70 1080,40 C1260,28 1380,38 1440,50 L1440,80 L0,80 Z"
            fill="#001435" opacity="0.8"/>
          <path d="M0,65 C200,45 400,80 600,65 C800,50 1000,75 1200,60 C1320,52 1400,60 1440,65 L1440,80 L0,80 Z"
            fill="#001435"/>
        </svg>
      </Box>

      <Box bg="#001435" color="white" py="12">
        <Flex
          maxW="1280px" mx="auto" px={{ base: '4', md: '8' }}
          direction={{ base: 'column', md: 'row' }}
          gap="8" align={{ base: 'center', md: 'flex-start' }} justify="space-between"
        >
          {/* Brand */}
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Flex align="center" justify={{ base: 'center', md: 'flex-start' }} mb="4">
              <Image
                src="/logo-aguas-blanco.png"
                alt="Aguas Andinas"
                h="52px" w="auto" objectFit="contain"
              />
            </Flex>
            <Text fontSize="13px" color="rgba(255,255,255,0.55)" maxW="260px" lineHeight="1.7">
              Catálogo de Formación 2026 — Desarrollando el talento de quienes cuidan el agua de Chile.
            </Text>

            {/* Color strip como en el manual de marca */}
            <Flex gap="2" mt="5">
              <Box w="24px" h="5px" borderRadius="full" bg="#004C94" />
              <Box w="24px" h="5px" borderRadius="full" bg="#EFA220" />
              <Box w="24px" h="5px" borderRadius="full" bg="#398245" />
              <Box w="24px" h="5px" borderRadius="full" bg="#00A9E0" />
            </Flex>
          </Box>

          {/* Links */}
          <Flex gap="12" direction={{ base: 'column', sm: 'row' }} textAlign={{ base: 'center', md: 'left' }}>
            <Box>
              <Text fontWeight="700" fontSize="12px" mb="4" color="#EFA220" letterSpacing="0.06em" textTransform="uppercase">
                Formación
              </Text>
              <Flex direction="column" gap="2.5">
                {['Catálogo completo', 'Áreas temáticas', 'Modalidades'].map(l => (
                  <Text key={l} fontSize="13px" color="rgba(255,255,255,0.5)" cursor="pointer"
                    _hover={{ color: '#EFA220' }} transition="color 0.2s" fontWeight="400">{l}</Text>
                ))}
              </Flex>
            </Box>
            <Box>
              <Text fontWeight="700" fontSize="12px" mb="4" color="#EFA220" letterSpacing="0.06em" textTransform="uppercase">
                Sistemas de Gestión
              </Text>
              <Flex direction="column" gap="2.5">
                {['ISO 45001 SSO', 'ISO 14001 Ambiental', 'ISO 27001 TI', 'ISO 37001 Compliance'].map(l => (
                  <Text key={l} fontSize="13px" color="rgba(255,255,255,0.5)" fontWeight="400">{l}</Text>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Flex>

        {/* Bottom bar */}
        <Box maxW="1280px" mx="auto" px={{ base: '4', md: '8' }} mt="10" pt="6"
          borderTop="1px solid rgba(255,255,255,0.07)">
          <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }} gap="2">
            <Text fontSize="12px" color="rgba(255,255,255,0.45)" fontWeight="400">
              © 2026 Aguas Andinas S.A. Todos los derechos reservados.
            </Text>
            <Text fontSize="12px" color="rgba(255,255,255,0.40)" fontWeight="400">
              Desarrollado por Umine · Catálogo Interno de Formación
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
