"use client";
import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  VStack,
  Button,
  Field,
  Heading,
  Slider,
} from "@chakra-ui/react";
import { marginX } from "@/utils/constants";

const GoalPlanner = () => {
  const [goal, setGoal] = useState("Buy a car");
  const [years, setYears] = useState(5);
  const [goalCost, setGoalCost] = useState(500000);
  const [monthlySavings, setMonthlySavings] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(10);

  const months = years * 12;
  const monthlyRate = annualReturn / 100 / 12;
  const futureValue =
    monthlySavings * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  const interest = futureValue - monthlySavings * months;

  interface CustomSliderProps {
    value: number;
    onChange: (val: number) => void;
    min: number;
    max: number;
    step: number;
    label: string;
    displayValue: string;
  }

  const CustomSlider: React.FC<CustomSliderProps> = ({
    value,
    onChange,
    min,
    max,
    step,
    label,
    displayValue,
  }) => (
    <Box>
      <Text>{label}</Text>
      <Slider.Root
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(details) => onChange(details.value[0])}
      >
        <Slider.Label />
        <Slider.ValueText />
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0}>
            <Slider.DraggingIndicator />
            <Slider.HiddenInput />
          </Slider.Thumb>
          <Slider.MarkerGroup>
            <Slider.Marker value={min} />
            <Slider.Marker value={max} />
          </Slider.MarkerGroup>
        </Slider.Control>
      </Slider.Root>
      <Text mt={1} fontSize="sm">
        {displayValue}
      </Text>
    </Box>
  );

  return (
    <Box bg={"gray.300"}>
      {" "}
      <Heading
        mb={6}
        textAlign="center"
        color={"#0a2234"}
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="bold"
      >
        Put a Number to Your Dream
      </Heading>{" "}
      <Box
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={6}
      >
        <Box
          maxW="lg"
          w="full"
          p={6}
          borderRadius="2xl"
          boxShadow="lg"
          bg={"#0a2234"}
        >
          <VStack gap={4} align="stretch">
            <Heading size="md">Let’s plan your dream, together.</Heading>

            <Box>
              <Text>What’s your goal?</Text>
              <Input
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                bg="white"
                color="black"
              />
            </Box>

            <CustomSlider
              value={years}
              onChange={setYears}
              min={1}
              max={30}
              step={1}
              label="How soon would you like to make it happen?"
              displayValue={`${years} Years`}
            />

            <CustomSlider
              value={goalCost}
              onChange={setGoalCost}
              min={1000}
              max={10000000}
              step={1000}
              label="How much will it cost you to reach this goal?"
              displayValue={`KES ${goalCost.toLocaleString()}`}
            />

            <CustomSlider
              value={monthlySavings}
              onChange={setMonthlySavings}
              min={1000}
              max={10000000}
              step={1000}
              label="How much can you set aside each month?"
              displayValue={`KES ${monthlySavings.toLocaleString()}`}
            />

            <CustomSlider
              value={annualReturn}
              onChange={setAnnualReturn}
              min={1}
              max={30}
              step={1}
              label="What is your expected annual return?"
              displayValue={`${annualReturn}%`}
            />

            <Box border="1px solid #00caff" p={4} borderRadius="lg">
              <Text fontWeight="bold">
                Here is your path to {goal.toLowerCase()}:
              </Text>
              <Text mt={2}>
                If you save KES {monthlySavings.toLocaleString()} each month for{" "}
                {years} years,
                <br />
                you will have KES{" "}
                {futureValue.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}{" "}
                by the end –<br />
                including interest of KES{" "}
                {interest.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
                .
              </Text>
            </Box>

            <Button bg={"#00caff"} w="full">
              Start Investing Now
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default GoalPlanner;
