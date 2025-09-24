"use client";
import { Box, Flex, Link, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const headingVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const leftBadgeVariant = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const rightBadgeVariant = {
  hidden: { opacity: 0, x: 150 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const investButtonVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

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
        <MotionBox
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          fontWeight="bold"
          color="white"
          mb={{ base: 4, md: 6 }}
        >
          Innovation that feels personal
        </MotionBox>

        {/* Store Buttons */}
        <Flex
          mb={{ base: 4, md: 6 }}
          align="center"
          justify="center"
          flexDirection={{ base: "column", sm: "row" }}
          gap={{ base: 3, md: 6 }}
        >
          {/* App Store Badge */}
          <MotionBox
            variants={leftBadgeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
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
          </MotionBox>

          {/* Google Play Badge */}
          <MotionBox
            variants={rightBadgeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Link
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/gg.webp"
                alt="Google Play"
                height= "160px"
                objectFit="fill"
              />
            </Link>
          </MotionBox>
        </Flex>

        {/* INVEST NOW Button */}
        <MotionBox
          variants={investButtonVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
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
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToActionCommon;
