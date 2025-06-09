import { CoreStrategiessData, marginX } from "@/utils/constants";
import { Box, Button, Flex, Grid, Heading, Tabs, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Icons from "react-icons/lu";

const CoreStrategy = () => {
  return (
    <Box marginX={marginX} py={6} bg="white">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        my={6}
        color="gray.800"
        textAlign="center"
      >
        Our Core Strategies
      </Heading>
      <Text mb={8} textAlign="center" fontSize="lg" color="gray.600">
        Institutional-grade investment solutions to meet specific risk-return
        objectives across asset classes
      </Text>
      <Box>
        <Tabs.Root defaultValue="goal-0" variant="plain">
          <Flex justify="center" align="center" width="100%" py={4}>
            <Tabs.List bg="bg.muted" rounded="l3" p="1">
              {CoreStrategiessData.map((goal, index) => {
                const Icon = Icons[goal.icon as keyof typeof Icons];
                return (
                  <Tabs.Trigger key={index} value={`goal-${index}`}>
                    {Icon && <Icon />}
                    {goal.title}
                  </Tabs.Trigger>
                );
              })}
              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
          </Flex>

          {CoreStrategiessData.map((goal, index) => (
            <Tabs.Content key={index} value={`goal-${index}`}>
              <Box bgColor={"gray.600"} borderRadius={"lg"}>
                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                  px={marginX}
                >
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    overflow={"hidden"}
                  >
                    <Image
                      src="/images/Pius.png"
                      alt="Commitment Image"
                      width={200}
                      height={200}
                      style={{
                        maxHeight: "90%",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Flex>{" "}
                  <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems={{ base: "center", md: "flex-start" }}
                    textAlign={{ base: "center", md: "left" }}
                    height="100%"
                    gap={8}
                  >
                    <Heading
                      py={4}
                      fontSize={{ base: "3xl", md: "5xl" }}
                      fontFamily="poppins"
                      color="white"
                    >
                      {goal.title}
                    </Heading>
                    <Text
                      fontSize="2xl"
                      maxWidth="600px"
                      lineHeight="1.8"
                      color="white"
                    >
                      {goal.subtitle}
                    </Text>
                    <Text
                      fontSize="xl"
                      maxWidth="600px"
                      lineHeight="1.8"
                      color="white"
                    >
                      {goal.description}
                    </Text>

                    <Link
                      href="https://www.youtube.com/watch?v=1b0d8a9f2c4"
                      passHref
                      target="_blank"
                    >
                      <Button bg="#00caff" _hover={{ bg: "#00b5e0" }} mt={4}>
                        Download Equity Strategy Factsheet
                      </Button>
                    </Link>
                  </Flex>
                </Grid>
              </Box>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </Box>
    </Box>
  );
};

export default CoreStrategy;
