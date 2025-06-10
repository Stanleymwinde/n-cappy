import { CoreStrategiessData, marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import * as Icons from "react-icons/lu";

const CoreStrategy = () => {
  return (
    <Box marginX={marginX} py={6} bg="white">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        my={6}
        color="gray.800"
        textAlign="center"
      >
        Our Core Strategies
      </Heading>
      <Text mb={8} textAlign="center" fontSize="lg" color="gray.600">
        Institutional-grade investment solutions to meet specific risk-return
        objectives across asset classes
      </Text>
      <Box>
        <Tabs.Root defaultValue="goal-0" variant="plain">
          <Flex justify="center" align="center" width="100%" py={4}>
            <Tabs.List bg="bg.muted" rounded="l3" p="1">
              {CoreStrategiessData.map((goal, index) => {
                const Icon = Icons[goal.icon as keyof typeof Icons];
                return (
                  <Tabs.Trigger key={index} value={`goal-${index}`}>
                    {Icon && <Icon />}
                    {goal.title}
                  </Tabs.Trigger>
                );
              })}
              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
          </Flex>

          {CoreStrategiessData.map((goal, index) => (
            <Tabs.Content key={index} value={`goal-${index}`}>
              <Box
                bgColor="gray.700"
                borderRadius="lg"
                py={6}
                px={{ base: 4, md: 8 }}
              >
                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1.5fr" }}
                  gap={6}
                  alignItems="center"
                >
                  {/* Image with play icon */}
                  <Box
                    position="relative"
                    borderRadius="lg"
                    overflow="hidden"
                    w="100%"
                    maxW="500px"
                    mx="auto"
                  >
                    <Image
                      src="/images/strategy.png"
                      alt="Strategy Preview"
                      width={500}
                      height={300}
                      style={{ borderRadius: "12px" }}
                    />
                    {/* Play Icon Overlay */}
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      zIndex="1"
                      bg="rgba(255,255,255,0.6)"
                      borderRadius="full"
                      p={2}
                    >
                      <FaRegCirclePlay size={60} color="#0a2234" />
                    </Box>
                  </Box>

                  {/* Text Content */}
                  <Flex
                    direction="column"
                    justify="center"
                    align={{ base: "center", md: "flex-start" }}
                    textAlign={{ base: "center", md: "left" }}
                    gap={4}
                  >
                    <Heading fontSize="2xl" color="white">
                      {goal.title}
                    </Heading>
                    <Text fontSize="lg" fontWeight="medium" color="gray.300">
                      {goal.subtitle}
                    </Text>
                    <Text fontSize="md" lineHeight="1.8" color="white">
                      {goal.description}
                    </Text>

                    <Link
                      href="https://www.youtube.com/watch?v=1b0d8a9f2c4"
                      passHref
                      target="_blank"
                    >
                      <Button
                        bg="gray.900"
                        color="white"
                        _hover={{ bg: "#00b5e0", color: "white" }}
                        mt={4}
                        px={6}
                        py={5}
                        borderRadius="lg"
                        fontWeight="semibold"
                      >
                        <Icons.LuDownload /> Download Equity Strategy Factsheet
                      </Button>
                    </Link>
                  </Flex>
                </Grid>
              </Box>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </Box>
    </Box>
  );
};

export default CoreStrategy;
