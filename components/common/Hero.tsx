import { Box, Button, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  button?: string; // First button text
  button1?: string; // Second button text
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

      <Box
        color="#0A2233"
        p={6}
        rounded="lg"
        position="relative"
        zIndex={1}
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
            flex="1"
            height="56px"
            bg="cyan.900"
            color="white"
            rounded="full"
            fontWeight="bold"
            _hover={{ bg: "#00CAFF" }}
          >
            {button || "Get Started"}
          </Button>

          {button1 && (
            <Link href="#" passHref>
              <Button
                as="a"
                flex="1"
                height="56px"
                bg="#0A2233"
                color="white"
                rounded="full"
                fontWeight="bold"
                _hover={{
                  bg: "#00CAFF",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                }}
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
