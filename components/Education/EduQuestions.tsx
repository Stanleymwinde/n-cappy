"use client";
import { EducationPlans, marginX } from "@/utils/constants";
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

const EduQuestionsComponent = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // ✅ Store answers by question ID
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleCardClick = (index: number) => {
    setActivePlanIndex(index);
    setQuestionIndex(0);
    setShowResults(false);
    setAnswers({}); // reset answers when new plan is picked
  };

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const activePlan =
    activePlanIndex !== null ? EducationPlans[activePlanIndex] : null;
  const activeQuestion =
    activePlan && questionIndex < activePlan.questions.length
      ? activePlan.questions[questionIndex]
      : null;

  return (
    <Box id="questions3" marginX={marginX} py={10} bg={cardBg}>
      {/* Header Section */}
      <VStack gap={6} textAlign="center" mb={8}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="blue.900"
        >
          Because Your Dreams Deserve a Plan
        </Heading>
        <Text maxW="2xl" fontSize="md" color="gray.600">
          This plan is here to help you cover more than costs. It helps you
          provide stability, open doors, and keep dreams on track, even when
          life shifts.
        </Text>
      </VStack>

      {/* Plans Grid */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
        {EducationPlans.map((block, idx) => (
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
        {activePlan && activeQuestion && !showResults && (
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
                  height="500px"
                />
              </Box>

              <VStack align="start" gap={4} flex={2} h="100%">
                <Box>
                  <Text fontSize="xl" fontWeight="bold">
                    {activeQuestion.question}
                  </Text>
                  <Input
                    placeholder={activeQuestion.placeholder}
                    mt={3}
                    value={answers[activeQuestion.id] || ""} // ✅ separate input value
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

            {/* Display user's answers */}
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

            {/* Conditional summary with relevant calculations */}
            <Box
              mt={4}
              bg="blue.900"
              color="white"
              p={6}
              rounded="lg"
              textAlign="left"
            >
              <Heading fontSize="xl" mb={4}>
                Your Plan Insights
              </Heading>

              {(() => {
                // Common parsing logic for numbers and years
                const parseAmount = (val: string | undefined) =>
                  val ? parseFloat(val.replace(/[^\d.]/g, "")) || 0 : 0;
                const parseYears = (val: string | undefined) => {
                  const match = val?.match(/\d+/);
                  return match ? parseInt(match[0]) : 0;
                };
                const currentYear = new Date().getFullYear();

                /** ---------- HOME OWNERSHIP ---------- **/
                if (activePlan.title === "Home Ownership Goals") {
                  const saved = parseAmount(answers[4]);
                  const monthlyBudget = parseAmount(answers[5]);
                  const targetYears = parseYears(answers[6]);
                  const monthsRemaining = targetYears * 12;
                  const projectedSavings =
                    monthlyBudget * monthsRemaining + saved;

                  return (
                    <VStack align="start" gap={2}>
                      <Text>
                        <b>Current savings:</b>{" "}
                        {saved
                          ? `KES ${saved.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Monthly housing budget:</b>{" "}
                        {monthlyBudget
                          ? `KES ${monthlyBudget.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Planned timeline:</b>{" "}
                        {targetYears ? `${targetYears} years` : "Not provided"}
                      </Text>
                      {monthlyBudget > 0 && targetYears > 0 && (
                        <>
                          <Text>
                            <b>
                              Projected total by {currentYear + targetYears}:
                            </b>{" "}
                            KES {projectedSavings.toLocaleString()}
                          </Text>
                        </>
                      )}
                    </VStack>
                  );
                }

                /** ---------- MEDICAL EMERGENCIES ---------- **/
                if (activePlan.title === "Medical Emergencies") {
                  const saved = parseAmount(answers[4]);
                  const monthlyBudget = parseAmount(answers[5]);
                  const emergencyGoal = saved + monthlyBudget * 12; // 1-year buffer

                  return (
                    <VStack align="start" gap={2}>
                      <Text>
                        <b>Emergency savings:</b>{" "}
                        {saved
                          ? `KES ${saved.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Monthly health budget:</b>{" "}
                        {monthlyBudget
                          ? `KES ${monthlyBudget.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      {monthlyBudget > 0 && (
                        <Text>
                          <b>1-year medical fund projection:</b> KES{" "}
                          {emergencyGoal.toLocaleString()}
                        </Text>
                      )}
                    </VStack>
                  );
                }

                /** ---------- EDUCATION PLANNING ---------- **/
                if (activePlan.title === "Education Planning") {
                  const saved = parseAmount(answers[4]);
                  const monthlyBudget = parseAmount(answers[5]);
                  const targetYears = parseYears(answers[6]);
                  const monthsRemaining = targetYears * 12;
                  const projected = monthlyBudget * monthsRemaining + saved;

                  return (
                    <VStack align="start" gap={2}>
                      <Text>
                        <b>Current education savings:</b>{" "}
                        {saved
                          ? `KES ${saved.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Monthly savings amount:</b>{" "}
                        {monthlyBudget
                          ? `KES ${monthlyBudget.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Timeline:</b>{" "}
                        {targetYears ? `${targetYears} years` : "Not provided"}
                      </Text>
                      {monthlyBudget > 0 && targetYears > 0 && (
                        <Text>
                          <b>Projected total by {currentYear + targetYears}:</b>{" "}
                          KES {projected.toLocaleString()}
                        </Text>
                      )}
                    </VStack>
                  );
                }

                /** ---------- INSURANCE PREMIUMS ---------- **/
                if (activePlan.title === "Insurance Premiums") {
                  const currentPremiums = parseAmount(answers[4]);
                  const futureBudget = parseAmount(answers[5]);
                  const yearlyTotal = futureBudget * 12;

                  return (
                    <VStack align="start" gap={2}>
                      <Text>
                        <b>Current annual premium cost:</b>{" "}
                        {currentPremiums
                          ? `KES ${currentPremiums.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      <Text>
                        <b>Planned monthly premium budget:</b>{" "}
                        {futureBudget
                          ? `KES ${futureBudget.toLocaleString()}`
                          : "Not provided"}
                      </Text>
                      {futureBudget > 0 && (
                        <Text>
                          <b>Projected annual premiums:</b> KES{" "}
                          {yearlyTotal.toLocaleString()}
                        </Text>
                      )}
                    </VStack>
                  );
                }

                return <Text>No calculations available for this plan.</Text>;
              })()}
            </Box>

            {/* Back button */}
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

export default EduQuestionsComponent;
