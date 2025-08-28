// components/GettingStarted.tsx
"use client";

import { Box, Button, Flex, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaUserPlus, FaCoins, FaChartLine } from "react-icons/fa";
import React from "react";

// Type for individual step
interface StepProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

// Step Card Component
const StepCard: React.FC<StepProps> = ({ title, description, icon }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      textAlign="center"
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
    >
      <Flex
        w={12}
        h={12}
        align="center"
        justify="center"
        bg="blue.400"
        color="white"
        borderRadius="full"
        mx="auto"
        mb={4}
      >
        <Icon as={icon} w={6} h={6} />
      </Flex>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        {title}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

// Main Getting Started Section
const GettingStarted: React.FC = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create your Nabo Capital account in minutes with our simple registration process.",
      icon: FaUserPlus,
    },
    {
      title: "Choose Your Fund",
      description: "Select the investment fund that best matches your financial goals and risk tolerance.",
      icon: FaCoins,
    },
    {
      title: "Start Investing",
      description: "Make your initial deposit and watch your investment grow over time.",
      icon: FaChartLine,
    },
  ];

  return (
    <Box py={16} px={4} textAlign="center">
      <VStack gap={4} mb={12}>
        <Text fontSize={{ base: "3xl", md: "6xl" }} fontWeight="bold">
          Getting Started is Easy
        </Text>
        <Text fontSize="xl" color="gray.600">
          Begin your investment journey with Nabo Capital in just three simple steps.
        </Text>
      </VStack>

      <HStack gap={8} justify="center" fontSize="lg">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </HStack>

      <Button mt={12} colorScheme="#0a2234" size="lg"_hover={{ bg: "#00CAFF" }}>
        Open an Account
      </Button>

      <Text mt={4} fontSize="sm" color="gray.500">
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
