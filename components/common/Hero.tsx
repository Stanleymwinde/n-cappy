import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  button?: string;
};

const Hero = ({ title, subtitle, imageUrl, button }: HeroProps) => {
  return (
    <Box
      pt={16}
      position="relative"
      height={{ base: "60vh", md: "90vh" }}
      minHeight="400px"
      maxHeight="1000px"
      width="100%"
      overflow="hidden"
    >
      <Image
        src={imageUrl || "/images/gtr-2.jpg"}
        alt="Hero"
        objectFit="cover" // ⬅ shows full image
        width="100%"
        height="100%"
        position="absolute"
        top={0}
        left={0}
        zIndex={0}
      />
      <Box
        color="white"
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
              We&apos;ll Walk With You <br />
            </>
          )}
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }} mt={6}>
          {subtitle || (
            <>
              That&apos;s the Nabo Promise. <br />
              Your Growth Our Focus
            </>
          )}
        </Text>
        <Button
          mt={6}
          colorScheme="blackAlpha"
          bg="blackAlpha.800"
          color="white"
          px={8}
          py={6}
          rounded="full"
          fontWeight="bold"
          _hover={{ bg: "blackAlpha.700" }}
        >
          {button || "Get Started"}
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
