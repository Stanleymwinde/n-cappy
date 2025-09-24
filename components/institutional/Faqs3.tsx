"use client";

import { FaqsData3, marginX } from "@/utils/constants";
import {
  Accordion,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Faqs = () => {
  return (
    <Box
      marginX={{ base: 4, sm: 6, md: marginX }}
      py={{ base: 6, md: 10 }}
    >
      {/* Responsive Heading */}
      <Heading
        fontFamily="poppins"
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        mb={{ base: 6, md: 10 }}
        textAlign="center"
        lineHeight="short"
      >
        Frequently Asked Questions
      </Heading>

      {/* Accordion */}
      <Accordion.Root
        collapsible
        defaultValue={["a"]}
        bg="gray.100"
        rounded="xl"
        p={{ base: 4, sm: 6, md: 8 }}
      >
        {FaqsData3.map((item, index) => (
          <Box
            key={index}
            mb={{ base: 3, md: 4 }}
            _last={{ mb: 0 }}
          >
            <Accordion.Item value={item.value}>
              <Accordion.ItemTrigger
                px={{ base: 2, sm: 3 }}
                py={{ base: 2, sm: 3 }}
              >
                <Text
                  flex="1"
                  fontWeight="semibold"
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
                >
                  {item.title}
                </Text>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody px={{ base: 2, sm: 3 }} py={2}>
                  <Text fontSize={{ base: "sm", sm: "md" }}>
                    {item.text}
                  </Text>
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
