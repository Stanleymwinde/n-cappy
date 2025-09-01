import { FaqsData2, marginX } from "@/utils/constants";
import {
  Accordion,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Faqs = () => {
  return (
    <Box marginX={marginX} py={8}>
      <Heading
        fontFamily="poppins"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} // responsive font size
        fontWeight="bold"
        mb={10}
        textAlign="center"
        lineHeight={{ base: "short", md: "shorter", lg: "short" }} // better spacing for broken lines
        letterSpacing="tight" // improves readability
      >
        Frequently Asked Questions
      </Heading>
      <Accordion.Root
        collapsible
        defaultValue={["a"]}
        bg="gray.300"
        p={{ base: 4, md: 6 }}
        py={{ base: 6, md: 8 }}
      >
        {FaqsData2.map((item, index) => (
          <Box mb={4} key={index}>
            <Accordion.Item value={item.value}>
              <Accordion.ItemTrigger>
                <Text flex="1" fontWeight="bold">
                  {item.title}
                </Text>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Text>{item.text}</Text>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Box>
        ))}
      </Accordion.Root>
    </Box>
  );
};

export default Faqs;
