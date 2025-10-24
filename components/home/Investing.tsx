"use client";
import { cardData, marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Investing = () => {
  return (
    <Box marginX={marginX} py={{ base: 8, md: 12 }}>
      {/* First sentence - Heading */}
      <Heading
        textAlign="center"
        fontSize={{ base: "1.75rem", sm: "2.5rem", md: "4rem", lg: "5rem" }}
        mb={{ base: 4, md: 8 }}
        mt={{ base: 2, md: 8 }}
        fontFamily={"Poppins"}
        fontWeight={"bold"}
        lineHeight="short"
      >
        Money isn't the goal.{" "}
        <Box as="span" color="#00caff">
          Purpose is.
        </Box>
      </Heading>

      {/* Second sentence */}
      <Box
        textAlign="center"
        fontSize={{ base: "1rem", sm: "1.5rem", md: "2.5rem", lg: "3rem" }}
        mt={{ base: 2, md: 6 }}
        mb={{ base: 4, md: 8 }}
        fontFamily={"Poppins"}
        lineHeight="short"
        px={{ base: 4, md: 0 }}
      >
        What do you want your money to do for you?
      </Box>

      {/* Intro text */}
      <Text
        fontSize={{ base: "sm", sm: "md", md: "xl", lg: "3xl" }}
        color="gray.600"
        py={2}
        textAlign={{ base: "center", md: "left" }}
      >
        I want to ...
      </Text>

      {/* Cards */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
        gap={{ base: 4, md: 6 }}
        p={{ base: 2, md: 4 }}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
            display="flex"
            flexDirection="column"
            minHeight={{ base: "350px", md: "400px" }}
          >
            <Image
              src={card.image}
              alt={card.title}
              objectFit="cover"
              width="100%"
              height={{ base: "200px", sm: "220px", md: "250px" }}
              flexShrink={0}
            />
            <Box
              p={{ base: 3, md: 4 }}
              display="flex"
              flexDirection="column"
              flexGrow={1}
            >
              <Heading fontSize={{ base: "md", md: "lg" }} mb={2} textAlign={{ base: "center", md: "left" }}>
                {card.title}
              </Heading>
              <Text
                fontSize={{ base: "xs", sm: "sm", md: "sm" }}
                color="gray.600"
                mb={4}
                flexGrow={1}
                textAlign={{ base: "center", md: "left" }}
              >
                {card.description}
              </Text>
              <Link href={card.link} passHref>
                <Button
                  borderColor="rgba(0, 0, 0, 0.6)"
                  variant="outline"
                  colorScheme="blackAlpha"
                  borderRadius="full"
                  fontWeight="bold"
                  w={{ base: "100%", md: "auto" }}
                  mt="auto"
                  fontSize={{ base: "sm", md: "md" }}
                  py={{ base: 3, md: 3 }}
                >
                  Explore More
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Investing;
