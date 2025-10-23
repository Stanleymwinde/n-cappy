"use client";

import { WhatAreYourGoalsData, marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, Text, Tabs } from "@chakra-ui/react";
import React from "react";
import * as Icons from "react-icons/lu";
import Link from "next/link";

const WhatAreYourGoals = () => {
  return (
    <Box marginX={{ base: 4, sm: 6, md: marginX }} py={{ base: 2, md: 8 }} mt={20}>
      {/* Main Heading */}
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
        fontFamily="poppins"
        fontWeight="bold"
        textAlign="center"
        my={{ base: 3, md: 5 }}
        color="gray.800"
        px={{ base: 2, sm: 4 }}
      >
        What Are Your Financial Goals?
      </Heading>

      {/* Subheading */}
      <Text
        marginX={{ base: 2, md: marginX }}
        fontSize={{ base: "sm", sm: "md", md: "3xl" }}
        mb={6}
        textAlign={{ base: "center", md: "left" }}
      >
        I want to ...
      </Text>

      {/* Tabs Root */}
      <Tabs.Root defaultValue="goal-0" orientation="horizontal">
        {/* Tabs List */}
        <Box>
          <Flex
            justify="center"
            align="center"
            width="100%"
            py={4}
            overflowX="auto"
            px={{ base: 2, sm: 4 }}
          >
            <Tabs.List
              display="flex"
              flexDirection={{ base: "column", md: "row" }} // Vertical on mobile, horizontal on desktop
              flexWrap={{ base: "nowrap", md: "wrap" }}
              gap={{ base: 2, md: 4 }}
              bg="gray.100"
              rounded="xl"
              p={2}
              minW="max-content"
              whiteSpace="nowrap"
            >
              {WhatAreYourGoalsData.map((goal, index) => {
                const Icon = Icons[goal.icon as keyof typeof Icons];
                return (
                  <Tabs.Trigger
                    key={index}
                    value={`goal-${index}`}
                    fontSize={{ base: "xs", sm: "sm", md: "sm", lg: "md" }}
                    px={{ base: 2, sm: 3, md: 4 }}
                    py={{ base: 1, sm: 2 }}
                    _selected={{
                      bg: "#0A2233",
                      color: "white",
                      rounded: "md",
                      fontWeight: "small",
                    }}
                    display="flex"
                    alignItems="center"
                  >
                    {Icon && <Icon style={{ marginRight: "0.5rem" }} />}
                    {goal.title}
                  </Tabs.Trigger>
                );
              })}
            </Tabs.List>
          </Flex>
        </Box>

        {/* Tabs Content */}
        {WhatAreYourGoalsData.map((goal, index) => (
          <Tabs.Content key={index} value={`goal-${index}`}>
            <Box
              bgColor="#00caff"
              py={{ base: 4, md: 6 }}
              px={{ base: 3, sm: 4, md: 8 }}
              rounded={{ base: "lg", md: "2xl" }}
            >
              <Flex
                marginX={{ base: 2, md: marginX }}
                direction="column"
                justifyContent="center"
                alignItems={{ base: "center", md: "flex-start" }}
                textAlign={{ base: "center", md: "left" }}
                gap={4}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
                  fontFamily="poppins"
                  lineHeight="1.2"
                >
                  {goal.title}
                </Heading>
                <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} lineHeight="1.6">
                  {goal.description}
                </Text>
                <Box as="ul" fontSize={{ base: "sm", sm: "sm", md: "md" }} lineHeight="1.8">
                  {goal.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </Box>

                <Flex width="100%" justify={{ base: "center", md: "flex-end" }} mt={4}>
                  <Link href="/institutional/treasury" passHref>
                    <Button
                      bg="#0a2234"
                      _hover={{ bg: "cyan.700" }}
                      px={{ base: 3, sm: 4, md: 6 }}
                      py={{ base: 2, md: 4 }}
                      fontSize={{ base: "sm", md: "md" }}
                      rounded="lg"
                    >
                      {goal.button}
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Box>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
};

export default WhatAreYourGoals;
