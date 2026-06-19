import { AnimatePresence, motion } from 'framer-motion'
import { Box, Flex, Text } from '@chakra-ui/react'
import { X, Users, Target, BookOpen, Layers } from 'lucide-react'
import type { Course } from '../../types'
import { AreaBadge } from '../atoms/AreaBadge'
import { ModalidadBadge } from '../atoms/ModalidadBadge'
import { AREA_META } from '../atoms/areaConfig'

interface Props { course: Course | null; onClose: () => void }

export function CourseModal({ course, onClose }: Props) {
  return (
    <AnimatePresence>
      {course && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,20,53,0.6)', backdropFilter: 'blur(5px)',
            }}
          />
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 34 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201,
              width: 'min(520px, 100vw)',
              background: 'white',
              overflowY: 'auto',
              boxShadow: '-8px 0 60px rgba(0,20,53,0.22)',
            }}
          >
            <ModalContent course={course} onClose={onClose} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function ModalContent({ course, onClose }: { course: Course; onClose: () => void }) {
  const meta = AREA_META[course.area]

  return (
    <Box>
      {/* Gold accent line */}
      <Box h="3px" bg="linear-gradient(90deg, #004C94, #EFA220, #398245)" />

      {/* Header gradient */}
      <Box
        p="6" pb="5"
        bg={`linear-gradient(135deg, ${meta.color}14 0%, ${meta.color}05 100%)`}
        borderBottom={`2px solid ${meta.color}40`}
        position="relative"
      >
        {/* Close button */}
        <Box
          position="absolute" top="5" right="5"
          w="34px" h="34px" borderRadius="full"
          bg="white" display="flex" alignItems="center" justifyContent="center"
          cursor="pointer" boxShadow="0 2px 10px rgba(0,20,53,0.12)"
          onClick={onClose}
          _hover={{ bg: '#F0F5FA', transform: 'rotate(90deg)' }}
          transition="all 0.2s"
        >
          <X size={15} color="#4A5E7A" />
        </Box>

        {/* Area emoji + badge */}
        <Flex align="center" gap="2" mb="3">
          <Box fontSize="26px">{meta.emoji}</Box>
          <AreaBadge area={course.area} size="md" />
        </Flex>

        {/* Title */}
        <Text
          fontFamily="heading" fontWeight="800" fontSize={{ base: '18px', md: '22px' }}
          color="#001435" lineHeight="1.25" mb="2" letterSpacing="-0.02em"
        >
          {course.nombre.charAt(0).toUpperCase() + course.nombre.slice(1)}
        </Text>

        {/* Sistema de gestión */}
        <Text fontSize="11px" fontWeight="700" color={meta.color} letterSpacing="0.06em" textTransform="uppercase">
          {course.sistemaGestion}
        </Text>
      </Box>

      {/* Body */}
      <Box p="6" display="flex" flexDirection="column" gap="5">
        {/* Chips row */}
        <Flex gap="2" flexWrap="wrap">
          <ModalidadBadge modalidad={course.modalidad} size="md" />
        </Flex>

        {/* Objetivo */}
        <Section icon={<Target size={15} color={meta.color}/>} title="Objetivo">
          <Text fontSize="14px" color="#3D4F6E" lineHeight="1.7" fontWeight="400">
            {course.objetivo}
          </Text>
        </Section>

        {/* Dirigido a */}
        <Section icon={<Users size={15} color={meta.color}/>} title="Dirigido a">
          <Text fontSize="14px" color="#3D4F6E" lineHeight="1.65" fontWeight="400">
            {course.dirigido}
          </Text>
        </Section>

        {/* Sistema de gestión */}
        <Section icon={<Layers size={15} color={meta.color}/>} title="Sistema de Gestión">
          <Box
            px="3" py="2" borderRadius="10px"
            bg={meta.lightBg} display="inline-flex" alignItems="center" gap="2"
            border={`1px solid ${meta.color}25`}
          >
            <Text fontSize="13px" fontWeight="700" color={meta.color} letterSpacing="0.01em">
              {course.sistemaGestion}
            </Text>
          </Box>
        </Section>

        {/* Modalidad */}
        <Section icon={<BookOpen size={15} color={meta.color}/>} title="Modalidad de entrega">
          <Box
            px="4" py="3" borderRadius="12px" bg="#EEF3FB"
            border="1px solid rgba(0,76,148,0.08)"
          >
            <Flex align="center" gap="3">
              <ModalidadBadge modalidad={course.modalidad} size="md" />
              <Text fontSize="13px" color="#4A5E7A" fontWeight="400">
                {course.modalidad === 'Online' && 'Formación 100% en línea, a tu ritmo.'}
                {course.modalidad === 'Presencial' && 'Sesión presencial con instructor certificado.'}
                {course.modalidad === 'Presencial/Online' && 'Combinación de sesiones presenciales y en línea.'}
                {course.modalidad === 'Blended' && 'Aprendizaje combinado: digital + práctica presencial.'}
              </Text>
            </Flex>
          </Box>
        </Section>

        {/* CTA */}
        <Box
          mt="2" p="5" borderRadius="14px"
          bg="linear-gradient(135deg, #004C9410 0%, #004C9405 100%)"
          border="1px solid rgba(239,162,32,0.25)"
          position="relative" overflow="hidden"
        >
          <Box position="absolute" top="0" left="0" right="0" h="2px"
            bg="linear-gradient(90deg, transparent, #EFA220, transparent)" />
          <Text fontSize="13px" color="#004C94" fontWeight="700" mb="1">
            ¿Te interesa esta formación?
          </Text>
          <Text fontSize="12px" color="#4A5E7A" lineHeight="1.6" fontWeight="400">
            Comunícate con tu jefatura o el área de Gestión de Personas para inscribirte en este programa.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <Box>
      <Flex align="center" gap="2" mb="2.5">
        {icon}
        <Text fontWeight="700" fontSize="11px" color="#001435" letterSpacing="0.06em" textTransform="uppercase">
          {title}
        </Text>
      </Flex>
      {children}
    </Box>
  )
}
