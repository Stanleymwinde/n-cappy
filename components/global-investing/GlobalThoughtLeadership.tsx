import { marginX } from "@/utils/constants";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const GlobalThoughtLeadership = () => {
  return (
    <Box marginX={marginX} py={8} bg="white">
      <Heading
        as="h1"
         fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
        fontFamily="poppins"
        fontWeight={"bold"}
        textAlign="center"
        my={6}
        color="gray.800"
      >
        Global Thought Leadership
      </Heading>
      <Box textAlign="center" color="gray.600" mb={6}>
        Our commitment to thought leadership is reflected in our global presence
        and expertise. We provide insights and strategies that empower you to
        navigate the complexities of international markets with confidence.
      </Box>
      <Box
        p={{ base: 4, md: 8 }}
        textAlign="center"
        boxShadow={"lg"}
        borderRadius="md"
        justifyContent={"center"}
        display="flex"
        // flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          position="relative"
          width="40%"
          height={{ base: "400px", md: "700px" }}
          borderRadius={"lg"}
          overflow="hidden"
          px={{ base: 4, md: 16 }}
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: 4, md: 8 }}
        >
          {/* Background image */}
          <Image
            src="/images/Charles.png"
            alt="Global Thought Leadership"
            objectFit="cover"
            fill
          />
          {/* Text overlay bottom-left */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            p={4}
            bg="whiteAlpha.800"
            borderTopRightRadius="md"
            boxShadow="lg"
          >
            <Text color="black" fontSize="xl" fontWeight="bold">
              Charles Miano
            </Text>
            <Text color="black" fontSize="sm">
              Portfolio Manager
            </Text>
          </Box>{" "}
        </Box>
        <Text
          justifyContent={"center"}
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="left"
          color="gray.600"
          mt={6}
          fontSize={{ base: "md", md: "lg" }}
          maxWidth={"800px"}
          fontWeight={"semibold"}
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
      </Box>
    </Box>
  );
};

export default GlobalThoughtLeadership;
