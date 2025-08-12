"use client";
import { LifestylePlans, marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const EduQuestionsComponent = () => {
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActivePlanIndex(index);
    setQuestionIndex(0);
  };

  const activePlan =
    activePlanIndex !== null ? LifestylePlans[activePlanIndex] : null;
  const activeQuestion = activePlan?.questions[questionIndex];

  return (
    <Box marginX={marginX} py={10} bg="white">
      {/* Header Section */}
      <VStack gap={3} textAlign="center" mb={8}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} color="blue.900">
          Building Blocks of Your Legacy
        </Heading>
        <Text maxW="2xl" fontSize="md" color="gray.600">
          Each aspect of your financial legacy requires thoughtful planning.
          Explore the key areas below or jump straight to your personalized
          calculation.
        </Text>
      </VStack>

      {/* Plans Grid */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>
        {LifestylePlans.map((block, idx) => (
          <GridItem
            key={idx}
            _hover={{
              cursor: "pointer",
              transform: "scale(1.02)",
              boxShadow: "xl",
            }}
          >
            <Box
              p={4}
              border="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              bg="white"
              height="100%"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
            >
              <VStack gap={3} align="start">
                <Box
                  bg="blue.100"
                  color="blue.800"
                  p={3}
                  borderRadius="full"
                  display="inline-block"
                >
                  <Icon as={block.icon} boxSize={5} />
                </Box>
                <Text fontWeight="bold" color="blue.900">
                  {block.title}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {block.description}
                </Text>
              </VStack>

              {/* Centered Button */}
              <Button
                mt={4}
                size="sm"
                bg="#0A2233"
                color="white"
                rounded="full"
                fontWeight="bold"
                _hover={{ bg: "#00CAFF" }}
                onClick={() => handleCardClick(idx)}
                mx="auto"
                display="block"
              >
                Explore More
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Active Question Section */}
      <VStack gap={6} p={6}>
        {activePlan && activeQuestion && (
          <Box
            width="100%"
            bg="#00CAFF"
            p={6}
            rounded="lg"
            mt={8}
            position="relative"
          >
            <Text mb={2} fontSize="sm">
              Question {questionIndex + 1} of {activePlan.questions.length}
            </Text>

            <HStack
              align="start"
              gap={6}
              flexDir={{ base: "column", md: "row" }}
            >
              {/* Question Image */}
              <Box flex={1}>
                <Image
                  src={activeQuestion.image}
                  alt="question visual"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height={{ base: "200px", md: "250px" }}
                />
              </Box>

              {/* Question Text & Input */}
              <VStack align="start" gap={4} flex={2}>
                <Text fontSize="xl" fontWeight="bold">
                  {activeQuestion.question}
                </Text>
                <Input placeholder={activeQuestion.placeholder} />
                <Text fontSize="sm" color="gray.600">
                  {activeQuestion.hint}
                </Text>

                {/* Navigation Button */}
                <Button
                  mt={4}
                  onClick={() => {
                    const next = questionIndex + 1;
                    if (next < activePlan.questions.length) {
                      setQuestionIndex(next);
                    } else {
                      setActivePlanIndex(null); // Reset to plans view
                    }
                  }}
                >
                  {questionIndex < activePlan.questions.length - 1
                    ? "Next ➔"
                    : "Finish"}
                </Button>
              </VStack>
            </HStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default EduQuestionsComponent;
