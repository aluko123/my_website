import { Box, Flex, Button, useColorModeValue, IconButton, useColorMode } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'
import { FaMoon, FaSun } from 'react-icons/fa'

export const Header = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
      zIndex={1000}
      overflowX="auto"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none'
      }}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        h={16}
        alignItems="center"
        justifyContent="space-between"
        minW="max-content"
      >
        <Box fontWeight="bold" fontSize="xl">
          Fola Aluko
        </Box>
        <Flex gap={4} alignItems="center">
          {['About', 'Projects', 'Current', 'Interests', 'Contact'].map((item) => (
            <Button
              key={item}
              variant="ghost"
              as={ScrollLink}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
              cursor="pointer"
            >
              {item}
            </Button>
          ))}
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </Box>
  )
} 