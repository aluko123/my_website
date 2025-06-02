import { ChakraProvider, Box, Container, VStack, ColorModeScript } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { CurrentWork } from './components/CurrentWork'
import { Interests } from './components/Interests'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { theme } from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box minH="100vh" bg="gray.50" _dark={{ bg: 'gray.900' }}>
        <Header />
        <Container maxW="container.xl" py={8}>
          <VStack spacing={16}>
            <Hero />
            <About />
            <Projects />
            <CurrentWork />
            <Interests />
            <Contact />
          </VStack>
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
