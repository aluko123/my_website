import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Contact = () => {
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/aluko123'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/fola-aluko'
    },
    {
      icon: FaTwitter,
      label: 'Twitter/X',
      url: 'https://x.com/jukedout'
    }
  ]

  return (
    <Box as="section" id="contact" py={16}>
      <VStack spacing={8}>
        <Heading>Get in Touch</Heading>
        <Text fontSize="lg" color={textColor} textAlign="center" maxW="2xl">
          Do you know the next big thing? Let's chat about it.
        </Text>

        <HStack spacing={6}>
          <Link
            href="mailto:folaaluko02@gmail.com"
            color="blue.500"
            _hover={{ color: 'blue.600' }}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Icon as={FaEnvelope} />
            <Text>folaaluko02@gmail.com</Text>
          </Link>
        </HStack>

        <HStack spacing={6}>
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.url}
              isExternal
              color="gray.600"
              _hover={{ color: 'blue.500' }}
            >
              <Icon as={social.icon} boxSize={6} />
            </Link>
          ))}
        </HStack>
      </VStack>
    </Box>
  )
} 