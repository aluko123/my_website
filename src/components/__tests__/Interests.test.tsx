import { render, screen } from '@testing-library/react'
import { Interests } from '../Interests'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      {component}
    </ChakraProvider>
  )
}

describe('Interests', () => {
  it('renders the section title', () => {
    renderWithChakra(<Interests />)
    expect(screen.getByText('Interests & Hobbies')).toBeInTheDocument()
  })

  it('renders all interest cards', () => {
    renderWithChakra(<Interests />)
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Sports')).toBeInTheDocument()
    expect(screen.getByText('Miscellaneous')).toBeInTheDocument()
  })

  it('renders interest descriptions', () => {
    renderWithChakra(<Interests />)
    expect(screen.getByText(/I love all genres of music/)).toBeInTheDocument()
    expect(screen.getByText(/I like staying active/)).toBeInTheDocument()
    expect(screen.getByText(/I love chess/)).toBeInTheDocument()
  })

  it('renders interest details', () => {
    renderWithChakra(<Interests />)
    expect(screen.getByText('Saxophone')).toBeInTheDocument()
    expect(screen.getByText('Jazz')).toBeInTheDocument()
    expect(screen.getByText('Gospel music')).toBeInTheDocument()
    expect(screen.getByText('Piano')).toBeInTheDocument()
  })

  it('renders images with correct sources', () => {
    renderWithChakra(<Interests />)
    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveAttribute('src', '/pictures/saxophone.jpeg')
    expect(images[1]).toHaveAttribute('src', '/pictures/World XI cup.jpg')
    expect(images[2]).toHaveAttribute('src', '/pictures/chess.jpg')
  })
}) 