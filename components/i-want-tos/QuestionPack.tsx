"use client";
import { marginX, LifestylePlans } from "@/utils/constants";
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
import {
  FaUmbrellaBeach,
  FaCar,
  FaGift,
  FaPiggyBank,
  FaUsers,
} from "react-icons/fa";
import { MdAttachMoney, MdEvent } from "react-icons/md";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const LifestyleQuestions = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleCardClick = (index: number) => {
    setActivePlanIndex(index);
    setQuestionIndex(0);
    setShowResults(false);
    setAnswers({});
  };

  const activePlan =
    activePlanIndex !== null ? LifestylePlans[activePlanIndex] : null;
  const activeQuestion =
    activePlan && questionIndex < activePlan.questions.length
      ? activePlan.questions[questionIndex]
      : null;

  const handleInputChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`${activePlan?.title} Summary`, 14, 20);

    const tableData = activePlan?.questions.map((q) => [
      q.question,
      answers[q.id] || "-",
    ]);

    autoTable(doc, {
      startY: 30,
      head: [["Question", "Response"]],
      body: tableData || [],
    });

    doc.save(`${activePlan?.title || "Plan"}-summary.pdf`);
  };

  // === Common calculation logic (used for all plans) ===
  const totalCost = Number(answers["4"]) || Number(answers["3"]) || 0;
  const alreadySaved = Number(answers["6"]) || Number(answers["4"]) || 0;
  const monthlySavings = Number(answers["7"]) || Number(answers["5"]) || 0;

  const remaining = Math.max(totalCost - alreadySaved, 0);
  const monthsToGoal =
    monthlySavings > 0 ? Math.ceil(remaining / monthlySavings) : 0;
  const yearsToGoal = monthsToGoal / 12;

  // --- Dynamic Summary Renderer ---
  const renderSummary = () => {
    if (!activePlan) return null;

    switch (activePlan.title) {
      case "Dream Vacations":
        return (
          <>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={8}
              textAlign="center"
              color="blue.900"
            >
              Your Dream Vacation Plan
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <SummaryItem
                icon={FaUmbrellaBeach}
                label="Destination"
                value={answers["1"] || "Not specified"}
              />
              <SummaryItem
                icon={MdEvent}
                label="Travel Date"
                value={answers["2"] || "Not specified"}
              />
              <SummaryItem
                icon={FaUsers}
                label="Duration"
                value={answers["3"] || "Not specified"}
              />
              <SummaryItem
                icon={MdAttachMoney}
                label="Total Budget"
                value={answers["4"] || "KES 0"}
              />
              <SummaryItem
                icon={FaUsers}
                label="Companions"
                value={answers["5"] || "Not specified"}
              />
              <SummaryItem
                icon={FaPiggyBank}
                label="Already Saved"
                value={answers["6"] || "KES 0"}
              />
              <SummaryItem
                icon={FaPiggyBank}
                label="Monthly Savings"
                value={answers["7"] || "KES 0"}
              />
            </Grid>

            <Box bg="blue.900" color="white" p={8} rounded="xl" mt={8}>
              <Heading fontSize="xl" mb={4}>
                Vacation Savings Projection
              </Heading>
              <VStack align="start" gap={2}>
                <HStack justify="space-between" w="100%">
                  <Text>Total Cost:</Text>
                  <Text>KES {totalCost.toLocaleString()}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Already Saved:</Text>
                  <Text>KES {alreadySaved.toLocaleString()}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Remaining Amount:</Text>
                  <Text>KES {remaining.toLocaleString()}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Months to Goal:</Text>
                  <Text>{monthsToGoal > 0 ? monthsToGoal : "N/A"} months</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Years to Goal:</Text>
                  <Text>
                    {yearsToGoal > 0 ? yearsToGoal.toFixed(1) : "N/A"} years
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </>
        );

      case "Dream Car":
        return (
          <>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={8}
              textAlign="center"
              color="blue.900"
            >
              Your Dream Car Plan
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <SummaryItem
                icon={FaCar}
                label="Car Model"
                value={answers["1"] || "Not specified"}
              />
              <SummaryItem
                icon={FaUsers}
                label="Purchase Type"
                value={answers["2"] || "Not specified"}
              />
              <SummaryItem
                icon={MdAttachMoney}
                label="Estimated Cost"
                value={answers["3"] || "KES 0"}
              />
              <SummaryItem
                icon={FaPiggyBank}
                label="Saved Already"
                value={answers["4"] || "KES 0"}
              />
              <SummaryItem
                icon={FaPiggyBank}
                label="Monthly Savings"
                value={answers["5"] || "KES 0"}
              />
            </Grid>

            <Box bg="blue.900" color="white" p={8} rounded="xl" mt={8}>
              <Heading fontSize="xl" mb={4}>
                Car Savings Projection
              </Heading>
              <VStack align="start" gap={2}>
                <HStack justify="space-between" w="100%">
                  <Text>Total Cost:</Text>
                  <Text>KES {totalCost.toLocaleString()}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Already Saved:</Text>
                  <Text>KES {alreadySaved.toLocaleString()}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Remaining Amount:</Text>
                  <Text>KES {remaining.toLocaleString()}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Months to Goal:</Text>
                  <Text>{monthsToGoal > 0 ? monthsToGoal : "N/A"} months</Text>
                </HStack>
              </VStack>
            </Box>
          </>
        );

      case "Treating Your Family":
        return (
          <>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={8}
              textAlign="center"
              color="blue.900"
            >
              Your Family Treat Plan
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <SummaryItem
                icon={FaGift}
                label="Family Members"
                value={answers["1"] || "Not specified"}
              />
              <SummaryItem
                icon={FaUsers}
                label="Occasions"
                value={answers["2"] || "Not specified"}
              />
              <SummaryItem
                icon={MdEvent}
                label="Gift Types"
                value={answers["3"] || "Not specified"}
              />
              <SummaryItem
                icon={MdAttachMoney}
                label="Total Budget"
                value={answers["4"] || "KES 0"}
              />
              <SummaryItem
                icon={FaPiggyBank}
                label="Monthly Savings"
                value={answers["5"] || "KES 0"}
              />
            </Grid>

            <Box bg="blue.900" color="white" p={8} rounded="xl" mt={8}>
              <Heading fontSize="xl" mb={4}>
                Gift Savings Projection
              </Heading>
              <VStack align="start" gap={2}>
                <HStack justify="space-between" w="100%">
                  <Text>Total Cost:</Text>
                  <Text>KES {totalCost.toLocaleString()}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Remaining Amount:</Text>
                  <Text>KES {remaining.toLocaleString()}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Months to Goal:</Text>
                  <Text>{monthsToGoal > 0 ? monthsToGoal : "N/A"} months</Text>
                </HStack>
              </VStack>
            </Box>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Box id="questions2" marginX={marginX} py={10} bg={cardBg}>
      {/* Header Section */}
      <VStack gap={6} textAlign="center" mb={8}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="blue.900"
        >
          Lifestyle & Experience Plans
        </Heading>
        <Text maxW="2xl" fontSize="md" color="gray.600">
          Turn your dreams into achievable goals. Whether it’s a car, vacation,
          or treating loved ones — plan smart, live freely.
        </Text>
      </VStack>

      {/* Plan Selection */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {LifestylePlans.map((plan, idx) => (
          <GridItem key={idx}>
            <Box
              p={4}
              border="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              bg={cardBg}
              boxShadow="sm"
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "lg",
                cursor: "pointer",
              }}
            >
              <VStack align="start" gap={3}>
                <Box bg="blue.100" color="blue.800" p={3} borderRadius="full">
                  <Icon as={plan.icon} boxSize={5} />
                </Box>
                <Text fontWeight="bold" color="blue.900">
                  {plan.title}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {plan.description}
                </Text>
                <Button
                  mt={3}
                  bg="#0A2233"
                  color="white"
                  rounded="full"
                  size="sm"
                  _hover={{ bg: "#00CAFF" }}
                  onClick={() => handleCardClick(idx)}
                >
                  Explore More
                </Button>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Questions */}
      <VStack gap={6} p={6} textAlign={"center"} align="stretch">
        {!showResults && activePlan && activeQuestion && (
          <Box bg="#00CAFF" p={6} rounded="lg" mt={8} w="100%">
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
                  alt="question"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height={{ base: "200px", md: "400px" }}
                />
              </Box>
              <VStack align="start" gap={4} flex={2}>
                <Text fontSize="xl" fontWeight="bold">
                  {activeQuestion.question}
                </Text>
                <Input
                  placeholder={activeQuestion.placeholder}
                  value={answers[activeQuestion.id] || ""}
                  onChange={(e) =>
                    handleInputChange(activeQuestion.id, e.target.value)
                  }
                />
                <Text fontSize="sm" color="gray.600">
                  {activeQuestion.hint}
                </Text>
                <HStack w="100%" justify="space-between" mt="4">
                  {questionIndex > 0 ? (
                    <Button
                      onClick={() => setQuestionIndex(questionIndex - 1)}
                      bg="#0A2233"
                      color="white"
                      rounded="full"
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
                  >
                    {questionIndex < activePlan.questions.length - 1
                      ? "Next ➔"
                      : "Finish"}
                  </Button>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        )}

        {/* Results */}
        {showResults && (
          <Box bg="white" p={8} rounded="xl" boxShadow="md" mt={8} w="100%">
            {renderSummary()}

            <HStack mt={8} justify="center" gap={4}>
              <Button
                bg="cyan.400"
                color="white"
                rounded="full"
                _hover={{ bg: "cyan.500" }}
                onClick={handleDownload}
              >
                Download Summary
              </Button>
              <Button
                bg="gray.600"
                color="white"
                rounded="full"
                _hover={{ bg: "gray.700" }}
                onClick={() => setActivePlanIndex(null)}
              >
                Back to Plans
              </Button>
            </HStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

// Small reusable summary card
const SummaryItem = ({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => (
  <GridItem
    bg="blue.50"
    p={4}
    rounded="xl"
    display="flex"
    alignItems="center"
    gap={3}
  >
    <Icon as={icon} color="blue.700" boxSize={5} />
    <VStack align="start">
      <Text fontWeight="bold">{label}</Text>
      <Text>{value}</Text>
    </VStack>
  </GridItem>
);

export default LifestyleQuestions;
