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
    <Box marginX={marginX} py={12}>
      <Heading
        textAlign="center"
        fontSize={{ base: "2xl", md: "6xl" }}
        mb={4}
        fontFamily={"Poppins"}
      >
        Investing with{" "}
        <Box as="span" color="#00caff">
          Purpose
        </Box>
      </Heading>
      <Text fontSize={{ base: "md", md: "3xl" }} color="gray.600" py={4}>
        I want to ...
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} p={4}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
          >
            <Image
              src={card.image}
              alt={card.title}
              objectFit="cover"
              width="100%"
              h="200px"
            />
            <Box p={4}>
              <Heading fontSize="lg" mb={2}>
                {card.title}
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={4}>
                {card.description}
              </Text>
              <Link href={card.link} passHref>
                <Button
                  variant="outline"
                  colorScheme="blackAlpha"
                  borderRadius="full"
                  fontWeight="bold"
                  w="100%"
                >
                  Simulate
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
