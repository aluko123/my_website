import { render, screen } from '@testing-library/react'
import { About } from '../About'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      {component}
    </ChakraProvider>
  )
}

describe('About', () => {
  it('renders the section title', () => {
    renderWithChakra(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders the description', () => {
    renderWithChakra(<About />)
    expect(screen.getByText(/There's no problem that can't be solved/)).toBeInTheDocument()
  })

  it('renders all skill cards', () => {
    renderWithChakra(<About />)
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('AI & ML')).toBeInTheDocument()
    expect(screen.getByText('Cloud, Infra and Databases')).toBeInTheDocument()
  })

  it('renders skill descriptions', () => {
    renderWithChakra(<About />)
    expect(screen.getByText(/Golang, Python, TypeScript/)).toBeInTheDocument()
    expect(screen.getByText(/PyTorch, TensorFlow, NLP/)).toBeInTheDocument()
    expect(screen.getByText(/AWS, Azure, Docker/)).toBeInTheDocument()
  })
}) 