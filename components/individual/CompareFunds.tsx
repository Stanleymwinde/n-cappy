"use client";

import {
  Box,
  Text,
  Flex,
  Tabs,
  Table,
} from "@chakra-ui/react";
import { marginX } from "@/utils/constants";

const data = [
  {
    feature: "Risk Level",
    mmf: "Low",
    fixed: "Moderate",
  },
  {
    feature: "Liquidity",
    mmf: "High (48 hours)",
    fixed: "Moderate (Minimum 1-year horizon)",
  },
  {
    feature: "Investment Horizon",
    mmf: "Minimum 3 months",
    fixed: "Minimum 1 year",
  },
  {
    feature: "Ideal For",
    mmf: "Short-term savings & emergency funds",
    fixed: "Medium to long-term growth",
  },
  {
    feature: "Interest Accrual",
    mmf: "Daily",
    fixed: "Daily",
  },
];

const CompareFunds = () => {
  return (
    <Box px={{ base: 4, md: marginX }} py={8}>
      <Text
        textAlign="center"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        mb={3}
      >
        Compare Our Funds
      </Text>

      <Text
        fontSize={{ base: "md", md: "xl" }}
        mb={6}
        color="gray.600"
        textAlign="center"
        px={{ base: 4, md: 0 }}
      >
        See how our investment funds stack up against each other to find the
        perfect match for your financial goals.
      </Text>

      <Tabs.Root defaultValue="all-features" activationMode="manual">
        <Flex
          wrap="wrap"
          gap={2}
          bg="gray.100"
          p={2}
          rounded="lg"
          justify={{ base: "center", md: "flex-start" }}
          as={Tabs.List}
        >
          <Tabs.Trigger value="all-features" color="#fc8500">
            All Features
          </Tabs.Trigger>
          <Tabs.Trigger value="risk-returns">Risk & Returns</Tabs.Trigger>
          <Tabs.Trigger value="liquidity">Liquidity</Tabs.Trigger>
          <Tabs.Trigger value="suitability">Suitability</Tabs.Trigger>
        </Flex>

        <Tabs.Content value="all-features">
          <FundComparisonTable />
        </Tabs.Content>

        <Tabs.Content value="risk-returns">
          <FundComparisonTable showOnly={["Risk Level", "Interest Accrual"]} />
        </Tabs.Content>

        <Tabs.Content value="liquidity">
          <FundComparisonTable showOnly={["Liquidity"]} />
        </Tabs.Content>

        <Tabs.Content value="suitability">
          <FundComparisonTable
            showOnly={["Investment Horizon", "Ideal For"]}
          />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default CompareFunds;

export const FundComparisonTable = ({
  showOnly,
}: {
  showOnly?: string[];
}) => {
  const filteredData = showOnly
    ? data.filter((row) => showOnly.includes(row.feature))
    : data;

  return (
    <Box overflowX="auto" mt={6}>
      <Table.Root variant="outline" size={{ base: "sm", md: "md" }}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Feature</Table.ColumnHeader>
            <Table.ColumnHeader color="#00caff">
              Money Market Fund (KES)
            </Table.ColumnHeader>
            <Table.ColumnHeader color="#00caff">
              Fixed Income Fund
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredData.map((row) => (
            <Table.Row key={row.feature}>
              <Table.Cell fontWeight="medium">{row.feature}</Table.Cell>
              <Table.Cell>{row.mmf}</Table.Cell>
              <Table.Cell>{row.fixed}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};
