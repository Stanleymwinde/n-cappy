import { commonfaqs, marginX } from "@/utils/constants";
import {
  Accordion,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CallToAction, } from "@/components/home";

const Faqs = () => {
  return (
    <Box marginX={marginX} py={8}>
      <Heading
        fontFamily={"poppins"}
        fontSize="5xl"
        fontWeight="bold"
        mb={10}
        textAlign={"center"}
      >
        Frequently Asked Questions
      </Heading>
      <Accordion.Root collapsible defaultValue={["a"]} bg={"gray.300"} p={6} py={8}>
        {commonfaqs.map((item, index) => (
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
<CallToAction />

export default Faqs;

