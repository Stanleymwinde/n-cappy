"use client";

import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

const kiidDocs = [
  {
    title: "KIID Africa Equity Fund",
    description:
      "Learn more about the Africa Equity Fund investment strategy, risk profile, and performance.",
    file: "/kiid/KIID Africa Equity Fund.pdf",
  },
  {
    title: "KIID Balanced Fund",
    description:
      "Discover the Balanced Fund approach combining growth and income for diversified returns.",
    file: "/kiid/KIID Balanced Fund.pdf",
  },
  {
    title: "KIID Fixed Income Fund",
    description:
      "Understand the Fixed Income Fund objectives, performance trends, and risk management strategies.",
    file: "/kiid/KIID Fixed Income Fund.pdf",
  },
  {
    title: "KIID Kes Money Market Fund",
    description:
      "Explore details of the Kes Money Market Fund — a low-risk, short-term investment option.",
    file: "/kiid/KIID Kes Money Market Fund.pdf",
  },
  {
    title: "KIID Nabo Africa Fixed Income Fund USD 1",
    description:
      "Read the report for the Nabo Africa Fixed Income Fund in USD, with risk and return information.",
    file: "/kiid/KIID Nabo Africa Fixed Income Fund USD 1.pdf",
  },
  {
    title: "KIID Nabo Africa Money Market Fund USD 1",
    description:
      "Get insights into the Nabo Africa Money Market Fund, focused on capital preservation and liquidity.",
    file: "/kiid/KIID Nabo Africa Money Market Fund USD 1.pdf",
  },
  {
    title: "KIID Nabo Income Fund",
    description:
      "Detailed overview of the Nabo Income Fund’s strategy, yields, and performance benchmarks.",
    file: "/kiid/KIID Nabo Income Fund.pdf",
  },
];

export default function KIIDPage() {
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
          Key Investor Information Documents
        </Heading>
        <Text color="whiteAlpha.800" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
          Below are the Key Investor Information Documents (KIIDs) for Nabo
          Capital funds. 
        </Text>
      </VStack>

      {/* Grid of cards with increased spacing */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        gap={12}
        maxW="1200px"
        mx="auto"
        mt={16}
      >
        {kiidDocs.map((doc, index) => (
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
