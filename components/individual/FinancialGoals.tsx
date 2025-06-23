import { FinancialGoalsData, marginX } from "@/utils/constants";
import { Box, Button, Flex, Grid, Heading, Tabs, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "react-icons/lu";

const FinancialGoals = () => {
  return (
    <Box marginX={marginX} py={1}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        textAlign="center"
        my={4}  // Reduced the margin to bring the heading closer to the next text
        color="gray.800"
      >
        What Are Your Financial Goals?
      </Heading>

      <Tabs.Root defaultValue="goal-0" variant="plain">
        <Flex justify="center" align="center" width="100%" py={4}>
          <Tabs.List bg="bg.muted" rounded="l3" p="1">
            {FinancialGoalsData.map((goal, index) => {
              const Icon = Icons[goal.icon as keyof typeof Icons];
              return (
                <Tabs.Trigger key={index} value={`goal-${index}`}>
                  {Icon && <Icon />} I want to {goal.title}
                </Tabs.Trigger>
              );
            })}
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
        </Flex>

        {FinancialGoalsData.map((goal, index) => (
          <Tabs.Content key={index} value={`goal-${index}`}>
            <Box bgColor={"#0a2234"} py={8}>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                px={marginX}
              >
                <Flex
                  direction="column"
                  justifyContent="center"
                  alignItems={{ base: "center", md: "flex-start" }}
                  textAlign={{ base: "center", md: "left" }}
                  height="100%"
                  gap={8}  // Reduced the gap between Heading and Text
                >
                  <Heading
                    as="h2"
                    fontSize={{ base: "3xl", md: "6xl" }}
                    fontFamily="poppins"
                    color="white"
                    lineHeight={"1"}
                    mb={2}  // Reduced the margin-bottom to bring it closer to the text
                  >
                    {goal.title}
                  </Heading>
                  <Text
                    fontSize="2xl"
                    maxWidth="600px"
                    lineHeight="1.8"
                    color="white"
                    mb={4}  // Adjusted the margin-bottom for the text to pull it closer to the list
                  >
                    {goal.description}
                  </Text>
                  <ul
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                    }}
                  >
                    {goal.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>

                  <Link href="/individual/MMF&FIF" passHref>

                    <Button bg="#00caff" _hover={{ bg: "#00b5e0" }} mt={4}>
                      {goal.button}
                    </Button>
                  </Link>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  overflow={"hidden"}
                >
                  <Image
                    src="/images/mmf-p.jpg"
                    alt="Commitment Image"
                    width={400}
                    height={700}
                    style={{
                      maxHeight: "90%",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Flex>
              </Grid>
            </Box>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
};

export default FinancialGoals;

