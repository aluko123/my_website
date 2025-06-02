import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      {component}
    </ChakraProvider>
  )
}

describe('Hero', () => {
  it('renders the name', () => {
    renderWithChakra(<Hero />)
    expect(screen.getByText('Hi, I\'m Fola Aluko')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    renderWithChakra(<Hero />)
    expect(screen.getByText('Life isn\'t a zero-sum game. With community, we can all win.')).toBeInTheDocument()
  })

  it('renders social links', () => {
    renderWithChakra(<Hero />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('has correct social links', () => {
    renderWithChakra(<Hero />)
    const githubLink = screen.getByText('GitHub').closest('a')
    const linkedinLink = screen.getByText('LinkedIn').closest('a')
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/aluko123')
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/fola-aluko')
  })
}) 