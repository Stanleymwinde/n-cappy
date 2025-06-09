import { marginX } from "@/utils/constants";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const WhyChooseUs = () => {
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
        Why Institutions Choose Us
      </Heading>
      <Text mb={8} textAlign="center" fontSize="lg" color="gray.600">
        Our institutional approach combines deep expertise, proprietary
        research, and a relentless focuss on clients objectives.{" "}
      </Text>
    </Box>
  );
};

export default WhyChooseUs;
