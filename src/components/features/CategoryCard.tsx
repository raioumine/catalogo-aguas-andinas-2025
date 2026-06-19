import { Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { AreaTematica } from '../../types'
import { AREA_META } from '../atoms/areaConfig'

const MotionBox = motion(Box)

interface Props {
  area: AreaTematica
  count: number
  onClick: () => void
  index: number
}

export function CategoryCard({ area, count, onClick, index }: Props) {
  const meta = AREA_META[area]

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, boxShadow: `0 20px 50px ${meta.color}28` }}
      bg="white" borderRadius="16px"
      border="1px solid rgba(0,76,148,0.07)"
      overflow="hidden" cursor="pointer" onClick={onClick}
      boxShadow="0 2px 12px rgba(0,20,53,0.06)"
      style={{ transition: 'box-shadow 0.25s, transform 0.25s' }}
      position="relative"
    >
      {/* Color top bar más pronunciado */}
      <Box h="4px" bg={`linear-gradient(90deg, ${meta.color} 0%, ${meta.color}70 100%)`} />

      {/* Gold shimmer on top-right corner */}
      <Box
        position="absolute" top="4px" right="0"
        w="60px" h="60px"
        bg={`radial-gradient(circle at top right, ${meta.color}12 0%, transparent 70%)`}
        pointerEvents="none"
      />

      <Flex p="5" align="flex-start" gap="4">
        {/* Icon circle */}
        <Box
          w="50px" h="50px" borderRadius="14px" flexShrink={0}
          bg={meta.lightBg}
          border={`1.5px solid ${meta.color}25`}
          display="flex" alignItems="center" justifyContent="center"
          fontSize="24px"
          boxShadow={`0 2px 8px ${meta.color}18`}
        >
          {meta.emoji}
        </Box>

        <Box flex="1" minW="0">
          <Flex align="center" justify="space-between" mb="1.5">
            <Text fontFamily="heading" fontWeight="700" fontSize="14px" color="#001435" lineHeight="1.3"
              letterSpacing="-0.01em">
              {area}
            </Text>
            <Box
              px="2.5" py="0.5" borderRadius="full" flexShrink={0} ml="2"
              bg={meta.lightBg} color={meta.color}
              fontSize="11px" fontWeight="700"
              border={`1px solid ${meta.color}30`}
            >
              {count}
            </Box>
          </Flex>
          <Text fontSize="12px" color="#6A7E98" lineHeight="1.5"
            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {meta.description}
          </Text>
          <Flex align="center" gap="1" mt="3" color={meta.color}>
            <Text fontSize="12px" fontWeight="700" letterSpacing="0.02em">Explorar</Text>
            <ArrowRight size={11} />
          </Flex>
        </Box>
      </Flex>
    </MotionBox>
  )
}
