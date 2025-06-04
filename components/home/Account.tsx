import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Account = () => {
  return (
    <Box
      bg="#00caff"
      p={{ base: "6", md: "12" }}
      borderRadius="md"
      boxShadow="md"
    >
      <Flex
        marginX={marginX}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={6}
        w={{ base: "100%", md: "80%" }}
      >
        {/* Text Section */}
        <Box textAlign={{ base: "center", md: "left" }} flex="1">
          <Heading fontSize="2xl">Investing for everything it's worth</Heading>
          <Text fontSize="md" mt={2}>
            Whether you're saving for smaller moments or the big ones... <br />
            we're here for you
          </Text>
        </Box>

        {/* Buttons Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={4}
          flexShrink={0}
        >
          <Button
            colorScheme="blue"
            size="md"
            width={{ base: "100%", md: "auto" }}
          >
            Login
          </Button>
          <Button
            variant={"outline"}
            bg={"gray.100"}
            size="md"
            width={{ base: "100%", md: "auto" }}
          >
            Open an account
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Account;
