import { Box, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Hero = () => {
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box
      as="section"
      id="hero"
      pt={32}
      textAlign="center"
    >
      <VStack spacing={6}>
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-r, blue.400, teal.400)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Hi, I'm Fola Aluko
        </Heading>
        <Text fontSize="xl" color={textColor} maxW="2xl">
            Life isn't a zero-sum game. With community, we can all win.
        </Text>
        <Box>
          <Button
            as="a"
            href="https://github.com/aluko123"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaGithub />}
            colorScheme="gray"
            mr={4}
          >
            GitHub
          </Button>
          <Button
            as="a"
            href="https://linkedin.com/in/fola-aluko"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaLinkedin />}
            colorScheme="blue"
          >
            LinkedIn
          </Button>
        </Box>
      </VStack>
    </Box>
  )
} 