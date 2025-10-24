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
import Link from "next/link";

type GoalType = "Travel" | "Retire" | "Lifestyle" | "Education";

export interface ResultsSummary {
  destination?: string;
  when?: string;
  duration?: string;
  who?: string;
  budget?: string;
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

// Utility functions for parsing and formatting numbers
function parseAmount(value?: string): number | null {
  if (!value) return null;
  const cleaned = value.replace(/[^0-9.,-]/g, "").replace(/,/g, "");
  const num = parseFloat(cleaned);
  return Number.isFinite(num) ? num : null;
}

function formatAmount(rawInput: string | undefined, fallbackNumber: number | null): string {
  if (rawInput && rawInput.trim()) return rawInput;
  if (fallbackNumber == null) return "";
  return fallbackNumber.toLocaleString();
}

const Results: React.FC<ResultsProps> = ({ summary }) => {
  const resultsRef = React.useRef<HTMLDivElement>(null);

  // ✅ Fixed: Dynamic import for Next.js
  const handleDownload = async () => {
    const input = resultsRef.current;
    if (!input) return;

    const html2canvas = (await import("html2canvas")).default;
    const jsPDF = (await import("jspdf")).default;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 10;

    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Your_Plan.pdf");
  };

  const destination = summary.destination;
  const whenText = [summary.when, summary.duration].filter(Boolean).join(", ");
  const who = summary.who;

  const budgetNum = parseAmount(summary.budget);
  const totalCostNum = parseAmount(summary.totalCost);
  const budgetDisplay = formatAmount(summary.budget, budgetNum ?? totalCostNum);
  const totalDisplay = formatAmount(summary.totalCost, totalCostNum ?? budgetNum);

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

  const pathParts: string[] = [];
  if (destination) pathParts.push(`to ${destination}`);
  if (summary.when) pathParts.push(`in ${summary.when}`);
  const baseLine =
    pathParts.length > 0 ? `You want to ${destination ? "travel " : ""}${pathParts.join(" ")}.` : "";

  const monthlyPart =
    monthlyNum && computedMonths
      ? ` If you save ${formatAmount(summary.monthly, monthlyNum)} per month, you’ll reach your goal in ${computedMonths} month${computedMonths === 1 ? "" : "s"}.`
      : "";

  const pathToJoy = `${baseLine}${monthlyPart}`.trim();

  return (
    <Box marginX={{ base: 4, md: 20 }} py={10}>
      {/* Wrapped only the summary in ref */}
      <Box ref={resultsRef}>
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
          {destination && (
            <GridItem bg="blue.50" p={4} rounded="xl" boxShadow="md" display="flex" alignItems="center" gap={3}>
              <Icon as={FaMapMarkerAlt} color="orange.400" boxSize={5} />
              <VStack align="start" gap={0}>
                <Text fontWeight="bold">Destination</Text>
                <Text>{destination}</Text>
              </VStack>
            </GridItem>
          )}

          {whenText && (
            <GridItem bg="orange.50" p={4} rounded="xl" boxShadow="md" display="flex" alignItems="center" gap={3}>
              <Icon as={MdEvent} color="orange.600" boxSize={5} />
              <VStack align="start" gap={0}>
                <Text fontWeight="bold">When &amp; How Long</Text>
                <Text>{whenText}</Text>
              </VStack>
            </GridItem>
          )}

          {who && (
            <GridItem bg="gray.100" p={4} rounded="xl" boxShadow="md" display="flex" alignItems="center" gap={3}>
              <Icon as={FaUsers} color="orange.700" boxSize={5} />
              <VStack align="start" gap={0}>
                <Text fontWeight="bold">Who’s Going</Text>
                <Text>{who}</Text>
              </VStack>
            </GridItem>
          )}

          {budgetDisplay && (
            <GridItem bg="red.50" p={4} rounded="xl" boxShadow="md" display="flex" alignItems="center" gap={3}>
              <Icon as={MdAttachMoney} color="red.400" boxSize={5} />
              <VStack align="start" gap={0}>
                <Text fontWeight="bold">Budget</Text>
                <Text>{budgetDisplay}</Text>
              </VStack>
            </GridItem>
          )}
        </Grid>

        {/* Savings Journey */}
        {(totalDisplay || summary.alreadySaved || remainingDisplay || summary.monthly) && (
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

            {pathToJoy && (
              <>
                <Text color="cyan.300" fontWeight="bold" mb={2}>
                  Here is your path to joy
                </Text>
                <Text fontSize="sm" mb={6}>
                  {pathToJoy}
                </Text>
              </>
            )}
          </Box>
        )}
      </Box>

      {/* Action Buttons */}
      <HStack gap={4} mt={6}>
        <Link href="/individual/MMF&FIF" passHref>
          <Button
            as="a"
            bg="cyan.400"
            color="white"
            rounded="full"
            _hover={{ bg: "cyan.500" }}
          >
            Explore Funds
          </Button>
        </Link>

        <Button
          bg="cyan.400"
          color="white"
          rounded="full"
          _hover={{ bg: "cyan.500" }}
          onClick={handleDownload} // ✅ Working PDF download
        >
          Download Your Plan
        </Button>
      </HStack>
    </Box>
  );
};

export default Results;
