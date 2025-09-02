"use client";

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
      height="300px"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgColor="rgba(0, 0, 0, 0.5)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {/* Heading */}
        <Box fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
          Innovation that feels personal
        </Box>

        {/* Store Buttons */}
        <Flex
          mt={4}
          gap={{ base: 3, md: "2rem" }}
          align="center"
          justify="center"
          flexDirection={{ base: "column", md: "row" }}
          flexWrap="wrap"
        >
          {/* App Store Badge */}
          <Link
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.3s ease"
          >
            <Image
              src="/images/App_store.svg"
              alt="Download on the App Store"
              height="70px"
              objectFit="contain"
            />
          </Link>

          {/* Google Play Badge */}
          <Link
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.3s ease"
          >
            <Image
              src="/images/gg.webp"
              alt="Get it on Google Play"
              height="160px"
              objectFit="contain"
            />
          </Link>
        </Flex>

        {/* CTA Button */}
        <Link href="https://invest.nabocapital.com" target="_blank">
          <Box

            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            as={"button"}
            bgColor={"white"}
            padding="10px 20px"
            borderRadius="5px"
            _hover={{ bgColor: "#00b5e0" }}
            cursor="pointer"
          >
            INVEST NOW
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default CallToActionCommon;
