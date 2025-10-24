"use client";
import { marginX, whatweoffer } from "@/utils/constants";

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
import { MdFiberManualRecord } from "react-icons/md";
import React from "react";

const InvestmentSolutions = () => {
  return (
    <Box marginX={marginX} mt={20}>
      <Heading
        as="h1"
        fontFamily="poppins"
        fontWeight="bold"
        my={6}
        color="gray.800"
        textAlign="center"
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
        lineHeight="short"
      >
        What We Offer
      </Heading>

      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        color="gray.600"
        textAlign="center"
      >
        We offer tailored investment advisory services for institutional and
        corporate clients, combining deep market insight with strategic analysis
        to drive long-term value.
      </Text>

      <Box py={6} bg="gray.50" borderRadius="md" mt={6}>
        <Accordion.Root collapsible gap={2}>
          {whatweoffer.map((item, index) => (
            <Accordion.Item
              key={index}
              value={item.value}
              border="1px solid #00caff"
              borderRadius="md"
              p={2}
              my={4}
            >
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

              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Box px={{ base: 4, md: 16 }} bg="white">
                    <Text fontSize={{ base: "md", md: "xl" }} mb={6}>
                      {item.body}
                    </Text>

                    <Grid
                      templateColumns={{ base: "1fr", md: "2fr 1fr" }}
                      gap={8}
                      px={{ base: 4, md: 8 }}
                      py={6}
                      alignItems="start"
                    >
                      <GridItem>
                        <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
                          Our Services
                        </Heading>

                        <Box
                          as="ul"
                          display="flex"
                          flexDirection="column"
                          listStyleType="none"
                          gap={4}
                          paddingLeft={0}
                          maxW="6xl"
                        >
                          {item.services.map((service, idx) => (
                            <li
                              key={idx}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "16px",
                              }}
                            >
                              <MdFiberManualRecord
                                color="blue.700"
                                size={24}
                                style={{ marginTop: 6 }}
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

                      <GridItem>
                        <Box
                          position="relative"
                          borderRadius="md"
                          overflow="hidden"
                          width={{ base: "100%", md: "80%" }}
                          height={{ base: "350px", md: "450px" }} // increased for mobile
                          mx={{ base: "auto", md: "0" }}
                        >
                          <Image
                            src={item.media.image}
                            alt={item.media.alt}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </Box>

                        {item.quote && (
                          <Text
                            mt={4}
                            fontSize={{ base: "sm", md: "lg" }}
                            color="gray.600"
                            fontStyle="italic"
                            textAlign="center"
                            maxW={{ base: "90%", md: "300px" }}
                            mx="auto"
                          >
                            “{item.quote}”
                          </Text>
                        )}
                      </GridItem>
                    </Grid>

                    {item.extraText && (
                      <Text
                        mt={10}
                        fontSize={{ base: "md", md: "lg" }}
                        maxW="6xl"
                        textAlign="justify"
                      >
                        {item.extraText}
                      </Text>
                    )}

                    {item.featuredDeal && (
                      <Box
                        bg="blue.900"
                        color="white"
                        p={6}
                        mt={8}
                        borderRadius="md"
                      >
                        <Text
                          fontWeight="bold"
                          fontSize={{ base: "md", md: "xl" }}
                        >
                          {item.featuredDeal.title}
                        </Text>
                        <Text fontSize={{ base: "sm", md: "lg" }} mt={2}>
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
