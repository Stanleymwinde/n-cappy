import { FaqsData1, marginX } from "@/utils/constants";
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
      py={{ base: 6, md: 12 }}
    >
      <Heading
        fontFamily="poppins"
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
        fontWeight="bold"
        mb={{ base: 6, md: 10 }}
        textAlign="center"
      >
        Frequently Asked Questions
      </Heading>

      <Accordion.Root
        collapsible
        defaultValue={["a"]}
        bg="gray.300"
        p={{ base: 4, md: 6 }}
        py={{ base: 6, md: 8 }}
        borderRadius="lg"
      >
        {FaqsData1.map((item, index) => (
          <Box mb={{ base: 3, md: 4 }} key={index}>
            <Accordion.Item value={item.value}>
              <Accordion.ItemTrigger>
                <Text
                  flex="1"
                  fontWeight="bold"
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
                >
                  {item.title}
                </Text>
                <Accordion.ItemIndicator fontSize={{ base: "md", md: "lg" }} />
              </Accordion.ItemTrigger>

              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} mt={2}>
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
