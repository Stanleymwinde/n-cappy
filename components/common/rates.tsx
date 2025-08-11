import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

type Security = {
  id: string | number;
  fund_name: string;
  interest_rate: number;
};

const rates = async () => {
  const securities: Security[] | null = await fetchRates();
  if (!securities) {
    return (
      <Box p={4}>
        <Text color="red.500">
          Failed to fetch rates. Please try again later.
        </Text>
      </Box>
    );
  }

  return (
    <>
      <Box py={2} overflow="hidden">
        <Flex
          border="1px solid #ccc"
          borderRadius="md"
          p={2}
          align="center"
          position="sticky"
          top="0" // sticks at the very top of the screen
          zIndex="1000" // keeps it above content
          bg="white" // ensures it stays solid while scrolling
          width="100%"
          minHeight="50px"
          whiteSpace="nowrap"
        >
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            <Text fontSize="sm" fontWeight="medium">
              📊 Top Performers:{" "}
              {securities.map((security, index) => (
                <Box as="span" key={security.id} fontWeight="semibold">
                  {security.fund_name} – {security.interest_rate}%
                  {index !== securities.length - 1 && "   |   "}
                </Box>
              ))}
              {"   |   Updated Weekly"}
            </Text>
          </Marquee>
        </Flex>
      </Box>
    </>
  );

  async function fetchRates(): Promise<Security[] | null> {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_SECURITIES_API_URL as string
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.securities;
    } catch (error) {
      console.error("Failed to fetch rates:", error);
      return null;
    }
  }
};

export default rates;
