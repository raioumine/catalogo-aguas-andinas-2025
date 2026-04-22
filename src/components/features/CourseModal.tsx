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
              background: 'rgba(0,23,71,0.55)', backdropFilter: 'blur(4px)',
            }}
          />
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201,
              width: 'min(520px, 100vw)',
              background: 'white',
              overflowY: 'auto',
              boxShadow: '-8px 0 40px rgba(0,23,71,0.18)',
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
      {/* Header gradient */}
      <Box
        p="6" pb="5"
        bg={`linear-gradient(135deg, ${meta.color}18 0%, ${meta.color}06 100%)`}
        borderBottom={`3px solid ${meta.color}`}
        position="relative"
      >
        {/* Close button */}
        <Box
          position="absolute" top="4" right="4"
          w="32px" h="32px" borderRadius="full"
          bg="white" display="flex" alignItems="center" justifyContent="center"
          cursor="pointer" boxShadow="0 2px 8px rgba(0,0,0,0.1)"
          onClick={onClose}
          _hover={{ bg: '#F0F4F8' }}
        >
          <X size={16} color="#5A6A85" />
        </Box>

        {/* Area emoji + badge */}
        <Flex align="center" gap="2" mb="3">
          <Box fontSize="24px">{meta.emoji}</Box>
          <AreaBadge area={course.area} size="md" />
        </Flex>

        {/* Title */}
        <Text
          fontFamily="heading" fontWeight="800" fontSize={{ base: '18px', md: '22px' }}
          color="#001747" lineHeight="1.3" mb="2"
        >
          {course.nombre.charAt(0).toUpperCase() + course.nombre.slice(1)}
        </Text>

        {/* Sistema de gestión */}
        <Text fontSize="12px" fontWeight="600" color={meta.color} letterSpacing="0.04em" textTransform="uppercase">
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
        <Section icon={<Target size={16} color={meta.color}/>} title="Objetivo">
          <Text fontSize="14px" color="#3D4F6E" lineHeight="1.65">
            {course.objetivo}
          </Text>
        </Section>

        {/* Dirigido a */}
        <Section icon={<Users size={16} color={meta.color}/>} title="Dirigido a">
          <Text fontSize="14px" color="#3D4F6E" lineHeight="1.6">
            {course.dirigido}
          </Text>
        </Section>

        {/* Sistema de gestión */}
        <Section icon={<Layers size={16} color={meta.color}/>} title="Sistema de Gestión">
          <Box
            px="3" py="2" borderRadius="10px"
            bg={meta.lightBg} display="inline-flex" alignItems="center" gap="2"
          >
            <Text fontSize="13px" fontWeight="600" color={meta.color}>{course.sistemaGestion}</Text>
          </Box>
        </Section>

        {/* Modalidad */}
        <Section icon={<BookOpen size={16} color={meta.color}/>} title="Modalidad de entrega">
          <Box
            px="4" py="3" borderRadius="12px" bg="#F0F5FA"
            border="1px solid rgba(0,43,114,0.08)"
          >
            <Flex align="center" gap="3">
              <ModalidadBadge modalidad={course.modalidad} size="md" />
              <Text fontSize="13px" color="#5A6A85">
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
          mt="2" p="4" borderRadius="14px"
          bg={`linear-gradient(135deg, ${meta.color}14 0%, ${meta.color}06 100%)`}
          border={`1px solid ${meta.color}30`}
        >
          <Text fontSize="13px" color={meta.color} fontWeight="600" mb="1">
            ¿Te interesa esta formación?
          </Text>
          <Text fontSize="12px" color="#5A6A85" lineHeight="1.5">
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
        <Text fontWeight="700" fontSize="13px" color="#001747" letterSpacing="0.02em" textTransform="uppercase">
          {title}
        </Text>
      </Flex>
      {children}
    </Box>
  )
}
