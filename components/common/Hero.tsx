"use client";
import {
  Box,
  Button,
  Text,
  Flex,
  Skeleton,
  SkeletonText,
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
      height={{ base: "70vh", sm: "75vh", md: "90vh" }}
      minHeight="300px"
      maxHeight="900px"
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
          objectFit: "cover",
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
        p={{ base: 4, md: 6 }}
        position="relative"
        zIndex={2}
        width={{ base: "90%", sm: "85%", md: "45%" }}
        ml={{ base: "auto", md: 16 }}
        mr={{ base: "auto", md: 0 }}
        fontFamily="Poppins"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="80%"
        textAlign={{ base: "center", md: "left" }}
      >
        <Text
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          fontWeight="bold"
          lineHeight="short"
        >
          {title || "Begin The Journey. We'll Walk With You."}
        </Text>

        <Text fontSize={{ base: "sm", sm: "md", md: "xl" }} mt={4}>
          {subtitle || "That's the Nabo Promise. Your Growth, Our Focus."}
        </Text>

        <Flex
          gap={4}
          mt={5}
          flexWrap="wrap"
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          {/* Primary Button */}
          {scrollTarget ? (
            <a href={scrollTarget}>
              <Button
                bg="cyan.900"
                color="white"
                px={{ base: 4, md: 6 }}
                py={{ base: 4, md: 6 }}
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
                px={{ base: 4, md: 6 }}
                py={{ base: 4, md: 6 }}
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
              px={{ base: 4, md: 6 }}
              py={{ base: 4, md: 6 }}
              rounded="full"
              fontWeight="bold"
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
                  px={{ base: 4, md: 6 }}
                  py={{ base: 4, md: 6 }}
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
                  px={{ base: 4, md: 6 }}
                  py={{ base: 4, md: 6 }}
                  rounded="full"
                  fontWeight="bold"
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
