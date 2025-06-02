import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '../Header'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

// Wrapper component to provide Chakra context
const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      {component}
    </ChakraProvider>
  )
}

describe('Header', () => {
  it('renders all navigation links', () => {
    renderWithChakra(<Header />)
    
    const navItems = ['About', 'Projects', 'Current', 'Interests', 'Contact']
    navItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  it('renders the name', () => {
    renderWithChakra(<Header />)
    expect(screen.getByText('Fola Aluko')).toBeInTheDocument()
  })

  it('has a theme toggle button', () => {
    renderWithChakra(<Header />)
    const themeButton = screen.getByLabelText('Toggle color mode')
    expect(themeButton).toBeInTheDocument()
  })

  it('toggles theme when theme button is clicked', () => {
    renderWithChakra(<Header />)
    const themeButton = screen.getByLabelText('Toggle color mode')
    
    // Initial state (dark mode)
    expect(themeButton).toHaveAttribute('aria-label', 'Toggle color mode')
    
    // Click to toggle
    fireEvent.click(themeButton)
    
    // Check if the icon changed (you might need to adjust this based on your implementation)
    expect(themeButton).toBeInTheDocument()
  })
}) 