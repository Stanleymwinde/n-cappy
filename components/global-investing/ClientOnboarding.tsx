import { FaqsData, marginX } from "@/utils/constants";
import { Accordion, Box, Button, Heading, Span } from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ClientOnboarding = () => {
  return (
    <Box marginX={marginX}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontFamily="poppins"
        textAlign="center"
        my={6}
        color="gray.800"
      >
        Client Onboarding Access
      </Heading>
      <Accordion.Root
        collapsible
        defaultValue={["a"]}
        bg={"gray.300"}
        p={6}
        py={8}
        borderRadius="md"
      >
        {FaqsData.map((item, index) => (
          <Box mb={4} key={index}>
            <Accordion.Item value={item.value}>
              <Accordion.ItemTrigger>
                <Span flex="1">{item.title}</Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Box>
        ))}
      </Accordion.Root>

      <Box display="flex" justifyContent="flex-end" alignItems="center" mt={6}>
        <Button
          bg={"#0a2234"}
          size="lg"
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
          color="white"
          _hover={{ bg: "#0a2234", transform: "scale(1.05)" }}
        >
          Let&apos;s Onboard Without Borders <FaArrowRight />
        </Button>
      </Box>
    </Box>
  );
};

export default ClientOnboarding;
