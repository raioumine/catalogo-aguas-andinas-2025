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
      whileHover={{ y: -4, boxShadow: `0 16px 40px ${meta.color}25` }}
      bg="white" borderRadius="16px"
      border="1px solid rgba(0,43,114,0.07)"
      overflow="hidden" cursor="pointer" onClick={onClick}
      boxShadow="0 2px 10px rgba(0,43,114,0.05)"
      style={{ transition: 'box-shadow 0.25s, transform 0.25s' }}
    >
      {/* Top accent */}
      <Box h="5px" bg={`linear-gradient(90deg, ${meta.color} 0%, ${meta.color}80 100%)`} />

      <Flex p="5" align="flex-start" gap="4">
        {/* Icon circle */}
        <Box
          w="48px" h="48px" borderRadius="14px" flexShrink={0}
          bg={meta.lightBg}
          display="flex" alignItems="center" justifyContent="center"
          fontSize="24px"
        >
          {meta.emoji}
        </Box>

        <Box flex="1" minW="0">
          <Flex align="center" justify="space-between" mb="1">
            <Text fontFamily="heading" fontWeight="700" fontSize="14px" color="#001747" lineHeight="1.3">
              {area}
            </Text>
            <Box
              px="2" py="0.5" borderRadius="full"
              bg={meta.lightBg} color={meta.color}
              fontSize="11px" fontWeight="700" flexShrink={0} ml="2"
            >
              {count}
            </Box>
          </Flex>
          <Text fontSize="12px" color="#7A90A8" lineHeight="1.45"
            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {meta.description}
          </Text>
          <Flex align="center" gap="1" mt="2.5" color={meta.color}>
            <Text fontSize="12px" fontWeight="600">Explorar</Text>
            <ArrowRight size={12} />
          </Flex>
        </Box>
      </Flex>
    </MotionBox>
  )
}
