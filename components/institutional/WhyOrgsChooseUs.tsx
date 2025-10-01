"use client";

import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiBadgeCheck, BiLineChart } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";

const features = [
  { icon: <BsShieldCheck size={28} />, title: "Tailored Mandates" },
  { icon: <BiBadgeCheck size={28} />, title: "Institutional Expertise" },
  { icon: <FaUniversity size={28} />, title: "Proprietary Research" },
  { icon: <BiLineChart size={28} />, title: "Transparency & Accountability" },
];

export default function WhyChooseUs() {
  return (
    <Box
      bg="cyan.950"
      color="white"
      py={16}
      px={6}
      textAlign="center"
      mt={20}
    >
      <VStack gap={8}>
        <Heading
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="bold"
          fontFamily="poppins"
          textAlign="center"
          color="#3DB2FF"
        >
          Why Choose Us
        </Heading>

        <Text maxW="3xl" fontSize="md" color="gray.300">
          Our institutional approach is built on a foundation of expertise,
          integrity, and a deep commitment to creating lasting value for our
          clients.
        </Text>
      </VStack>

      <SimpleGrid columns={[1, 2, 4]} gap={8} mt={5} justifyContent="center">
        {features.map((feature, index) => (
          <Box key={index}>
            <VStack gap={4}>
              <Box
                bg="cyan.800"
                p={4}
                borderRadius="md"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {feature.icon}
              </Box>
              <Text fontWeight="bold" fontSize="sm">
                {feature.title}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <HStack gap={6} justifyContent="center" mt={10} fontSize="sm" color="c.400">
        <Text>CMA Licensed</Text>
        <Text>|</Text>
        <Text>ISO Certified</Text>
        <Text>|</Text>
        <Text>African Markets Expert</Text>
      </HStack>
    </Box>
  );
}
