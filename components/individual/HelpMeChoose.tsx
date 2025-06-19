import { HelpMeChoosePlans } from "@/utils/constants";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const HelpMeChoose = () => {
  // State to track which plan is active and which question is being answered
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  // Get the currently active plan, or default to the first plan
  const activePlan =
    activePlanIndex !== null
      ? HelpMeChoosePlans[activePlanIndex]
      : HelpMeChoosePlans[0];

  return (
    <>
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "5xl" }}
          fontFamily="poppins"
          textAlign="center"
          my={6}
          color="gray.800"
        >
          Help Me Choose
        </Heading>
        <Text>
          Answer a few questions to get a personalized recommendation on which
          fund suits you best.
        </Text>
        <VStack gap={6} p={6}>
          {HelpMeChoosePlans.map((plan, index) => (
            <Box
              width="100%"
              bg="blue.50"
              p={6}
              rounded="lg"
              mt={8}
              position="relative"
            >
              <Text mb={2} fontSize="sm">
                Question {questionIndex + 1} of {activePlan.question.length}
              </Text>

              <HStack
                align="start"
                gap={6}
                flexDir={{ base: "column", md: "row" }}
              >
                <VStack align="start" gap={4} flex={2}>
                  <Button
                    mt={4}
                    onClick={() => {
                      const next = questionIndex + 1;
                      if (next < activePlan.question.length) {
                        setQuestionIndex(next);
                      } else {
                        setActivePlanIndex(null); // Done with this plan
                      }
                    }}
                  >
                    {questionIndex < activePlan.question.length - 1
                      ? "Next ➔"
                      : "Finish"}
                  </Button>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default HelpMeChoose;
