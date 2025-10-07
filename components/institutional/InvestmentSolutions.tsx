"use client";

import { marginX, whatweoffertreasury } from "@/utils/constants";
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

const InvestmentSolutions = () => {
  return (
    <Box marginX={marginX} mt={20}>
      {/* Main Title */}
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "6xl" }}
        fontFamily="poppins"
        fontWeight="bold"
        my={6}
        color="gray.800"
        textAlign="center"
      >
        What We Offer
      </Heading>

      {/* Intro Text */}
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        color="gray.600"
        textAlign="center"
      >
        We offer tailored investment advisory services for institutional and
        corporate clients, combining deep market insight with strategic analysis
        to drive long-term value.
      </Text>

      {/* Accordion */}
      <Box py={6} bg="gray.50" borderRadius="md" mt={6}>
        <Accordion.Root collapsible gap={2}>
          {whatweoffertreasury.map((item, index) => (
            <Accordion.Item
              key={index}
              value={item.value}
              border="1px solid #00caff"
              borderRadius="md"
              p={2}
              my={4}
            >
              {/* Accordion Trigger */}
              <Accordion.ItemTrigger>
                <Stack gap={4} px={4} py={4} flex={1}>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="semibold"
                  >
                    {item.title}
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                    {item.text}
                  </Text>
                </Stack>
                <Accordion.ItemIndicator pr={2} fontSize="2xl" />
              </Accordion.ItemTrigger>

              {/* Accordion Content */}
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Box px={{ base: 4, md: 8 }} bg="white">
                    {/* Main Body Text */}
                    <Text
                      fontSize={{ base: "md", md: "xl" }}
                      mb={4}
                      textAlign="left"
                    >
                      {item.body}
                    </Text>

                    {/* Grid: Services and Media */}
                    <Grid
                      templateColumns={{ base: "1fr", md: "2fr 1fr" }}
                      gap={6}
                      px={{ base: 0, md: 4 }}
                      py={4}
                      alignItems="start"
                    >
                      {/* Left Column: Services */}
                      <GridItem mt={2}>
                        <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={3}>
                          Our Services
                        </Heading>

                        {/* Services List */}
                        <Box
                          as="ul"
                          display="flex"
                          flexDirection="column"
                          listStyleType="none"
                          gap={3}
                          paddingLeft={0}
                          maxW="6xl"
                        >
                          {item.services.map((service, idx) => (
                            <li
                              key={idx}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "12px",
                              }}
                            >
                              <MdFiberManualRecord
                                color="blue.700"
                                size={20}
                                style={{ marginTop: 5 }}
                              />
                              <Box>
                                {service.title && (
                                  <Text
                                    fontWeight="bold"
                                    fontSize={{ base: "lg", md: "xl" }}
                                    mb={1}
                                    
                                  >
                                    {service.title}
                                  </Text>
                                )}
                                <Text
                                  fontSize={{ base: "md", md: "lg" }}
                                  color="gray.700"
                                  lineHeight="tall"
                                >
                                  {service.description}
                                </Text>
                              </Box>
                            </li>
                          ))}
                        </Box>
                      </GridItem>

                      {/* Right Column: Media */}
                      <GridItem>
                        <Box
                          position="relative"
                          borderRadius="md"
                          overflow="hidden"
                          width="80%"
                          height={{ base: "250px", md: "500px" }}
                        >
                          <Image
                            src={item.media.image}
                            alt={item.media.alt}
                            fill
                          />
                          <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                          ></Box>
                        </Box>

                        {item.quote && (
                          <Text
                            mt={4}
                            fontStyle="italic"
                            fontSize={{ base: "md", md: "lg" }}
                            color="gray.700"
                            textAlign="center"
                            px={2}
                            maxW={"400px"}
                          >
                            {item.quote}
                          </Text>
                        )}
                      </GridItem>
                    </Grid>

                    {/* Featured Deal Box */}
                    {Array.isArray(item.featuredDeal)
                      ? item.featuredDeal.map(
                          (
                            deal: { title: string; description: string },
                            idt: number
                          ) => (
                            <Box
                              bg="blue.900"
                              color="white"
                              p={4}
                              mt={6}
                              borderRadius="md"
                              maxW="4xl"
                              key={idt}
                            >
                              <Text fontWeight="bold">{deal.title}</Text>
                              <Text   fontSize={{ base: "sm", md: "lg" }} mt={2}>
                                {deal.description}
                              </Text>
                            </Box>
                          )
                        )
                      : item.featuredDeal && (
                          <Box
                            bg="blue.900"
                            color="white"
                            p={4}
                            mt={6}
                            borderRadius="md"
                          >
                            <Text fontWeight="bold">
                              {item.featuredDeal.title}
                            </Text>
                            <Text fontSize={{ base: "md", md: "xl" }}  mt={2}>
                              {item.featuredDeal.description}
                            </Text>
                          </Box>
                        )}
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

