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
  scrollTarget 
}: HeroProps) => {
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
        quality={90}
        fill
        style={{
          objectFit: "fill",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
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
        bg="rgba(0, 0, 0, 0.4)"
        zIndex={1}
      />

      {/* Hero Content */}
      <Box
        color="white"
        p={6}
        position="relative"
        zIndex={2} 
        width={{ base: "100%", md: "45%" }}
        ml={{ base: 4, md: 16 }}
        fontFamily="Poppins"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="80%"
        textAlign="left"
      >
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          lineHeight="short"
        >
          {title || "Begin The Journey. We'll Walk With You."}
        </Text>

        <Text fontSize={{ base: "md", md: "xl" }} mt={6}>
          {subtitle || "That's the Nabo Promise. Your Growth, Our Focus."}
        </Text>

        <Flex gap={4} mt={5} flexWrap="wrap">
          {/* Primary Button */}
          {scrollTarget ? (
            <a href={scrollTarget}>
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
            </a>
          ) : buttonLink ? (
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
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
            </a>
          ) : (
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
          )}

          {/* Secondary Button */}
          {button1 && (
            button1Link?.startsWith("http") ? (
              <a href={button1Link} target="_blank" rel="noopener noreferrer">
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
              </a>
            ) : (
              <Link href={button1Link || "/individual"} passHref>
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
              </Link>
            )
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
