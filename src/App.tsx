import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import {
  focusAreas,
  hobbies,
  posts,
  publications,
  researchInterests,
  siteMeta,
  updates,
} from './content/siteContent'

const HOME_HASH = '#/'

const getHashRoute = () => window.location.hash || HOME_HASH

function App() {
  const [hashRoute, setHashRoute] = useState(getHashRoute)

  useEffect(() => {
    const onHashChange = () => setHashRoute(getHashRoute())
    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  const activePost = useMemo(() => {
    const prefix = '#/blog/'
    if (!hashRoute.startsWith(prefix)) {
      return undefined
    }

    const slug = hashRoute.slice(prefix.length)
    return posts.find((post) => post.slug === slug)
  }, [hashRoute])

  const renderPostContent = (content: string[]) => {
    const blocks: JSX.Element[] = []

    for (let i = 0; i < content.length; i += 1) {
      const line = content[i]

      if (line.startsWith('## ')) {
        blocks.push(
          <Heading key={`h-${i}`} mt={6} size="md">
            {line.slice(3)}
          </Heading>
        )
        continue
      }

      if (line.startsWith('- ')) {
        const items: string[] = []
        let j = i

        while (j < content.length && content[j].startsWith('- ')) {
          items.push(content[j].slice(2))
          j += 1
        }

        blocks.push(
          <UnorderedList key={`ul-${i}`} mt={3} spacing={2} pl={5}>
            {items.map((item, index) => (
              <ListItem key={`li-${i}-${index}`} lineHeight="tall">
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        )

        i = j - 1
        continue
      }

      blocks.push(
        <Text key={`p-${i}`} mt={5} lineHeight="tall">
          {line}
        </Text>
      )
    }

    return blocks
  }

  if (activePost) {
    return (
      <Box minH="100vh" pb={20} className="lab-shell">
        <Container maxW="3xl" pt={{ base: 8, md: 12 }} className="lab-content">
          <Link href={HOME_HASH} fontSize="sm">
            ← Back to home
          </Link>
          <Heading mt={4} size="xl">
            {activePost.title}
          </Heading>
          <Text mt={2} color="gray.600" _dark={{ color: 'gray.400' }}>
            {activePost.date} · {activePost.readTime}
          </Text>
          <Text mt={4} fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            {activePost.tags.join(', ')}
          </Text>
          {activePost.link ? (
            <Link mt={3} display="inline-block" href={activePost.link} isExternal>
              Repository →
            </Link>
          ) : null}

          {renderPostContent(activePost.content)}

        </Container>
      </Box>
    )
  }

  return (
    <Box minH="100vh" pb={20} className="lab-shell">
      <Container maxW="3xl" pt={{ base: 8, md: 12 }} className="lab-content">
        <Text className="eyebrow">Field Notes · Research & Engineering</Text>

        <HStack
          as="nav"
          className="top-nav"
          spacing={{ base: 4, md: 6 }}
          wrap="wrap"
          fontSize="sm"
          color="gray.600"
          _dark={{ color: 'gray.300' }}
          borderBottom="1px solid"
          borderColor="blackAlpha.200"
          pb={4}
          mb={8}
        >
          <Link href="#about">About</Link>
          <Link href="#interests">Research</Link>
          <Link href="#updates">Updates</Link>
          <Link href="#publications">Publications</Link>
          <Link href="#blogs">Blogs</Link>
          <Link href="#hobbies">Hobbies</Link>
          <Link href="#contact">Contact</Link>
        </HStack>

        <Box id="about" mb={10}>
          <HStack align="start" spacing={6} flexWrap="wrap">
            <Image
              src={siteMeta.profileImage}
              alt={siteMeta.name}
              boxSize={{ base: '140px', md: '170px' }}
              objectFit="cover"
              objectPosition="center"
              display="block"
              borderRadius="md"
              border="1px solid"
              borderColor="blackAlpha.300"
            />
            <Box flex="1" minW="260px">
              <Heading size="2xl">{siteMeta.name}</Heading>
              <Text mt={2} fontSize="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
                {siteMeta.role}
              </Text>
              <HStack mt={3} spacing={4}>
                <Link href={siteMeta.github} isExternal aria-label="GitHub profile">
                  <FaGithub />
                </Link>
                <Link href={siteMeta.linkedin} isExternal aria-label="LinkedIn profile">
                  <FaLinkedin />
                </Link>
                <Link href={siteMeta.scholar} isExternal aria-label="Google Scholar profile">
                  Google Scholar
                </Link>
                <Link href={siteMeta.twitter} isExternal aria-label="X profile">
                  <FaXTwitter />
                </Link>
              </HStack>
              <Text mt={5}>{siteMeta.tagline}</Text>
              <Text mt={4} fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                {siteMeta.location}
              </Text>
            </Box>
          </HStack>

          <Box mt={6} className="manifesto-block">
            <Text fontSize="sm">
              I optimize for useful systems, transparent reasoning, and work that can survive outside a demo.
            </Text>
          </Box>
        </Box>

        <Box id="interests" mb={10} className="section-divider">
          <Heading size="lg" mb={3}>
            Research Interests
          </Heading>
          <UnorderedList spacing={2} pl={5}>
            {researchInterests.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </UnorderedList>
          <Text mt={4} fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            Current directions:{' '}
            {focusAreas.map((focus) => focus.title).join(' · ')}
          </Text>
        </Box>

        <Box id="updates" mb={10} className="section-divider">
          <Heading size="lg" mb={3}>
            Updates
          </Heading>
          <Box as="table" w="100%" fontSize="sm">
            <Box as="tbody">
              {updates.map((item) => (
                <Box as="tr" key={`${item.date}-${item.note}`}>
                  <Box as="td" pr={4} py={2} verticalAlign="top" color="gray.600" _dark={{ color: 'gray.400' }} whiteSpace="nowrap">
                    {item.date}
                  </Box>
                  <Box as="td" py={2}>
                    {item.note}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box id="publications" mb={10} className="section-divider">
          <Heading size="lg" mb={3}>
            Publications
          </Heading>
          <OrderedList spacing={4} pl={5}>
            {publications.map((paper) => (
              <ListItem key={paper.title}>
                <Link href={paper.link} isExternal fontWeight="semibold">
                  {paper.title}
                </Link>{' '}
                ({paper.year})
                <Text as="span" color="gray.600" _dark={{ color: 'gray.400' }}>
                  {' '}
                  · {paper.venue}
                </Text>
                <Text mt={1}>{paper.summary}</Text>
              </ListItem>
            ))}
          </OrderedList>
        </Box>

        <Box id="blogs" mb={10} className="section-divider">
          <Heading size="lg" mb={3}>
            Blogs
          </Heading>
          <OrderedList spacing={4} pl={5}>
            {posts.map((post) => (
              <ListItem key={post.title}>
                <Text as="span" fontWeight="semibold">
                  {post.title}
                </Text>
                <Text as="span" fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                  {' '}
                  ({post.date} · {post.readTime})
                </Text>
                <Text mt={1}>{post.summary}</Text>
                <Text mt={1} fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                  {post.tags.join(', ')}
                </Text>
                <HStack mt={2} justify="space-between" align="center" flexWrap="wrap" spacing={3}>
                  <Link display="inline-block" href={`#/blog/${post.slug}`}>
                    Continue reading →
                  </Link>
                  {post.link ? (
                    <Link display="inline-block" href={post.link} isExternal>
                      View repo →
                    </Link>
                  ) : null}
                </HStack>
              </ListItem>
            ))}
          </OrderedList>
        </Box>

        <Box id="hobbies" mb={10} className="section-divider">
          <Heading size="lg" mb={3}>
            Hobbies
          </Heading>
          <UnorderedList spacing={3} pl={5}>
            {hobbies.map((hobby) => (
              <ListItem key={hobby.title}>
                <Text as="span" fontWeight="semibold">
                  {hobby.title}:
                </Text>{' '}
                {hobby.note}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box id="contact" mb={10} className="section-divider">
          <Heading size="lg" mb={3}>
            Contact
          </Heading>
          <Text>
            Email:{' '}
            <Link href={`mailto:${siteMeta.email}`}>{siteMeta.email}</Link>
          </Text>
          <Text mt={2} fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            GitHub: <Link href={siteMeta.github} isExternal>{siteMeta.github}</Link>
          </Text>
          <Text mt={1} fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            LinkedIn: <Link href={siteMeta.linkedin} isExternal>{siteMeta.linkedin}</Link>
          </Text>
          <Text mt={1} fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            Google Scholar: <Link href={siteMeta.scholar} isExternal>{siteMeta.scholar}</Link>
          </Text>
          <Text mt={1} fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            X: <Link href={siteMeta.twitter} isExternal>{siteMeta.twitter}</Link>
          </Text>
        </Box>

        <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }} pt={4} borderTop="1px solid" borderColor="blackAlpha.200">
          © {new Date().getFullYear()} {siteMeta.name}
        </Text>
      </Container>
    </Box>
  )
}

export default App
