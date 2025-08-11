import { marginX } from "@/utils/constants";
import {
  Accordion,
  Box,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdPlayCircleFilled, MdFiberManualRecord } from "react-icons/md";

import React from "react";

const OurInvestmentSolutions = () => {
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
        Our Investment Solutions
      </Heading>
      <Text fontSize="md" color="gray.600" textAlign="center">
        We offer comprehensive solutions designed to optimize your financial
        position while maintaining the flexibility and security your
        organization demands.
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
                      Our Equity Strategy is designed for institutions seeking
                      to maximize long-term capital appreciation through
                      high-conviction investments in quality companies. We
                      employ a fundamentally driven, bottom-up approach that
                      targets businesses with strong earnings potential, durable
                      competitive advantages, and prudent capital allocation
                    </Text>

                    <Grid
                      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                      alignItems="start"
                      gap={6}
                    >
                      {/* Left Text Column */}
                      <GridItem w={"90%"} mx="auto">
                        <Heading fontSize="3xl" mb={4}>
                          Key Differentiators
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
                              // alignItems: "center",
                              gap: "16px",
                            }}
                          >
                            <MdFiberManualRecord color="blue.700" />
                            Rigorous Stock Selection: Active, research-intensive
                            process grounded in intrinsic value and growth
                            potential
                          </li>
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
                              Sector & Geographic Diversification: Risk-adjusted
                              exposure across developed, emerging, and frontier
                              markets
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
                              Forward-Looking Themes: Allocation to secular
                              growth trends in technology, healthcare
                              innovation, energy transition, and digital
                              infrastructure
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
                              Sustainable Investing Integration: ESG
                              considerations embedded into investment decisions
                              to ensure alignment with global sustainability
                              standards and stakeholder expectations
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

                    {/* Featured Deal Box */}
                    <Box
                      bg="blue.900"
                      color="white"
                      p={4}
                      mt={8}
                      borderRadius="md"
                      maxW="4xl"
                    >
                      <Text fontWeight="bold">Institutional Application:</Text>
                      <Text fontSize="sm" mt={2}>
                        A pension fund with multi-decade liabilities may
                        allocate to this strategy to achieve real returns above
                        inflation while accessing global equity growth
                        opportunities, including early-stage innovation in
                        emerging markets.
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

export default OurInvestmentSolutions;

const items = [
  {
    value: "a",
    title: "Equity Strategy",
    text: "Pursuing Sustainable Capital Growth Across Market Cycles",
    keyDifferentiators: [
      "Rigorous Stock Selection",
      "Sector & Geographic Diversification",
      "Forward-Looking Themes",
      "Sustainable Investing Integration",
    ],
    image: "/images/Charles.png",
    video: "https://www.youtube.com/watch?v=example", // Placeholder for video URL
  },
  {
    value: "b",
    title: "Balanced Strategy",
    text: "Optimizing Risk-Adjusted Returns Through Asset Class Synergy",
  },
  {
    value: "c",
    title: "Fixed Income Strategy",
    text: " Preserving Capital and Generating Reliable Income",
  },
];
