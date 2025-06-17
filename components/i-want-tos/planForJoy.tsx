import { marginX } from "@/utils/constants";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const planForJoy = () => {
  return (
    <Box bg={"#0a2234"}>
      <Box marginX={marginX} paddingY={10}>
        <Heading
          color={"#00caff"}
          as={"h1"}
          fontSize={"5xl"}
          textAlign={"center"}
          pb={5}
        >
          Are you ready to plan for Joy?
        </Heading>
        <Text
          fontSize={"xl"}
          color={"#ffffff"}
          textAlign={"center"}
          marginTop={4}
        >
          This portfolio is for the dreamers, the doers, and the bold believers
          in more. It’s for anyone who wants their money to create moments, not
          just returns.
        </Text>
        <Flex py={6} gap={8}>
          <Text
            fontSize={"2xl"}
            color={"#ffffff"}
            textAlign={"center"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            lineHeight={1.5}
            maxWidth="700px"
          >
            Whether you’re planning that once-in-a-lifetime trip, launching a
            passion project, or gifting unforgettable memories to your family,
            we’re here to help you turn “one day” into today.
          </Text>
          <Box
            bg={"#ffffff"}
            position="relative"
            height={400}
            width="100%"
            borderRadius={"md"}
            overflow="hidden"
          >
            <Image
              src={"/images/slider-1.png"}
              alt="Plan for Joy"
              fill
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default planForJoy;
