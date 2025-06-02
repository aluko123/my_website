import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'

const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      {component}
    </ChakraProvider>
  )
}

const mockProject = {
  title: 'Test Project',
  description: 'This is a test project',
  image: '/test-image.jpg',
  technologies: ['React', 'TypeScript'],
  link: 'https://github.com/test'
}

describe('ProjectCard', () => {
  it('renders the project title', () => {
    renderWithChakra(<ProjectCard {...mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders the project description', () => {
    renderWithChakra(<ProjectCard {...mockProject} />)
    expect(screen.getByText('This is a test project')).toBeInTheDocument()
  })

  it('renders the project image', () => {
    renderWithChakra(<ProjectCard {...mockProject} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/test-image.jpg')
    expect(image).toHaveAttribute('alt', 'Test Project')
  })

  it('renders technology tags', () => {
    renderWithChakra(<ProjectCard {...mockProject} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders the GitHub link', () => {
    renderWithChakra(<ProjectCard {...mockProject} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://github.com/test')
  })
}) 