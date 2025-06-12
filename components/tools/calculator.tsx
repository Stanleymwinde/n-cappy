"use client";

import React from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Heading,
  Slider,
  Field,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalculatorFormValues, CalculatorSchema } from "@/schema/calculator";

const GoalPlanner = () => {
  const {
    control,
    handleSubmit,
    register,
    watch,
    setValue: setFormValue,
    formState: { errors },
  } = useForm<CalculatorFormValues>({
    resolver: zodResolver(CalculatorSchema),
    defaultValues: {
      goal: "Buy a car",
      years: [5],
      goalCost: [500000],
      monthlySavings: [5000],
      annualReturn: [10],
    },
  });

  const watchedValues = watch();

  const onSubmit = handleSubmit((data) => {
    console.log("Form submitted:", data);
  });

  const renderSlider = (
    name: keyof CalculatorFormValues,
    label: string,
    min: number,
    max: number,
    step: number,
    unit: string = ""
  ) => (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Field.Root invalid={!!errors[name]}>
          <Field.Label>
            {label}: {field.value[0]} {unit}
          </Field.Label>
          <Slider.Root
            width="full"
            name={field.name}
            value={Array.isArray(field.value) ? field.value : []}
            min={min}
            max={max}
            step={step}
            onValueChange={({ value }: { value: number[] }) => {
              field.onChange(value);
            }}
            onFocusChange={({ focusedIndex }: { focusedIndex: number }) => {
              if (focusedIndex === -1) field.onBlur();
            }}
          >
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumbs />
            </Slider.Control>
          </Slider.Root>
          <Field.ErrorText>
            {Array.isArray(errors[name])
              ? errors[name]?.[0]?.message
              : (errors[name] as { message?: string })?.message}
          </Field.ErrorText>
        </Field.Root>
      )}
    />
  );

  const goal = watchedValues.goal || "";
  const years = watchedValues.years?.[0] || 0;
  const monthlySavings = watchedValues.monthlySavings?.[0] || 0;
  const annualReturn = watchedValues.annualReturn?.[0] || 0;

  const months = years * 12;
  const monthlyRate = annualReturn / 100 / 12;

  const futureValue =
    monthlyRate > 0
      ? monthlySavings * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
      : monthlySavings * months;

  const interest = futureValue - monthlySavings * months;

  return (
    <>
      {" "}
      <Heading
        py={6}
        textAlign="center"
        fontSize="5xl"
        color={"#00caff"}
        fontWeight={"bold"}
      >
        Put a Number to Your Dream
      </Heading>
      <Box
        bg="gray.100"
        color="white"
        minH="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          maxW="lg"
          w="full"
          bg="#1e2d3d"
          p={6}
          borderRadius="2xl"
          boxShadow="lg"
        >
          <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gap={4}>
              <Heading size="md">Let’s plan your dream, together.</Heading>

              <Box>
                <Text mb={1} fontWeight="medium">
                  What’s your goal?
                </Text>
                <Input
                  {...register("goal")}
                  bg="white"
                  color="black"
                  onChange={(e) => {
                    setFormValue("goal", e.target.value);
                  }}
                />
              </Box>

              {renderSlider(
                "years",
                "How soon would you like to make it happen?",
                1,
                30,
                1,
                "Years"
              )}
              {renderSlider(
                "goalCost",
                "How much will it cost you to reach this goal?",
                1000,
                10000000,
                500,
                "KES"
              )}
              {renderSlider(
                "monthlySavings",
                "How much can you set aside each month?",
                1000,
                10000000,
                500,
                "KES"
              )}
              {renderSlider(
                "annualReturn",
                "What is your expected annual return?",
                1,
                30,
                1,
                "%"
              )}

              <Box mt={4} fontSize="sm" color="green.300">
                <Text fontWeight="bold">
                  Here is your path to {goal.toLowerCase()}:
                </Text>
                <Text mt={2}>
                  If you save KES {monthlySavings.toLocaleString()} each month
                  for {years} years,
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

              <Button colorScheme="blue" w="full" type="submit">
                Start Investing Now
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default GoalPlanner;
