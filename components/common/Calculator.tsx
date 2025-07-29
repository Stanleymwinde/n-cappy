"use client";

import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  HStack,
  Table,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartData = {
  year: number;
  principal: number | undefined;
  annualContribution: number;
  interest: number;
  endOfYear: number;
};

export default function Page() {
  const [principal, setPrincipal] = useState(1000000);
  const [monthlyContribution, setMonthlyContribution] = useState(10000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
  const [data, setData] = useState<ChartData[]>([]);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const r = interestRate / 100;
    const annualContribution = monthlyContribution * 12;
    let balance = principal;
    const chartData = [];

    for (let year = 0; year <= years; year++) {
      const interest = balance * r;
      if (year !== 0) balance += interest + annualContribution;
      chartData.push({
        year,
        principal: year === 0 ? principal : undefined,
        annualContribution,
        interest: year === 0 ? 0 : interest,
        endOfYear: balance,
      });
    }
    setData(chartData);
    setResult(Number(balance.toFixed(2)));
  };

  return (
    <Box p={6} maxW="1000px" mx="auto">
      <Heading mb={4}>Put a Number to Your Dream</Heading>

      <VStack
        gap={4}
        align="stretch"
        bg="white"
        boxShadow="md"
        borderRadius="xl"
        p={6}
      >
        <HStack gap={4}>
          <Input placeholder="My goal is" />
          <Input placeholder="KES to reach this goal" type="number" />
          <Input
            placeholder="KES monthly contribution"
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
          />
        </HStack>
        <HStack gap={4}>
          <Input
            placeholder="% interest annually"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
          <Input
            placeholder="# of years"
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </HStack>
        <Button colorScheme="blue" onClick={calculate}>
          Start Investing
        </Button>
        {result && (
          <Text fontSize="2xl" color="orange.400" fontWeight="bold">
            You’ll have KES. {result.toLocaleString()}
          </Text>
        )}
      </VStack>

      {data.length > 0 && (
        <Tabs.Root mt={10} solid-rounded colorScheme="blue">
          <Tabs.List>
            <Tabs.Trigger value="linegraph">Line Graph</Tabs.Trigger>
            <Tabs.Trigger value="table">Table</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="linegraph">
            <Box>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip
                    formatter={(value: number) => value.toLocaleString()}
                  />
                  <Line
                    type="monotone"
                    dataKey="endOfYear"
                    stroke="#3182ce"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="table">
            <Box>
              <Table.Root striped size="sm">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Year</Table.ColumnHeader>
                    <Table.ColumnHeader>Principal</Table.ColumnHeader>
                    <Table.ColumnHeader>
                      Monthly Contribution
                    </Table.ColumnHeader>
                    <Table.ColumnHeader>Annual Contribution</Table.ColumnHeader>
                    <Table.ColumnHeader>Interest</Table.ColumnHeader>
                    <Table.ColumnHeader>End of Year</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {data.map((row, i) => (
                    <Table.Row key={i}>
                      <Table.Cell>{row.year}</Table.Cell>
                      <Table.Cell>
                        {i === 0 ? row.principal?.toLocaleString() : "-"}
                      </Table.Cell>
                      <Table.Cell>
                        {monthlyContribution.toLocaleString()}
                      </Table.Cell>
                      <Table.Cell>
                        {(monthlyContribution * 12).toLocaleString()}
                      </Table.Cell>
                      <Table.Cell>
                        {i === 0 ? "-" : row.interest.toLocaleString()}
                      </Table.Cell>
                      <Table.Cell>{row.endOfYear.toLocaleString()}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
      )}
    </Box>
  );
}
