"use client";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { motion, easeOut } from "framer-motion";

const MotionBox = motion(Box);

const centerReveal = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const Account = () => {
  return (
    <MotionBox
      bg="#0a2234"
      py={{ base: 12, md: 20 }}
      px={4}
      textAlign="center"
      fontFamily="Poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={centerReveal}
    >
      {/* Button */}
      <Button
        bg="#00caff"
        color="white"
        fontWeight="bold"
        fontSize={{ base: "md", md: "xl" }}
        px={10}
        py={8}
        borderRadius="xl"
        mb={8}
        _hover={{ bg: "#00b3e6" }}
        fontFamily="Poppins"
      >
        Start Investing With Purpose
      </Button>

      {/* Heading */}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="extrabold"
        color="white"
        mb={4}
        fontFamily="Poppins"
      >
        Investing for everything it’s worth
      </Heading>

      {/* Description */}
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="gray.200"
        fontFamily="Poppins"
      >
        Whether you are saving for smaller moments or the big ones... <br />
        we are here for you
      </Text>
    </MotionBox>
  );
};

export default Account;
