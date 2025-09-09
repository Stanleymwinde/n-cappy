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
    <Box py={12} marginX={marginX} bg={useColorModeValue("white", "gray.800")} mt={20}>
      <Stack gap={8} textAlign="center" mb={10}>
        <Heading fontSize={{ base: "3xl", md: "6xl" }} fontWeight="bold">
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
              src="/images/why-choose-dubai.jpeg"
              alt="When Was the Last Time You Truly Stepped Out?"
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
              <Text>August 4, 2025</Text>
              <Text>8 min read</Text>
            </Flex>
            <Heading fontSize="lg" mb={2}>
              The Campaign That Dares You to See More
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={4}>
             At first glance, Dubai Is Calling may look like a travel offer. But look closer, and you will see something deeper. This isn’t about ticking destinations off a bucket list. It’s about rethinking what it means to invest in yourself.
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
           The Nabo Capital Insider
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Welcome to The Nabo Capital Insider, your go-to source for financial literacy tips, industry insights and expert advice.
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
