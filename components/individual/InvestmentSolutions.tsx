"use client";

import { marginX } from "@/utils/constants";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const InvestmentSolutions = () => {
  return (
    <Box
      marginX={marginX}
      py={4}
      bgColor="white"
      boxShadow="md"
      borderRadius="md"
      mt={15}
    >
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "6xl" }}
        fontFamily="poppins"
        fontWeight={"bold"}
        textAlign="center"
        my={6}
        color="gray.800"
      >
        Our Investment Solutions
      </Heading>
      <Text fontSize="md" textAlign="center" color="gray.600" mb={4}>
        Explore our diverse range of investment solutions designed to help you
        achieve your financial goals.
      </Text>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={6}
      >
        {/* Money Market Funds */}
        <Box
          bgColor="#00b5e0"
          p={4}
          borderRadius="md"
          width={{ base: "90%", md: "45%" }}
          boxShadow="md"
          color={"white"}
        >
          <Heading as="h2" fontSize="xl" mb={2}>
            Money Market Funds
          </Heading>
          <Text py={6}>
            A low risk investment option perfect for short term goals and
            emergency funds
          </Text>
          <Box display="flex" gap={4} mt={4}>
            <Box
              bgColor="#21add4"
              p={3}
              borderRadius="md"
              boxShadow="sm"
              flex="1"
              textAlign="center"
              color={"white"}
            >
              <Text fontWeight="bold">Return Rate</Text>
              <Text fontSize="lg">8% p.a.</Text>
            </Box>
            <Box
              bgColor="#21add4"
              p={3}
              borderRadius="md"
              boxShadow="sm"
              flex="1"
              textAlign="center"
            >
              <Text fontWeight="medium">Risk Level</Text>
              <Text fontSize="lg" fontWeight={"bold"}>
                Low
              </Text>
            </Box>
          </Box>
          <Flex alignContent={"center"} mt={4} justify={"center"}>
            <Box
              direction={"column"}
              flex="1"
              maxW={"200px"}
              pr={{ base: 0, md: "6rem" }}
              alignContent={"center"}
            >
              <Text fontWeight="bold">Currency</Text>
              <Text fontSize="lg">KES</Text>
            </Box>
            <Link href="/individual/MMF&FIF" passHref>
              <Box
                as="button"
                mt={4}
                px={6}
                py={2}
                bgColor="transparent"
                border="2px solid white"
                color="white"
                borderRadius="md"
                _hover={{ bgColor: "blue.200" }}
              >
                LEARN MORE
              </Box>
            </Link>
          </Flex>
        </Box>

        {/* Fixed Income Funds */}
        <Box
          bgColor="#0a2234"
          p={4}
          borderRadius="md"
          width={{ base: "90%", md: "45%" }}
          boxShadow="md"
          color={"white"}
        >
          <Heading as="h2" fontSize="xl" mb={2}>
            Fixed Income Funds
          </Heading>
          <Text py={6}>
            A balanced option providing steady returns through government & corporate bonds.
          </Text>
          <Box display="flex" gap={4} mt={4}>
            <Box
              bgColor="#263745"
              p={3}
              borderRadius="md"
              boxShadow="sm"
              flex="1"
              textAlign="center"
              color={"white"}
            >
              <Text fontWeight="bold">Return Rate</Text>
              <Text fontSize="lg">10-14% p.a.</Text>
            </Box>
            <Box
              bgColor="#263745"
              p={3}
              borderRadius="md"
              boxShadow="sm"
              flex="1"
              textAlign="center"
            >
              <Text fontWeight="medium">Risk Level</Text>
              <Text fontSize="lg" fontWeight={"bold"}>
                Medium
              </Text>
            </Box>
          </Box>
          <Flex alignContent={"center"} mt={4} justify={"center"}>
            <Box
              direction={"column"}
              flex="1"
              maxW={"200px"}
              pr={{ base: 0, md: "6rem" }}
              alignContent={"center"}
            >
              <Text fontWeight="bold">Currency</Text>
              <Text fontSize="lg">KES</Text>
            </Box>
            <Link href="/individual/MMF&FIF" passHref>
              <Box
                as="button"
                mt={4}
                px={6}
                py={2}
                bgColor="transparent"
                border="2px solid white"
                color="white"
                borderRadius="md"
                _hover={{ bgColor: "blue.200" }}
              >
                LEARN MORE
              </Box>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default InvestmentSolutions;
