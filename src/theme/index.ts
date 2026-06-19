import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        aa: {
          50:  { value: '#E6EEF7' },
          100: { value: '#C0D5EC' },
          200: { value: '#96B7DF' },
          300: { value: '#6B99D1' },
          400: { value: '#3D7BC4' },
          500: { value: '#004C94' }, // Pantone 2945c — azul oficial
          600: { value: '#003E7A' },
          700: { value: '#003060' },
          800: { value: '#002347' },
          900: { value: '#001435' },
          950: { value: '#000A1A' },
        },
        gold: {
          100: { value: '#FFF4D6' },
          200: { value: '#FFE5A0' },
          300: { value: '#FFD166' },
          400: { value: '#FFBC30' },
          500: { value: '#EFA220' }, // Pantone 137c — dorado oficial
          600: { value: '#D48A0A' },
          700: { value: '#A86A05' },
        },
        brandGreen: {
          100: { value: '#DFF0E4' },
          300: { value: '#7BBE8A' },
          500: { value: '#398245' }, // Pantone 348c — verde oficial
          600: { value: '#2D6636' },
          700: { value: '#1E4A25' },
        },
        // Paleta complementaria completa — Manual de Marca Aguas Andinas
        p293: {   // Azul oscuro profundo
          500: { value: '#1D3C8F' },
        },
        p2935: {  // Azul medio brillante
          500: { value: '#0041A8' },
        },
        p2915: {  // Azul cielo claro
          500: { value: '#6AB4E8' },
        },
        p2995: {  // Cyan proceso
          500: { value: '#00A9E0' },
        },
        p7467: {  // Verde teal
          500: { value: '#009B96' },
        },
        p376: {   // Verde lima brillante
          500: { value: '#72BF44' },
        },
        p137: {   // Dorado/naranja oficial
          500: { value: '#EFA220' },
        },
        brandPurple: {
          100: { value: '#EDE9FE' },
          500: { value: '#7C3AED' },
          700: { value: '#5B21B6' },
        },
      },
      fonts: {
        heading: { value: "'Montserrat', sans-serif" },
        body:    { value: "'Montserrat', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        'bg.canvas':  { value: '#EEF3FB' },
        'bg.surface': { value: '#FFFFFF' },
        'bg.muted':   { value: '#E8EFF9' },
        'fg.default': { value: '#001435' },
        'fg.muted':   { value: '#4A5E7A' },
        'fg.accent':  { value: '#004C94' },
        'brand.primary':   { value: '#004C94' },
        'brand.dark':      { value: '#003060' },
        'brand.gold':      { value: '#EFA220' },
        'brand.green':     { value: '#398245' },
        'brand.cyan':      { value: '#00A9E0' },
        'brand.navy':      { value: '#003880' },
        'border.subtle':   { value: 'rgba(0,76,148,0.1)' },
      },
    },
  },
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
      fontFamily: 'body',
      bg: 'bg.canvas',
      color: 'fg.default',
    },
    '*': { boxSizing: 'border-box' },
    '::selection': { bg: '#EFA220', color: '#001435' },
  },
})

export const system = createSystem(defaultConfig, config)
