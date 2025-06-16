import { investmentData, marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";

const MultiCurrencyInvestment = () => {
  return (
    <Box py={10} bg="gray.50" marginX={marginX}>
      <Box textAlign="center" mb={8}>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "5xl" }}
          fontFamily="poppins"
          textAlign="center"
          my={6}
          color="gray.800"
        >
          Multi-Currency Investments
        </Heading>
        <Text fontSize="md" color="gray.600" maxW="3xl" mx="auto">
          Access global investment opportunities across multiple currencies and
          markets with our diversified solutions.
        </Text>
      </Box>

      <Box display="flex" flexDirection="column" gap={6} marginX={marginX}>
        {investmentData.map((fund, idx) => (
          <Box key={idx} bg={"#0a2234"} pl={4} borderRadius="lg">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              bg="white"
              p={6}
              shadow="sm"
            >
              <Text fontWeight="bold" fontSize="lg" mb={1}>
                {fund.title}
              </Text>
              <Text color="gray.500" fontWeight="medium" mb={3}>
                {fund.subtitle}
              </Text>
              <Text fontSize="sm" color="gray.700" mb={4}>
                {fund.description}
              </Text>

              <Box
                as={"ul"}
                color="teal.600"
                fontSize="sm"
                pl={4}
                mb={5}
                display={"flex"}
                flexDirection="column"
              >
                {fund.points.map((point, i) => (
                  <Box key={i} display="flex" alignItems="center" gap={3}>
                    <IoCheckmarkDone color="blue.500" />
                    {point}
                  </Box>
                ))}
              </Box>

              <Flex justify="flex-end">
                <Button
                  colorScheme="gray"
                  variant="outline"
                  size="sm"
                  _hover={{
                    bg: "#0a2234",
                    transform: "scale(1.05)",
                    color: "white",
                  }}
                >
                  <FaDownload />
                  {fund.cta}
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Box>
      <Button
        mt={6}
        colorScheme="blue"
        variant="solid"
        size="lg"
        width="100%"
        _hover={{
          bg: "#0a2234",
          transform: "scale(1.05)",
          color: "white",
        }}
      >
        Invst Globally
      </Button>
    </Box>
  );
};

export default MultiCurrencyInvestment;
