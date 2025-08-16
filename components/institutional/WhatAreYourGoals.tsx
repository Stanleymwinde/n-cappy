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

const WhatAreYourGoals = () => {
  return (
    <Box marginX={marginX} py={1} mt={20}>
      {/* Main Heading */}
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "6xl" }}
        fontFamily="poppins"
        fontWeight={"bold"}
        textAlign="center"
        my={5}
        color="gray.800"
      >
        What Are Your Financial Goals?
      </Heading>

      {/* Subheading */}
      <Text marginX={marginX} fontSize={{ base: "md", md: "3xl" }} mb={6}>
        I want to ...
      </Text>

      <Tabs.Root defaultValue="goal-0" variant="plain">
        {/* Tabs List */}
        <Flex justify="center" align="center" width="100%" py={4}>
          <Tabs.List bg="bg.muted" rounded="l3" p="1">
            {WhatAreYourGoalsData.map((goal, index) => {
              const Icon = Icons[goal.icon as keyof typeof Icons];
              return (
                <Tabs.Trigger
                  key={index}
                  value={`goal-${index}`}
                  fontSize={{ base: "md", md: "lg" }} // <-- Increased tab text size
                  px={4} // Optional padding for better spacing
                  py={2}
                >
                  {Icon && <Icon style={{ marginRight: "0.5rem" }} />}
                  {goal.title}
                </Tabs.Trigger>
              );
            })}
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
        </Flex>

        {/* Tabs Content */}
        {WhatAreYourGoalsData.map((goal, index) => (
          <Tabs.Content key={index} value={`goal-${index}`}>
            <Box bgColor={"#00caff"} py={6} px={{ base: 4, md: 8 }}>
              <Flex
                marginX={marginX}
                direction="column"
                justifyContent="center"
                alignItems={{ base: "center", md: "flex-start" }}
                textAlign={{ base: "center", md: "left" }}
                height="100%"
                gap={4}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontFamily="poppins"
                  lineHeight={"1"}
                >
                  {goal.title}
                </Heading>
                <Text fontSize="2xl" lineHeight="1.8">
                  {goal.description}
                </Text>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
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
                    <Button bg="#0a2234" _hover={{ bg: "cyan.700" }}>
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
