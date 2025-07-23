import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CallToActionCommon = () => {
  return (
    <Box
      bgImage="url('/images/cta.png')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      width="100%"
      height="300px"
      position={"relative"}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgColor="rgba(0, 0, 0, 0.5)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        textAlign="center"
      >
        <Box fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          Innovation that feels personal
        </Box>
        <Flex
          mt={2}
          gap={{ base: 2, md: "4rem" }}
          align={"center"}
          justify={"center"}
          flexDirection={{ base: "column", md: "row" }}
          flexWrap="wrap"
        >
          <Box w={200} h={100} position="relative">
            <Image
              src="/images/apple.png"
              alt="Nabo Capital Logo"
              fill
              objectFit={"contain"}
            />
          </Box>

          <Box w={200} h={100} position="relative">
            <Image
              src="/images/google.png"
              alt="Nabo Capital Logo"
              fill
              objectFit={"contain"}
            />
          </Box>
        </Flex>
        <Box
          mt={4}
          fontSize={{ base: "md", md: "lg" }}
          as={"button"}
          bgColor={"#0a2234"}
          padding="10px 20px"
          borderRadius="5px"
          _hover={{ bgColor: "#00b5e0" }}
          cursor="pointer"
        >
          INVEST NOW
        </Box>
      </Box>
    </Box>
  );
};

export default CallToActionCommon;
