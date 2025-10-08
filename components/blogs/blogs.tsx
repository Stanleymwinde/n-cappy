import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Stack,
  Link,
} from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { marginX } from "@/utils/constants";
import FeaturedBlogs from "./FeaturedBlogs";
import NextLink from "next/link";

export default function Page() {
  // Static colors instead of useColorModeValue
  const bgColor = "white";
  const cardBgRight = "white";

  return (
    <Box
      id="section4"
      py={{ base: 8, md: 12 }}
      marginX={{ base: 4, sm: 6, md: marginX }}
      bg={bgColor}
      mt={20}
    >
      {/* Heading & Subtext */}
      <Stack gap={6} textAlign="center" mb={{ base: 8, md: 10 }}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
        >
          Fresh Take on Finance Every Week
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Stay informed with our latest financial articles, market analysis, and
          expert insights.
        </Text>
      </Stack>

      {/* Cards */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 8 }}
        justify="center"
        align={{ base: "center", md: "start" }}
      >
        {/* Left Card */}
        <Box
          bg="white"
          borderRadius="xl"
          boxShadow="md"
          maxW={{ base: "full", md: "lg" }}
          overflow="hidden"
          cursor="pointer"
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
        >
          <Box position="relative">
            <Image
              src="/images/dubai-calling.png"
              alt="When Was the Last Time You Truly Stepped Out?"
              objectFit="cover"
              w="full"
              h={{ base: "200px", md: "250px", lg: "300px" }}
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
          <Box px={{ base: 3, sm: 4 }} py={{ base: 4, md: 5 }}>
            <Flex justify="space-between" color="gray.500" fontSize="sm" mb={2}>
              <Text>August 4, 2025</Text>
              <Text>8 min read</Text>
            </Flex>
            <Heading fontSize={{ base: "md", sm: "lg", md: "xl" }} mb={2}>
              The Campaign That Dares You to See More
            </Heading>

            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb={4}>
              At first glance, Dubai Is Calling may look like a travel offer.
              But look closer, and you will see something deeper. This isn’t
              about ticking destinations off a bucket list. It’s about
              rethinking what it means to invest in yourself.
            </Text>
            {/* ✅ Fixed Read More Link */}
            <Link
              as={NextLink}
              href="/tools_and_resources/dubai-calling"
              color="blue.500"
              fontWeight="medium"
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: "underline" }}
            >
              Read More{" "}
              <IoArrowForwardCircleOutline style={{ marginLeft: "0.25rem" }} />
            </Link>
          </Box>
        </Box>

        {/* Right Card */}
        <Box
          bg={cardBgRight}
          borderRadius="xl"
          boxShadow="md"
          p={{ base: 4, md: 6 }}
          w={{ base: "full", md: "sm" }}
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
        >
          <Text color="blue.400" fontSize="sm" fontWeight="semibold">
            Weekly Blog
          </Text>
          <Heading size="md" mt={2} mb={2}>
            The Nabo Capital Insider
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Welcome to The Nabo Capital Insider, your go-to source for financial
            literacy tips, industry insights and expert advice.
          </Text>
          <Link
            href="https://www.linkedin.com/newsletters/the-nabo-capital-insider-7269258709552275456/"
            target="_blank"
            rel="noopener noreferrer"
            color="blue.500"
            fontWeight="medium"
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "underline" }}
          >
            Subscribe to weekly updates{" "}
            <IoArrowForwardCircleOutline style={{ marginLeft: "0.25rem" }} />
          </Link>
        </Box>
      </Flex>

      {/* Featured Blogs */}
      <Box mt={{ base: 8, md: 10 }}>
        <FeaturedBlogs />
      </Box>
    </Box>
  );
}
