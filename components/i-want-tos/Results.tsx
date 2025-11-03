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
import * as React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type GoalType = "Travel" | "Retire" | "Lifestyle" | "Education";

export interface ResultsSummary {
  destination?: string;
  when?: string;
  duration?: string;
  who?: string;
  budget?: string;

  // Savings journey
  totalCost?: string;
  alreadySaved?: string;
  remaining?: string;
  monthly?: string;
  monthsToGoal?: string;

  [key: string]: string | undefined;
}

interface ResultsProps {
  goalType?: GoalType;
  summary: ResultsSummary;
}

function parseAmount(value?: string): number | null {
  if (!value) return null;
  const cleaned = value.replace(/[^0-9.,-]/g, "").replace(/,/g, "");
  const num = parseFloat(cleaned);
  return Number.isFinite(num) ? num : null;
}

function formatAmount(
  rawInput: string | undefined,
  fallbackNumber: number | null
): string {
  if (rawInput && rawInput.trim()) return rawInput;
  if (fallbackNumber == null) return "";
  return fallbackNumber.toLocaleString();
}

const Results: React.FC<ResultsProps> = ({ summary }) => {
  const destination = summary.destination;
  const whenText = [summary.when, summary.duration].filter(Boolean).join(", ");
  const who = summary.who;

  const budgetNum = parseAmount(summary.budget);
  const totalCostNum = parseAmount(summary.totalCost);
  const budgetDisplay = formatAmount(summary.budget, budgetNum ?? totalCostNum);

  const totalDisplay = formatAmount(
    summary.totalCost,
    totalCostNum ?? budgetNum
  );

  const savedNum = parseAmount(summary.alreadySaved);
  const remainingNumFromProp = parseAmount(summary.remaining);

  const computedRemaining =
    remainingNumFromProp != null
      ? remainingNumFromProp
      : totalCostNum != null && savedNum != null
      ? Math.max(totalCostNum - savedNum, 0)
      : null;

  const remainingDisplay = formatAmount(summary.remaining, computedRemaining);

  const monthlyNum = parseAmount(summary.monthly);

  const computedMonths =
    monthlyNum && monthlyNum > 0 && (computedRemaining ?? 0) > 0
      ? Math.ceil((computedRemaining as number) / monthlyNum)
      : null;

  const monthsToGoalDisplay =
    summary.monthsToGoal ??
    (computedMonths != null
      ? `${computedMonths} month${computedMonths === 1 ? "" : "s"}`
      : "");

  const pathParts: string[] = [];
  if (destination) pathParts.push(`to ${destination}`);
  if (summary.when) pathParts.push(`in ${summary.when}`);

  const monthlyPart =
    monthlyNum && computedMonths
      ? ` If you save ${formatAmount(
          summary.monthly,
          monthlyNum
        )} per month, you’ll reach your goal in ${computedMonths} month${
          computedMonths === 1 ? "" : "s"
        }.`
      : "";

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Monthly Essentials Summary", 14, 20);

    const tableData = [
      ["Estimated Monthly Cost", totalDisplay || "-"],
      ["Already Budgeted or Saved", summary.alreadySaved || "-"],
      ["Remaining Budget Needed", remainingDisplay || "-"],
      ["Amount You Can Set Aside Monthly", summary.monthly || "-"],
    ];

    autoTable(doc, {
      startY: 30,
      head: [["Item", "Amount"]],
      body: tableData,
    });

    doc.save("monthly-essentials-summary.pdf");
  };

  return (
    <Box marginX={{ base: 4, md: 20 }} py={10}>
      {/* Title */}
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        textAlign="center"
        mb={8}
        color="blue.900"
      >
        Your Aspiration Summary
      </Heading>

      {/* Summary Grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        mb={10}
      >
        {/* Primary card (Destination / Main Info) */}
        {destination && (
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
              <Text fontWeight="bold">Main Focus</Text>
              <Text>{destination}</Text>
            </VStack>
          </GridItem>
        )}

        {/* When & How Long */}
        {whenText && (
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
              <Text fontWeight="bold">When &amp; How Long</Text>
              <Text>{whenText}</Text>
            </VStack>
          </GridItem>
        )}

        {/* Who’s Going (hidden if not provided) */}
        {who && (
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
              <Text fontWeight="bold">Estimated Size</Text>
              <Text>{who}</Text>
            </VStack>
          </GridItem>
        )}

        {/* Budget */}
        {budgetDisplay && (
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
              <Text>{budgetDisplay}</Text>
            </VStack>
          </GridItem>
        )}
      </Grid>

      {/* Savings Journey */}
      {(totalDisplay ||
        summary.alreadySaved ||
        remainingDisplay ||
        summary.monthly) && (
        <Box bg="blue.900" color="white" p={8} rounded="xl">
          <Heading fontSize="xl" mb={4}>
            Your Savings Journey
          </Heading>

          <VStack align="start" gap={2} mb={4}>
            {totalDisplay && (
              <HStack justify="space-between" w="100%">
                <Text>Total Goal Cost:</Text>
                <Text>{totalDisplay}</Text>
              </HStack>
            )}
            {summary.alreadySaved && (
              <HStack justify="space-between" w="100%">
                <Text>Already Saved:</Text>
                <Text>{summary.alreadySaved}</Text>
              </HStack>
            )}
            {remainingDisplay && (
              <HStack justify="space-between" w="100%">
                <Text>Remaining to save:</Text>
                <Text>{remainingDisplay}</Text>
              </HStack>
            )}
            {summary.monthly && (
              <HStack justify="space-between" w="100%">
                <Text>Monthly Savings:</Text>
                <Text>{summary.monthly}</Text>
              </HStack>
            )}
          </VStack>

          <HStack gap={4}>
            <Button
              bg="cyan.400"
              color="white"
              rounded="full"
              _hover={{ bg: "cyan.500" }}
            >
              Explore Fixed Income Fund
            </Button>
            <Button
              bg="cyan.400"
              color="white"
              rounded="full"
              _hover={{ bg: "cyan.500" }}
              onClick={handleDownload}
            >
              Download Your Plan
            </Button>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Results;
