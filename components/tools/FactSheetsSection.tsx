"use client";
import { Box, Grid, GridItem, Button, Text, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

// Example fact sheets data
const factSheets = [
  {
    id: 1,
    title: "Money Market Fund (KES)",
    description:
      "The fund seeks to maximize current income by investing primarily in a diversified portfolio of short term debt securities and instruments.",
    file: "/notes/MMF-KES.pdf",
  },
  {
    id: 2,
    title: "Money Market Fund (USD)",
    description:
      "The yield on the Nabo Money Market Fund (USD) remains competitively high, relative to US Treasuries, which have recently climbed as the economy heats up.",
    file: "/notes/MMF-USD.pdf",
  },
  {
    id: 3,
    title: "Fixed Income Fund (KES)",
    description:
      "The Nabo Fixed Income Fund invests in diversified fixed income securities across Africa, aiming for stable capital growth with a medium to long-term horizon.",
    file: "/notes/FIF-KES.pdf",
  },
  {
    id: 4,
    title: "Fixed Income Fund (USD)",
    description:
      "The fund invests in diversified fixed income securities across Africa, aiming for stable capital growth, maximizing returns, and minimizing volatility.",
    file: "/notes/FIF-USD.pdf",
  },
  {
    id: 5,
    title: "Balanced Fund (KES)",
    description:
      "The fund seeks to generate maximum total return by investing in a diversified portfolio of securities offering current income and long-term growth.",
    file: "/notes/BF.pdf",
  },
  {
    id: 6,
    title: "Balanced Fund (USD)",
    description:
      "The fund seeks to generate maximum total return by investing in a diversified portfolio of securities offering current income and long-term growth.",
    file: "/notes/BF-USD.pdf",
  },
  {
    id: 7,
    title: "Equity Fund",
    description:
      "The fund seeks to generate maximum total return by investing in a diversified portfolio of securities offering current income and long-term capital growth.",
    file: "/notes/EF.pdf",
  },
];

const FactSheetsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const toggleViewAll = () => {
    setVisibleCount((prev) => (prev === 3 ? factSheets.length : 3));
  };

  return (
    <Box id="fact-sheets" py={16} px={{ base: 6, md: 12 }} bg="white">
      <Heading
        as="h2"
       fontSize={{ base: "xl", sm: "2xl", md: "4xl", lg: "5xl" }}
        mb={4}
        color="#0a2234"
        fontWeight="bold"
        textAlign="center"
      >
        Fact Sheets
      </Heading>

      <Text
        textAlign="center"
        fontSize="lg"
        color="gray.600"
        mb={10}
        maxW="600px"
        mx="auto"
      >
        Explore our collection of fact sheets to learn more about our funds and
        performance insights.
      </Text>

      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={8}
      >
        {factSheets.slice(0, visibleCount).map((sheet) => (
          <GridItem key={sheet.id}>
            <Box
              bg="#00caff"
              color="#0a2234"
              p={6}
              borderRadius="xl"
              boxShadow="md"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "lg",
                bg: "#00b2e6",
              }}
            >
              <Box>
                <Text fontWeight="bold" fontSize="xl" mb={3}>
                  {sheet.title}
                </Text>
                <Text fontSize="sm" opacity={0.95} lineHeight="1.6">
                  {sheet.description}
                </Text>
              </Box>

              <Flex justify="flex-end" mt={6}>
                <Button
                  size="sm"
                  bg="#0a2234"
                  color="white"
                  fontWeight="semibold"
                  borderRadius="full"
                  _hover={{ bg: "#00caff" }}
                  onClick={() => window.open(sheet.file, "_blank")}
                >
                  View Sheet
                </Button>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {factSheets.length > 3 && (
        <Flex justify="center" mt={10}>
          <Button
            colorScheme="teal"
            variant="solid"
            size="md"
            borderRadius="full"
            bg="#00caff"
            _hover={{ bg: "#00b2e6" }}
            onClick={toggleViewAll}
          >
            {visibleCount > 3 ? "View Less" : "View All"}
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default FactSheetsSection;
