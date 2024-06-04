import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <HStack spacing={8} justify="space-between">
            <Heading size="lg">Financial Times</Heading>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>Home</Link>
              <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none" }}>World</Link>
              <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none" }}>Business</Link>
              <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none" }}>Tech</Link>
              <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none" }}>Opinion</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Latest News Section */}
        <Box flex="3" p={4}>
          <Heading size="md" mb={4}>Latest News</Heading>
          <VStack spacing={8} align="stretch">
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" mb={4} />
              <Heading size="lg">News Headline 1</Heading>
              <Text mt={2}>Brief description of the news article. This is a summary of the content to give readers an idea of what the article is about.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" mb={4} />
              <Heading size="lg">News Headline 2</Heading>
              <Text mt={2}>Brief description of the news article. This is a summary of the content to give readers an idea of what the article is about.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" mb={4} />
              <Heading size="lg">News Headline 3</Heading>
              <Text mt={2}>Brief description of the news article. This is a summary of the content to give readers an idea of what the article is about.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4}>
          <Heading size="md" mb={4}>Trending Topics</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading size="sm">Trending Topic 1</Heading>
              <Text mt={2}>Brief description of the trending topic.</Text>
            </Box>
            <Box>
              <Heading size="sm">Trending Topic 2</Heading>
              <Text mt={2}>Brief description of the trending topic.</Text>
            </Box>
            <Box>
              <Heading size="sm">Trending Topic 3</Heading>
              <Text mt={2}>Brief description of the trending topic.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} justify="space-between">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none" }}>Contact</Link>
              <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none" }}>Privacy Policy</Link>
              <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none" }}>Terms of Service</Link>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;