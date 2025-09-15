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
import { motion, Variants } from "framer-motion";

// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const features = [
  { icon: <BsShieldCheck size={28} />, title: "Tailored Mandates" },
  { icon: <BiBadgeCheck size={28} />, title: "Institutional Expertise" },
  { icon: <FaUniversity size={28} />, title: "Proprietary Research" },
  { icon: <BiLineChart size={28} />, title: "Transparency & Accountability" },
];

export default function WhyChooseUs() {
  // Variants
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  const featureVariantsLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const featureVariantsRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <MotionBox
      bg="cyan.950"
      color="white"
      py={16}
      px={6}
      textAlign="center"
      mt={20}
      initial="hidden"
      animate="visible"
    >
      <VStack gap={8}>
        <MotionHeading
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="bold"
          fontFamily="poppins"
          textAlign="center"
          color="#3DB2FF"
          variants={headingVariants}
        >
          Why Choose Us
        </MotionHeading>

        <MotionText
          maxW="3xl"
          fontSize="md"
          color="gray.300"
          variants={subtitleVariants}
        >
          Our institutional approach is built on a foundation of expertise, integrity, and a deep commitment to creating lasting value for our clients.
        </MotionText>
      </VStack>

      <SimpleGrid columns={[1, 2, 4]} gap={8} mt={5} justifyContent="center">
        {features.map((feature, index) => (
          <MotionBox
            key={index}
            variants={index % 2 === 0 ? featureVariantsLeft : featureVariantsRight}
            whileHover={{ scale: 1.05 }}
          >
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
              <Text fontWeight="bold" fontSize="sm">{feature.title}</Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>

      <HStack gap={6} justifyContent="center" mt={10} fontSize="sm" color="c.400">
        <Text>CMA Licensed</Text>
        <Text>|</Text>
        <Text>ISO Certified</Text>
        <Text>|</Text>
        <Text>African Markets Expert</Text>
      </HStack>
    </MotionBox>
  );
}
