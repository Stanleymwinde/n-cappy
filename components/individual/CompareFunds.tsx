import { Tabs } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import { Box, Text, Flex, Table } from "@chakra-ui/react";
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
    mmf: "Minimum 3 monTable.ColumnHeaders",
    fixed: "Minimum 1 year",
  },
  {
    feature: "Ideal For",
    mmf: "Short-term savings & emergency funds",
    fixed: "Medium to long-term growTable.ColumnHeader",
  },
  {
    feature: "Interest Accrual",
    mmf: "Daily",
    fixed: "Daily",
  },
];

const CompareFunds = () => {
  return (
    <Box marginX={marginX} py={8}>
      <Text  textAlign="center" fontSize={{ base: "3xl", md: "6xl" }}fontWeight="bold">
        Compare Our Funds
      </Text>
      <Text fontSize="md" mb={6} color="gray.600" textAlign="center">
        See how our investment funds stack up against each other to find the perfect match for your financial goals.
      </Text>

      <Tabs.Root defaultValue="all-features" activationMode="manual">
        <Flex
          flexWrap="wrap"
          gap={2}
          bg="gray.100"
          p={2}
          rounded="lg"
          mb={4}
          as={Tabs.List}
        >
          <Tabs.Trigger value="all-features" color={"#fc8500"}>
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
          <FundComparisonTable showOnly={["Investment Horizon", "Ideal For"]} />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default CompareFunds;

export const FundComparisonTable = ({ showOnly }: { showOnly?: string[] }) => {
  const filteredData = showOnly
    ? data.filter((row) => showOnly.includes(row.feature))
    : data;

  return (
    <Table.Root variant="outline" size="md">
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
  );
};
