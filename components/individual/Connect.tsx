import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Connect = () => {
  return (
    <Box
      bg={"#0a2234"}
      width={"100%"}
      textAlign={"center"}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      position={{ base: "static", md: "relative" }}
      alignItems="center"
      justifyContent="center"
      py={4}
    >
      <Text
        color={"#60e7ff"}
        fontSize={{ base: "md", md: "3xl" }}
        ml={{ base: 0, md: 8 }}
        fontWeight={"bold"}
        flex={1}
      >
        Connect With Our Financial Advisors
      </Text>
      <Box
        bg={"white"}
        position={{ base: "static", md: "absolute" }}
        bottom={{ md: 0 }}
        left={{ md: 0 }}
        p={3}
        textAlign={"center"}
        borderRadius={"xl"}
        mt={{ base: 4, md: 0 }}
      >
        <strong> #INVEST</strong> WITH <strong>PURPOSE</strong>
      </Box>
    </Box>
  );
};

export default Connect;
