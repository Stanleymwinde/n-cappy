"use client";
import { RetirePlans, marginX } from "@/utils/constants";
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
import { useColorModeValue } from "../ui/color-mode";

const RetireQuestions = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  // store answers as { "planIndex-questionIndex": "answer" }
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleCardClick = (index: number) => {
    setActivePlanIndex(index);
    setQuestionIndex(0);
  };

  // Helper to get unique key for each question
  const getQuestionKey = (planIdx: number, qIdx: number) => `${planIdx}-${qIdx}`;

  const activePlan =
    activePlanIndex !== null ? RetirePlans[activePlanIndex] : null;
  const activeQuestion = activePlan?.questions[questionIndex];

  return (
    <Box marginX={marginX} py={10} bg="white">
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

      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>
        {RetirePlans.map((block, idx) => (
          <GridItem
            key={idx}
            onClick={() => handleCardClick(idx)}
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
              bg={cardBg}
              height="100%"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
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

              <Button
                mt={4}
                size="sm"
                colorScheme="#0A2233"
                bg="#0A2233"
                rounded="full"
                fontWeight="bold"
                _hover={{ bg: "#00CAFF" }}
                onClick={() => handleCardClick(idx)}
              >
                Explore More
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>

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
              <Box flex={1}>
                <Image
                  src={activeQuestion.image}
                  alt="question visual"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="250px"
                />
              </Box>
              <VStack align="start" gap={4} flex={2}>
                <Text fontSize="xl" fontWeight="bold">
                  {activeQuestion.question}
                </Text>
                {/* controlled input tied to answers */}
                <Input
                  key={getQuestionKey(activePlanIndex!, questionIndex)}
                  placeholder={activeQuestion.placeholder}
                  value={
                    answers[getQuestionKey(activePlanIndex!, questionIndex)] ||
                    ""
                  }
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [getQuestionKey(activePlanIndex!, questionIndex)]:
                        e.target.value,
                    }))
                  }
                />
                <Text fontSize="sm" color="gray.600">
                  {activeQuestion.hint}
                </Text>
                <Button
                  mt={4}
                  onClick={() => {
                    const next = questionIndex + 1;
                    if (next < activePlan.questions.length) {
                      setQuestionIndex(next);
                    } else {
                      setActivePlanIndex(null); // later we’ll show results
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

export default RetireQuestions;
