"use client";

import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

// Regions and corresponding countries
const regions = [
  { name: "Eastern Africa", color: "#EB5757", countries: ["Kenya", "Uganda", "Botswana", "Zambia", "Tanzania", "Rwanda", "Burundi"] },
  { name: "Western Africa", color: "#2D9CDB", countries: ["Nigeria", "Ghana", "Senegal", "Namibia"] },
  { name: "Southern Africa", color: "#1E1E1E", countries: ["Malawi", "Botswana", "Lesotho"] },
  { name: "Northern Africa", color: "#F2994A", countries: ["Egypt", "Morocco", "Algeria", "Tunisia", "Libya"] },
  { name: "Europe", color: "#56CCF2", countries: ["United Kingdom"] },
  { name: "North America", color: "#000000", countries: ["United State of America"] },
];

const GlobalMarketFootprint = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]); // default: Eastern Africa

  return (
    <Box marginX={marginX} py={10} bg="white">
      <Box textAlign="center" mb={8}>
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "6xl" }}
          fontFamily="poppins"
          fontWeight="bold"
          textAlign="center"
          my={2}
          color="gray.800"
          lineHeight={{ base: "1.2", md: "1.1" }}
        >
          Multi-Currency Investments Global Market Footprint
        </Heading>
        <Text color="gray.600">
          Our presence spans across continents, providing you with truly global investment opportunities and local expertise.
        </Text>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} align="center" gap={6}>
        {/* Regions list */}
        <VStack align="center" justify="center" gap={4} flex="1" width="100%">
          <Text fontWeight="bold" fontSize="lg">Our Regions</Text>

          {regions.map((region, idx) => (
            <HStack
              key={idx}
              align="center"
              justify="center"
              width="100%"
              cursor="pointer"
              onClick={() => setSelectedRegion(region)}
            >
              <Text fontSize="lg">{region.name}</Text>
              <Circle size="12px" bg={region.color} />
            </HStack>
          ))}
        </VStack>

        {/* Map + Details */}
        <Box
          flex="2"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="sm"
          p={4}
          border="1px solid"
          borderColor="gray.200"
        >
          <Image
            src="/images/world-map.png"
            alt="World Map"
            borderRadius="md"
            mb={4}
            objectFit="cover"
            width="100%"
            height="200px"
          />
          <Text fontWeight="bold" fontSize="md" mb={2}>
            {selectedRegion.name}
          </Text>
          <HStack wrap="wrap" gap={3} mb={3}>
            {selectedRegion.countries.map((country, idx) => (
              <Text key={idx} fontWeight="semibold">{country}</Text>
            ))}
          </HStack>
          <Text fontSize="sm" color="gray.600">
            Select a region to see our presence and investment opportunities. Our global network provides you with access to diverse markets and asset classes around the world.
          </Text>
        </Box>
      </Flex>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={4}>
        <Button
          colorScheme="blue"
          size="lg"
          width="100%"
          maxWidth="300px"
          mt={4}
          _hover={{ bg: "#00CAFF" }}
        >
          Download Whitepapers
        </Button>
      </Box>
    </Box>
  );
};

export default GlobalMarketFootprint;
