import { render, screen } from '@testing-library/react'
import { Contact } from '../Contact'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      {component}
    </ChakraProvider>
  )
}

describe('Contact', () => {
  it('renders the section title', () => {
    renderWithChakra(<Contact />)
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
  })

  it('renders the description', () => {
    renderWithChakra(<Contact />)
    expect(screen.getByText('Do you know the next big thing? Let\'s chat about it.')).toBeInTheDocument()
  })

  it('renders the email link', () => {
    renderWithChakra(<Contact />)
    const emailLink = screen.getByText('folaaluko02@gmail.com')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:folaaluko02@gmail.com')
  })

  it('renders social links', () => {
    renderWithChakra(<Contact />)
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks).toHaveLength(4) // Email + 3 social links
  })
}) 
