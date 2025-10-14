// components/FixedIncomeFund.tsx
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
  FaCoins,
  FaPiggyBank,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import {  MdDownload } from "react-icons/md";
import { BsDropletHalf } from "react-icons/bs";
import { marginX } from "@/utils/constants";
import {  FaLayerGroup, FaLightbulb } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { BsBarChartLine } from "react-icons/bs";

const BFfeatures = [
  
  {
    icon: FaChartLine,
    title: "Diversified, Growth-Focused Investment",
    description:
      "The fund invests across multiple asset classes — including equities, fixed income securities, and offshore opportunities — to balance growth potential and income stability. This approach helps reduce volatility while capturing meaningful returns.",
  },
  {
    icon: FaLayerGroup,
    title: "Strategic Concentration",
    description:
      "Nabo Capital maintains a focused portfolio of 12 to 15 core positions, targeting simple, cash-generative businesses led by experienced managers with a strong ownership mindset.",
  },
  {
    icon: FaLightbulb,
    title: "Active, Differentiated Management",
    description:
      "The investment team seeks out undervalued and less conventional opportunities outside popular market themes, aiming to deliver true outperformance through active, research-driven management.",
  },
  {
    icon: MdCalendarMonth,
    title: "Medium-Term Investment Horizon",
    description:
      "We recommend a minimum investment period of 3 years for your capital to fully benefit from the fund’s compounding and growth strategy.",
  },
  {
    icon: BsBarChartLine,
    title: "Balanced Risk and Return",
    description:
      "By blending income-generating assets with long-term growth investments, the Balanced Fund is ideal for investors seeking moderate risk exposure with the potential for higher returns than a pure fixed-income fund.",
  },
];


const BalancedFund = () => {
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
          What is Balanced Fund?
        </Heading>
        <Text fontSize="xl" maxW="6xl">
          The <strong> Nabo Capital Balanced Fund </strong> is a medium-risk,
          KES-denominated collective investment scheme designed to achieve both
          income and long-term capital growth through a diversified portfolio.
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={8}
        mb={10}
      >
        {BFfeatures.map((feature, index) => (
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
        <a href="/images/fixedincomesheet.jpeg" download>
          <Button
            bg="blue.900"
            color="white"
            _hover={{ bg: "#00CAFF" }}
            rounded="lg"
            px={6}
            py={5}
          >
            <MdDownload style={{ marginRight: "8px" }} />
            Balanced Fund (KES) Fact Sheet
          </Button>
        </a>
      </Flex>
    </Box>
  );
};

export default BalancedFund;
