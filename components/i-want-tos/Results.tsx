"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { MdEvent, MdAttachMoney } from "react-icons/md";

const TravelPlanResults = ({ summary }: { summary: any }) => {
  return (
    <Box marginX={{ base: 4, md: 20 }} py={10}>
      {/* Title */}
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        textAlign="center"
        mb={8}
        color="blue.900"
      >
        Your Travel Plan Summary
      </Heading>

      {/* Summary Grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        mb={10}
      >
        {/* Destination */}
        <GridItem
          bg="blue.50"
          p={4}
          rounded="xl"
          boxShadow="md"
          display="flex"
          alignItems="center"
          gap={3}
        >
          <Icon as={FaMapMarkerAlt} color="orange.400" boxSize={5} />
          <VStack align="start" gap={0}>
            <Text fontWeight="bold">Destination</Text>
            <Text>{summary.destination}</Text>
          </VStack>
        </GridItem>

        {/* When & How Long */}
        <GridItem
          bg="orange.50"
          p={4}
          rounded="xl"
          boxShadow="md"
          display="flex"
          alignItems="center"
          gap={3}
        >
          <Icon as={MdEvent} color="orange.600" boxSize={5} />
          <VStack align="start" gap={0}>
            <Text fontWeight="bold">When & How Long</Text>
            <Text>{summary.when}</Text>
          </VStack>
        </GridItem>

        {/* Who’s Going */}
        <GridItem
          bg="gray.100"
          p={4}
          rounded="xl"
          boxShadow="md"
          display="flex"
          alignItems="center"
          gap={3}
        >
          <Icon as={FaUsers} color="orange.700" boxSize={5} />
          <VStack align="start" gap={0}>
            <Text fontWeight="bold">Who’s Going</Text>
            <Text>{summary.who}</Text>
          </VStack>
        </GridItem>

        {/* Budget */}
        <GridItem
          bg="red.50"
          p={4}
          rounded="xl"
          boxShadow="md"
          display="flex"
          alignItems="center"
          gap={3}
        >
          <Icon as={MdAttachMoney} color="red.400" boxSize={5} />
          <VStack align="start" gap={0}>
            <Text fontWeight="bold">Budget</Text>
            <Text>{summary.budget}</Text>
          </VStack>
        </GridItem>
      </Grid>

      {/* Savings Journey */}
      <Box bg="blue.900" color="white" p={8} rounded="xl">
        <Heading fontSize="xl" mb={4}>
          Your Savings Journey
        </Heading>

        <VStack align="start" gap={2} mb={4}>
          <HStack justify="space-between" w="100%">
            <Text>Total Trip Cost:</Text>
            <Text>{summary.totalCost}</Text>
          </HStack>
          <HStack justify="space-between" w="100%">
            <Text>Already Saved:</Text>
            <Text>{summary.alreadySaved}</Text>
          </HStack>
          <HStack justify="space-between" w="100%">
            <Text>Remaining to save:</Text>
            <Text>{summary.remaining}</Text>
          </HStack>
          <HStack justify="space-between" w="100%">
            <Text>Monthly Savings:</Text>
            <Text>{summary.monthly}</Text>
          </HStack>
        </VStack>

        {/* Path to Joy */}
        <Text color="cyan.300" fontWeight="bold" mb={2}>
          Here is your path to joy
        </Text>
        <Text fontSize="sm" mb={6}>
          You want to travel to {summary.destination} in {summary.when}. If you
          save {summary.monthly} per month, you’ll reach your goal in{" "}
          {summary.duration}.
        </Text>

        {/* Action buttons */}
        <HStack gap={4}>
          <Button bg="cyan.400" color="white" rounded="full" _hover={{ bg: "cyan.500" }}>
            Explore Fixed Income Fund
          </Button>
          <Button bg="cyan.400" color="white" rounded="full" _hover={{ bg: "cyan.500" }}>
            Download Your Travel Plan
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default TravelPlanResults;
