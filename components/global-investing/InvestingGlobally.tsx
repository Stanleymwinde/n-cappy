import { InvestGloballyData, marginX } from "@/utils/constants";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import * as Icons from "react-icons/fa";

const InvestingGlobally = () => {
  return (
    <Box px={{ base: 4, md: marginX }} py={{ base: 10, md: 20 }}>
      {/* Section Title */}
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
        fontFamily="poppins"
        fontWeight="bold"
        textAlign="center"
        my={{ base: 4, md: 6 }}
        color="gray.800"
      >
        Benefits of Investing Globally
      </Heading>

      {/* Subtitle */}
      <Text
        fontSize={{ base: "sm", sm: "md", md: "lg" }}
        color="gray.600"
        maxW="3xl"
        mx="auto"
        textAlign="center"
        mb={{ base: 8, md: 12 }}
        px={{ base: 2, md: 0 }}
      >
        Investing in dollars helps protect your savings against inflation and
        gives you access to global opportunities.
      </Text>

      {/* Benefits Grid */}
      <Grid
        templateColumns={{ base: "1fr", sm: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 6, md: 8 }}
        px={{ base: 0, md: 6 }}
      >
        {InvestGloballyData.map((benefit, index) => {
          const Icon = Icons[benefit.icon as keyof typeof Icons];
          return (
            <Stack
              key={index}
              p={{ base: 4, md: 6 }}
              gap={4}
              borderRadius="lg"
              boxShadow="lg"
              bg="white"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
                transition: "0.3s ease",
              }}
            >
              {/* Icon + Title */}
              <Flex
                align="center"
                gap={4}
                justify={{ base: "center", md: "flex-start" }}
                textAlign={{ base: "center", md: "left" }}
              >
                <Box fontSize={{ base: "2xl", md: "3xl" }} color="#00CAFF">
                  {Icon && <Icon />}
                </Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                  color="gray.800"
                >
                  {benefit.title}
                </Heading>
              </Flex>

              {/* Description */}
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.600"
                textAlign={{ base: "center", md: "left" }}
                lineHeight="tall"
              >
                {benefit.description}
              </Text>
            </Stack>
          );
        })}
      </Grid>
    </Box>
  );
};

export default InvestingGlobally;
