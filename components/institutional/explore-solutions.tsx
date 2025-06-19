"use client";
import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Menu,
  Portal,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const ExploreSolutions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        textAlign="center"
        my={6}
        color="#00caff"
      >
        Explore Solutions
      </Heading>
      <Box bg="#0a2234" color="white" mx={marginX} py={10}>
        {/* ASSET MANAGEMENT SECTION */}
        <Grid templateColumns={{ base: "1fr", md: "1fr" }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            px={{ base: 4, md: 12 }}
            gap={8}
          >
            {/* Image on the left */}
            <Box
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="/images/Mercy-m.png"
                alt="Asset Management"
                width="auto"
                height="600px"
                objectFit="contain"
                borderRadius="md"
                overflow="hidden"
              />
            </Box>

            <Box
              flex="1"
              p={4}
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontFamily="Poppins"
                mb={4}
              >
                Asset Management
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                Nabo Capital&apos;s treasury solutions help institutions turn
                idle cash into consistent returns. Through strategic cash flow
                management and investment-grade options, businesses can unlock
                new revenue streams while maintaining liquidity.
              </Text>
              <Box>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button
                      mt={6}
                      colorScheme="blue"
                      bg="#00caff"
                      color="white"
                      px={8}
                      py={4}
                      rounded="full"
                      fontWeight="bold"
                    >
                      I want to <FaChevronDown />
                    </Button>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content bg={"gray.300"} p={2} rounded="md">
                        <Link href="/institutional/Asset-Management">
                          <Menu.Item value="asset-mgt">
                            Protect My Business
                          </Menu.Item>
                        </Link>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
              </Box>
            </Box>
          </Flex>
        </Grid>

        {/* INVESTMENT ADVISORY SECTION */}
        <Grid templateColumns={{ base: "1fr", md: "1fr" }} py={10}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            px={{ base: 4, md: 12 }}
            gap={8}
          >
            <Box flex="1" p={4}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontFamily="Poppins"
                mb={8}
              >
                Investment Advisory
              </Heading>
              <Text
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "md", md: "lg" }}
                lineHeight={1.8}
              >
                With deep market insight and tailored portfolio strategies, Nabo
                Capital offers asset advisory services that help corporates and
                institutions grow long-term wealth, optimize asset performance,
                and manage risk across cycles.
              </Text>
              <Box>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button
                      mt={6}
                      colorScheme="blue"
                      bg="#00caff"
                      color="white"
                      px={8}
                      py={4}
                      rounded="full"
                      fontWeight="bold"
                    >
                      I want to <FaChevronDown />
                    </Button>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content bg={"gray.300"} p={2} rounded="md">
                        <Link href="/institutional/Investment-Advisory">
                          <Menu.Item value="investment-advisory">
                            Align Capital to Strategy
                          </Menu.Item>
                        </Link>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
              </Box>
            </Box>

            <Box
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
            >
              <Image
                src="/Pius-m.png"
                alt="Investment Advisory"
                width="auto"
                height="600px"
                objectFit="contain"
                borderRadius="md"
                overflow="hidden"
              />
            </Box>
          </Flex>
        </Grid>
      </Box>
    </>
  );
};

export default ExploreSolutions;
