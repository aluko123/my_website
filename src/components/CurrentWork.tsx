import { Box, Heading, Text, SimpleGrid, VStack, Badge, useColorModeValue } from '@chakra-ui/react'
import { FaCode, FaBook, FaLightbulb, FaBrain } from 'react-icons/fa'

export const CurrentWork = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const currentWork = [
    {
      icon: FaCode,
      title: 'Real-time Text Editing',
      description: 'Building a real-time collaboration text editor stored on local akin to Google Docs.',
      status: 'In Progress',
      tech: ['Go', 'WebSocket', 'Ngrok', 'Fsnotify']
    },
    {
      icon: FaBook,
      title: 'Graph Database Engine',
      description: 'Getting a sense of how graph database engines work (i.e. Neo4j) for recommendation systems.',
      status: 'Planning',
      tech: ['Go :)', 'GraphQL maybe']
    },
    {
      icon: FaLightbulb,
      title: 'Distributed Key-Value Store',
      description: 'Always wanted to learn how something like Redis works under the hood.',
      status: 'Planning',
      tech: ['Go again']
    },
    {
        icon: FaBrain,
        title: 'Real-time AI Anomaly Detection',
        description: 'Probably one of my most ambitious projects yet. Using AI to detect anomalies in data streams of IOT devices, coupled with added functionality.',
        status: 'Inception :)',
        tech: ['Go (the best)', 'Python', 'Kafka', 'Docker', 'Kubernetes']
      }

  ]

  return (
    <Box as="section" id="current" py={16}>
      <VStack spacing={12}>
        <Heading>What I'm Working On</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
          {currentWork.map((work, index) => (
            <Box
              key={index}
              p={6}
              bg={bg}
              rounded="lg"
              shadow="md"
              border="1px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <Box
                as={work.icon}
                w={8}
                h={8}
                color="blue.500"
                mb={4}
              />
              <Heading size="md" mb={2}>
                {work.title}
              </Heading>
              <Text color={textColor} mb={4}>
                {work.description}
              </Text>
              <Badge colorScheme="blue" mb={4}>
                {work.status}
              </Badge>
              <Box>
                {work.tech.map((tech) => (
                  <Badge key={tech} mr={2} mb={2} colorScheme="purple">
                    {tech}
                  </Badge>
                ))}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
} 