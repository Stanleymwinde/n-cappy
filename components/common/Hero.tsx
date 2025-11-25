"use client";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  button?: string;
  buttonLink?: string;
  button1?: string;
  button1Link?: string;
  scrollTarget?: string;
};

const Hero = ({
  title,
  subtitle,
  imageUrl,
  button,
  buttonLink,
  button1,
  button1Link,
  scrollTarget,
}: HeroProps) => {
  return (
    <Box
      position="relative"
      w="100%"
      h="clamp(60vh, 85vh, 100vh)"    // fluid height for any screen
      minH="400px"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box position="absolute" inset={0} zIndex={0}>
        <Image
          src={imageUrl || "/images/gtr-2.jpg"}
          alt="Hero"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
          priority
        />
        <Box
          position="absolute"
          inset={0}
          bg="rgba(0,0,0,0.35)"
        />
      </Box>

      {/* Content */}
      <Box
        position="relative"
        zIndex={1}
        color="white"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={{
          base: 6,
          sm: 8,
          md: 12,
          lg: 16,
          xl: 24,
          "2xl": 32,
        }}
        maxW="min(90%, 750px)"   // universal fluid content width
      >
        {/* Title */}
        <Text
          fontWeight="bold"
          fontSize="clamp(1.5rem, 3vw + 0.5rem, 3.5rem)"   // scalable across all screens
          lineHeight="1.2"
        >
          {title || "Begin The Journey. We'll Walk With You."}
        </Text>

        {/* Subtitle */}
        <Text
          mt={3}
          fontSize="clamp(0.9rem, 1vw + 0.4rem, 1.4rem)"
          opacity={0.95}
        >
          {subtitle || "That's the Nabo Promise. Your Growth, Our Focus."}
        </Text>

        {/* Buttons */}
        <Flex
          mt={5}
          gap={4}
          flexWrap="wrap"
        >
          {/* Primary Button */}
          <a
            href={scrollTarget || buttonLink || "#"}
            target={buttonLink ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <Button
              bg="cyan.900"
              color="white"
              px="clamp(1.2rem, 2vw, 2.5rem)"
              py="clamp(0.7rem, 1vw, 1.1rem)"
              rounded="full"
              fontSize="clamp(0.8rem, 1vw + 0.2rem, 1.2rem)"
              _hover={{ bg: "#00CAFF" }}
            >
              {button || "Get Started"}
            </Button>
          </a>

          {/* Secondary Button */}
          {button1 && button1Link && (
              button1Link.startsWith("http") ? (
                <a href={button1Link} target="_blank" rel="noopener noreferrer">
                  <Button
                    bg="#0A2233"
                    color="white"
                    px="clamp(1.2rem, 2vw, 2.5rem)"
                    py="clamp(0.7rem, 1vw, 1.1rem)"
                    rounded="full"
                    fontSize="clamp(0.8rem, 1vw + 0.2rem, 1.2rem)"
                    _hover={{ bg: "#00CAFF" }}
                  >
                    {button1}
                  </Button>
                </a>
              ) : (
                <Link href={button1Link}>
                  <Button
                    bg="#0A2233"
                    color="white"
                    px="clamp(1.2rem, 2vw, 2.5rem)"
                    py="clamp(0.7rem, 1vw, 1.1rem)"
                    rounded="full"
                    fontSize="clamp(0.8rem, 1vw + 0.2rem, 1.2rem)"
                    _hover={{ bg: "#00CAFF" }}
                  >
                    {button1}
                  </Button>
                </Link>
              )
            )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
