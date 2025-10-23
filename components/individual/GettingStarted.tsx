"use client";

import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { FaUserPlus, FaCoins, FaChartLine } from "react-icons/fa";
import React from "react";

interface StepProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const StepCard: React.FC<StepProps> = ({ title, description, icon }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      p={8}
      textAlign="center"
      boxShadow="sm"
      bg="white"
      transition="all 0.3s ease"
      _hover={{
        boxShadow: "lg",
        transform: "translateY(-4px)",
      }}
    >
      <Flex
        w={14}
        h={14}
        align="center"
        justify="center"
        bg="#00CAFF"
        color="white"
        borderRadius="full"
        mx="auto"
        mb={4}
      >
        <Icon as={icon} w={7} h={7} />
      </Flex>

      <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} mb={2}>
        {title}
      </Text>

      <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

const GettingStarted: React.FC = () => {
  const steps = [
    {
      title: "Sign Up",
      description:
        "Create your Nabo Capital account in minutes with our simple registration process.",
      icon: FaUserPlus,
    },
    {
      title: "Choose Your Fund",
      description:
        "Select the investment fund that best matches your financial goals and risk tolerance.",
      icon: FaCoins,
    },
    {
      title: "Start Investing",
      description:
        "Make your initial deposit and watch your investment grow over time.",
      icon: FaChartLine,
    },
  ];

  return (
    <Box py={16} px={{ base: 4, md: 8 }} textAlign="center" bg="gray.50">
      {/* Section Heading */}
      <VStack gap={4} mb={12}>
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          Getting Started is Easy
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }} color="gray.600" px={{ base: 2, md: 0 }}>
          Begin your investment journey with Nabo Capital in just three simple steps.
        </Text>
      </VStack>

      {/* Responsive Grid for Steps */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        gap={{ base: 6, md: 10 }}
        justifyItems="center"
        mb={10}
      >
        {steps.map((step, index) => (
          <StepCard
            key={index}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </SimpleGrid>

      {/* CTA Button */}
      <Button
        mt={8}
        size="lg"
        bg="#0a2234"
        color="white"
        px={8}
        _hover={{ bg: "#00CAFF", color: "white" }}
        rounded="full"
      >
        Open an Account
      </Button>

      {/* Contact Info */}
      <Text mt={6} fontSize="sm" color="gray.600">
        Have questions? Contact our investment advisors at{" "}
        <Text as="span" color="blue.500" textDecor="underline">
          invest@nabocapital.com
        </Text>{" "}
        or{" "}
        <Text as="span" color="blue.500" textDecor="underline">
          clientservice@nabocapital.com
        </Text>
      </Text>
    </Box>
  );
};

export default GettingStarted;
