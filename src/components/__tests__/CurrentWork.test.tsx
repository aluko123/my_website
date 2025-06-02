import { render, screen } from '@testing-library/react'
import { CurrentWork } from '../CurrentWork'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      {component}
    </ChakraProvider>
  )
}

describe('CurrentWork', () => {
  it('renders the section title', () => {
    renderWithChakra(<CurrentWork />)
    expect(screen.getByText('What I\'m Working On')).toBeInTheDocument()
  })

  it('renders all work cards', () => {
    renderWithChakra(<CurrentWork />)
    expect(screen.getByText('Real-time Text Editing')).toBeInTheDocument()
    expect(screen.getByText('Graph Database Engine')).toBeInTheDocument()
    expect(screen.getByText('Distributed Key-Value Store')).toBeInTheDocument()
    expect(screen.getByText('Real-time AI Anomaly Detection')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    renderWithChakra(<CurrentWork />)
    expect(screen.getByText(/Building a real-time collaboration text editor/)).toBeInTheDocument()
    expect(screen.getByText(/Getting a sense of how graph database engines work/)).toBeInTheDocument()
    expect(screen.getByText(/Always wanted to learn how something like Redis works/)).toBeInTheDocument()
    expect(screen.getByText(/Probably one of my most ambitious projects yet/)).toBeInTheDocument()
  })

  it('renders status badges', () => {
    renderWithChakra(<CurrentWork />)
    expect(screen.getByText('In Progress')).toBeInTheDocument()
    const planningBadges = screen.getAllByText('Planning')
    expect(planningBadges).toHaveLength(2)
    expect(screen.getByText('Inception :)')).toBeInTheDocument()
  })

  it('renders technology tags', () => {
    renderWithChakra(<CurrentWork />)
    expect(screen.getByText('Go')).toBeInTheDocument()
    expect(screen.getByText('WebSocket')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('Kafka')).toBeInTheDocument()
  })
}) 