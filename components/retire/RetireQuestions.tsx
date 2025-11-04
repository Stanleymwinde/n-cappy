"use client";
import { marginX, RetirePlans } from "@/utils/constants";
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
  FaMapMarkerAlt,
  FaUsers,
  FaHeartbeat,
  FaHandsHelping,
  FaPiggyBank,
} from "react-icons/fa";
import { MdEvent, MdAttachMoney } from "react-icons/md";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const RetireQuestions = () => {
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
    activePlanIndex !== null ? RetirePlans[activePlanIndex] : null;
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

  // Example computed data (only applies for some plans)
  const saved = Number(answers["4"]) || 0;
  const monthly = Number(answers["5"]) || 0;
  const retirementAge = Number(answers["6"]) || 60;
  const currentAge = 35;
  const yearsLeft = retirementAge - currentAge;
  const totalNeeded = saved + monthly * yearsLeft * 12;
  const remaining = totalNeeded - saved;

  // --- Dynamic Summary Renderer ---
  const renderSummary = () => {
    if (!activePlan) return null;

    switch (activePlan.title) {
      case "Estate Planning":
        return (
          <>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={8}
              textAlign="center"
              color="blue.900"
            >
              Your Estate Planning Overview
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <SummaryItem
                icon={FaMapMarkerAlt}
                label="Current Stage"
                value={answers["1"] || "Not specified"}
              />
              <SummaryItem
                icon={FaUsers}
                label="Who You’re Planning For"
                value={answers["2"] || "Not specified"}
              />
              <SummaryItem
                icon={MdEvent}
                label="Your Core Values"
                value={answers["3"] || "Not specified"}
              />
              <SummaryItem
                icon={MdAttachMoney}
                label="Saved Already"
                value={answers["4"] || "KES 0"}
              />
              <SummaryItem
                icon={FaPiggyBank}
                label="Monthly Contribution"
                value={answers["5"] || "KES 0"}
              />
              <SummaryItem
                icon={MdEvent}
                label="Retirement Age Goal"
                value={answers["6"] || "Not specified"}
              />
            </Grid>
          </>
        );

      case "Generational Wealth Transfer":
        return (
          <>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={8}
              textAlign="center"
              color="blue.900"
            >
              Your Wealth Transfer Plan
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <SummaryItem
                icon={FaMapMarkerAlt}
                label="Stage of Your Plan"
                value={answers["1"] || "Not specified"}
              />
              <SummaryItem
                icon={FaUsers}
                label="Primary Beneficiaries"
                value={answers["2"] || "Not specified"}
              />
              <SummaryItem
                icon={MdEvent}
                label="Goals"
                value={answers["3"] || "Not specified"}
              />
              <SummaryItem
                icon={FaPiggyBank}
                label="Trusts or Legal Entities"
                value={answers["4"] || "None"}
              />
              <SummaryItem
                icon={FaHandsHelping}
                label="Education for Heirs"
                value={answers["5"] || "Not specified"}
              />
            </Grid>
          </>
        );

      case "Long-Term Care":
        return (
          <>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={8}
              textAlign="center"
              color="blue.900"
            >
              Your Long-Term Care Plan
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <SummaryItem
                icon={FaHeartbeat}
                label="Type of Care"
                value={answers["1"] || "Not specified"}
              />
              <SummaryItem
                icon={MdEvent}
                label="When You’ll Need Care"
                value={answers["2"] || "Not specified"}
              />
              <SummaryItem
                icon={MdAttachMoney}
                label="Monthly Care Cost"
                value={answers["3"] || "KES 0"}
              />
              <SummaryItem
                icon={FaPiggyBank}
                label="Already Saved"
                value={answers["4"] || "KES 0"}
              />
              <SummaryItem
                icon={FaHandsHelping}
                label="Monthly Savings"
                value={answers["5"] || "KES 0"}
              />
              <SummaryItem
                icon={FaUsers}
                label="Support Type"
                value={answers["6"] || "Not specified"}
              />
            </Grid>
          </>
        );

      case "Giving with Intention":
        return (
          <>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={8}
              textAlign="center"
              color="blue.900"
            >
              Your Giving Intentions
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <SummaryItem
                icon={FaHandsHelping}
                label="Causes You Care About"
                value={answers["1"] || "Not specified"}
              />
              <SummaryItem
                icon={MdAttachMoney}
                label="Annual Donation"
                value={answers["2"] || "KES 0"}
              />
              <SummaryItem
                icon={MdEvent}
                label="Donation Frequency"
                value={answers["3"] || "Not specified"}
              />
              <SummaryItem
                icon={FaMapMarkerAlt}
                label="Support Focus"
                value={answers["4"] || "Local/Global not specified"}
              />
              <SummaryItem
                icon={FaUsers}
                label="Volunteering Interest"
                value={answers["5"] || "Not specified"}
              />
              <SummaryItem
                icon={FaHandsHelping}
                label="Track Impact?"
                value={answers["6"] || "Not specified"}
              />
            </Grid>
          </>
        );

      case "Retirement income":
        return (
          <>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={8}
              textAlign="center"
              color="blue.900"
            >
              Your Retirement Income Summary
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <SummaryItem
                icon={MdEvent}
                label="Retirement Age"
                value={answers["1"] || "60"}
              />
              <SummaryItem
                icon={FaMapMarkerAlt}
                label="Lifestyle Vision"
                value={answers["2"] || "Not specified"}
              />
              <SummaryItem
                icon={MdAttachMoney}
                label="Monthly Expenses"
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
              <SummaryItem
                icon={FaUsers}
                label="Additional Income"
                value={answers["6"] || "None"}
              />
            </Grid>

            <Box bg="blue.900" color="white" p={8} rounded="xl" mt={8}>
              <Heading fontSize="xl" mb={4}>
                Retirement Projection
              </Heading>
              <VStack align="start" gap={2}>
                <HStack justify="space-between" w="100%">
                  <Text>Years Until Retirement:</Text>
                  <Text>{yearsLeft} years</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Projected Total Value:</Text>
                  <Text>KES {totalNeeded.toLocaleString()}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text>Remaining Goal:</Text>
                  <Text>KES {remaining.toLocaleString()}</Text>
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
          Building Blocks of Your Legacy
        </Heading>
        <Text maxW="2xl" fontSize="md" color="gray.600">
          Each aspect of your financial legacy requires thoughtful planning.
          Explore the key areas below or jump straight to your personalized
          calculation.
        </Text>
      </VStack>

      {/* Plan Selection */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>
        {RetirePlans.map((retire, rtp) => (
          <GridItem key={rtp}>
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
                  <Icon as={retire.icon} boxSize={5} />
                </Box>
                <Text fontWeight="bold" color="blue.900">
                  {retire.title}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {retire.description}
                </Text>
                <Button
                  mt={3}
                  bg="#0A2233"
                  color="white"
                  rounded="full"
                  size="sm"
                  _hover={{ bg: "#00CAFF" }}
                  onClick={() => handleCardClick(rtp)}
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

// Small reusable card
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

export default RetireQuestions;
