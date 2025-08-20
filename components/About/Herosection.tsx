"use client";

import { Box, VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" w="100%" h="100vh" overflow="hidden">
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgImage="url('images/IMG_0610.jpg')" 
        bgSize="cover"
        bgPos="center"
        zIndex={0}
      />

      {/* Black Overlay (adjust opacity here) */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0,0,0,0.3)"  // adjust opacity here (0.3 lighter, 0.8 darker)
        zIndex={1}
      />

      {/* Hero Content */}
      <VStack
        position="relative"
        zIndex={2}
        h="100%"
        justify="center"
        align="center"
        gap={4}
        textAlign="center"
        px={4}
        color="white"
        fontFamily="Poppins"
      >
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          lineHeight="short"
        >
          Who We Are
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} maxW="600px">
          A Trusted Partner in Institutional and Retail Investment Solutions.
        </Text>
        <HStack gap={4} mt={6}>
          <Button color="white" _hover={{ bg: "#00CAFF" }} size="lg">
            Meet Our Team
          </Button>
          <Button color="white" _hover={{ bg: "#00CAFF" }} size="lg">
            Learn More
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HeroSection;
