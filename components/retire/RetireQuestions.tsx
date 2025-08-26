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
// import { Results } from "@/components/retire"; // optional if you have results

const RetireQuestions = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleCardClick = (index: number) => {
    setActivePlanIndex(index);
    setQuestionIndex(0);
    setShowResults(false);
  };

  const activePlan =
    activePlanIndex !== null ? RetirePlans[activePlanIndex] : null;

  const activeQuestion =
    activePlan && questionIndex < activePlan.questions.length
      ? activePlan.questions[questionIndex]
      : null;

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

      {/* Cards */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>
        {RetirePlans.map((block, idx) => (
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

      {/* Questions / Results */}
      <VStack gap={6} p={6}>
        {showResults ? (
          <Box
            width="100%"
            bg="green.100"
            p={6}
            rounded="lg"
            mt={8}
            textAlign="center"
          >
            <Heading size="md" color="green.800">
              🎉 You’ve completed the {activePlan?.title} plan!
            </Heading>
            <Text mt={2} color="gray.700">
              (You can show results summary here)
            </Text>
          </Box>
        ) : (
          activePlan &&
          activeQuestion && (
            <Box
              width="100%"
              bg="#00CAFF"
              p={6}
              rounded="lg"
              mt={8}
              position="relative"
              minH="500px"
            >
              <Text mb={2} fontSize="sm">
                Question {questionIndex + 1} of {activePlan.questions.length}
              </Text>

              <HStack
                align="stretch"
                gap={6}
                flexDir={{ base: "column", md: "row" }}
                minH="350px"
              >
                <Box flex={1}>
                  <Image
                    src={activeQuestion.image}
                    alt="question visual"
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="500px"
                  />
                </Box>

                <VStack align="start" gap={4} flex={2} h="100%">
                  <Box>
                    <Text fontSize="xl" fontWeight="bold">
                      {activeQuestion.question}
                    </Text>
                    <Input placeholder={activeQuestion.placeholder} mt={3} />
                    <Text fontSize="sm" color="gray.600" mt={2}>
                      {activeQuestion.hint}
                    </Text>
                  </Box>

                  <HStack w="100%" justify="space-between" mt="auto">
                    {questionIndex > 0 ? (
                      <Button
                        onClick={() => setQuestionIndex(questionIndex - 1)}
                        bg="#0A2233"
                        color="white"
                        rounded="full"
                        fontWeight="bold"
                      >
                        ← Previous
                      </Button>
                    ) : (
                      <Box />
                    )}

                    <Button
                      onClick={() => {
                        const next = questionIndex + 1;
                        if (activePlan && next < activePlan.questions.length) {
                          setQuestionIndex(next);
                        } else {
                          setShowResults(true);
                        }
                      }}
                      bg="#0A2233"
                      color="white"
                      rounded="full"
                      fontWeight="bold"
                    >
                      {activePlan &&
                      questionIndex < activePlan.questions.length - 1
                        ? "Next ➔"
                        : "Finish"}
                    </Button>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          )
        )}
      </VStack>
    </Box>
  );
};

export default RetireQuestions;
