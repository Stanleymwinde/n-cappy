
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
import { MdPlayCircleFilled, MdFiberManualRecord } from "react-icons/md";
import React from "react";

const InvestmentSolutions = () => {
  return (

    <Box marginX={marginX} mt={20}>

      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        fontWeight="bold"
        my={6}
        color="gray.800"
        textAlign="center"
      >
        What We Offer
      </Heading>

      {/* Intro Text */}
      <Text fontSize={{ base: "lg", md: "2xl" }} color="gray.600" textAlign="center">
        We offer tailored investment advisory services for institutional and
        corporate clients, combining deep market insight with strategic analysis
        to drive long-term value.
      </Text>

      {/* Accordion */}
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
              {/* Accordion Trigger */}
              <Accordion.ItemTrigger>
                <Stack gap={4} px={4} py={4} flex={1}>
                  <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="semibold">
                    {item.title}
                  </Text>
                  <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">
                    {item.text}
                  </Text>
                </Stack>
                <Accordion.ItemIndicator pr={2} fontSize="2xl" />
              </Accordion.ItemTrigger>

              {/* Accordion Content */}
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Box px={{ base: 4, md: 16 }} bg="white">
                    {/* Main Body Text */}
                    <Text fontSize={{ base: "lg", md: "2xl" }} mb={6}>
                      {item.body}
                    </Text>

                    {/* Grid: Services and Media */}
                    <Grid
                      templateColumns={{ base: "1fr", md: "2fr 1fr" }}
                      gap={8}
                      px={{ base: 4, md: 8 }}
                      py={6}
                      alignItems="start"
                    >
                      {/* Left Column: Services */}
                      <GridItem>
                        {/* Services Heading */}
                        <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={4} >
                          Our Services
                        </Heading>

                        {/* Services List */}
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
                              <MdFiberManualRecord color="blue.700" size={24} style={{ marginTop: 6 }} />
                              <Box>
                                {service.title && (
                                  <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} mb={1}>
                                    {service.title}
                                  </Text>
                                )}
                                <Text fontSize={{ base: "lg", md: "xl" }} color="gray.700" lineHeight="tall">
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
                          width="100%"
                          height={{ base: "250px", md: "600px" }}
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
                          >
                            <MdPlayCircleFilled size={64} color="white" />
                          </Box>
                        </Box>
                      </GridItem>
                    </Grid>

                    {/* Extra Text */}
                    {item.extraText && (
                      <Text
                        mt={10}
                        fontSize={{ base: "lg", md: "xl" }}
                        maxW="6xl"
                        textAlign="justify"
                      >
                        {item.extraText}
                      </Text>
                    )}

                    {/* Featured Deal */}
                    {item.featuredDeal && (
                      <Box
                        bg="blue.900"
                        color="white"
                        p={6}
                        mt={8}
                        borderRadius="md"
                        
                      >
                        <Text fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>
                          {item.featuredDeal.title}
                        </Text>
                        <Text fontSize={{ base: "md", md: "xl" }} mt={2}>
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
