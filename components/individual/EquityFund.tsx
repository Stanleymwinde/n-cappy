// components/EquityFund.tsx
"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaChartLine,
  FaLayerGroup,
  FaLightbulb,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MdCalendarMonth, MdDownload } from "react-icons/md";
import { BsBarChartLine } from "react-icons/bs";
import { marginX } from "@/utils/constants";

const EFfeatures = [
  {
    icon: FaChartLine,
    title: "Growth-Driven Equity Portfolio",
    description:
      "The fund focuses on Large-cap and Mid-cap equities with strong fundamentals, steady earnings, and solid growth prospects. It aims to capture opportunities in high-quality companies that can consistently generate shareholder value over time.",
  },
  {
    icon: FaLayerGroup,
    title: "Focused, High-Conviction Strategy",
    description:
      "Nabo Capital maintains a concentrated portfolio of 12 to 15 holdings, reflecting its best investment ideas and long-term convictions for optimal performance.",
  },
  {
    icon: FaLightbulb,
    title: "Distinctive Investment Approach",
    description:
      "The investment team actively searches for underappreciated and overlooked businesses with simple models, reliable cash flow, and strong management alignment, uncovering value others may miss.",
  },
  {
    icon: MdCalendarMonth,
    title: "Long-Term Investment Horizon",
    description:
      "We recommend a minimum investment period of 5 years to allow your capital to fully capture market cycles and benefit from long-term compounding and equity growth.",
  },
  {
    icon: BsBarChartLine,
    title: "High Return Potential",
    description:
      "By focusing on equities and disciplined stock selection, the fund aims to outperform traditional asset classes and deliver substantial long-term returns while managing volatility.",
  },
];

const EquityFund = () => {
  return (
    <Box py={16} px={{ base: 4, md: 16 }} marginX={marginX}>
      <VStack gap={4} textAlign="center" mb={7}>
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "6xl" }}
          fontFamily="poppins"
          fontWeight="bold"
          textAlign="center"
          my={6}
          color="gray.800"
        >
          What is the Equity Fund?
        </Heading>
        <Text fontSize="xl" maxW="6xl">
          The <strong>Nabo Capital Equity Fund</strong> is a growth-focused,
          KES-denominated collective investment scheme designed to generate
          superior long-term returns by investing primarily in equities that
          offer both current income and capital appreciation.
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={8}
        mb={10}
      >
        {EFfeatures.map((feature, index) => (
          <GridItem key={index}>
            <Flex align="flex-start" gap={4} fontSize="lg">
              <Box
                bg="gray.100"
                p={3}
                rounded="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={feature.icon} boxSize={6} color="blue.600" />
              </Box>
              <Box>
                <Text fontWeight="bold">{feature.title}</Text>
                <Text fontSize="sm">{feature.description}</Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>

      {/* Download Fact Sheet Button */}
      <Flex justify={{ base: "center", md: "flex-end" }}>
        <a href="/images/equityfundsheet.jpeg" download>
          <Button
            bg="blue.900"
            color="white"
            _hover={{ bg: "#00CAFF" }}
            rounded="lg"
            px={6}
            py={5}
          >
            <MdDownload style={{ marginRight: "8px" }} />
            Equity Fund (KES) Fact Sheet
          </Button>
        </a>
      </Flex>
    </Box>
  );
};

export default EquityFund;
