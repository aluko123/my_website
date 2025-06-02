import { Box, Heading, Text, Image, Link, Badge } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

export const ProjectCard = ({ title, description, image, technologies, link }: ProjectCardProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={image} alt={title} />
      <Heading size="md" mt={2}>{title}</Heading>
      <Text mt={2}>{description}</Text>
      <Box mt={2}>
        {technologies.map((tech) => (
          <Badge key={tech} mr={2}>{tech}</Badge>
        ))}
      </Box>
      <Link href={link} isExternal mt={2} display="inline-block">
        <FaGithub /> GitHub
      </Link>
    </Box>
  )
} 