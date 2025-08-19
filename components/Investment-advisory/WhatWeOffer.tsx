import { marginX,whatweoffer } from "@/utils/constants";
import {
  Accordion,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdPlayCircleFilled, MdFiberManualRecord } from "react-icons/md";

import React from "react";

const InvestmentSolutions = () => {
  return (
    <Box marginX={marginX}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        my={6}
        color="gray.800"
        textAlign="center"
      >
        What We Offer
      </Heading>
      <Text fontSize="md" color="gray.600" textAlign="center">
        We offer tailored investment advisory services for institutional and
        corporate clients, combining deep market insight with strategic analysis
        to drive long-term value.
      </Text>
      <Box py={6} bg="gray.50" borderRadius="md" mt={6}>
        <Accordion.Root collapsible gap={2}>
          {items.map((item, index) => (
            <Accordion.Item
              key={index}
              value={item.value}
              border={"1px solid #00caff"}
              borderRadius="md"
              p={2}
              my={4}
            >
              <Accordion.ItemTrigger>
                <Stack gap={2} px={4} py={2} flex={1}>
                  <Text fontSize={"3xl"}>{item.title}</Text>
                  <Text fontSize="sm" color="fg.muted">
                    {item.text}
                  </Text>
                </Stack>
                <Accordion.ItemIndicator pr={2} fontSize={"2xl"} />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Box px={{ base: 4, md: 16 }} bg="white">
                    <Text fontSize="lg" mb={6} maxW="4xl">
                      We bridge institutional capital with high-growth,
                      privately-held enterprises across Africa and beyond.
                      Whether your institution is seeking differentiated alpha
                      or your business is looking to scale through non-dilutive
                      capital, our advisory offering creates value through
                      structured, long-term alignment.
                    </Text>

                    <Grid
                      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                      alignItems="start"
                      gap={6}
                    >
                      {/* Left Text Column */}
                      <GridItem w={"90%"} mx="auto">
                        <Heading fontSize="3xl" mb={4}>
                          Our Services
                        </Heading>

                        <Box
                          alignContent={"center"}
                          as={"ul"}
                          gap={8}
                          display="flex-column"
                          alignItems="center"
                          flexDirection="column"
                          listStyleType="none"
                          paddingLeft={0}
                          fontSize="2xl"
                          color="gray.700"
                          lineHeight="1.8"
                        >
                       
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "16px",
                              lineHeight: "1.6",
                            }}
                          >
                            <MdFiberManualRecord color="blue.700" />
                            <Text lineHeight={"1.6"}>
                              Transaction structuring including equity
                              placements, convertible debt, and mezzanine
                              finance
                            </Text>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "16px",
                            }}
                          >
                            <MdFiberManualRecord color="blue.700" />
                            <Text>
                              Ongoing portfolio monitoring and performance
                              evaluation for investor clients
                            </Text>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "16px",
                            }}
                          >
                            <MdFiberManualRecord color="blue.700" />
                            <Text>
                              Design and execution of exit strategies (including
                              secondary sales and strategic buyouts)
                            </Text>
                          </li>
                        </Box>
                      </GridItem>

                      {/* Right Video Image Column */}
                      <GridItem>
                        <Box
                          position="relative"
                          borderRadius="md"
                          overflow="hidden"
                          width="80%"
                          height={{ base: "200px", md: "600px" }}
                        >
                          <Image
                            src="/images/Charles.png"
                            alt="Advisory Team"
                            fill
                          />
                          <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                          >
                            <MdPlayCircleFilled size="64px" color="white" />
                          </Box>
                        </Box>
                      </GridItem>
                    </Grid>

                    <Text
                      mt={10}
                      fontSize="md"
                      maxW="4xl"
                      textAlign={"justify"}
                    >
                      We maintain a deep understanding of the evolving private
                      capital landscape and work closely with institutional
                      asset allocators to unlock co-investment opportunities,
                      strategic capital partnerships, and bespoke funding
                      solutions.
                    </Text>

                    {/* Featured Deal Box */}
                    <Box
                      bg="blue.900"
                      color="white"
                      p={4}
                      mt={8}
                      borderRadius="md"
                      maxW="4xl"
                    >
                      <Text fontWeight="bold">
                        Featured Deal: Healthcare Technology Platform
                      </Text>
                      <Text fontSize="sm" mt={2}>
                        Structured a $12M convertible note for a rapidly growing
                        health-tech platform, balancing immediate growth capital
                        needs with long-term equity upside for investors and
                        founders alike.
                      </Text>
                    </Box>
                  </Box>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </Box>
  );
};

export default InvestmentSolutions;

const items = [
  {
    value: "a",
    title: "Capital Raising",
    text: "Stucturing and Sourcing for Sustainable Growth",
  },
  {
    value: "b",
    title: "Business Evaluation",
    text: "Independent Evaluation for Strategic Clarity and Capital Decisions",
  },
  {
    value: "c",
    title: "Private Equity & Private Debt Advisory",
    text: "Access  to Capital Beyond Public Markets",
  },
  {
    value: "d",
    title: "Mergers & Acquisitions (M&A)",
    text: "End to End Advisory Across the  M&A Lifecycle",
  },
];
