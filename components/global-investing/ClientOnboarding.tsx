import { FaqsData, marginX } from "@/utils/constants";
import { Accordion, Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ClientOnboarding = () => {
  return (
    <Box marginX={marginX}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        fontWeight={"bold"}
        textAlign="center"
        my={10}
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

      <Box display="flex" justifyContent="flex-end" alignItems="center" mt={6}>
        <a
          href="https://invest.nabocapital.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            bg={"#0a2234"}
            size="lg"
            justifyContent={"center"}
            display={"flex"}
            alignItems={"center"}
            alignContent={"center"}
            color="white"
            _hover={{ bg: "#00CAFF" }}
          >
            Let&apos;s Onboard Without Borders <FaArrowRight />
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default ClientOnboarding;
