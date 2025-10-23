import { marginX } from "@/utils/constants";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const GlobalThoughtLeadership = () => {
  return (
    <Box marginX={marginX} py={{ base: 8, md: 16 }} bg="white">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
        fontFamily="poppins"
        fontWeight="bold"
        textAlign="center"
        mb={{ base: 4, md: 8 }}
        color="gray.800"
      >
        Global Thought Leadership
      </Heading>

      <Text
        textAlign="center"
        color="gray.600"
        maxW="3xl"
        mx="auto"
        fontSize={{ base: "sm", md: "md" }}
        mb={{ base: 6, md: 10 }}
        px={{ base: 4, md: 0 }}
      >
        Our commitment to thought leadership is reflected in our global presence
        and expertise. We provide insights and strategies that empower you to
        navigate the complexities of international markets with confidence.
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ base: 6, md: 12 }}
        px={{ base: 4, md: 8 }}
      >
        {/* Image section */}
        <Box
          position="relative"
          width={{ base: "100%", md: "45%" }}
          height={{ base: "400px", md: "600px" }}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <Image
            src="/images/Charles.png"
            alt="Global Thought Leadership"
            fill
            style={{ objectFit: "cover" }}
          />
          <Box
            position="absolute"
            bottom="0"
            left="0"
            p={{ base: 3, md: 4 }}
            bg="whiteAlpha.800"
            borderTopRightRadius="md"
            boxShadow="md"
          >
            <Text color="black" fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
              Charles Miano
            </Text>
            <Text color="black" fontSize={{ base: "xs", md: "sm" }}>
              Portfolio Manager
            </Text>
          </Box>
        </Box>

        {/* Text section */}
        <Text
          textAlign={{ base: "center", md: "left" }}
          color="gray.700"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          maxW={{ base: "full", md: "600px" }}
          lineHeight="tall"
          px={{ base: 2, md: 0 }}
        >
          When you invest globally with us, you invest more than capital; you
          invest your dreams, your future, your legacy. That trust is our
          highest responsibility. At Nabo Capital, global investing isn’t about
          chasing short-term wins; it’s about building long-term value where
          your wealth can compound securely across borders. Whether you are a
          Kenyan abroad, a global investor looking toward Africa, or a local
          investor reaching outward, your capital is protected, nurtured, and
          given every opportunity to thrive. Invest beyond borders—because your
          wealth deserves a world stage.
        </Text>
      </Flex>
    </Box>
  );
};

export default GlobalThoughtLeadership;
