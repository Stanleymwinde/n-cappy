"use client";

import { WhatAreYourGoalsData, marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import * as Icons from "react-icons/lu";
import Link from "next/link";
import { motion, easeInOut } from "framer-motion";

const MotionBox = motion(Box);

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

const slideLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeInOut } },
};

const WhatAreYourGoals = () => {
  return (
    <Box marginX={marginX} py={{ base: 4, md: 8 }} mt={20}>
      {/* Main Heading */}
      <MotionBox
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          fontFamily="poppins"
          fontWeight={"bold"}
          textAlign="center"
          my={{ base: 3, md: 5 }}
          color="gray.800"
        >
          What Are Your Financial Goals?
        </Heading>
      </MotionBox>

      {/* Subheading */}
      <MotionBox
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.2 }}
      >
        <Text
          marginX={{ base: 2, md: marginX }}
          fontSize={{ base: "sm", sm: "md", md: "3xl" }}
          mb={6}
          textAlign={{ base: "center", md: "left" }}
        >
          I want to ...
        </Text>
      </MotionBox>

      <Tabs.Root defaultValue="goal-0" variant="plain">
        {/* Tabs List */}
        <MotionBox
          variants={slideLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.3 }}
        >
          <Flex justify="center" align="center" width="100%" py={4} overflowX="auto">
            <Tabs.List
              bg="bg.muted"
              rounded="l3"
              p={{ base: 1, md: 1 }}
              minW="max-content"
              display="flex"
              gap={{ base: 2, md: 4 }}
              whiteSpace="nowrap"
            >
              {WhatAreYourGoalsData.map((goal, index) => {
                const Icon = Icons[goal.icon as keyof typeof Icons];
                return (
                  <Tabs.Trigger
                    key={index}
                    value={`goal-${index}`}
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    px={{ base: 2, md: 4 }}
                    py={{ base: 1, md: 2 }}
                    whiteSpace="nowrap"
                  >
                    {Icon && <Icon style={{ marginRight: "0.5rem" }} />}
                    {goal.title}
                  </Tabs.Trigger>
                );
              })}
              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
          </Flex>
        </MotionBox>

        {/* Tabs Content */}
        {WhatAreYourGoalsData.map((goal, index) => (
          <Tabs.Content key={index} value={`goal-${index}`}>
            <MotionBox
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4 }}
            >
              <Box bgColor={"#00caff"} py={{ base: 4, md: 6 }} px={{ base: 4, md: 8 }}>
                <Flex
                  marginX={{ base: 2, md: marginX }}
                  direction="column"
                  justifyContent="center"
                  alignItems={{ base: "center", md: "flex-start" }}
                  textAlign={{ base: "center", md: "left" }}
                  height="100%"
                  gap={4}
                >
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                    fontFamily="poppins"
                    lineHeight={"1"}
                  >
                    {goal.title}
                  </Heading>
                  <Text fontSize={{ base: "sm", sm: "md", md: "2xl" }} lineHeight="1.6">
                    {goal.description}
                  </Text>
                  <ul style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                    {goal.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>

                  <Flex
                    width="100%"
                    justify={{ base: "center", md: "flex-end" }}
                    align="center"
                    mt={4}
                  >
                    <Link href="/institutional/treasury" passHref>
                      <Button
                        bg="#0a2234"
                        _hover={{ bg: "cyan.700" }}
                        px={{ base: 4, md: 6 }}
                        py={{ base: 3, md: 4 }}
                      >
                        {goal.button}
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </MotionBox>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
};

export default WhatAreYourGoals;
