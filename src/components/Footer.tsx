import { Box, Text, useColorModeValue } from '@chakra-ui/react'

export const Footer = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      as="footer"
      bg={bg}
      borderTop="1px"
      borderColor={borderColor}
      py={6}
      textAlign="center"
    >
      <Text color="gray.500">
        © {new Date().getFullYear()} Fola Aluko. All rights reserved.
      </Text>
    </Box>
  )
} 