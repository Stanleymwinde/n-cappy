"use client";

import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

const infoMemoDocs = [
  {
    title: "NAUTF Updated Information Memorandum",
    description:
      "Access the latest Information Memorandum for NAUTF, including key details on investment strategy, risk, and returns.",
    file: "/kiid/NAUTF_ Updated Information Memorandum_Clean version 3.pdf",
  },
];

export default function InfoMemoPage() {
  return (
    <Box bg="#0A2233" minH="100vh" py={28} px={{ base: 6, md: 20 }}>
      {/* Centered Heading & Text */}
      <VStack gap={6} align="center" mx="auto" textAlign="center" maxW="900px">
        <Heading
          color="#00CAFF"
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
          lineHeight={{ base: "short", sm: "shorter", md: "shorter" }}
          wordBreak="break-word"
        >
          Information Memorandum
        </Heading>
        <Text color="whiteAlpha.800" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
          Below is the latest Information Memorandum for NAUTF.
        </Text>
      </VStack>

      {/* Grid of card */}
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1 }}
        gap={12}
        maxW="1200px"
        mx="auto"
        mt={16}
      >
        {infoMemoDocs.map((doc, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="2xl"
            shadow="lg"
            p={6}
            _hover={{ transform: "scale(1.03)", transition: "0.3s ease" }}
          >
            <Heading size="md" color="#0A2233" mb={4}>
              {doc.title}
            </Heading>
            <Text mb={4} color="gray.600">
              {doc.description}
            </Text>
            <a href={doc.file} target="_blank" rel="noopener noreferrer">
              <Button
                bg="#00CAFF"
                color="white"
                _hover={{ bg: "#00b5e0" }}
                w="full"
                size="sm"
              >
                View Document
              </Button>
            </a>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
