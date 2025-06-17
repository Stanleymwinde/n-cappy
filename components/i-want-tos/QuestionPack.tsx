"use client";
import { LifestylePlans, marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Card,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaHandsHelping, FaHeart } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { useColorModeValue } from "../ui/color-mode";

const QuestionPack = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActivePlanIndex(index);
    setQuestionIndex(0);
  };

  const activePlan =
    activePlanIndex !== null ? LifestylePlans[activePlanIndex] : null;
  const activeQuestion = activePlan?.questions[questionIndex];
  return (
    <Box marginX={marginX} py={10} bg="white">
      <VStack gap={3} textAlign="center" mb={8}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} color="blue.900">
          Building Blocks of Your Legacy
        </Heading>
        <Text maxW="2xl" fontSize="md" color="gray.600">
          Each aspect of your financial legacy requires thoughtful planning.
          Explore the key areas below or jump straight to your personalized
          calculation.
        </Text>
      </VStack>

      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={6}>
        {blocks.map((block, idx) => (
          <GridItem key={idx}>
            <Box
              p={4}
              border="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              bg={cardBg}
              height="100%"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
            >
              <VStack gap={3} align="start">
                <Box
                  bg="blue.100"
                  color="blue.800"
                  p={3}
                  borderRadius="full"
                  display="inline-block"
                >
                  <Icon as={block.icon} boxSize={5} />
                </Box>
                <Text fontWeight="bold" color="blue.900">
                  {block.title}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {block.description}
                </Text>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <VStack gap={6} p={6}>
        <Text fontSize="3xl" fontWeight="bold">
          Invest in the Life You Envision
        </Text>
        <Text fontSize="md">
          Plan every part of your lifestyle with intention. Explore your options
          below.
        </Text>

        <HStack wrap="wrap" gap={4} justify="center">
          {LifestylePlans.map((plan, idx) => (
            <Card.Root
              key={idx}
              cursor="pointer"
              p={4}
              border="1px solid"
              borderColor="gray.300"
              onClick={() => handleCardClick(idx)}
            >
              <Text fontWeight="bold">{plan.title}</Text>
              <Text fontSize="sm">{plan.description}</Text>
            </Card.Root>
          ))}
        </HStack>

        {activePlan && activeQuestion && (
          <Box
            width="100%"
            bg="blue.50"
            p={6}
            rounded="lg"
            mt={8}
            position="relative"
          >
            <Text mb={2} fontSize="sm">
              Question {questionIndex + 1} of {activePlan.questions.length}
            </Text>

            <HStack
              align="start"
              gap={6}
              flexDir={{ base: "column", md: "row" }}
            >
              <Box flex={1}>
                <Image
                  src={activeQuestion.image}
                  alt="question visual"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="250px"
                />
              </Box>
              <VStack align="start" gap={4} flex={2}>
                <Text fontSize="xl" fontWeight="bold">
                  {activeQuestion.question}
                </Text>
                <Input placeholder={activeQuestion.placeholder} />
                <Text fontSize="sm" color="gray.600">
                  {activeQuestion.hint}
                </Text>
                <Button
                  mt={4}
                  onClick={() => {
                    const next = questionIndex + 1;
                    if (next < activePlan.questions.length) {
                      setQuestionIndex(next);
                    } else {
                      setActivePlanIndex(null); // Done with this plan
                    }
                  }}
                >
                  {questionIndex < activePlan.questions.length - 1
                    ? "Next ➔"
                    : "Finish"}
                </Button>
              </VStack>
            </HStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default QuestionPack;

const blocks = [
  {
    title: "Estate Planning",
    description:
      "Ensure your assets are protected and distributed according to your wishes, minimizing taxes and complications for your heirs.",
    icon: MdOutlineRealEstateAgent,
  },
  {
    title: "Generational Wealth Transfer",
    description:
      "Create a structured approach to passing financial assets, knowledge, and values to future generations.",
    icon: FaHandsHelping,
  },
  {
    title: "Long-Term Care",
    description:
      "Prepare for potential health needs without compromising the financial legacy you intend to leave behind.",
    icon: FaHeart,
  },
  {
    title: "Giving with Intention",
    description:
      "Align your charitable contributions with your values and maximize their impact on causes you care about.",
    icon: FaHandsHelping,
  },
  {
    title: "Retirement Income",
    description:
      "Structure predictable and reliable income for your retirement years.",
    icon: BsCashCoin,
  },
];
