"use client";
import {
  Box,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
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
      height={{ base: "90vh", sm: "105vh", md: "120vh" }} // 🔹 Increased height
      minHeight="500px" // 🔹 Raised minimum height a bit
      maxHeight="1000px" // 🔹 Increased maximum height
      width="100%"
      overflow="hidden"
      pt={{ base: 2, md: 4 }}
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
        bg="rgba(0, 0, 0, 0.35)"
        zIndex={1}
      />

      {/* Hero Content */}
      <Box
        color="white"
        p={{ base: 4, sm: 6, md: 8 }}
        position="relative"
        zIndex={2}
        width={{ base: "100%", sm: "90%", md: "50%" }}
        mx={{ base: "auto", md: 16 }}
        fontFamily="Poppins"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100%"
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Title */}
        <Text
          fontSize={{ base: "xl", sm: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          lineHeight="short"
        >
          {title || "Begin The Journey. We'll Walk With You."}
        </Text>

        {/* Subtitle */}
        <Text
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          mt={4}
          px={{ base: 2, sm: 0 }}
        >
          {subtitle || "That's the Nabo Promise. Your Growth, Our Focus."}
        </Text>

        {/* Buttons */}
        <Flex
          gap={4}
          mt={6}
          flexWrap="wrap"
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          {/* Primary Button */}
          {scrollTarget ? (
            <a href={scrollTarget}>
              <Button
                bg="cyan.900"
                color="white"
                px={{ base: 4, sm: 6, md: 8 }}
                py={{ base: 3, md: 5 }}
                rounded="full"
                fontWeight="medium"
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
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
                px={{ base: 4, sm: 6, md: 8 }}
                py={{ base: 3, md: 5 }}
                rounded="full"
                fontWeight="medium"
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                _hover={{ bg: "#00CAFF" }}
              >
                {button || "Get Started"}
              </Button>
            </a>
          ) : (
            <Button
              bg="cyan.900"
              color="white"
              px={{ base: 4, sm: 6, md: 8 }}
              py={{ base: 3, md: 5 }}
              rounded="full"
              fontWeight="medium"
              fontSize={{ base: "sm", sm: "md", md: "lg" }}
              _hover={{ bg: "#00CAFF" }}
            >
              {button || "Get Started"}
            </Button>
          )}

          {/* Secondary Button */}
          {button1 &&
            (button1Link?.startsWith("http") ? (
              <a href={button1Link} target="_blank" rel="noopener noreferrer">
                <Button
                  flex="1"
                  bg="#0A2233"
                  color="white"
                  px={{ base: 4, sm: 6, md: 8 }}
                  py={{ base: 3, md: 5 }}
                  rounded="full"
                  fontWeight="medium"
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
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
                  px={{ base: 4, sm: 6, md: 8 }}
                  py={{ base: 3, md: 5 }}
                  rounded="full"
                  fontWeight="bold"
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
                  _hover={{ bg: "#00CAFF" }}
                >
                  {button1}
                </Button>
              </Link>
            ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;