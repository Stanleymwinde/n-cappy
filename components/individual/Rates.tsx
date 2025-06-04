import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Rates = () => {
  return (
    <Box py={1}>
      <Flex border={"1px solid"} borderRadius="md" p={4} bg="gray.50">
        <Text
          fontSize="md"
          fontStyle={"italic"}
          width="100%"
          textAlign="center"
          whiteSpace="pre-line"
        >
          📈 🔔 Rates Update: Fixed Deposit – Up to 10.2% | Balanced Fund – 8.9%
          | Aggressive Growth – 12.1% | Let your money work harder.
        </Text>
      </Flex>
    </Box>
  );
};

export default Rates;
