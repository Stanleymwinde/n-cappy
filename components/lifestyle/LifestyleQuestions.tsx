"use client";
import { Lifestyle, marginX } from "@/utils/constants";
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

const LifestyleQuestionsComponent = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleCardClick = (index: number) => {
    setActivePlanIndex(index);
    setQuestionIndex(0);
    setShowResults(false);
    setAnswers({});
  };

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const activePlan =
    activePlanIndex !== null ? Lifestyle[activePlanIndex] : null;
  const activeQuestion =
    activePlan && questionIndex < activePlan.questions.length
      ? activePlan.questions[questionIndex]
      : null;

  return (
    <Box id="questions-lifestyle" marginX={marginX} py={10} bg={cardBg}>
      {/* Header */}
      <VStack gap={6} textAlign="center" mb={8}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="blue.900"
        >
          Because Everyday Life Deserves a Plan
        </Heading>
        <Text maxW="2xl" fontSize="md" color="gray.600">
          Plan for the essentials that keep your life running smoothly — from
          groceries and rent to transport and utilities.
        </Text>
      </VStack>

      {/* Categories Grid */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
        {Lifestyle.map((block, idx) => (
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

      {/* Active Question Section */}
      <VStack gap={6} p={6}>
        {activePlan && activeQuestion && !showResults && (
          <Box width="100%" bg="#00CAFF" p={6} rounded="lg" mt={8}>
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
                  height="500px"
                />
              </Box>

              {/* Question Text and Input */}
              <VStack align="start" gap={4} flex={2}>
                <Box>
                  <Text fontSize="xl" fontWeight="bold">
                    {activeQuestion.question}
                  </Text>
                  <Input
                    placeholder={activeQuestion.placeholder}
                    mt={3}
                    value={answers[activeQuestion.id] || ""}
                    onChange={(e) =>
                      handleAnswerChange(activeQuestion.id, e.target.value)
                    }
                  />
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
        )}

        {/* Results Section */}
        {showResults && activePlan && (
          <Box
            width="100%"
            bg="white"
            p={8}
            rounded="2xl"
            mt={8}
            boxShadow="lg"
            textAlign="center"
          >
            <Heading fontSize="2xl" mb={6} color="blue.900">
              {activePlan.title} Summary
            </Heading>

            <VStack align="stretch" gap={4} mb={8}>
              {activePlan.questions.map((q) => (
                <Box
                  key={q.id}
                  p={4}
                  rounded="lg"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.200"
                  textAlign="left"
                >
                  <Text fontWeight="bold" color="blue.900">
                    {q.question}
                  </Text>
                  <Text fontSize="sm" color="gray.700" mt={1}>
                    {answers[q.id] && answers[q.id].trim() !== ""
                      ? answers[q.id]
                      : "Not provided"}
                  </Text>
                </Box>
              ))}
            </VStack>

            {/* Insights per lifestyle plan */}
            <Box
              mt={4}
              bg="blue.900"
              color="white"
              p={6}
              rounded="lg"
              textAlign="left"
            >
              <Heading fontSize="xl" mb={4}>
                Your Lifestyle Insights
              </Heading>

              {(() => {
                const parseAmount = (val: string | undefined) =>
                  val ? parseFloat(val.replace(/[^\d.]/g, "")) || 0 : 0;
                const currentYear = new Date().getFullYear();

                /** -------- Food & Household Essentials -------- **/
                if (activePlan.title === "Food & Household essentials") {
                  const cost = parseAmount(answers[4]);
                  const saved = parseAmount(answers[5]);
                  const monthly = parseAmount(answers[6]);
                  const total = saved + monthly;

                  return (
                    <VStack align="start" gap={2}>
                      <Text>
                        <b>Estimated monthly essentials:</b>{" "}
                        {cost ? `KES ${cost.toLocaleString()}` : "Not provided"}
                      </Text>
                      <Text>
                        <b>Already saved:</b>{" "}
                        {saved
                          ? `KES ${saved.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Monthly set-aside:</b>{" "}
                        {monthly
                          ? `KES ${monthly.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      {monthly > 0 && (
                        <Text>
                          <b>Next month readiness projection:</b> KES{" "}
                          {total.toLocaleString()}
                        </Text>
                      )}
                    </VStack>
                  );
                }

                /** -------- Rent Payments -------- **/
                if (activePlan.title === "Rent Payments") {
                  const rent = parseAmount(answers[1]);
                  const saved = parseAmount(answers[3]);
                  const monthly = parseAmount(answers[4]);
                  const balance = rent - saved;
                  return (
                    <VStack align="start" gap={2}>
                      <Text>
                        <b>Monthly rent:</b>{" "}
                        {rent ? `KES ${rent.toLocaleString()}` : "Not provided"}
                      </Text>
                      <Text>
                        <b>Already saved:</b>{" "}
                        {saved
                          ? `KES ${saved.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Planned monthly savings:</b>{" "}
                        {monthly
                          ? `KES ${monthly.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      {balance > 0 && (
                        <Text>
                          <b>Remaining to cover rent:</b> KES{" "}
                          {balance.toLocaleString()}
                        </Text>
                      )}
                    </VStack>
                  );
                }

                /** -------- Transport -------- **/
                if (activePlan.title === "Transport") {
                  const cost = parseAmount(answers[2]);
                  const save = parseAmount(answers[5]);
                  const yearly = (cost + save) * 12;
                  return (
                    <VStack align="start" gap={2}>
                      <Text>
                        <b>Monthly transport spend:</b>{" "}
                        {cost ? `KES ${cost.toLocaleString()}` : "Not provided"}
                      </Text>
                      <Text>
                        <b>Monthly savings goal:</b>{" "}
                        {save ? `KES ${save.toLocaleString()}` : "Not provided"}
                      </Text>
                      {cost > 0 && (
                        <Text>
                          <b>Projected annual mobility budget:</b> KES{" "}
                          {yearly.toLocaleString()}
                        </Text>
                      )}
                    </VStack>
                  );
                }

                /** -------- Clothing & Utilities -------- **/
                if (activePlan.title === "Clothing & Utilities") {
                  const clothes = parseAmount(answers[1]);
                  const utilities = parseAmount(answers[2]);
                  const monthly = parseAmount(answers[5]);
                  const total = clothes + utilities + monthly;

                  return (
                    <VStack align="start" gap={2}>
                      <Text>
                        <b>Clothing & laundry spend:</b>{" "}
                        {clothes
                          ? `KES ${clothes.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Monthly utility bills:</b>{" "}
                        {utilities
                          ? `KES ${utilities.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Planned monthly allocation:</b>{" "}
                        {monthly
                          ? `KES ${monthly.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      {monthly > 0 && (
                        <Text>
                          <b>Projected total monthly cost:</b> KES{" "}
                          {total.toLocaleString()}
                        </Text>
                      )}
                    </VStack>
                  );
                }

                return <Text>No insights available for this category.</Text>;
              })()}
            </Box>

            <Button
              mt={6}
              bg="#0A2233"
              color="white"
              rounded="full"
              fontWeight="bold"
              onClick={() => {
                setActivePlanIndex(null);
                setAnswers({});
                setQuestionIndex(0);
                setShowResults(false);
              }}
            >
              Back to Plans
            </Button>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default LifestyleQuestionsComponent;
