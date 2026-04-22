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
      whileHover={{ y: -4, boxShadow: `0 12px 40px ${meta.color}22` }}
      transition={{ duration: 0.25 }}
      bg="white"
      borderRadius="16px"
      border="1px solid rgba(0,43,114,0.08)"
      overflow="hidden"
      cursor="pointer"
      onClick={() => onClick(course)}
      display="flex"
      flexDirection="column"
      boxShadow="0 2px 12px rgba(0,43,114,0.06)"
      style={{ transition: 'box-shadow 0.25s, transform 0.25s' }}
    >
      {/* Color top bar */}
      <Box h="4px" bg={`linear-gradient(90deg, ${meta.color} 0%, ${meta.color}99 100%)`} />

      {/* Card body */}
      <Box p="5" flex="1" display="flex" flexDirection="column" gap="3">
        {/* Sistema gestión tag */}
        <Text
          fontSize="10px" fontWeight="600" letterSpacing="0.06em"
          color={meta.color} textTransform="uppercase"
          style={{ lineHeight: '1.3' }}
        >
          {course.sistemaGestion.length > 45
            ? course.sistemaGestion.substring(0, 45) + '…'
            : course.sistemaGestion}
        </Text>

        {/* Course name */}
        <Text
          fontFamily="heading" fontWeight="700" fontSize="15px" color="#001747"
          style={{ lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {course.nombre.charAt(0).toUpperCase() + course.nombre.slice(1)}
        </Text>

        {/* Objetivo */}
        <Text
          fontSize="13px" color="#5A6A85" style={{ lineHeight: '1.55', flex: 1,
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
          }}
        >
          {course.objetivo}
        </Text>

        {/* Audience */}
        <Flex align="center" gap="1.5" mt="auto">
          <Users size={12} color="#9AACC0" />
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
      >
        <Flex gap="2" flexWrap="wrap">
          <AreaBadge area={course.area} />
          <ModalidadBadge modalidad={course.modalidad} />
        </Flex>
        <Flex
          align="center" gap="1" px="3" py="1.5" borderRadius="lg"
          bg="rgba(0,43,114,0.06)" color="#002B72"
          fontSize="12px" fontWeight="600"
          _hover={{ bg: 'rgba(0,43,114,0.12)' }}
        >
          <Eye size={12} />
          <Text>Ver</Text>
        </Flex>
      </Flex>
    </MotionBox>
  )
}
