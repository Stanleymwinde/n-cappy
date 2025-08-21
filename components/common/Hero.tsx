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
  button1?: string;
  scrollTarget?: string; 
  buttonLink?: string; 
};

const Hero = ({ title, subtitle, imageUrl, button, button1, scrollTarget, buttonLink }: HeroProps) => {
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
        bg="rgba(0, 0, 0, 0.4)"
        zIndex={1}
      />

      {/* Hero Content */}
      <Box
        color="white"
        p={6}
        rounded="lg"
        position="relative"
        zIndex={2} 
        width={{ base: "100%", md: "45%" }}
        ml={{ base: 4, md: 16 }}  
        fontFamily="Poppins"
        maxWidth="100%"
        boxSizing="border-box"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"  
        justifyContent="center"
        height="80%"
        textAlign="left"  
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
        <Flex gap={4} mt={5} justify="flex-start" width="100%"> 
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
            <Button
              bg="cyan.900"
              color="white"
              px={6}
              py={6}
              rounded="full"
              fontWeight="bold"
              _hover={{ bg: "#00CAFF" }}
              onClick={() => window.open(buttonLink, "_blank")} 
            >
              {button || "Get Started"}
            </Button>
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
          {button1 && (
            <Link href="/individual" passHref>
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
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
