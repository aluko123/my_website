import { Box, Heading, Text, SimpleGrid, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaCode, FaTools, FaLightbulb } from 'react-icons/fa'

export const About = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const skills = [
    {
      icon: FaCode,
      title: 'Languages',
      description: 'Golang, Python, TypeScript, and more. Building robust and scalable applications.'
    },
    {
      icon: FaTools,
      title: 'AI & ML',
      description: 'PyTorch, TensorFlow, NLP, Scikit-learn, LLMS, and other tools to make AI more accessible.'
    },
    {
      icon: FaLightbulb,
      title: 'Cloud, Infra and Databases',
      description: 'AWS, Azure, Docker, Kubernetes, MongoDB, Redis, SQLite, among many others.'
    }
  ]

  return (
    <Box as="section" id="about" py={16}>
      <VStack spacing={12}>
        <Box textAlign="center">
          <Heading mb={4}>About Me</Heading>
          <Text fontSize="lg" color={textColor} maxW="2xl">
            There's no problem that can't be solved. It takes sitting at the computer screen, 
            staring into the ceiling for a little bit, saying a prayer, and suddenly we're cooking.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          {skills.map((skill, index) => (
            <Box
              key={index}
              p={6}
              bg={bg}
              rounded="lg"
              shadow="md"
              textAlign="center"
            >
              <Box
                as={skill.icon}
                w={10}
                h={10}
                color="blue.500"
                mx="auto"
                mb={4}
              />
              <Heading size="md" mb={2}>
                {skill.title}
              </Heading>
              <Text color={textColor}>
                {skill.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
} 