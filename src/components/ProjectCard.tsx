import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Tag,
  Link,
  VStack,
  useColorModeValue,
  Badge
} from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  transition?: string
  _hover?: { transform: string }
}

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  link,
  transition,
  _hover
}: ProjectCardProps) => {
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box
      p={6}
      bg={bg}
      rounded="lg"
      shadow="md"
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      w="full"
      maxW="md"
      transition={transition}
      _hover={_hover}
    >
      <Image src={image} alt={title} w="full" h="48" objectFit="cover" rounded="md" mb={4} />
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text color={textColor} mb={4}>
        {description}
      </Text>
      <Box mb={4}>
        {technologies.map((tech) => (
          <Badge key={tech} mr={2} mb={2} colorScheme="purple">
            {tech}
          </Badge>
        ))}
      </Box>
      <Link href={link} isExternal>
        <Box
          as={FaGithub}
          w={6}
          h={6}
          color="blue.500"
          _hover={{ color: 'blue.600' }}
          transition="color 0.2s"
        />
      </Link>
    </Box>
  )
} 