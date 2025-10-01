import { marginX, TreasuryGoalsData } from "@/utils/constants";
import {
  Box,
  Flex,
  Heading,
  Image,
  Tabs,
  Text,
} from "@chakra-ui/react";
import * as Icons from "react-icons/lu";
import React from "react";

const TreasuryGoals = () => {
  return (
    <Box marginX={marginX} py={1} mt={20}>
      {/* Main Heading */}
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
        fontFamily="poppins"
        fontWeight="bold"
        textAlign="center"
        mb={8}
        color="gray.800"
      >
        What Are Your Financial Goals?
      </Heading>

      {/* Subheading */}
      <Text marginX={marginX} fontSize={{ base: "sm", md: "3xl" }} mb={6}>
        I want to ...
      </Text>

      {/* Tabs */}
      <Tabs.Root defaultValue="goal-0" orientation="horizontal">
        <Flex justify="center" align="center" width="100%" py={4}>
          <Tabs.List
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={4}
            bg="gray.100"
            rounded="xl"
            p={2}
          >
            {TreasuryGoalsData.map((goal, index) => {
              const Icon = Icons[goal.icon as keyof typeof Icons];
              return (
                <Tabs.Trigger
                  key={index}
                  value={`goal-${index}`}
                  fontSize={{ base: "xs", md: "sm" }}
                  px={4}
                  py={2}
                  _selected={{
                    bg: "#0A2233",
                    color: "white",
                    rounded: "md",
                    fontWeight: "medium",
                  }}
                >
                  {Icon && <Icon style={{ marginRight: "6px" }} />} {goal.title}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
        </Flex>

        {TreasuryGoalsData.map((goal, index) => (
          <Tabs.Content key={index} value={`goal-${index}`}>
            <Box bgColor="#00caff" py={8} px={{ base: 4, md: 8 }}>
              <Flex
                marginX={marginX}
                direction={{ base: "column", md: "row" }}
                justifyContent="center"
                alignItems="center"
                textAlign={{ base: "center", md: "left" }}
                gap={8}
              >
                {/* Text Section */}
                <Flex
                  direction="column"
                  flex="1"
                  justifyContent="center"
                  alignItems={{ base: "center", md: "flex-start" }}
                  textAlign={{ base: "center", md: "left" }}
                  gap={6}
                >
                  <Heading
                    as="h2"
                    fontSize={{ base: "lg", md: "3xl" }}
                    fontFamily="poppins"
                    lineHeight="short"
                    mb={2}
                  >
                    {goal.title}
                  </Heading>
                  <Text fontSize={{ base: "sm", md: "lg" }} maxWidth="600px" lineHeight="1.8" mb={4}>
                    {goal.description}
                  </Text>
                  <ul
                    style={{
                      fontSize: "sm",
                      lineHeight: "1.8",
                    }}
                  >
                    {goal.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </Flex>

                {/* Image Section */}
                {goal.image && (
                  <Box
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={goal.image}
                      alt={goal.title}
                      style={{
                        maxWidth: "500px",
                        width: "100%",
                        borderRadius: "16px",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                      }}
                    />
                  </Box>
                )}
              </Flex>
            </Box>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
};

export default TreasuryGoals;
