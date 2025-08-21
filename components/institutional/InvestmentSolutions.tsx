import { marginX, whatweoffertreasury } from "@/utils/constants";
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
          {whatweoffertreasury.map((item, index) => (
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
                    <Text fontSize="lg" mb={6} >
                      {item.body}
                    </Text>

                    <Grid
                      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                      alignItems="start"
                      gap={6}
                    >
                      {/* Left Text Column */}
                      <GridItem w={"90%"} mx="auto">
                        <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
                          Our Services
                        </Heading>
                        {item.services?.map(
                          (
                            service: { title: string; description: string },
                            idx: number
                          ) => (
                            <Box
                              key={idx}
                              as={"ol"}
                              listStyleType="none"
                              paddingLeft={0}
                              color="gray.700"
                              lineHeight="1.8"
                              mb={4} // spacing between services
                            >
                              <li
                                style={{
                                  display: "flex",
                                  gap: "12px",
                                  alignItems: "flex-start",
                                }}
                              >
                                <MdFiberManualRecord color="blue.700" size={16} />
                                <Box>
                                  <Text
                                    fontWeight="bold"
                                    fontSize="md"
                                    lineHeight="1.4"
                                  >
                                    {service.title}
                                  </Text>
                                  <Text
                                    fontSize="2xl"
                                    color="gray.600"
                                    mt={1}
                                    lineHeight="1.5"
                                  >
                                    {service.description}
                                  </Text>
                                </Box>
                              </li>
                            </Box>
                          )
                        )}
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

                    <Text
                      mt={10}
                      fontSize="md"
                      maxW="4xl"
                      textAlign={"justify"}
                    >
                      {item.extraText}
                    </Text>

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
                              mt={8}
                              borderRadius="md"
                              maxW="4xl"
                              key={idt}
                            >
                              <Text fontWeight="bold">{deal.title}</Text>
                              <Text fontSize="sm" mt={2}>
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
                            mt={8}
                            borderRadius="md"
                            maxW="4xl"
                          >
                            <Text fontWeight="bold">
                              {item.featuredDeal.title}
                            </Text>
                            <Text fontSize="sm" mt={2}>
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
