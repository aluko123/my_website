import { extendTheme, type StyleFunctionProps, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Fraunces', 'Georgia', serif",
    body: "'IBM Plex Sans', 'Segoe UI', sans-serif",
  },
  colors: {
    brand: {
      50: '#f2f8f6',
      100: '#d6ebe4',
      200: '#b6dbcf',
      300: '#8cc5b2',
      400: '#63ac95',
      500: '#4b907b',
      600: '#3b7262',
      700: '#2d584d',
      800: '#203f37',
      900: '#122924',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#11151e' : '#f8f8f6',
        color: props.colorMode === 'dark' ? '#edf2f7' : '#1f2937',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
})

export { theme } 
