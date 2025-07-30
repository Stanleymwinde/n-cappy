import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

export default function CallToActionSection() {
  return (
    <Flex
      marginX={marginX}
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      bg="white"
      borderRadius="2xl"
      boxShadow="md"
      py={6}
      px={8}
      gap={4}
    >
      <Box maxW="700px">
        <Heading size={{ base: "2xl", md: "5xl" }} mb={2}>
          Start Building Your Savings{" "}
          <Box
            as="span"
            bgGradient="to-r"
            gradientFrom={"orange.400"}
            gradientTo={"yellow.400"}
            bgClip="text"
            fontWeight="extrabold"
          >
            Intentionally & Confidently
          </Box>
        </Heading>
        <Text fontSize="md" color="gray.600">
          Join thousands of investors who are already on their path to financial
          freedom. Your future self will thank you for starting today
        </Text>
      </Box>

      <Button
        size="lg"
        fontWeight="bold"
        bgGradient="to-r"
        gradientFrom="orange.400"
        gradientTo="yellow.400"
        color="black"
        _hover={{
          bgGradient: "to-r",
          gradientFrom: "orange.500",
          gradientTo: "yellow.500",
          transform: "scale(1.05)",
          boxShadow: "lg",
        }}
      >
        Start Now <BsArrowRight />
      </Button>
    </Flex>
  );
}
