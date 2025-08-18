import { InvestGloballyData, marginX } from "@/utils/constants";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import * as Icons from "react-icons/fa";

const InvestingGlobally = () => {
  return (
    <Box marginX={marginX} mt={10}>
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "6xl" }}
        fontFamily="poppins"
        fontWeight="bold"
        textAlign="center"
        my={6}
        color="gray.800"
      >
        Benefits of Investing Globally
      </Heading>
      <Text
        fontSize="md"
        color="gray.600"
        maxW="3xl"
        mx="auto"
        textAlign="center"
      >
        {" "}
        Investing in dollars helps protect your savings against inflation and
        gives you access to global opportunities.
      </Text>
      <Box marginX={marginX} gap={6}>
        <Grid templateColumns={"repeat(2,1fr)"} p={6} gap={6}>
          {InvestGloballyData.map((benefit, index) => {
            const Icon = Icons[benefit.icon as keyof typeof Icons];
            return (
              <Stack
                borderRadius="lg"
                boxShadow={"xl"}
                key={index}
                p={6}
                bg="white"
              >
                <Flex gap={6} alignItems="center" mb={4} textAlign="center">
                  <Box fontSize="2xl" color="blue.500">
                    {Icon && <Icon />}
                  </Box>
                  <Heading as="h2" fontSize="2xl">
                    {benefit.title}
                  </Heading>
                </Flex>
                <Text>{benefit.description}</Text>
              </Stack>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default InvestingGlobally;
