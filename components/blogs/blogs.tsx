"use client";

import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Stack,
  Link,
  Card,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { marginX } from "@/utils/constants";
import FeaturedBlogs from "./FeaturedBlogs";

export default function page() {
  return (
    <Box py={12} marginX={marginX} bg={useColorModeValue("white", "gray.800")}>
      <Stack gap={4} textAlign="center" mb={10}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          Fresh Take on Finance Every Week
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Stay informed with our latest financial articles, market analysis, and
          expert insights.
        </Text>
      </Stack>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={6}
        justify="center"
        align="start"
      >
        {/* Left card */}
        <Box
          bg="white"
          borderRadius="xl"
          boxShadow="md"
          maxW={{ base: "full", md: "lg" }}
          overflow="hidden"
        >
          <Box position="relative">
            <Image
              src="/images/blog-image.png"
              alt="Weekly Financial Bulletin"
              objectFit="cover"
              w="full"
              h={{ base: "200px", md: "250px" }}
            />
            <Box
              position="absolute"
              bottom={2}
              left={2}
              bg="blue.900"
              px={3}
              py={1}
              borderRadius="md"
            >
              <Text fontSize="sm" fontWeight="bold" color="white">
                EDITION TWO
              </Text>
            </Box>
          </Box>
          <Box px={4} py={5}>
            <Flex justify="space-between" color="gray.500" fontSize="sm" mb={2}>
              <Text>June 15, 2023</Text>
              <Text>8 min read</Text>
            </Flex>
            <Heading fontSize="lg" mb={2}>
              China Strikes Back: A New Chapter of the Trade War Begins
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={4}>
              “In a global market shaped by geopolitical friction, tactical
              precision matters more than strategic conviction.” — Ray Dalio
            </Text>
            <Link
              color="blue.500"
              fontWeight="medium"
              display="flex"
              alignItems="center"
            >
              Read More <IoArrowForwardCircleOutline />
            </Link>
          </Box>
        </Box>

        {/* Right card */}
        <Box
          bg={useColorModeValue("white", "gray.700")}
          borderRadius="xl"
          boxShadow="md"
          p={6}
          w={{ base: "full", md: "sm" }}
        >
          <Text color="blue.400" fontSize="sm" fontWeight="semibold">
            Weekly Blog
          </Text>
          <Heading size="md" mt={2} mb={2}>
            Democratising Investments in Kenya
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={4}>
            In 2023, it was reported that investments in Kenya were on a
            decline. Many blamed touch economic times and low confidence among
            investors.
          </Text>
          <Link
            color="blue.500"
            fontWeight="medium"
            display="flex"
            alignItems="center"
          >
            Subscribe to weekly updates <IoArrowForwardCircleOutline />
          </Link>
        </Box>
      </Flex>
      <FeaturedBlogs />
    </Box>
  );
}
