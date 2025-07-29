import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const rates = () => {
  return (
    <>
      <Box py={2}>
        <Flex border={"1px solid #ccc"} borderRadius="md" p={2}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            width="100%"
            textAlign="center"
            whiteSpace="pre-line"
          >
            📈 Current Treasury Bond Rate: 11.25% | Money Market Fund: 9.8% |
            Inflation Rate: 6.3% | Updated May 14, 2025
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default rates;
