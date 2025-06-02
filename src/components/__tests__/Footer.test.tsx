import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      {component}
    </ChakraProvider>
  )
}

describe('Footer', () => {
  it('renders the copyright text', () => {
    renderWithChakra(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} Fola Aluko. All rights reserved.`)).toBeInTheDocument()
  })
}) 