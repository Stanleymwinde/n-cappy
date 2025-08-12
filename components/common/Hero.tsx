import { Box, Button, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  button?: string;
  button1?: string;
};

const Hero = ({ title, subtitle, imageUrl, button, button1 }: HeroProps) => {
  return (
    <Box
      position="relative"
      height={{ base: "70vh", md: "90vh" }}
      minHeight="300px"
      maxHeight="900px"
      width="100%"
      overflow="hidden"
      pt={4}
    >
      {/* Background Image */}
      <Image
        src={imageUrl || "/images/gtr-2.jpg"}
        alt="Hero"
        fill
        style={{
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          borderRadius: 0,
        }}
        priority
      />

      {/* Black Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)" // Adjust opacity as needed
        zIndex={1}
      />

      {/* Hero Content */}
      <Box
        color="white"
        p={6}
        rounded="lg"
        position="relative"
        zIndex={2} // Ensure content is above overlay
        width={{ base: "100%", md: "45%" }}
        ml={{ base: 4, md: 32 }}
        fontFamily="Poppins"
        maxWidth="100%"
        boxSizing="border-box"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80%"
        textAlign="center"
      >
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          lineHeight="short"
        >
          {title || (
            <>
              Begin The Journey <br />
              We'll Walk With You <br />
            </>
          )}
        </Text>

        <Text fontSize={{ base: "md", md: "xl" }} mt={6}>
          {subtitle || (
            <>
              That's the Nabo Promise. <br />
              Your Growth Our Focus
            </>
          )}
        </Text>

        <Flex gap={4} mt={6} justify="center" width="100%" flexWrap="wrap">
          <Button
            bg="cyan.900"
            color="white"
            px={6}
            py={6}
            rounded="full"
            fontWeight="bold"
            _hover={{ bg: "#00CAFF" }}
          >
            {button || "Get Started"}
          </Button>

          {button1 && (
            <Button
              flex="1"
              bg="#0A2233"
              color="white"
              px={6}
              py={6}
              rounded="full"
              fontWeight="bold"
              _hover={{ bg: "#00CAFF" }}
            >
              {button1}
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
