import { BrowserRouter, Routes, Route } from 'react-router'
import { Box } from '@chakra-ui/react'
import { Header } from './components/layouts/Header'
import { Footer } from './components/layouts/Footer'
import { LandingPage } from './pages/LandingPage'
import { CatalogPage } from './pages/CatalogPage'

export function App() {
  return (
    <BrowserRouter>
      <Box minH="100vh" display="flex" flexDirection="column" bg="#F0F5FA">
        <Header />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}
