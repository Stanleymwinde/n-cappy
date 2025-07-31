"use client";
import { Box, Text, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React from "react";

// Define scrolling animation
const scroll = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const tickerText = `📈 Current Treasury Bond Rate: 11.25% | Money Market Fund: 9.8% | Inflation Rate: 6.3% | Updated May 14, 2025`;

const Currency = () => {
  return (
    <Box py={2} overflow="hidden" whiteSpace="nowrap" fontFamily="Poppins" bg="gray.100">
      <Flex
        as="div"
        animation={`${scroll} 30s linear infinite`}
        minWidth="200%"
      >
        {/* Repeat the same content twice for seamless loop */}
        <Text fontSize="xl" fontWeight="bold" px={4}>
          {tickerText}
        </Text>
        <Text fontSize="xl" fontWeight="bold" px={4}>
          {tickerText}
        </Text>
      </Flex>
    </Box>
  );
};

export default Currency;

