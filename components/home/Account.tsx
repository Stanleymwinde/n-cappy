import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Account = () => {
  return (
    <Box
      bg="#0a2234"
      py={{ base: 12, md: 20 }}
      px={4}
      textAlign="center"
      fontFamily="Poppins"
    >
      {/* Button */}
      <Button
        bg="#00caff"
        color="white"
        fontWeight="bold"
        fontSize={{ base: "md", md: "xl" }}
        px={10}
        py={8}
        borderRadius="xl"
        mb={8}
        _hover={{ bg: "#00b3e6" }}
        fontFamily="Poppins"
      >
        Start Investing With Purpose
      </Button>

      {/* Heading */}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="extrabold"
        color="white"
        mb={4}
        fontFamily="Poppins"
      >
        Investing for everything it’s worth
      </Heading>

      {/* Description */}
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="gray.200"
        fontFamily="Poppins"
      >
        Whether you are saving for smaller moments or the big ones... <br />
        we are here for you
      </Text>
    </Box>
  );
};

export default Account;


