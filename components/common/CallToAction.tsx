import { Box, Flex, Link, Image } from "@chakra-ui/react";
import React from "react";

const CallToActionCommon = () => {
  return (
    <Box
      bgImage="url('/images/cta.png')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      width="100%"
      height={{ base: "370px", sm: "450px", md: "550px" }}
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgColor="rgba(0, 0, 0, 0.55)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={{ base: 3, md: 6 }}
      >
        {/* Heading */}
        <Box
          fontSize={{ base: "2xl", md: "5xl" }}
          fontWeight="bold"
          color="white"
          mb={{ base: 4, md: 6 }}
        >
          Innovation that feels personal
        </Box>

        {/* Store Buttons */}
        <Flex
          mb={{ base: 4, md: 6 }}
          align="center"
          justify="center"
          flexDirection={{ base: "column", sm: "row" }}
          gap={{ base: 3, md: 6 }}
        >
          {/* App Store Badge */}
          <Link
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/App_store.svg"
              alt="App Store"
              height="70px"
              objectFit="contain"
            />
          </Link>

          {/* Google Play Badge */}
          <Link
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/gg.webp"
              alt="Google Play"
              height="160px"
              objectFit="fill"
            />
          </Link>
        </Flex>

        {/* INVEST NOW Button */}
        <Link href="https://invest.nabocapital.com" target="_blank">
          <Box
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            fontWeight="bold"
            bgColor="white"
            px={{ base: 4, sm: 6, md: 8 }}
            py={{ base: 2, sm: 3, md: 4 }}
            borderRadius="8px"
            _hover={{ bgColor: "#00b5e0", color: "white" }}
            cursor="pointer"
            transition="all 0.3s ease"
          >
            INVEST NOW
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default CallToActionCommon;
