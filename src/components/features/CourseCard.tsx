import { Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Users, Eye } from 'lucide-react'
import type { Course } from '../../types'
import { AreaBadge } from '../atoms/AreaBadge'
import { ModalidadBadge } from '../atoms/ModalidadBadge'
import { AREA_META } from '../atoms/areaConfig'

const MotionBox = motion(Box)

interface Props {
  course: Course
  onClick: (c: Course) => void
}

export function CourseCard({ course, onClick }: Props) {
  const meta = AREA_META[course.area]

  return (
    <MotionBox
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: `0 16px 44px ${meta.color}22` }}
      transition={{ duration: 0.22 }}
      bg="white"
      borderRadius="16px"
      border="1px solid rgba(0,76,148,0.07)"
      overflow="hidden"
      cursor="pointer"
      onClick={() => onClick(course)}
      display="flex"
      flexDirection="column"
      boxShadow="0 2px 12px rgba(0,20,53,0.06)"
      style={{ transition: 'box-shadow 0.25s, transform 0.25s' }}
      position="relative"
    >
      {/* Color top bar */}
      <Box h="4px" bg={`linear-gradient(90deg, ${meta.color} 0%, ${meta.color}80 100%)`} />

      {/* Card body */}
      <Box p="5" flex="1" display="flex" flexDirection="column" gap="3">
        {/* Sistema gestión tag */}
        <Text
          fontSize="10px" fontWeight="700" letterSpacing="0.07em"
          color={meta.color} textTransform="uppercase"
          style={{ lineHeight: '1.3' }}
        >
          {course.sistemaGestion.length > 45
            ? course.sistemaGestion.substring(0, 45) + '…'
            : course.sistemaGestion}
        </Text>

        {/* Course name */}
        <Text
          fontFamily="heading" fontWeight="700" fontSize="15px" color="#001435"
          letterSpacing="-0.01em"
          style={{ lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {course.nombre.charAt(0).toUpperCase() + course.nombre.slice(1)}
        </Text>

        {/* Objetivo */}
        <Text
          fontSize="13px" color="#4A5E7A" fontWeight="400"
          style={{ lineHeight: '1.6', flex: 1,
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
          }}
        >
          {course.objetivo}
        </Text>

        {/* Audience */}
        <Flex align="center" gap="1.5" mt="auto">
          <Users size={11} color="#9AACC0" />
          <Text fontSize="11px" color="#9AACC0" fontWeight="500"
            style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {course.audienciaTag}
          </Text>
        </Flex>
      </Box>

      {/* Footer */}
      <Flex
        px="5" pb="4" pt="0"
        align="center" justify="space-between"
        borderTop="1px solid rgba(0,76,148,0.05)"
      >
        <Flex gap="2" flexWrap="wrap">
          <AreaBadge area={course.area} />
          <ModalidadBadge modalidad={course.modalidad} />
        </Flex>
        <Flex
          align="center" gap="1" px="3" py="1.5" borderRadius="8px"
          bg="rgba(0,76,148,0.06)" color="#004C94"
          fontSize="12px" fontWeight="700"
          letterSpacing="0.02em"
          _hover={{ bg: 'rgba(239,162,32,0.12)', color: '#D48A0A' }}
          transition="all 0.18s"
        >
          <Eye size={11} />
          <Text>Ver</Text>
        </Flex>
      </Flex>
    </MotionBox>
  )
}
