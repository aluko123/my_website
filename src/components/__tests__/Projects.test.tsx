import { render, screen } from '@testing-library/react'
import { Projects } from '../Projects'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      {component}
    </ChakraProvider>
  )
}

describe('Projects', () => {
  it('renders the section title', () => {
    renderWithChakra(<Projects />)
    expect(screen.getByText('Projects & Publications')).toBeInTheDocument()
  })

  it('renders published papers section', () => {
    renderWithChakra(<Projects />)
    expect(screen.getByText('Published Papers')).toBeInTheDocument()
  })

  it('renders all paper titles', () => {
    renderWithChakra(<Projects />)
    expect(screen.getByText('Context-Aware Automated System for Image Caption to ASL Translation for Improved Accessibility in Media Applications')).toBeInTheDocument()
    expect(screen.getByText('Enhancing Accessibility: A Pilot Study for Context-Aware Image-Caption to American Sign Language (ASL) Translation')).toBeInTheDocument()
  })

  it('renders paper links', () => {
    renderWithChakra(<Projects />)
    const links = screen.getAllByText('Read Paper →')
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute('href', 'https://ieeexplore.ieee.org/abstract/document/10971481')
    expect(links[1]).toHaveAttribute('href', 'https://www.proquest.com/docview/3139064543')
  })

  it('renders projects section', () => {
    renderWithChakra(<Projects />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })
}) 