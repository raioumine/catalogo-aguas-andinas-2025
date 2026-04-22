import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        navy: {
          50:  { value: '#e6edf5' },
          100: { value: '#ccdaeb' },
          200: { value: '#99b5d7' },
          300: { value: '#6691c3' },
          400: { value: '#336caf' },
          500: { value: '#00479b' },
          600: { value: '#003d87' },
          700: { value: '#003070' },
          800: { value: '#002459' },
          900: { value: '#001742' },
          950: { value: '#000d2b' },
        },
        cyan: {
          50:  { value: '#e0f7fc' },
          100: { value: '#b3ecf7' },
          200: { value: '#80e0f2' },
          300: { value: '#4dd4ed' },
          400: { value: '#26cae9' },
          500: { value: '#00A0C6' },
          600: { value: '#0090b5' },
          700: { value: '#007a9a' },
          800: { value: '#00637f' },
          900: { value: '#004d64' },
        },
        green: {
          500: { value: '#00A550' },
          600: { value: '#008f44' },
        },
      },
      fonts: {
        heading: { value: "'Outfit', sans-serif" },
        body:    { value: "'Inter', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        'bg.canvas':  { value: '#F0F5FA' },
        'bg.surface': { value: '#FFFFFF' },
        'bg.muted':   { value: '#EFF3F8' },
        'fg.default': { value: '#001E4C' },
        'fg.muted':   { value: '#5A6A85' },
        'fg.accent':  { value: '#00A0C6' },
        'brand.primary':   { value: '#002B72' },
        'brand.secondary': { value: '#0055A0' },
        'brand.accent':    { value: '#00A0C6' },
        'brand.green':     { value: '#00A550' },
        'border.subtle':   { value: 'rgba(0,43,114,0.1)' },
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
    '::selection': { bg: '#00A0C6', color: 'white' },
  },
})

export const system = createSystem(defaultConfig, config)
