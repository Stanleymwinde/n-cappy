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
      width="100%"
      height={{ base: "45vh", sm: "65vh", md: "80vh", lg: "100vh" }} // reduced height for mobile
      minHeight={{ base: "350px", md: "600px" }} // changed mobile min height
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={0}
      >
        <Image
          src={imageUrl || "/images/gtr-2.jpg"}
          alt="Hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="rgba(0,0,0,0.35)"
        />
      </Box>

      {/* Hero Content */}
      <Box
        position="relative"
        zIndex={1}
        color="white"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={{ base: 6, sm: 8, md: 20, lg: 32 }}
        textAlign={{ base: "left", md: "left" }} // Changed: left-align on mobile
        maxW={{ base: "90%", sm: "80%", md: "65%", lg: "50%" }}
        mx={{ base: 0, md: 0 }} // Changed: remove horizontal centering on mobile
      >
        {/* Title */}
        <Text
          fontSize={{ base: "xl", sm: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          lineHeight={{ base: "shorter", md: "short" }} // Adjusted for mobile spacing
        >
          {title || "Begin The Journey. We'll Walk With You."}
        </Text>

        {/* Subtitle */}
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
          mt={3} // Slightly reduced margin for mobile
          lineHeight={{ base: "tall", md: "short" }}
        >
          {subtitle || "That's the Nabo Promise. Your Growth, Our Focus."}
        </Text>

        {/* Buttons */}
        <Flex
          mt={4} // reduced margin top for mobile
          gap={4}
          flexWrap="wrap"
          justifyContent={{ base: "flex-start", md: "flex-start" }} // Changed: left-align buttons
        >
          {/* Primary Button */}
          {scrollTarget || buttonLink ? (
            <a
              href={scrollTarget || buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
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
                  flex={{ base: "100%", md: "auto" }}
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
                  flex={{ base: "100%", md: "auto" }}
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
