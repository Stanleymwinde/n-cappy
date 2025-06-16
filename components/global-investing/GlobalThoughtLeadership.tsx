import { marginX } from "@/utils/constants";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const GlobalThoughtLeadership = () => {
  return (
    <Box marginX={marginX} py={8} bg="white">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontFamily="poppins"
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
          height={{ base: "300px", md: "600px" }}
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
          textAlign="center"
          color="gray.600"
          mt={6}
          fontSize={{ base: "md", md: "lg" }}
          maxWidth={"800px"}
          fontWeight={"semibold"}
        >
          With over 20 years of experience in global financial markets, Charles
          leads our investment strategy across multiple geographies and asset
          classes. His deep understanding of both developed and emerging markets
          provides our clients with valuable insights and opportunities. Charles
          regularly contributes to international financial publications and
          speaks at global investment conferences, sharing his perspective on
          market trends and investment strategies.
        </Text>
      </Box>
    </Box>
  );
};

export default GlobalThoughtLeadership;
