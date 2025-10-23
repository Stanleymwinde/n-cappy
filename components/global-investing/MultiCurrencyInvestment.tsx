import { investmentData, marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";

const MultiCurrencyInvestment = () => {
  return (
    <Box
      id="section7"
      py={{ base: 8, md: 10 }}
      bg="gray.50"
      px={{ base: 4, md: marginX }}
      mt={{ base: 10, md: 20 }}
    >
      {/* Heading and Description */}
      <Box textAlign="center" mb={{ base: 6, md: 8 }}>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          fontFamily="poppins"
          fontWeight="bold"
          color="gray.800"
          mb={4}
        >
          Multi-Currency Investments
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="gray.600"
          maxW="3xl"
          mx="auto"
          px={{ base: 2, md: 0 }}
        >
          Access global investment opportunities across multiple currencies and
          markets with our diversified solutions.
        </Text>
      </Box>

      {/* Investment Cards */}
      <Flex direction="column" gap={{ base: 5, md: 6 }}>
        {investmentData.map((fund, idx) => (
          <Box
            key={idx}
            bg="white"
            borderRadius="lg"
            p={{ base: 4, md: 6 }}
            shadow="md"
          >
            {/* Fund title */}
            <Text
              fontWeight="bold"
              fontSize={{ base: "md", md: "lg" }}
              mb={1}
              color="gray.800"
            >
              {fund.title}
            </Text>
            <Text
              color="gray.500"
              fontWeight="medium"
              fontSize={{ base: "sm", md: "md" }}
              mb={3}
            >
              {fund.subtitle}
            </Text>

            {/* Fund description */}
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.700"
              mb={4}
              lineHeight="tall"
            >
              {fund.description}
            </Text>

            {/* Points list */}
            <Box
              as="ul"
              color="teal.600"
              fontSize={{ base: "sm", md: "md" }}
              pl={2}
              mb={5}
              display="flex"
              flexDirection="column"
              gap={2}
            >
              {fund.points.map((point, i) => (
                <Box
                  as="li"
                  key={i}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  flexWrap="wrap"
                >
                  <IoCheckmarkDone color="#00CAFF" />
                  <Text>{point}</Text>
                </Box>
              ))}
            </Box>

            {/* Download button */}
            <Flex justify={{ base: "center", md: "flex-end" }}>
              <a href={fund.file} download>
                <Button
                  bg="#0a2234"
                  color="white"
                  size={{ base: "sm", md: "md" }}
                  px={{ base: 4, md: 6 }}
                  _hover={{
                    bg: "#00CAFF",
                    transform: "scale(1.05)",
                  }}
                >
                  <FaDownload style={{ marginRight: "6px" }} />
                  {fund.cta}
                </Button>
              </a>
            </Flex>
          </Box>
        ))}
      </Flex>

      {/* Global investment button */}
      <Flex justify={{ base: "center", md: "flex-end" }} mt={{ base: 8, md: 10 }}>
        <a
          href="https://invest.nabocapital.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            bg="#0a2234"
            color="white"
            size={{ base: "md", md: "lg" }}
            px={{ base: 6, md: 8 }}
            _hover={{
              bg: "#00CAFF",
              transform: "scale(1.05)",
            }}
          >
            Invest Globally
          </Button>
        </a>
      </Flex>
    </Box>
  );
};

export default MultiCurrencyInvestment;
