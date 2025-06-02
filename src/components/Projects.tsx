import { Box, Heading, SimpleGrid, VStack, Link, Text } from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard'
import { FaFileAlt } from 'react-icons/fa'

export const Projects = () => {
  const papers = [
    {
      title: 'Context-Aware Automated System for Image Caption to ASL Translation for Improved Accessibility in Media Applications',
      description: 'An image to captions to ASL pipeline that expands on explainable AI, revealing black-box techniques that make NLP possible.',
      link: 'https://ieeexplore.ieee.org/abstract/document/10971481',
      authors: 'Aluko, O., et al.',
      year: '2025'
    },
    {
      title: 'Enhancing Accessibility: A Pilot Study for Context-Aware Image-Caption to American Sign Language (ASL) Translation',
      description: 'A context-aware image-caption to ASL translation model that uses a transformer-based encoder-decoder architecture to generate ASL signs.',
      link: 'https://www.proquest.com/docview/3139064543',
      authors: 'Aluko, O., et al.',
      year: '2024'
    }
  ]

  const projects = [
    {
      title: 'Caption-ASL',
      description: 'An NLP pipeline to convert different forms of input, including captions to ASL, keeping context in the process, promoting accessibility.',
      image: '/pictures/caption-asl.png',
      technologies: ['Python', 'PyTorch', 'HuggingFace', 'NLP', 'Transformers'],
      link: 'https://github.com/aluko123/caption-asl',
      imageHeight: '64'
    },
    {
      title: 'Spot\'d',
      description: 'A full-stack web application to connect influencers, creatives and brands.',
      image: '/pictures/spotd.jpg',
      technologies: ['Go', 'TypeScript', 'MongoDB'],
      link: 'https://github.com/spot-d',
      imageHeight: '64'
    },
    {
      title: 'Felicity-API-Service',
      description: 'Created a web-service to consume API data from a solar inverter, store to a DB, and perform some interpolation on it to get specific readings.',
      image: '/pictures/inverter-api.png',
      technologies: ['Go', 'JavaScript', 'SQLite', 'Docker', 'AWS EC2'],
      link: 'https://github.com/aluko123/felicity-solar-api-ext',
      imageHeight: '64'
    },
    {
      title: 'CMI Pooling',
      description: 'An Uber like app to connect employees for rides to and from work.',
      image: '/pictures/cmi-pooling.png',
      technologies: ['React', 'Firebase', 'Google Maps API'],
      link: 'https://cmi-pooling.web.app/',
      imageHeight: '64'
    },
    {
      title: 'DaBible Foundation',
      description: 'Worked with a team to build a mobile app to read the Bible in different languages.',
      image: '/pictures/dabible.jpg',
      technologies: ['Java', 'JSON', 'Android Studio'],
      link: 'https://github.com/DaBible-Foundation/DaBible-MainHub',
      imageHeight: '64'
    }
  ]

  return (
    <Box as="section" id="projects" py={16}>
      <VStack spacing={12}>
        <Heading>Projects & Publications</Heading>
        
        {/* Papers Section */}
        <Box w="full">
          <Heading size="md" mb={6}>Published Papers</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            {papers.map((paper, index) => (
              <Box
                key={index}
                p={6}
                bg="white"
                _dark={{ bg: 'gray.800' }}
                rounded="lg"
                shadow="md"
                border="1px"
                borderColor="gray.200"
                //_dark={{ borderColor: 'gray.700' }}
              >
                <Box
                  as={FaFileAlt}
                  w={8}
                  h={8}
                  color="blue.500"
                  mb={4}
                />
                <Heading size="md" mb={2}>
                  {paper.title}
                </Heading>
                <Text color="gray.600" _dark={{ color: 'gray.300' }} mb={4}>
                  {paper.description}
                </Text>
                <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }} mb={4}>
                  {paper.authors} ({paper.year})
                </Text>
                <Link
                  href={paper.link}
                  isExternal
                  color="blue.500"
                  _hover={{ color: 'blue.600' }}
                  fontWeight="medium"
                >
                  Read Paper →
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Projects Section */}
        <Box w="full">
          <Heading size="md" mb={6}>Projects</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  )
} 