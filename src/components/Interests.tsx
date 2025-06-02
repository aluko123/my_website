import { Box, Heading, Text, SimpleGrid, VStack, Image, useColorModeValue } from '@chakra-ui/react'
import { FaMusic, FaFutbol, FaChess } from 'react-icons/fa'

export const Interests = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const interests = [
    {
      icon: FaMusic,
      title: 'Music',
      description: 'I love all genres of music, most especially jazz, and I\'ve played the saxophone for over 13 years now :).',
      image: '/pictures/saxophone.jpeg',
      details: ['Saxophone', 'Jazz', 'Gospel music', 'Piano'],
      imageHeight: '64'
    },
    {
      icon: FaFutbol,
      title: 'Sports',
      description: 'I like staying active. Regular participant in local leagues and tournaments.',
      image: '/pictures/World XI cup.jpg',
      details: ['Soccer', 'Table Tennis', 'Basketball', 'Weightlifting', 'Community'],
      imageHeight: '48'
    },
    {
      icon: FaChess,
      title: 'Miscellaneous',
      description: 'I love chess. I love reading. I love learning new things.',
      image: '/pictures/chess.jpg',
      details: ['Chess', 'Reddit :)', 'Puzzle Solving', 'Doomscrolling :('],
      imageHeight: '48'
    }
  ]

  return (
    <Box as="section" id="interests" py={16}>
      <VStack spacing={12}>
        <Heading>Interests & Hobbies</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
          {interests.map((interest, index) => (
            <Box
              key={index}
              bg={bg}
              rounded="lg"
              overflow="hidden"
              shadow="md"
              border="1px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <Image 
                src={interest.image} 
                alt={interest.title} 
                w="full" 
                h={interest.imageHeight}
                objectFit="cover"
                objectPosition="center"
              />
              <Box p={6}>
                <Box
                  as={interest.icon}
                  w={8}
                  h={8}
                  color="blue.500"
                  mb={4}
                />
                <Heading size="md" mb={2}>
                  {interest.title}
                </Heading>
                <Text color={textColor} mb={4}>
                  {interest.description}
                </Text>
                <Box>
                  {interest.details.map((detail) => (
                    <Text
                      key={detail}
                      as="span"
                      display="inline-block"
                      bg="blue.100"
                      color="blue.800"
                      px={2}
                      py={1}
                      rounded="md"
                      mr={2}
                      mb={2}
                      fontSize="sm"
                    >
                      {detail}
                    </Text>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
} 