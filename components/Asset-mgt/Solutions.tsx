"use client";

import { marginX } from "@/utils/constants";
import { Box, Grid, Image, Text, Flex, Heading } from "@chakra-ui/react";

const clientSegments = [
  {
    title: "Pension Funds",
    image: "/images/gtr-1.jpg",
    icon: "/icons/pension-icon.svg",
  },
  {
    title: "Insurance Companies",
    image: "/images/gtr-2.jpg",
    icon: "/icons/insurance-icon.svg",
  },
  {
    title: "Sovereign Wealth Funds",
    image: "/images/gtr-3.jpg",
    icon: "/icons/sovereign-icon.svg",
  },
  {
    title: "Public & Private Companies",
    image: "/images/gtr-2.jpg",
    icon: "/icons/private-icon.svg",
  },
];

export default function Solutions() {
  return (
    <Box marginX={marginX} py={6} bg="white">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        my={6}
        color="gray.800"
        textAlign="center"
      >
        We Offer Solutions For
      </Heading>
      <Text mb={8} textAlign="center" fontSize="lg" color="gray.600">
        Our institutional expertise spans various client types, with customized
        solutions for each segment&apos;s unique requirements.
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {clientSegments.map((item, index) => (
          <Box
            key={index}
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            role="group"
          >
            <Image
              src={item.image}
              alt={item.title}
              width="100%"
              height="100%"
              objectFit="cover"
              transition="all 0.3s"
              _groupHover={{ transform: "scale(1.05)" }}
            />
            <Flex
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="blackAlpha.600"
              align="center"
              justify="center"
              direction="column"
              textAlign="center"
              px={4}
            >
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                boxSize="50px"
                mb={3}
              />
              <Text fontSize="lg" fontWeight="bold" color="white">
                {item.title}
              </Text>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
