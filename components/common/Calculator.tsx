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
  Portal,
  Select,
  createListCollection,
  HStack,
  Container,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import autoTable from "jspdf-autotable";

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
    { label: "Other", value: "other" },
  ],
});

export default function Page() {
  const [goal, setGoal] = useState("");
  const [customGoal, setCustomGoal] = useState("");
  const [targetAmount, setTargetAmount] = useState(120000);
  const [monthlyContribution, setMonthlyContribution] = useState(10000);
  const [interestRate, setInterestRate] = useState(4);
  const [years, setYears] = useState(12);
  const [data, setData] = useState<ChartData[]>([]);
  const [result, setResult] = useState<number | null>(null);
  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const [rate, setRate] = useState(1);

  // new raw input states (to make typing smooth)
  const [targetAmountInput, setTargetAmountInput] = useState(
   targetAmount != null ? String(targetAmount) : ""
  );
  const [monthlyContributionInput, setMonthlyContributionInput] = useState(
    monthlyContribution != null ? String(monthlyContribution) : ""
  );

  const exportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
   setTargetAmountInput(targetAmount != null ? String(targetAmount) : "");
  }, [targetAmount]);

  useEffect(() => {
    setMonthlyContributionInput(monthlyContribution != null ? String(monthlyContribution) : "");
  }, [monthlyContribution]);

  const handleCurrencyToggle = (selected: "KES" | "USD") => {
    if (selected === currency) return;

    if (selected === "USD") {
      setTargetAmount(targetAmount * 0.0075);
      setMonthlyContribution(monthlyContribution * 0.0075);
      setRate(0.0075);
    } else {
      setTargetAmount(targetAmount / 0.0075);
      setMonthlyContribution(monthlyContribution / 0.0075);
      setRate(1);
    }
    setCurrency(selected);
  };

  const calculate = () => {
    const r = interestRate / 100;
    const annualContribution = monthlyContribution * 12;
    let balance = targetAmount;
    const chartData: ChartData[] = [];

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

  const formatCurrency = (value: number) => {
    return value.toLocaleString(undefined, { minimumFractionDigits: 2 });
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF({ orientation: "landscape" });

    try {
      const logoUrl = "/images/Logo.svg";
      const svgText = await fetch(logoUrl).then((r) => r.text());
      const svgBase64 =
        "data:image/svg+xml;base64," +
        btoa(unescape(encodeURIComponent(svgText)));
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = svgBase64;

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () =>
          reject(new Error("Failed to load SVG image for PDF logo"));
      });

      const tmpCanvas = document.createElement("canvas");
      const tmpCtx = tmpCanvas.getContext("2d");
      const naturalW = img.naturalWidth || img.width || 400;
      const naturalH = img.naturalHeight || img.height || 100;
      const maxWidth = 800;
      const scale = Math.min(1, maxWidth / naturalW);
      tmpCanvas.width = naturalW * scale;
      tmpCanvas.height = naturalH * scale;

      tmpCtx?.clearRect(0, 0, tmpCanvas.width, tmpCanvas.height);
      tmpCtx?.drawImage(img, 0, 0, tmpCanvas.width, tmpCanvas.height);

      const logoPngData = tmpCanvas.toDataURL("image/png");
      pdf.addImage(logoPngData, "PNG", 10, 8, 40, 20);
    } catch (err) {
      console.warn("Could not add logo to PDF:", err);
    }

    pdf.setFontSize(18);
    pdf.text(
      "Goal Calculation Report",
      pdf.internal.pageSize.getWidth() / 2,
      20,
      {
        align: "center",
      }
    );

    let tableStartY = 120;

    if (exportRef.current) {
      const chartContainer =
        exportRef.current.querySelector(".recharts-wrapper");
      if (chartContainer) {
        const canvas = await html2canvas(chartContainer as HTMLElement, {
          scale: 3,
          useCORS: true,
          backgroundColor: "#ffffff",
        });
        const imgData = canvas.toDataURL("image/png");

        const pdfWidth = pdf.internal.pageSize.getWidth() - 20;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        const chartY = 30;
        pdf.addImage(imgData, "PNG", 10, chartY, pdfWidth, pdfHeight);

        tableStartY = chartY + pdfHeight + 10;
      }
    }

    autoTable(pdf, {
      startY: tableStartY,
      head: [
        ["Year", "Principal", "Monthly", "Annual", "Interest", "End of Year"],
      ],
      body: data.map((row, i) => [
        row.year,
        i === 0 ? formatCurrency(row.principal || 0) : "-",
        formatCurrency(monthlyContribution),
        formatCurrency(monthlyContribution * 12),
        i === 0 ? "-" : formatCurrency(row.interest),
        formatCurrency(row.endOfYear),
      ]),
      styles: { fontSize: 10, textColor: [0, 0, 0] },
      headStyles: { fillColor: [10, 34, 51], textColor: 255 },
      alternateRowStyles: { fillColor: [245, 247, 250] },
      theme: "grid",
    });

    pdf.save("goal_calculation.pdf");
  };

  return (
    <Box id="section5" p={6} bg="#0A2233" minH="70vh">
      <Container maxW="14xl">
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
              collection={goalCollection}
              value={goal ? [goal] : []}
              onValueChange={(details) =>
                setGoal(
                  Array.isArray(details.value)
                    ? details.value[0]
                    : details.value
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
                    placeholder="I want to"
                    color="white"
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

        {/* Currency Toggle */}
        <Box textAlign="center" mb={4}>
          <HStack justify="center" gap={4}>
            <Button
              colorScheme={currency === "KES" ? "blue" : "gray"}
              onClick={() => handleCurrencyToggle("KES")}
            >
              KES
            </Button>
            <Button
              colorScheme={currency === "USD" ? "blue" : "gray"}
              onClick={() => handleCurrencyToggle("USD")}
            >
              USD
            </Button>
          </HStack>
        </Box>

        {/* Inputs Card */}
        <Box
          bg="white"
          p={8}
          color="black"
          borderRadius="2xl"
          shadow="md"
          mb={8}
        >
          <VStack gap={6} align="center" width="full" px={4}>
            <Heading size="2xl" textAlign="center">
              Let’s plan your dream, together.
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} width="full">
              <Field.Root>
                <Field.Label fontWeight="bold">My goal is</Field.Label>
                <Input
                  placeholder="Enter your goal"
                  value={
                    goal === "other"
                      ? customGoal
                      : goalCollection.items.find((item) => item.value === goal)
                          ?.label || ""
                  }
                  onChange={(e) =>
                    goal === "other" && setCustomGoal(e.target.value)
                  }
                  readOnly={goal !== "other"}
                />
              </Field.Root>

              {/* It will cost me fixed for Caro*/}
              <Field.Root>
                <Field.Label fontWeight="bold">It will cost me</Field.Label>
                <Input
                  placeholder={currency}
                  value={targetAmountInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/,/g, "");
                    setTargetAmountInput(e.target.value);
                    const num = Number(val);
                    if (!isNaN(num)) setTargetAmount(num);
                  }}
                />
                <Text fontSize="sm" color="gray.700">
                  to reach this goal
                </Text>
              </Field.Root>

              {/* I'll contribute...fixed for Caro */}
              <Field.Root>
                <Field.Label fontWeight="bold">I'll contribute</Field.Label>
                <Input
                  placeholder={currency}
                  value={monthlyContributionInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/,/g, "");
                    setMonthlyContributionInput(e.target.value);
                    const num = Number(val);
                    if (!isNaN(num)) setMonthlyContribution(num);
                  }}
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
                <Field.Label fontWeight="bold">
                  I want to invest for
                </Field.Label>
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

            <Button
              colorScheme="blue"
              size="lg"
              onClick={calculate}
              _hover={{ bg: "#00CAFF" }}
            >
              Calculate
            </Button>

            {result !== null && (
              <Box textAlign="center" mt={4}>
                <Text fontSize="xl" fontWeight="bold">
                  You’ll have
                </Text>
                <Text
                  fontSize="2xl"
                  fontWeight="extrabold"
                  color="orange.500"
                  mb={4}
                >
                  {currency} {formatCurrency(result)}
                </Text>

                <Button
                  colorScheme="green"
                  size="sm"
                  onClick={downloadPDF}
                  _hover={{ bg: "#00CAFF" }}
                >
                  Download PDF
                </Button>
              </Box>
            )}
          </VStack>
        </Box>

        {/* Chart & Table */}
        <Box bg="white" p={8} borderRadius="2xl" shadow="md" ref={exportRef}>
          {data.length > 0 && (
            <Tabs.Root mt={4} colorScheme="blue" solid-rounded>
              <Tabs.List>
                <Tabs.Trigger value="linegraph">Line Graph</Tabs.Trigger>
                <Tabs.Trigger value="table">Table</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="linegraph">
                <Box py={6}>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={data.map((d) => ({ ...d, endOfYear: d.endOfYear }))}
                    >
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
                          {i === 0 ? formatCurrency(row.principal || 0) : "-"}
                        </Table.Cell>
                        <Table.Cell>
                          {formatCurrency(monthlyContribution)}
                        </Table.Cell>
                        <Table.Cell>
                          {formatCurrency(monthlyContribution * 12)}
                        </Table.Cell>
                        <Table.Cell>
                          {i === 0 ? "-" : formatCurrency(row.interest)}
                        </Table.Cell>
                        <Table.Cell>{formatCurrency(row.endOfYear)}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Tabs.Content>
            </Tabs.Root>
          )}
        </Box>
      </Container>
    </Box>
  );
}
