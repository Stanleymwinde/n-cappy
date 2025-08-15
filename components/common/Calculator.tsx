"use client";

import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  SimpleGrid,
  Field,
  Tabs,
  Table,
  Select,
  Portal,
  createListCollection,
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

const goalCollection = createListCollection({
  items: [
    { label: "Buy a House", value: "house" },
    { label: "Start a Business", value: "business" },
    { label: "Travel the World", value: "travel" },
    { label: "Retire Early", value: "retire" },
  ],
});

export default function Page() {
  const [goal, setGoal] = useState("");
  const [targetAmount, setTargetAmount] = useState(1000000);
  const [monthlyContribution, setMonthlyContribution] = useState(10000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
  const [data, setData] = useState<ChartData[]>([]);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const r = interestRate / 100;
    const annualContribution = monthlyContribution * 12;
    let balance = targetAmount;
    const chartData = [];

    for (let year = 0; year <= years; year++) {
      const interest = balance * r;
      if (year !== 0) balance += interest + annualContribution;
      chartData.push({
        year,
        principal: year === 0 ? targetAmount : undefined,
        annualContribution,
        interest: year === 0 ? 0 : interest,
        endOfYear: balance,
      });
    }
    setData(chartData);
    setResult(Number(balance.toFixed(2)));
  };

  return (
    <Box p={6} bg="#0A2233">
      <Box py={8} px={4} borderRadius="lg" textAlign="center">
        <Text fontSize="xl" fontWeight="bold" color="blue.300" mb={4}>
          Put a Number to Your Dream
        </Text>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          mb={6}
        >
          <Select.Root
            bgGradient={"to-r"}
            gradientFrom={"black"}
            gradientTo={"cyan.600"}
            collection={goalCollection}
            value={goal ? [goal] : []}
            onValueChange={(details) =>
              setGoal(
                Array.isArray(details.value) ? details.value[0] : details.value
              )
            }
            width="320px"
            size="sm"
          >
            <Select.HiddenSelect />

            <Select.Control
              borderRadius="md"
              bgGradient="linear(to-r, blue.800, blue.400)"
              color="white"
              px={2}
              py={2}
              _focusVisible={{ outline: "2px solid white" }}
            >
              <Select.Trigger>
                <Select.ValueText
                  color={"white"}
                  placeholder="I want to"
                  px={4}
                />
              </Select.Trigger>

              <Select.IndicatorGroup>
                <Select.Indicator color="white" />
              </Select.IndicatorGroup>
            </Select.Control>

            <Portal>
              <Select.Positioner>
                <Select.Content
                  bg="white"
                  color="black"
                  borderRadius="md"
                  shadow="md"
                >
                  {goalCollection.items.map((item) => (
                    <Select.Item key={item.value} item={item}>
                      {item.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>
      </Box>

      <Box
        bg="white"
        maxW="2000px"
        marginX={marginX}
        p={8}
        color="black"
        borderRadius="2xl"
      >
        <VStack gap={6} align="center" width="full" px={4}>
          <Heading size="5xl" textAlign="center">
            Let’s plan your dream, together.
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} width="full">
            <Field.Root>
              <Field.Label fontWeight="bold">My goal is</Field.Label>
              <Input
                placeholder="To Buy A Car"
                value={
                  goalCollection.items.find((item) => item.value === goal)
                    ?.label || ""
                }
                readOnly
              />
            </Field.Root>

            <Field.Root>
              <Field.Label fontWeight="bold">It will cost me</Field.Label>
              <Input
                placeholder="KES"
                type="number"
                value={targetAmount}
                onChange={(e) => setTargetAmount(Number(e.target.value))}
              />
              <Text fontSize="sm" color="gray.700">
                to reach this goal
              </Text>
            </Field.Root>

            <Field.Root>
              <Field.Label fontWeight="bold">I'll contribute</Field.Label>
              <Input
                placeholder="KES"
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              />
              <Text fontSize="sm" color="gray.700">
                Every month
              </Text>
            </Field.Root>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} width="full">
            <Field.Root>
              <Field.Label fontWeight="bold">I want to earn</Field.Label>
              <Input
                placeholder="%"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <Text fontSize="sm" color="gray.700">
                interest annually
              </Text>
            </Field.Root>

            <Field.Root>
              <Field.Label fontWeight="bold">I want to invest for</Field.Label>
              <Input
                placeholder="#"
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
              />
              <Text fontSize="sm" color="gray.700">
                years
              </Text>
            </Field.Root>
          </SimpleGrid>

          <Button colorScheme="blue" size="lg" onClick={calculate}>
            Calculate
          </Button>

          {result !== null && (
            <Box textAlign="center">
              <Text fontSize="xl" fontWeight="bold" mt={4}>
                You’ll have
              </Text>
              <Text fontSize="2xl" fontWeight="extrabold" color="orange.500">
                KES.{" "}
                {result.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </Box>
          )}
        </VStack>
      </Box>

      {/* Chart & Table */}
      <Box p={6} bg="#f5f5f5">
        {data.length > 0 && (
          <Tabs.Root mt={10} colorScheme="blue" solid-rounded>
            <Tabs.List>
              <Tabs.Trigger value="linegraph">Line Graph</Tabs.Trigger>
              <Tabs.Trigger value="table">Table</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="linegraph">
              <Box py={6}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip
                      formatter={(value: number) =>
                        value.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                        })
                      }
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
              <Table.Root size="sm" striped>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Year</Table.ColumnHeader>
                    <Table.ColumnHeader>Principal</Table.ColumnHeader>
                    <Table.ColumnHeader>Monthly</Table.ColumnHeader>
                    <Table.ColumnHeader>Annual</Table.ColumnHeader>
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
            </Tabs.Content>
          </Tabs.Root>
        )}
      </Box>
    </Box>
  );
}
