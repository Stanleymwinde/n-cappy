// components/MoneyMarketFund.tsx
"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaCoins,
  FaPiggyBank,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import { MdCalendarMonth, MdDownload } from "react-icons/md";
import { BsDropletHalf } from "react-icons/bs";
import { marginX } from "@/utils/constants";

const FIFfeatures = [
  {
    icon: FaChartLine,
    title: "Diversified Investment Portfolio",
    description:
      "Invests in high-quality, short-term fixed-income instruments such as: Treasury bills, Government and corporate bonds, Fixed and call deposits, Certificates of deposit",
  },
  {
    icon: MdCalendarMonth,
    title: "Medium-Term Investment Horizon",
    description:
      "Returns are calculated daily and compounded monthly, allowing your money to grow faster.",
  },
  {
    icon: FaChartLine,
    title: "Competitive Returns",
    description:
      "You can access your funds within 24 to 48 hours upon request, making it suitable for both short-term and emergency needs.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Liquidity",
    description:
      "As of late 2023, the fund offered an annualized return of 16.0%, outperforming the 3-month Treasury Bill benchmark. Returns may vary over time based on market conditions.",
  },
  {
    icon: BsDropletHalf,
    title: "Capital Preservation Focus",
    description:
      "The fund’s investment strategy aims to minimize risk and “preserve your capital” while generating steady returns.",
  },
];

const FixedIncomeFund = () => {
  return (
    <Box py={16} px={{ base: 4, md: 16 }} marginX={marginX} >
      <VStack gap={4} textAlign="center" mb={7}>
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "6xl" }}
          fontFamily="poppins"
          fontWeight={"bold"}
          textAlign="center"
          my={6}
          color="gray.800"
        >
          What is Fixed Income Fund?
        </Heading>
        <Text fontSize="md" maxW="3xl">
          The <strong>Nabo Capital Fixed Income Fund</strong> is a low-risk,
          KES-denominated collective investment scheme designed to generate
          stable capital growth over the medium to long term.
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={8}
        mb={10}
      >
        {FIFfeatures.map((feature, index) => (
          <GridItem key={index}>
            <Flex align="flex-start" gap={4}>
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

      <Flex justify={{ base: "center", md: "flex-end" }}>
        <Link href="/pdfs/mmf-factsheet.pdf" _hover={{ textDecor: "none" }}>
          <Button
            bg="blue.900"
            color="white"
            _hover={{ bg: "#00CAFF" }}
            rounded="lg"
            px={6}
            py={5}
           
          >
            {" "}
            <MdDownload />
            Fixed Income Fund (KES) Fact Sheet
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default FixedIncomeFund;
