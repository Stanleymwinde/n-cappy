import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const services = [
  {
    title: "Asset Management",
    description:
      "Nabo Capital's treasury solutions help institutions turn idle cash into consistent returns. Through strategic cash flow management and investment-grade options, businesses can unlock new revenue streams while maintaining liquidity.",
    image: "/images/woman.jpg", // Replace with your actual image path
  },
  {
    title: "Investment Advisory",
    description:
      "With deep market insight and tailored portfolio strategies, Nabo Capital offers asset advisory services that help corporates and institutions grow long-term wealth, optimize asset performance, and manage risk across cycles.",
    image: "/images/man.jpg", // Replace with your actual image path
  },
];

const ExploreSolutions = () => {
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        textAlign="center"
        my={6}
        color="#00caff"
      >
        Explore Solutions
      </Heading>
      <Box bg="blue.900" color="white" mx={marginX} py={10}>
        <Grid templateColumns={{ base: "1fr", md: "1fr" }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            px={{ base: 4, md: 12 }}
            gap={8}
          >
            <Image
              src="/images/institution-hero.jpeg"
              alt="Asset Management"
              width="50%"
              height="auto"
              objectFit="cover"
              borderRadius="md"
              overflow={"hidden"}
            />

            <Box
              flex="1"
              p={4}
              textAlign={{ base: "center", md: "left" }}
              w={"150%"}
            >
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontFamily="Poppins"
                mb={4}
              >
                Asset Management
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                Nabo Capital&apos;s treasury solutions help institutions turn
                idle cash into consistent returns. Through strategic cash flow
                management and investment-grade options, businesses can unlock
                new revenue streams while maintaining liquidity.
              </Text>
              <Button
                mt={6}
                colorScheme="blue"
                bg="#00caff"
                color="white"
                px={8}
                py={4}
                rounded="full"
                fontWeight="bold"
                display={"flex-end"}
              >
                I want to <FaChevronDown />
              </Button>
            </Box>
          </Flex>
        </Grid>
        <Grid templateColumns={{ base: "1fr", md: "1fr" }} py={10}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            px={{ base: 4, md: 12 }}
            gap={8}
          >
            <Box flex="1" p={4}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontFamily="Poppins"
                mb={8}
              >
                Investment Advisory
              </Heading>
              <Text
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "md", md: "lg" }}
                lineHeight={1.8}
              >
                With deep market insight and tailored portfolio strategies, Nabo
                Capital offers asset advisory services that help corporates and
                institutions grow long-term wealth, optimize asset performance,
                and manage risk across cycles.
              </Text>
              <Button
                mt={6}
                colorScheme="blue"
                bg="#00caff"
                color="white"
                px={8}
                py={4}
                rounded="full"
                fontWeight="bold"
                display={"flex-end"}
              >
                I want to <FaChevronDown />
              </Button>
            </Box>{" "}
            <Box
              flex="1"
              bg={"gray.300"}
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
              borderRadius={"md"}
            >
              <Image
                src="/images/Pius.png"
                alt="Asset Management"
                width="50%"
                height="auto"
                objectFit="cover"
                borderRadius="md"
                overflow={"hidden"}
              />
            </Box>
          </Flex>
        </Grid>
      </Box>
    </>
  );
};

export default ExploreSolutions;
